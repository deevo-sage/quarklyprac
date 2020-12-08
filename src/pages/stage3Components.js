import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Em, Image, Span, List, Icon, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
import { FaTree } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Components | Onboarding Quarkly
			</title>
			<meta name={"description"} content={"At this stage, you're going to learn how to create custom components, update and detach them, and reset changes.\n"} />
			<meta property={"og:title"} content={"Components | Onboarding Quarkly"} />
			<meta property={"og:description"} content={"At this stage, you're going to learn how to create custom components, update and detach them, and reset changes.\n"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.HeaderMenu />
		<Section
			padding="130px 0px 100px 0px"
			sm-padding="40px 0"
			background="--color-darkL2"
			border-width="0px 0px 3px 0px"
			border-style="solid"
			border-color="--color-primary"
			md-padding="80px 0px 60px 0px"
			quarkly-title="Hero"
		>
			<Override slot="SectionContent" align-items="flex-start" flex-direction="column" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				width="66.66%"
				color="--light"
				lg-width="80%"
				md-width="100%"
			>
				Components
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
				lg-width="80%"
				md-width="100%"
			>
				To speed up your workflow and make it more efficient, you can convert a group of elements into a component. This approach also reduces the amount of code and generally makes the project cleaner.
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 1. Convert Into a Component">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 1 OF 5
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				lg-width="100%"
				sm-font="--headline3"
			>
				Convert a card into a component
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
				sm-margin="0px 0 8px 0"
				md-margin="0px 0 12px 0"
			>
				If an element is repeated in the project, you can convert it into a component, duplicate and change its content.
			</Text>
			<Box display="flex" flex-direction="column" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					box-sizing="border-box"
					lg-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
						sm-margin="0px 0px 18px 0px"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box
							width="60%"
							padding="0px 24px 0px 0px"
							lg-width="100%"
							display="flex"
							flex-wrap="wrap"
							flex-direction="column"
							align-items="flex-start"
							sm-padding="0px 0px 0px 0px"
						>
							<Text
								display="block"
								font="--base"
								margin="20px 18px 16px 0px"
								width="60%"
								color="--darkL2"
								md-width="100%"
								sm-margin="12px 18px 16px 0px"
							>
								Select the card container, right-click and select{" "}
								<Em>
									“Convert to Component”
								</Em>
								.
							</Text>
							<Image
								src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-convert-to-component.svg?v=2020-10-29T09:44:49.544Z"
								border-radius="4px"
								margin="0px 0px 18px 0px"
								sm-margin="0px 0px 16px 0px"
								object-position="0px 0px"
								max-width="100%"
							/>
							<Text
								display="inline-block"
								font="normal 300 14px/1.5 --fontFamily-sans"
								margin="0px 0px 0px 0px"
								color="--darkL2"
								background="rgba(0, 119, 204, 0.04)"
								padding="8px 14px 16px 14px"
								border-radius="6px"
								border-width="1px"
								border-style="solid"
								border-color="--color-lightD2"
								lg-max-width="360px"
								max-width="480px"
							>
								<Span
									font="--capture"
									letter-spacing="1px"
									color="--grey"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									text-transform="uppercase"
								>
									Note
								</Span>
								<br />
								The conversion of several elements (multiselect) cannot be performed.
You can convert only one element, but that element can contain other elements.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Box
							width="60%"
							padding="0px 24px 0px 0px"
							display="flex"
							flex-wrap="wrap"
							flex-direction="column"
							align-items="flex-start"
							sm-padding="0px 0px 0px 0px"
							md-width="100%"
							lg-width="100%"
						>
							<Text
								display="block"
								font="--base"
								margin="20px 18px 16px 0px"
								width="60%"
								color="--darkL2"
								md-width="100%"
								sm-margin="12px 18px 16px 0px"
							>
								Duplicate the created component twice. To do this,{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									right-click
								</Em>
								{" "}on the component and select{" "}
								<Em>
									“Duplicate”
								</Em>
								{" "}from the context menu.
							</Text>
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-context-menu-duplicate.svg?v=2020-10-29T09:45:00.462Z" border-radius="4px" margin="0px 0px 18px 0px" object-position="0px 0px" />
							<Text
								display="inline-block"
								font="normal 300 14px/1.5 --fontFamily-sans"
								margin="0px 0px 0px 0px"
								color="--darkL2"
								background="rgba(0, 119, 204, 0.04)"
								padding="8px 14px 16px 14px"
								border-radius="6px"
								border-width="1px"
								border-style="solid"
								border-color="--color-lightD2"
							>
								<Span
									font="--capture"
									letter-spacing="1px"
									color="--grey"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									text-transform="uppercase"
								>
									Tip
								</Span>
								<br />
								You can also duplicate elements using the shortcuts
								<br />
								Mac:{" "}
								<Span
									min-width="18px"
									border-color="--color-lightD2"
									border-radius="4px"
									border-width="2px"
									border-style="solid"
									padding="2px 5px 2px 5px"
									box-shadow="0px 1px 0 1px --color-lightD2"
									display="inline-block"
									text-align="center"
									font="--capture"
									color="--greyD2"
									text-transform="uppercase"
									letter-spacing="1px"
									margin="0px 3px 0px 3px"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									background="white"
								>
									⇧
								</Span>
								+
								<Span
									min-width="18px"
									border-color="--color-lightD2"
									border-radius="4px"
									border-width="2px"
									border-style="solid"
									padding="2px 5px 2px 5px"
									box-shadow="0px 1px 0 1px --color-lightD2"
									display="inline-block"
									text-align="center"
									font="--capture"
									color="--greyD2"
									text-transform="uppercase"
									letter-spacing="1px"
									margin="0px 3px 0px 3px"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									background="white"
								>
									d
								</Span>
								, Windows:{" "}
								<Span
									min-width="18px"
									border-color="--color-lightD2"
									border-radius="4px"
									border-width="2px"
									border-style="solid"
									padding="2px 5px 2px 5px"
									box-shadow="0px 1px 0 1px --color-lightD2"
									display="inline-block"
									text-align="center"
									font="--capture"
									color="--greyD2"
									text-transform="uppercase"
									letter-spacing="1px"
									margin="0px 3px 0px 3px"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									background="white"
								>
									shift
								</Span>
								+
								<Span
									min-width="18px"
									border-color="--color-lightD2"
									border-radius="4px"
									border-width="2px"
									border-style="solid"
									padding="2px 5px 2px 5px"
									box-shadow="0px 1px 0 1px --color-lightD2"
									display="inline-block"
									text-align="center"
									font="--capture"
									color="--greyD2"
									text-transform="uppercase"
									letter-spacing="1px"
									margin="0px 3px 0px 3px"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									background="white"
								>
									d
								</Span>
								.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							3
						</Text>
						<Box width="60%" padding="0px 24px 0px 0px" sm-padding="0px 0px 0px 0px" md-width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Add the{" "}
								<Em>
									32px
								</Em>
								{" "}right indent to the first two components
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="100%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 0px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
						display="flex"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 50% 50%/cover"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 100% 0%/cover"
							transition="background 0.3s ease 0s"
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							sm-padding="36px 36px 48px 36px"
						>
							<Icon
								category="fa"
								icon={FaTree}
								font="44px sans-serif"
								color="--light"
								sm-font="36px sans-serif"
							/>
							<Text
								font="--headline3"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
							>
								Into the wild
							</Text>
							<Text font="--base" color="--lightD2" text-align="center">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Join
							</Button>
						</Box>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						EXAMPLE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
						lg-flex-direction="column"
					>
						<Components.CardExample>
							<Override slot="text" font="--headline3">
								INTO THE WILD
							</Override>
							<Override slot="button">
								JOIN
							</Override>
							<Override slot="text1" font="--base">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
						</Components.CardExample>
						<Components.CardExample>
							<Override slot="text" font="--headline3">
								INTO THE WILD
							</Override>
							<Override slot="button">
								JOIN
							</Override>
							<Override slot="text1" font="--base">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="icon" />
						</Components.CardExample>
						<Components.CardExample margin="0px 0px 0px 0px">
							<Override slot="text" font="--headline3">
								INTO THE WILD
							</Override>
							<Override slot="button">
								JOIN
							</Override>
							<Override slot="text1" font="--base">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="icon" />
						</Components.CardExample>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 2. Change Component Styles">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 2 OF 5
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
			>
				Change component styles
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
				sm-margin="0px 0 8px 0"
				md-margin="0px 0 12px 0"
			>
				You can change the styles and content of each component, and the structure will be kept.
			</Text>
			<Box display="flex" flex-direction="column" width="100%">
				<Box
					width="auto"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					quarkly-title="Item 1"
					flex-wrap="nowrap"
					margin="0px 0px 12px 0px"
					sm-flex-direction="column"
					sm-margin="0px 0px 18px 0px"
					lg-width="100%"
				>
					<Text
						background="--color-indigo"
						font="--base"
						color="--lightD2"
						padding="2px 8px 2px 8px"
						border-radius="33px"
						margin="16px 12px 16px 0px"
						text-align="center"
						flex="0 0 auto"
						min-width="12px"
						sm-margin="16px 12px 0px 0px"
						border-color="--color-darkL2"
						border-style="solid"
						border-width="1px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						1
					</Text>
					<Box width="60%" display="flex" sm-flex-direction="column" md-width="100%">
						<Box width="100%" padding="0px 24px 0px 0px" sm-padding="0px 0px 0px 0px">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 8px 0px"
							>
								Style the second and third components as in the example. Leave the first component unchanged.
								<br />
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					width="100%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 0px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
						display="flex"
						lg-flex-direction="column"
					>
						<Components.CardWorkStep2 margin="0px 32px 0px 0px" lg-margin="0px 32px 32px 0px">
							<Override slot="text" />
							<Override slot="text1">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardWorkStep2>
						<Components.CardWorkStep2 margin="0px 32px 0px 0px" lg-margin="0px 32px 32px 0px">
							<Override slot="text" />
							<Override slot="text1">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardWorkStep2>
						<Components.CardWorkStep2>
							<Override slot="text" />
							<Override slot="text1">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardWorkStep2>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						Example
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
						lg-flex-direction="column"
					>
						<Components.CardExampleStep2 margin="0px 32px 0px 0px" lg-margin="0px 32px 32px 0px">
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardExampleStep2>
						<Components.CardExampleStep2 margin="0px 32px 0px 0px" border-radius="36px" lg-margin="0px 32px 32px 0px">
							<Override slot="text" font="normal 500 25px/1.2 --fontFamily-mono" text-transform="uppercase">
								INTO THE WILD
							</Override>
							<Override slot="icon" font="32px sans-serif" margin="0px 0px 12px 0px" />
							<Override slot="text1" font="normal 400 16px/1.5 --fontFamily-sansHelvetica">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button" background="--color-indigo" color="--light">
								JOIN
							</Override>
						</Components.CardExampleStep2>
						<Components.CardExampleStep2 border-radius="24px">
							<Override slot="text" font="normal 500 21px/1.2 --fontFamily-serifGaramond" color="--light" letter-spacing="2px">
								INTO THE WILD
							</Override>
							<Override slot="text1" font="normal 400 17px/1.3 --fontFamily-serifGaramond">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button" border-radius="12px" background="--color-green" color="--light">
								JOIN
							</Override>
							<Override slot="icon" font="32px sans-serif" />
						</Components.CardExampleStep2>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 3. Push All to Master">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 3 OF 5
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
			>
				Push All to Master
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
				sm-margin="0px 0 8px 0"
				md-margin="0px 0 12px 0"
			>
				If you want to change the design of all copies of components, you can style one and use the Push All to Master option.
			</Text>
			<Box display="flex" flex-direction="column" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="100%"
					box-sizing="border-box"
					lg-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
						sm-margin="0px 0px 18px 0px"
						lg-width="100%"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box
							width="60%"
							padding="0px 24px 0px 0px"
							md-width="100%"
							sm-padding="0px 0px 0px 0px"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Select the last component that you styled in the previous step. Click on the{" "}
								<Em>
									“3 dots”
								</Em>
								{" "}icon{" "}
								<Image vertical-align="-5px" src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-three-dots.svg?v=2020-11-05T14:24:31.975Z" margin="0px 0px 0px 0px" />
								{" "}next to the component name. Choose{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									“Push All to Master”
								</Em>
								{" "}from the drop-down menu.
							</Text>
							<Image
								src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-component-menu-push-all.svg?v=2020-10-29T14:17:28.293Z"
								border-radius="4px"
								margin="0px 0px 24px 0px"
								sm-margin="0px 0px 16px 0px"
								object-position="0px 0px"
								max-width="100%"
							/>
							<Text
								display="inline-block"
								font="normal 300 14px/1.5 --fontFamily-sans"
								margin="0px 0px 20px 0px"
								color="--darkL2"
								background="rgba(0, 119, 204, 0.04)"
								padding="8px 14px 16px 14px"
								border-radius="6px"
								border-width="1px"
								border-style="solid"
								border-color="--color-lightD2"
							>
								<Span
									font="--capture"
									letter-spacing="1px"
									color="--grey"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									text-transform="uppercase"
								>
									Note
								</Span>
								<br />
								You can convert only one element,
								<br />
								but that element can contain other elements.
							</Text>
							<Text
								display="inline-block"
								font="normal 300 14px/1.5 --fontFamily-sans"
								margin="0px 0px 0px 0px"
								color="--darkL2"
								background="rgba(0, 119, 204, 0.04)"
								padding="8px 14px 16px 14px"
								border-radius="6px"
								border-width="1px"
								border-style="solid"
								border-color="--color-lightD2"
								max-width="420px"
							>
								<Span
									font="--capture"
									letter-spacing="1px"
									color="--grey"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									text-transform="uppercase"
								>
									TIP
								</Span>
								<br />
								The{" "}
								<Em>
									Push to Master
								</Em>
								{" "}command sends only the changes made in the parent element. While the{" "}
								<Em>
									Push All to Master
								</Em>
								{" "}command sends all changes, both made in the parent and child elements.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="100%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 0px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
						display="flex"
						lg-flex-direction="column"
					>
						<Components.CardWorkStep3 margin="0px 32px 0px 0px" lg-margin="0px 32px 32px 0px">
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardWorkStep3>
						<Components.CardWorkStep3 margin="0px 32px 0px 0px" border-radius="36px" lg-margin="0px 32px 32px 0px">
							<Override slot="text" font="normal 500 25px/1.2 --fontFamily-mono" />
							<Override slot="icon" font="32px sans-serif" margin="0px 0px 12px 0px" />
							<Override slot="text1" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" />
							<Override slot="button" background="--color-indigo" color="--light">
								JOIN
							</Override>
						</Components.CardWorkStep3>
						<Components.CardWorkStep3 border-radius="24px" margin="0px 0px 0px 0px">
							<Override slot="text" font="normal 500 21px/1.2 --fontFamily-serifGaramond" color="--light">
								INTO THE WILD
							</Override>
							<Override slot="text1" font="normal 400 17px/1.3 --fontFamily-serifGaramond">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button" border-radius="12px" background="--color-green" color="--light">
								JOIN
							</Override>
							<Override slot="icon" font="32px sans-serif" />
						</Components.CardWorkStep3>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						Example
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
						lg-flex-direction="column"
					>
						<Components.CardExampleStep3 margin="0px 32px 0px 0px" lg-margin="0px 32px 32px 0px">
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="button">
								JOIN
							</Override>
							<Override slot="text1">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
						</Components.CardExampleStep3>
						<Components.CardExampleStep3 margin="0px 32px 0px 0px" border-radius="36px" lg-margin="0px 32px 32px 0px">
							<Override slot="text" font="normal 500 25px/1.2 --fontFamily-mono" text-transform="uppercase">
								INTO THE WILD
							</Override>
							<Override slot="icon" font="42px sans-serif" margin="0px 0px 12px 0px" />
							<Override slot="text1" font="normal 400 16px/1.5 --fontFamily-sansHelvetica">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button" background="--color-indigo" color="--light" border-radius="24px">
								JOIN
							</Override>
						</Components.CardExampleStep3>
						<Components.CardExampleStep3>
							<Override slot="text" font="normal 500 21px/1.2 --fontFamily-serifGaramond">
								INTO THE WILD
							</Override>
							<Override slot="button" background="--color-green" color="--light" border-radius="12px">
								JOIN
							</Override>
							<Override slot="text1" font="normal 400 17px/1.3 --fontFamily-serifGaramond">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="icon" />
						</Components.CardExampleStep3>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 4. Reset All Overrides">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 4 OF 5
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
			>
				Reset All Overrides
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
				md-margin="0px 0 12px 0"
			>
				If you want to reset component changes to default, use the{" "}
				<Em>
					Reset All Overrides
				</Em>
				{" "}option.
			</Text>
			<Box display="flex" flex-direction="column" width="100%">
				<Box
					width="auto"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					quarkly-title="Item 1"
					flex-wrap="nowrap"
					margin="0px 0px 32px 0px"
					sm-flex-direction="column"
					sm-margin="0px 0px 18px 0px"
				>
					<Text
						background="--color-indigo"
						font="--base"
						color="--lightD2"
						padding="2px 8px 2px 8px"
						border-radius="33px"
						margin="16px 12px 16px 0px"
						text-align="center"
						flex="0 0 auto"
						min-width="12px"
						sm-margin="16px 12px 0px 0px"
						border-color="--color-darkL2"
						border-style="solid"
						border-width="1px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						1
					</Text>
					<Box width="60%" padding="0px 24px 0px 0px" md-width="100%" sm-padding="0px 0px 0px 0px">
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
							sm-margin="12px 0px 16px 0px"
						>
							Choose the second component that you styled. Select{" "}
							<Em
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								the Reset All Overrides
							</Em>
							{" "}option from the drop-down menu.
						</Text>
						<Image
							src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-component-menu-reset-all.svg?v=2020-10-29T14:18:03.856Z"
							border-radius="4px"
							margin="0px 0px 16px 0px"
							sm-margin="0px 0px 16px 0px"
							object-position="0px 0px"
						/>
						<Text
							display="inline-block"
							font="normal 300 14px/1.5 --fontFamily-sans"
							margin="0px 0px 0px 0px"
							color="--darkL2"
							background="rgba(0, 119, 204, 0.04)"
							padding="8px 14px 16px 14px"
							border-radius="6px"
							border-width="1px"
							border-style="solid"
							border-color="--color-lightD2"
						>
							<Span
								font="--capture"
								letter-spacing="1px"
								color="--grey"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								text-transform="uppercase"
							>
								TIP
							</Span>
							<br />
							The{" "}
							<Em>
								Reset Overrides
							</Em>
							{" "}command is applied only to the parent element. While the{" "}
							<Em>
								Reset All to Master
							</Em>
							{" "}command is applied to the parent and all child elements.
						</Text>
					</Box>
				</Box>
				<Box
					width="100%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 0px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
						display="flex"
						lg-flex-direction="column"
					>
						<Components.CardWorkStep4 margin="0px 32px 0px 0px" lg-margin="0px 32px 32px 0px">
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button">
								Join
							</Override>
						</Components.CardWorkStep4>
						<Components.CardWorkStep4 margin="0px 32px 0px 0px">
							<Override slot="text" font="normal 500 25px/1.2 --fontFamily-mono" text-transform="uppercase">
								INTO THE WILD
							</Override>
							<Override slot="icon" font="42px sans-serif" margin="0px 0px 12px 0px" />
							<Override slot="text1" font="normal 400 16px/1.5 --fontFamily-sansHelvetica">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button" background="--color-indigo" color="--light" border-radius="24px">
								JOIN
							</Override>
						</Components.CardWorkStep4>
						<Components.CardWorkStep4>
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardWorkStep4>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						Example
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
						lg-flex-direction="column"
					>
						<Components.CardExampleStep4 margin="0px 32px 0px 0px" lg-margin="0px 32px 32px 0px">
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardExampleStep4>
						<Components.CardExampleStep4 margin="0px 32px 0px 0px" lg-margin="0px 32px 32px 0px">
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardExampleStep4>
						<Components.CardExampleStep4>
							<Override slot="text" color="--light">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button" border-radius="12px" background="--color-green" color="--light">
								JOIN
							</Override>
							<Override slot="icon" />
						</Components.CardExampleStep4>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 5. Detach">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 5 OF 5
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
			>
				Detach
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
				sm-margin="0px 0 8px 0"
				md-margin="0px 0 12px 0"
			>
				Sometimes you may need to turn a component back into a set of elements, for example if you want to change the structure of an element or add new elements to the component. To do that, use the{" "}
				<Em
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Detach
				</Em>
				{" "}feature.
			</Text>
			<Box display="flex" flex-direction="column" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="100%"
					box-sizing="border-box"
					lg-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
						sm-margin="0px 0px 18px 0px"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="60%" padding="0px 24px 0px 0px" md-width="100%" sm-padding="0px 0px 0px 0px">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Choose the second component and select the{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Detach
								</Em>
								{" "}option next to the component name.
							</Text>
							<Image
								src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-component-detach.svg?v=2020-10-29T14:18:14.819Z"
								border-radius="4px"
								margin="24px 0px 0px 0px"
								sm-margin="0px 0px 0px 0px"
								object-position="0px 0px"
								max-width="100%"
							/>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
						sm-margin="0px 0px 18px 0px"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Box width="100%" padding="0px 24px 0px 0px">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Style the resulting elements to match the example below.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="100%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 0px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
						display="flex"
						lg-flex-direction="column"
					>
						<Components.CardWorkStep4 margin="0px 32px 0px 0px" lg-margin="0px 32px 32px 0px">
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardWorkStep4>
						<Components.CardWorkStep4 margin="0px 32px 0px 0px" lg-margin="0px 32px 32px 0px">
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardWorkStep4>
						<Components.CardWorkStep4>
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardWorkStep4>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						Example
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
						lg-flex-direction="column"
					>
						<Components.CardExampleStep4 margin="0px 32px 0px 0px" lg-margin="0px 32px 32px 0px">
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardExampleStep4>
						<Box
							width="100%"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
							box-sizing="border-box"
							padding="36px 36px 48px 36px"
							opacity="1"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 50% 50%/cover no-repeat"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 100% 0%/cover no-repeat"
							margin="0px 32px 0px 0px"
							border-radius="24px"
							lg-margin="0px 32px 32px 0px"
						>
							<Text
								color="--lightD2"
								text-align="left"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
								font="normal 500 14px/1.5 --fontFamily-mono"
								text-transform="uppercase"
								letter-spacing="3px"
								margin="0px 0px 4px 0px"
								background="--color-darkL2"
								padding="2px 12px 2px 12px"
							>
								Trips
							</Text>
							<Text
								text-transform="uppercase"
								text-align="left"
								margin="6px 0px 4px 0px"
								md-font="normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 600 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								font="normal 700 38px/1.2 --fontFamily-sans"
								color="--light"
							>
								INTO THE WILD
							</Text>
							<Text
								color="--lightD2"
								text-align="left"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
								font="normal 300 18px/1.5 --fontFamily-sans"
							>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Icon
								category="md"
								icon={MdArrowForward}
								align-self="flex-end"
								font="48px sans-serif"
								color="--darkL2"
								margin="auto 0px 0px 0px"
								background="--color-light"
								border-radius="50%"
								width="64px"
								height="64px"
								sm-width="44px"
								sm-height="44px"
								sm-font="28px sans-serif"
							/>
						</Box>
						<Components.CardExampleStep4>
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="button" border-radius="12px" background="--color-green" color="--light">
								JOIN
							</Override>
							<Override slot="icon" />
						</Components.CardExampleStep4>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Try It Yourself!">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					SUPERGAME!
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
			>
				Try it yourself!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
				sm-margin="0px 0 8px 0"
				md-margin="0px 0 12px 0"
			>
				{" \n    "}You’ve worked through the main options for using components on a page. How about practicing a little now?
			</Text>
			<Box display="flex" flex-direction="column" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="80%"
					box-sizing="border-box"
					lg-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
						sm-margin="0px 0px 18px 0px"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--light"
							padding="1px 6px 2px 6px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="16px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							★
						</Text>
						<Box width="60%" padding="0px 24px 0px 0px" md-width="100%" sm-padding="0px 0px 0px 0px">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 0px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 0px 0px"
							>
								Build a card, convert it into a component, duplicate it and add content and styles to each copy
							</Text>
							<Text
								display="inline-block"
								font="normal 300 14px/1.5 --fontFamily-sans"
								margin="20px 0px 16px 0px"
								color="--darkL2"
								background="rgba(0, 119, 204, 0.04)"
								padding="8px 14px 16px 14px"
								border-radius="6px"
								border-width="1px"
								border-style="solid"
								border-color="--color-lightD2"
							>
								<Span
									font="--capture"
									letter-spacing="1px"
									color="--grey"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									text-transform="uppercase"
								>
									Tip
								</Span>
								<br />
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Select the elements from the example and check out their styles.{" "}
								</Span>
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="100%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 0px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
						display="flex"
						lg-flex-direction="column"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						Example
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
						lg-flex-direction="column"
					>
						<Components.CardExampleSuper lg-margin="0px 32px 32px 0px">
							<Override slot="text1">
								Sea
							</Override>
							<Override slot="text2">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="text">
								TOUR
							</Override>
							<Override slot="icon1" sm-width="44px" sm-height="44px" sm-font="26px sans-serif" />
						</Components.CardExampleSuper>
						<Components.CardExampleSuper position="relative" overflow-x="hidden" overflow-y="hidden" lg-margin="0px 32px 32px 0px">
							<Override slot="text1">
								MOUNTAINS
							</Override>
							<Override slot="text" background="#C2AB9D">
								TOUR
							</Override>
							<Override slot="icon" icon="FaMountain" />
							<Override slot="text2">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="icon1" sm-width="44px" sm-height="44px" sm-font="26px sans-serif" />
							<Text
								position="absolute"
								left="auto"
								transform="rotate(45deg)"
								bottom="auto"
								top="9px"
								right="-31px"
								background="--color-light"
								padding="3px 32px 3px 32px"
								font="--base"
								text-transform="uppercase"
								letter-spacing="1px"
								height="24px"
								width="78.2656px"
								color="#5F6365"
							>
								popular
							</Text>
						</Components.CardExampleSuper>
						<Components.CardExampleSuper margin="0px 0px 0px 0px">
							<Override slot="icon" icon="FaTree" />
							<Override slot="text1">
								WOODS
							</Override>
							<Override slot="text" background="#CF9679">
								TOUR
							</Override>
							<Override slot="text2">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Override>
							<Override slot="icon1" sm-width="44px" sm-height="44px" sm-font="26px sans-serif" />
						</Components.CardExampleSuper>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0 60px 0" md-padding="60px 0 60px 0" quarkly-title="What's Next?">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px -10px"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					What’s next?
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				lg-width="100%"
				sm-font="--headline3"
			>
				Move to the next stage
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 0px 0"
				width="60%"
				color="--darkL2"
				lg-width="100%"
			>
				You’ve learned how to work with components in Quarkly. In the next stage, you'll get to know about themes


 and will learn:
			</Text>
			<List margin="0px 0px 36px 0px" sm-margin="0px 0px 24px 0px">
				<Text font="--base">
					How to add a value to the theme
				</Text>
				<Text font="--base">
					How to use a value
				</Text>
				<Text font="--base">
					How to change a value
				</Text>
				<Text font="--base">
					What breakpoints are and how to work with them.
				</Text>
			</List>
			<Box position="relative" display="inline-block" margin="0px 0px 0px 0px" quarkly-title="Step">
				<Text
					font="italic 700 28px/1.2 --fontFamily-sans"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--dark"
					margin="0px 0px 16px 0px"
					position="relative"
					z-index="1"
					sm-font="italic 700 20px/1.2 --fontFamily-sans"
				>
					Stage 4.   Theme →
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-next-stage-bg.svg?v=2020-10-27T09:36:49.534Z) center/contain no-repeat scroll padding-box"
					display="inline-block"
					width="126.874px"
					height="47.268px"
					position="absolute"
					top="-4px"
					left="-13px"
					right="auto"
					bottom="auto"
					sm-top="-9px"
					sm-width="96.874px"
				/>
			</Box>
		</Section>
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