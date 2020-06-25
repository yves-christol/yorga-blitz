// The Material UI palette for Orange Brand color scheme - Yves Christol
import { createMuiTheme } from '@material-ui/core/styles';


const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
function getTheme(dark = true) {
    return createMuiTheme( {
        fontFamily: "Helvetica Neue",
        palette: {
            "type": (dark ? "dark" : "light"),
            "common":
                {"black":"#000","white":"#fff"},
            "background":
                {"paper":(dark ? "#222" : "#eee"),"default":(dark ? "#000" : "#fff")},
            "primary":
                {"light":"#FF8200","main":"#FF7900","dark":"#F16E00", "contrastText": (dark ? "#000" : "#fff")},
            "secondary":
                {"light":"#55C492","main":"#50BE87","dark":"#4£07E77","contrastText":(dark ? "#000" : "#fff")},
            "error":
                {"light":"#FFE210","main":"#FFD200","dark":"#EEC200","contrastText":"#000"},
            "text":
                {"primary":(dark ? "#fff" : "#000"),"secondary":(dark ? "#AAA" : "#888"),"disabled":"rgba(153, 153, 153, 1)","hint":"rgba(51, 51, 51, 1)"},
        },
        overrides: {
            "MuiAppBar": {
            },
            MuiButton: {
            },
        }
    });
}

export default getTheme;