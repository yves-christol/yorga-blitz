import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Spinner from '../icons/Spinner';
import * as ROUTES from '../../routes'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '77px',
        padding: '30px',
        textAlign: 'center',
        fontSize: '1.5em',
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
    },
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: '10px',
    },
    dense: {
      marginTop: theme.spacing(2),
    },
}));
  
const SignInCheck = ({base}) => {
    const [state, setState] = React.useState('pending');
    const [error, setError] = React.useState('');
    
    useEffect(() => {
      base
        .doSignInWithEmailLink(setError)
        .then(() => {setState('done')})
        .catch((error) => {setState('error')})
    }, [base]);
        
    return (
        <header className="App-header">
            <p>Vérification du lien...</p>
            { state === 'done' ? <Redirect to={ROUTES.LANDING} /> : '' }
            { state === 'pending' ? <Spinner /> : '' }
            { state === 'error' ? <p>{error}</p> : '' }           
        </header>
    );
}

const SignInForm = ({base}) => {
    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const classes = useStyles();

    const onChangeEmail = event => {
        setEmail(event.target.value);
    };
    const onSubmit = event => {
        event.preventDefault();
        setLoading(true);
        setMessage('');
        const fullMail = `${email}${base.emailDomain}`;
        base
            .doSendSignInLinkToEmail(fullMail)
            .then(function() {
                // The link was successfully sent. Inform the user.
                setMessage(`Un lien d'accès a été envoyé à ${fullMail}, consultez votre boîte. 
                Attention : le lien doit être utilisé dans ce même navigateur qui a servi à envoyer 
                votre adresse !`);
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', fullMail);
                setLoading(false);
            })
            .catch(error => {
                setMessage(error.message);
                setLoading(false);
            });
    };

    return (
        <header className={classes.root}>
            <h1>Se connecter</h1>
            <form className={classes.container} noValidate autoComplete="off" onSubmit={onSubmit}>
                {loading ? 
                    <Spinner /> :
                    <React.Fragment> 
                        {message ? message : 
                            <div>
                            <p>Vous devez avoir une boîte active en @orange.com pour vous connecter. </p> 
                            <p>Entrez la ci-dessous et vous recevrez un lien d'accès sécurisé. Ce lien est à usage unique et non transmissible.</p>
                            <TextField
                                id="outlined-name"
                                label="email"
                                className={classes.textField}
                                value={email}
                                onChange={onChangeEmail}
                                margin="normal"
                                variant="outlined"
                            />
                            <b>
                                {base.emailDomain+'    '}
                            </b>
                            <Fab 
                                color="secondary" 
                                aria-label="envoyer" 
                                className={classes.fab}
                                disabled={!(
                                    email.length > 3 && 
                                    email.includes('.') &&
                                    !email.includes('@')
                                )} 
                                type="submit"
                            >
                                <SendIcon />
                            </Fab>
                            </div>
                        }
                        <h1>&nbsp;</h1>
                    </React.Fragment>
                }
            </form>
        </header>
    );
};

export { SignInForm, SignInCheck };