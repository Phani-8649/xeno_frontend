import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4caf50',
        },
        secondary: {
            main: '#ff5722',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h5: { fontWeight: 600 },
    },
});

export default theme;
