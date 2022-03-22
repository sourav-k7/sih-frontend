import { Box } from "@mui/material";
import React from "react";
import withMainLayout from "../../layout/withMainLayout";
import Features from "./Features";
import HomeHeader from "./homeHeader";
import MediaHighlights from "./Media_Highlights";

const Home = () => {
	return (
		<Box>
			<HomeHeader />
			<Features />
			<MediaHighlights />
		</Box>
	);
};
// export default Home;

export const HomeLayout = withMainLayout(Home);
