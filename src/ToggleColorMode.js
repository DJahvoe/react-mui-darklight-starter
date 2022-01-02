import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { useMemo, useState } from 'react';
import ColorModeContext from './ColorModeContext';

const getDesignTokens = (mode) => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					/* palette values for light mode */
					// primary: amber,
					// divider: amber[200],
					// text: {
					// 	primary: grey[900],
					// 	secondary: grey[800],
					// },
					background: {
						default: '#fff',
					},
					text: {
						primary: '#222222',
					},
			  }
			: {
					/* palette values for dark mode */
					// primary: deepOrange,
					// divider: deepOrange[700],
					// background: {
					// 	default: deepOrange[900],
					// 	paper: deepOrange[900],
					// },
					// text: {
					// 	primary: '#fff',
					// 	secondary: grey[500],
					// },
					background: {
						default: '#222222',
					},
					text: {
						primary: '#ffffff',
					},
			  }),
	},
});

function ToggleColorMode({ children }) {
	const [mode, setMode] = useState('light');
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[]
	);

	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default ToggleColorMode;
