import { useTheme } from '@emotion/react';
import { Button, Grid } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useContext } from 'react';
import ColorModeContext from './ColorModeContext';
import { Box } from '@mui/system';

function App() {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);
	return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justifyContent='center'
			style={{ minHeight: '100vh' }}
		>
			<Grid item xs={3}>
				<Button variant='outlined' onClick={colorMode.toggleColorMode}>
					{theme.palette.mode} mode
					<Box
						component='span'
						mx={0.5}
						display='flex'
						alignItems='center'
						justifyContent='center'
					>
						{theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
					</Box>
				</Button>
			</Grid>
		</Grid>
	);
}

export default App;
