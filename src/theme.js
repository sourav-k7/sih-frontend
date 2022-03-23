import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#FF725E",
		},
		// secondary: {
		//   main: secondary,
		//   light: tinycolor(secondary).lighten(lightenRate).toHexString(),
		//   dark: tinycolor(secondary).darken(darkenRate).toHexString(),
		//   contrastText: "#FFFFFF",
		// },
	},
});
export default theme;
