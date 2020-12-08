import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				404 | Onboarding Quarkly
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<meta property={"og:title"} content={"404 | Onboarding Quarkly"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.HeaderMenu />
		<Box
			min-height="500px"
			display="flex"
			flex-direction="column"
			align-items="center"
			justify-content="center"
			color="--light"
			position="absolute"
			left="0px"
			right="0px"
			bottom="0px"
			top="100px"
		>
			<Text font="--headline1">
				404
			</Text>
			<Text margin="0px 0px 54px 0px" font="--lead">
				Page Not Found
			</Text>
			<Link
				padding="8px 24px 8px 24px"
				background="--color-primary"
				color="--light"
				text-decoration-line="initial"
				font="--base"
				href="/"
				border-radius="26px"
			>
				Go Home
			</Link>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});