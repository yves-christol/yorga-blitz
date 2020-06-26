import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, getGlobalState, useGlobalState } = createGlobalState({
  theme: 'dark',
  base: null,
  auth: null,
});

export const setTheme = (theme) => {
  setGlobalState('base', theme);
};

export const setBase = (base) => {
  setGlobalState('base', base);
};

export const setAuth = (auth) => {
  setGlobalState('auth', auth);
};

export { useGlobalState, getGlobalState };