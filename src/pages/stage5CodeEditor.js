import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Span, List, Icon, Button, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
import { FaCanadianMapleLeaf, FaTree } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Code Editor | Onboarding Quarkly
			</title>
			<meta name={"description"} content={"At this stage, you're going to learn the basics of working in the code editor."} />
			<meta property={"og:title"} content={"Code Editor | Onboarding Quarkly"} />
			<meta property={"og:description"} content={"At this stage, you're going to learn the basics of working in the code editor."} />
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
			>
				Code Editor
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
				lg-width="80%"
			>
				The page and code in the code editor are synchronized. Each element of the page is represented by a tag with props. Let's take a closer look at the features of the code editor.
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 1. Open the Editor">
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
					STEP 1 OF 4
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
				Open the editor
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="66.66%"
				color="--darkL2"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
				sm-margin="0px 0 8px 0"
			>
				All page elements are represented in the code editor. Let's see what this page looks like.
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
					md-padding="0px 0px 0px 0px"
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
						md-width="100%"
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
							sm-margin="12px 12px 0px 0px"
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
								margin="20px 0px 12px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 12px 0px"
							>
								Click the{" "}
								<Image vertical-align="-5px" src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-code-editor.svg?v=2020-10-24T19:03:09.997Z" margin="0px 0px 0px 0px" />
								{" "}button in the top left corner of the top bar.
							</Text>
							<Text
								display="inline-block"
								font="normal 300 14px/1.7 --fontFamily-sans"
								margin="0px 0px 6px 0px"
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
								You can also open the editor with the following shortcuts:
								<br />
								Mac:
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
									⌘
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
									2
								</Span>
								, 
						Windows:
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
									ctrl
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
									2
								</Span>
							</Text>
						</Box>
					</Box>
					<Box
						width="80%"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
						md-width="100%"
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
							sm-margin="12px 12px 0px 0px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
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
								Choose any element on the page or in the code editor. Note that the selection is done simultaneously both on the page and in the code editor.
							</Text>
							<Image
								width="100%"
								src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-code-editor-selection.jpg?v=2020-10-28T13:44:51.444Z"
								border-radius="4px"
								margin="0px 0px 0px 0px"
								object-position="0px 0px"
							/>
						</Box>
					</Box>
				</List>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 2. Add an Element and Props">
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
					STEP 2 OF 4
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
				Add an element and props
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="66.66%"
				color="--darkL2"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
			>
				In the code editor, you can add elements and set their properties just like on a page. Let's try to add a new element to the card.
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
					md-padding="0px 0px 0px 0px"
				>
					<Box
						width="60%"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
						sm-margin="0px 0px 18px 0px"
						md-width="100%"
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
							sm-margin="12px 12px 0px 0px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%" padding="0px 24px 0px 0px" sm-padding="0px 0px 0px 0px">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Select an icon on the card.
							</Text>
						</Box>
					</Box>
					<Box
						width="60%"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
						sm-margin="0px 0px 18px 0px"
						md-width="100%"
					>
						{"    "}
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
							sm-margin="12px 12px 0px 0px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							{"        "}2{"\n    "}
						</Text>
						{"    "}
						<Box width="100%" padding="0px 24px 0px 0px" sm-padding="0px 0px 0px 0px">
							{"            "}
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								{"                "}To add a new element, enter the following code under the icon in the code editor:{"\n            "}
							</Text>
							{"            "}
							<Text
								display="block"
								font="normal 300 18px/1.5 --fontFamily-mono"
								margin="0px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								&lt;Text&gt;Trips&lt;/Text&gt;{"\n            "}
							</Text>
							{"            "}
							<Text
								display="block"
								font="--base"
								margin="18px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								{"                "}Use the following shortcuts to save the code:{"\n                "}
								<br />
								{"                "}Mac:{" \n                "}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									{"                    "}
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
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 3px"
									>
										{"                        "}⌘{"\n                    "}
									</Span>
									{"                "}
								</Span>
								{"                  "}+{"  \n                "}
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
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									margin="0px 3px 0px 0px"
								>
									{"                    "}s{"\n                "}
								</Span>
								{"                 "}, Windows:{" \n                "}
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
									margin="0px 0px 0px 3px"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									{"                    "}Ctrl{"\n                "}
								</Span>
								{"                    "}+{"\n                "}
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
									margin="0px 3px 0px 0px"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									{"                    "}s{"\n                "}
								</Span>
								{"            "}
							</Text>
							{"        "}
						</Box>
					</Box>
					<Box
						width="60%"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
						sm-margin="0px 0px 18px 0px"
						md-width="100%"
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
							sm-margin="12px 12px 0px 0px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							3
						</Text>
						<Box width="100%" padding="0px 24px 0px 0px" sm-padding="0px 0px 0px 0px">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								After the element appears, add some properties to it:
							</Text>
							<Text
								display="block"
								font="normal 300 18px/1.5 --fontFamily-mono"
								margin="0px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								&lt;Text
								<br />
								{"                "}color="--light"
								<br />
								{"    "}text-align="center"
								<br />
								{"    "}margin="16px 0px 0px 0px"
								<br />
								{"    "}text-transform="uppercase"
								<br />
								{"    "}letter-spacing="1.5px"
								<br />
								{"    "}font="14px sans-serif"
								<br />
								{"          "}&gt;
								<br />
								{"            "}Trips
								<br />
								{"          "}&lt;/Text&gt;
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
								font="52px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
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
								font="52px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
							/>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								text-transform="uppercase"
								letter-spacing="1.5px"
								font="14px sans-serif"
							>
								Trips
							</Text>
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
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 3. Find and Replace">
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
					STEP 3 OF 4
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
				Find and replace
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="66.66%"
				color="--darkL2"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
			>
				It’s really easy to work with elements and properties in the code editor. You can change, delete, move, duplicate, and paste elements into other elements. Let’s try to do that now.
			</Text>
			<Box display="flex" flex-direction="column" width="100%">
				<Box
					width="60%"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					quarkly-title="Item 1"
					flex-wrap="nowrap"
					margin="0px 0px 12px 0px"
					sm-flex-direction="column"
					sm-margin="0px 0px 18px 0px"
					md-width="100%"
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
						sm-margin="12px 12px 0px 0px"
						border-color="--color-darkL2"
						border-style="solid"
						border-width="1px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						1
					</Text>
					<Box width="100%" display="flex" sm-flex-direction="column">
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
							sm-margin="12px 0px 16px 0px"
						>
							Select an icon on the first card
						</Text>
					</Box>
				</Box>
				<Box
					width="60%"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					quarkly-title="Item 1"
					flex-wrap="nowrap"
					margin="0px 0px 12px 0px"
					sm-flex-direction="column"
					sm-margin="0px 0px 18px 0px"
					md-margin="0px 0px 0px 0px"
					md-width="100%"
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
						sm-margin="12px 12px 0px 0px"
						border-color="--color-darkL2"
						border-style="solid"
						border-width="1px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						2
					</Text>
					<Box width="100%" padding="0px 24px 0px 0px" sm-padding="0px 0px 0px 0px">
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
							sm-margin="12px 0px 16px 0px"
						>
							Select the following line:
						</Text>
						<Image
							border-radius="4px"
							margin="0px 0px 12px 0px"
							object-position="0px 0px"
							src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-code-editor-font-icon.png?v=2020-11-02T08:42:12.028Z"
							max-width="100%"
						/>
						<Text
							display="block"
							font="--base"
							margin="18px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Now, search and replace it. To do that, use the following shortcuts:
							<br />
							Mac:{" "}
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
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
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									margin="0px 0px 0px 3px"
								>
									⌘
								</Span>
							</Span>
							{" "}+{" "}
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
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								margin="0px 3px 0px 0px"
							>
								f
							</Span>
							{" "}, Windows:{" "}
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
								margin="0px 0px 0px 3px"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Ctrl
							</Span>
							{" "}+{" \n\t\t\t\t\t\t\t "}
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
								margin="0px 3px 0px 0px"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								f
							</Span>
						</Text>
						<Image
							border-radius="4px"
							margin="0px 0px 12px 0px"
							object-position="0px 0px"
							src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-code-editor-search-2x.png?v=2020-10-29T15:10:28.677Z"
							max-width="100%"
						/>
					</Box>
				</Box>
				<Box
					width="60%"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					quarkly-title="Item 1"
					flex-wrap="nowrap"
					margin="0px 0px 12px 0px"
					sm-flex-direction="column"
					sm-margin="0px 0px 18px 0px"
					md-margin="0px 0px 0px 0px"
					md-width="100%"
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
						sm-margin="12px 12px 0px 0px"
						border-color="--color-darkL2"
						border-style="solid"
						border-width="1px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						3
					</Text>
					<Box width="100%" padding="0px 24px 0px 0px" sm-padding="0px 0px 0px 0px">
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
							sm-margin="12px 0px 16px 0px"
						>
							In the window that appears, open the second field by clicking on the arrow &gt;. And in the Replace field, enter:
						</Text>
						<Text
							display="block"
							font="normal 300 18px/1.5 --fontFamily-mono"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							font="72px sans-serif"
						</Text>
						<Image
							src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-code-editor-find-replace-2x.png?v=2020-10-29T15:12:04.820Z"
							border-radius="4px"
							margin="0px 0px 12px 0px"
							object-position="0px 0px"
							max-width="100%"
						/>
						<Text
							display="block"
							font="--base"
							margin="0px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Click on the{" "}
							<Em
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Replace All
							</Em>
							{" "}button{" \n\t\t\t\t\t\t\t "}
							<Image vertical-align="-5px" src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-code-editor-replace-all.jpg?v=2020-10-28T13:59:18.293Z" margin="0px 0px 0px 0px" />
							.
						</Text>
					</Box>
				</Box>
				<Box
					width="60%"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					quarkly-title="Item 1"
					flex-wrap="nowrap"
					margin="0px 0px 12px 0px"
					sm-flex-direction="column"
					sm-margin="0px 0px 18px 0px"
					md-margin="0px 0px 0px 0px"
					md-width="100%"
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
						sm-margin="12px 12px 0px 0px"
						border-color="--color-darkL2"
						border-style="solid"
						border-width="1px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						4
					</Text>
					<Box width="100%" padding="0px 24px 0px 0px" sm-padding="0px 0px 0px 0px">
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
							sm-margin="12px 0px 16px 0px"
						>
							Save the code to see the result.
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
							margin="0px 32px 0px 0px"
							lg-margin="0px 32px 32px 0px"
						>
							<Icon
								font="52px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
							/>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								text-transform="uppercase"
								letter-spacing="1.5px"
								font="14px sans-serif"
							>
								Trips
							</Text>
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
							margin="0px 32px 0px 0px"
							lg-margin="0px 32px 32px 0px"
						>
							<Icon
								font="52px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
							/>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								text-transform="uppercase"
								letter-spacing="1.5px"
								font="14px sans-serif"
							>
								Trips
							</Text>
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
								font="52px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
							/>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								text-transform="uppercase"
								letter-spacing="1.5px"
								font="14px sans-serif"
							>
								Trips
							</Text>
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
							margin="0px 32px 0px 0px"
							lg-margin="0px 32px 32px 0px"
						>
							<Icon
								font="72px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
							/>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								text-transform="uppercase"
								letter-spacing="1.5px"
								font="14px sans-serif"
							>
								Trips
							</Text>
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
							margin="0px 32px 0px 0px"
							lg-margin="0px 32px 32px 0px"
						>
							<Icon
								font="72px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
							/>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								text-transform="uppercase"
								letter-spacing="1.5px"
								font="14px sans-serif"
							>
								Trips
							</Text>
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
							margin="0px 0px 0px 0px"
							lg-margin="0px 32px 0px 0px"
						>
							<Icon
								font="72px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
							/>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								text-transform="uppercase"
								letter-spacing="1.5px"
								font="14px sans-serif"
							>
								Trips
							</Text>
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
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 4. Cut and Paste">
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
					STEP 4 OF 4
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
				Cut and paste
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="66.66%"
				color="--darkL2"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
			>
				Sometimes you may find it convenient to move a component or a group of components from one place to another. The cut and paste commands can be used for this purpose.
			</Text>
			<Box display="flex" flex-direction="column" width="100%">
				<Box
					width="60%"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					quarkly-title="Item 1"
					flex-wrap="nowrap"
					margin="0px 0px 12px 0px"
					sm-flex-direction="column"
					sm-margin="0px 0px 18px 0px"
					md-width="100%"
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
						sm-margin="12px 12px 0px 0px"
						border-color="--color-darkL2"
						border-style="solid"
						border-width="1px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						1
					</Text>
					<Box width="100%" padding="0px 24px 0px 0px" sm-padding="0px 0px 0px 0px">
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
							sm-margin="12px 0px 16px 0px"
						>
							Choose an icon
						</Text>
					</Box>
				</Box>
				<Box
					width="60%"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					quarkly-title="Item 1"
					flex-wrap="nowrap"
					margin="0px 0px 0px 0px"
					sm-flex-direction="column"
					sm-margin="0px 0px 18px 0px"
					md-width="100%"
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
						sm-margin="12px 12px 0px 0px"
						border-color="--color-darkL2"
						border-style="solid"
						border-width="1px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						2
					</Text>
					<Box width="100%" padding="0px 24px 0px 0px" sm-padding="0px 0px 0px 0px">
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
							sm-margin="12px 0px 16px 0px"
						>
							Select the following lines:
						</Text>
						<Image
							border-radius="4px"
							margin="0px 0px 12px 0px"
							object-position="0px 0px"
							src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-code-editor-icon-lines.png?v=2020-11-04T13:41:21.439Z"
							max-width="100%"
						/>
						<Text
							display="block"
							font="--base"
							margin="0px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Cut the element using the shortcuts:
							<br />
							Mac:{" "}
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
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
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									margin="0px 0px 0px 3px"
								>
									⌘
								</Span>
								{" "}+{" "}
							</Span>
							{" "}
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
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								margin="0px 3px 0px 0px"
							>
								x
							</Span>
							{" "}, Windows:{" "}
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
								margin="0px 0px 0px 3px"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Ctrl
							</Span>
							{" "}+{" \n\t\t\t\t\t\t\t "}
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
								margin="0px 3px 0px 0px"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								x
							</Span>
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
								You can see all the options by right-clicking on the code editor and selecting Command Palette.
							</Span>
						</Text>
					</Box>
				</Box>
				<Box
					width="60%"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					quarkly-title="Item 1"
					flex-wrap="nowrap"
					margin="0px 0px 0px 0px"
					sm-flex-direction="column"
					sm-margin="0px 0px 18px 0px"
					md-width="100%"
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
						sm-margin="12px 12px 0px 0px"
						border-color="--color-darkL2"
						border-style="solid"
						border-width="1px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						3
					</Text>
					<Box width="100%" padding="0px 24px 0px 0px" sm-padding="0px 0px 0px 0px">
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
							sm-margin="12px 0px 16px 0px"
						>
							Select the Trips element and insert the cut icon in the code below it.
							<br />
							{" "}The shortcuts are: Mac:{" "}
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
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
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									margin="0px 0px 0px 3px"
								>
									⌘
								</Span>
								{" "}+{" "}
							</Span>
							{" "}
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
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								margin="0px 3px 0px 0px"
							>
								v
							</Span>
							{" "}, Windows:{" "}
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
								margin="0px 0px 0px 3px"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Ctrl
							</Span>
							{" "}+{" \n\t\t\t\t\t\t\t "}
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
								margin="0px 3px 0px 0px"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								v
							</Span>
						</Text>
					</Box>
				</Box>
				<Box
					width="60%"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					quarkly-title="Item 1"
					flex-wrap="nowrap"
					margin="0px 0px 12px 0px"
					sm-flex-direction="column"
					sm-margin="0px 0px 18px 0px"
					md-width="100%"
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
						sm-margin="12px 12px 0px 0px"
						border-color="--color-darkL2"
						border-style="solid"
						border-width="1px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						4
					</Text>
					<Box width="100%" padding="0px 24px 0px 0px" sm-padding="0px 0px 0px 0px">
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
							lg-width="100%"
							sm-margin="12px 0px 16px 0px"
						>
							Save the code to see the result.
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
							margin="0px 0px 0px 0px"
							lg-margin="0px 32px 32px 0px"
						>
							<Icon
								font="72px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
							/>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								text-transform="uppercase"
								letter-spacing="1.5px"
								font="14px sans-serif"
							>
								Trips
							</Text>
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
							margin="0px 0px 0px 0px"
							lg-margin="0px 32px 32px 0px"
						>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								text-transform="uppercase"
								letter-spacing="1.5px"
								font="14px sans-serif"
							>
								Trips
							</Text>
							<Icon
								font="72px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
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
			>
				You’ve worked through how to use the code editor. How about practicing a little now?
			</Text>
			<Box display="flex" flex-direction="column" width="100%">
				<Box
					width="60%"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					quarkly-title="Item 1"
					flex-wrap="nowrap"
					margin="0px 0px 12px 0px"
					sm-flex-direction="column"
					sm-margin="0px 0px 18px 0px"
					md-width="100%"
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
					<Box
						width="100%"
						padding="0px 24px 0px 0px"
						lg-width="60%"
						md-width="100%"
						sm-padding="0px 0px 0px 0px"
					>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 24px 0px"
							width="100%"
							color="--darkL2"
						>
							Build a card using only the code editor. Try to type but not copy the code from the example. This will help you learn it better and get the hang of working with the code editor.
						</Text>
						<Text
							display="inline-block"
							font="normal 300 14px/1.5 --fontFamily-sans"
							margin="0px 0px 16px 0px"
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
					>
						<Box
							width="100%"
							background="#FFF"
							border-radius="8px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="36px"
							border-width="4px"
							border-style="solid"
							border-color="--color-lightD2"
						>
							<Icon
								category="fa"
								icon={FaTree}
								font="64px sans-serif"
								color="--red"
								margin="0px 0px 12px 0px"
							/>
							<Text font="--headline3" color="--darkL2" margin="24px 0px 0px 0px">
								Woods & Mountains
							</Text>
							<Text font="--base" color="--grey" margin="16px 0px 0px 0px">
								43 places
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			padding="100px 0px 200px 0px"
			sm-padding="40px 0 60px 0"
			border-width="2px 0px 0px 0px"
			border-style="solid"
			border-color="--color-lightD2"
			background="--color-lightD1"
			md-padding="60px 0px 80px 0px"
			quarkly-title="Congrats!"
		>
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
					Сongrats
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
				You’ve successfully completed the onboarding!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 6px 0"
				width="50%"
				color="--darkL2"
				lg-width="60%"
				md-width="100%"
			>
				Now you can create your own project on the fly! If you want to double-check something or refrech your memory, you can always come back to this guide.
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 24px 0"
				width="50%"
				color="--darkL2"
				lg-width="60%"
				md-width="100%"
			>
				You may need more information. To get it, click on the{" "}
				<Span
					display="inline-block"
					padding="0px 10px 0px 10px"
					background="--color-darkL2"
					color="--light"
					border-radius="20px"
					margin="0px 0px 0px 3px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					sm-margin="0px 3px 0px 3px"
				>
					?
				</Span>
				{" "}button{" "}
				<Em
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					at the bottom left of the screen ↘︎{" "}
				</Em>
				. There, you will find the links to the documentation, community, and video lessons.
			</Text>
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