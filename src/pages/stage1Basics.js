import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Em, Image, Span, Icon, List, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
import { BsDot } from "react-icons/bs";
import { MdFace } from "react-icons/md";
import { FaTree } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Basics | Onboarding Quarkly
			</title>
			<meta name={"description"} content={"At this stage, you're going to learn how to add elements to the page, edit their content and style properties.\n"} />
			<meta property={"og:title"} content={"Basics | Onboarding Quarkly"} />
			<meta property={"og:description"} content={"At this stage, you're going to learn how to add elements to the page, edit their content and style properties.\n"} />
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
				width="33.33%"
				color="--light"
				lg-width="80%"
				sm-width="100%"
				md-width="100%"
			>
				Quarkly Basics
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
				lg-width="80%"
				sm-width="100%"
				md-width="100%"
			>
				Project pages consist of styled elements. Here you will learn how to add elements to the page, fill them with information, and style them.
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 1. Add Elements">
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
					STEP 1 OF 7
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
				lg-width="100%"
			>
				Add elements
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-width="100%"
				md-margin="0px 0 16px 0"
				lg-width="100%"
			>
				To start, open the{" "}
				<Em>
					Layers{" "}
				</Em>
				{" "}panel and switch to the{" "}
				<Em
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Components
				</Em>
				{" "}tab. Next, drag elements into the workspace.
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Сhoose
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}and drag and drop it into the workspace.
							</Text>
							<Image width="100%" src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-drag&drop.svg?v=2020-10-24T19:07:24.859Z" border-radius="4px" />
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
						md-margin="0px 0px 0px 0px"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 8px 0px"
							>
								After that,


 add elements to{"  "}
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
										margin="0px 2px 0px 2px"
									/>
									Box
								</Span>
								{" "}in the following order:
							</Text>
							<List width="100%" box-sizing="border-box" list-style-type="none" padding="0px 0px 0px 0px">
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-icon.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Icon
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Button
									</Text>
								</Box>
							</List>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
								lg-margin="20px 0px 0px 0px"
							>
								The first text element —
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Text
								</Span>
								{"  "}— is going to be the heading, while the second one will be the card description.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
							sm-margin="12px 0px 16px 0px"
						>
							Double-click on the text and button elements to change their content according to the example.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
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
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						border-radius="6px"
					>
						Workspace
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
					>
						<Box width="100%">
							<Icon category="md" icon={MdFace} size="64зч" />
							<Text>
								Into the Wild
							</Text>
							<Text>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button>
								Join
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 2. Style the Background">
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
					STEP 2 OF 7
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
				lg-width="100%"
			>
				Style the background
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				Now we’ve created the card structure, let's style it a bit by adding a{" "}
				<Em>
					background
				</Em>
				{" "}and{" "}
				<Em>
					border radius
				</Em>
				.
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Choose{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
							</Text>
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-selected-box.svg?v=2020-10-27T19:10:47.815Z" border-radius="4px" max-width="100%" />
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Navigate to the{"  "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Styles
								</Em>
								{" "}>{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Layout
								</Em>
								{" "}tab on the Props panel and set the width to{" "}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Em>
										100%
									</Em>
								</Span>
								{" "}and the height to{" "}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Em>
										320px.
									</Em>
								</Span>
							</Text>
							<Image src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" max-width="100%" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							3
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 8px 0px"
							>
								Now go to{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Backgrounds
								</Em>
								, click in the input field to open the panel, choose Type{" "}
								<Em>
									URL
								</Em>
								, and copy-paste this image URL:
							</Text>
							<Link
								href="#"
								word-break="break-all"
								overflow-wrap="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="--base"
								color="--primary"
								margin="0px 0px 16px 0px"
							>
								https://images.unsplash.com/photo-1593431074633-21ef64707d29?fit=crop&w=750&q=80
							</Link>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
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
						<Box>
							<Icon category="md" icon={MdFace} size="64зч" />
							<Text>
								Into the Wild
							</Text>
							<Text>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button>
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
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?fit=crop&w=750&q=80) 50% 50%/cover" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text>
								Into the Wild
							</Text>
							<Text>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button>
								Join
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 3. Style your Text and Button">
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
					STEP 3 OF 7
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
				lg-width="100%"
			>
				Style your text and button
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				Let's put your knowledge of styles into practice and try to style the button and text as to match the example.
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Style your heading and description according to the example. This time use the{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Typography
								</Em>
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									{" "}tab
								</Span>
							</Text>
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-typography-section.svg?v=2020-10-27T19:37:29.655Z" border-radius="4px" max-width="100%" />
							<Text
								display="inline-block"
								font="normal 300 14px/1.7 --fontFamily-sans"
								margin="18px 0px 6px 0px"
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
								You can copy and paste styles from the example using these shortcuts:
								<br />
								Mac:
								<br />
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
									⌥
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
									с
								</Span>
								,{" "}
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
									⌥
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
									v
								</Span>
								,{" "}
								<br />
								Windows:
								<br />
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
									alt
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
									c
								</Span>
								,
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
									alt
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
									v
								</Span>
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 8px 0px"
							>
								Now style{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
									margin="0px 4px 0px 2px"
								/>
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Change the following properties:
							</Text>
							<List
								width="100%"
								box-sizing="border-box"
								padding="0px 0px 0px 0px"
								font="--base"
								list-style-type="none"
								color="--darkL2"
								margin="0px 0px 16px 0px"
							>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Text
										display="block"
										font="--base"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Color and Letter Spacing (Typography)
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Text
										display="block"
										font="--base"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Background (Background)
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Text
										display="block"
										font="--base"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Border radius (Borders)
									</Text>
								</Box>
							</List>
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-background-section.svg?v=2020-10-27T19:37:29.672Z" border-radius="4px" max-width="100%" />
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-borders-section.svg?v=2020-10-27T19:37:29.672Z" border-radius="4px" max-width="100%" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
						sm-flex-direction="column"
						lg-margin="0px 0px 12px 0px"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							3
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Add the shadow for{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
									margin="0px 4px 0px 2px"
								/>
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. To do this, open the{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Effects
								</Em>
								{" "}tab and use the{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box shadow{" "}
								</Em>
								property. Copy the value from the example.
							</Text>
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-effects-section.svg?v=2020-10-27T19:37:29.668Z" border-radius="4px" max-width="100%" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							4
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Finally, add indents for{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
									margin="0px 4px 0px 2px"
								/>
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Open the{" "}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Indents{" "}
									</Em>
									tab
								</Span>
								. Specify{" "}
								<Em>
									margin 
							24px
								</Em>
								{" "}for the top field,{" "}
								<Em>
									padding 
							34px
								</Em>
								{" "}for the sides and{" "}
								<Em>
									12px
								</Em>
								{" "}for the top and bottom fields.
							</Text>
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-indents-section.svg?v=2020-10-27T19:37:29.664Z" border-radius="4px" max-width="100%" />
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
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
						Workspace
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
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?fit=crop&w=750&q=80) 50% 50%/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text>
								Into the Wild
							</Text>
							<Text>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button>
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
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 50% 50%/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text font="--headline3" text-transform="uppercase" color="--light" text-align="center">
								Into the Wild
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
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Join
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 4. Change the Font">
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
					STEP 4 OF 7
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
				lg-width="100%"
			>
				Change the font
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				Apply the distinctive font to the heading.
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Select the heading. On the{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Styles{" "}
								</Em>
								panel go to the{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Typography
								</Em>
								{"  "}tab and click on the{" "}
								<Image vertical-align="-5px" src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-detach-theme-variable.svg?v=2020-10-27T19:47:00.021Z" margin="0px 0px 0px 0px" />
								{" "}icon to remove the link to the value from the{" "}
								<Em>
									Theme
								</Em>
								. Now add the new font to the project. To do this, click on the font value to open the panel. On the panel, click on the{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Add google fonts
								</Em>
								{" "}button.
							</Text>
							<Image
								src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-font-panel.svg?v=2020-10-27T20:03:03.678Z"
								border-radius="4px"
								object-fit="cover"
								width="242px"
								height="226px"
								object-position="top"
								max-width="100%"
							/>
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								In the modal window, search for{" "}
								<Em>
									Open Sans Condenced
								</Em>
								. Click on it and close the window. Now the new font has been added to the project.
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							3
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Now choose the new font for the heading. Open the panel with the font settings and choose{"  "}
								<Em>
									googleOpenSansCondenced
								</Em>
								{" "}for the Family field.
							</Text>
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-choosing-font-family.svg?v=2020-10-27T20:30:36.826Z" border-radius="4px" max-width="100%" margin="0px 0px 18px 0px" />
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
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
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 50% 50%/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text font="--headline3" text-transform="uppercase" color="--light" text-align="center">
								Into the Wild
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
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
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
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 50% 50%/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text font="normal 500 28px/1.2 --fontFamily-googleRobotoCondensed" text-transform="uppercase" color="--light" text-align="center">
								Into the Wild
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
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Join
							</Button>
						</Box>
					</Box>
					<Text
						display="inline-block"
						font="normal 300 14px/1.5 --fontFamily-sans"
						color="--darkL2"
						background="rgba(0, 119, 204, 0.04)"
						padding="8px 14px 16px 14px"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						border-color="--color-lightD2"
						text-align="left"
						max-width="480px"
						margin="0px 0px 0px 0px"
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
						The example uses Roboto Condensed instead of OpenSans Condensed because you have not connected it yet from Google Fonts.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 5. Change the Icon">
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
					STEP 5 OF 7
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
				Change the icon
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
			>
				Replace the icon with a more fitting one.
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="16px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Text
							display="inline-block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							To change the icon,{" "}
							<Em>
								double-click
							</Em>
							{" "}it. A modal window featuring all icons will appear. Choose the{" "}
							<Em
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Font Awesome
							</Em>
							{"  "}category and enter{"  "}
							<Em
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								tree{" "}
							</Em>
							into the search bar. Click on the icon{" "}
							<Icon category="fa" icon={FaTree} display="inline-block" vertical-align="middle" />
							{" "}
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="16px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Style the icon color and size according to the example.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
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
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 50% 50%/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text font="normal 500 28px/1.2 --fontFamily-googleRobotoCondensed" text-transform="uppercase" color="--light" text-align="center">
								Into the Wild
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
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
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
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 50% 50%/cover" border-radius="12px" height="320px">
							<Icon category="fa" icon={FaTree} font="44px sans-serif" color="--light" />
							<Text font="normal 500 28px/1.2 --fontFamily-googleRobotoCondensed" text-transform="uppercase" color="--light" text-align="center">
								Into the Wild
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
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Join
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 6. Center Align Elements">
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
					STEP 6 OF 7
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
				lg-width="100%"
			>
				Center align elements{" "}
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				By default, the content is left-aligned. Change this to center-aligned{" "}
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
				>
					<Image
						width="24px"
						height="24px"
						vertical-align="text-top"
						src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
						margin="0px 2px 0px 2px"
					/>
					Box
				</Span>
				{" "}with the help of display flex.
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column" sm-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="16px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Select
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
										margin="0px 2px 0px 2px"
									/>
									Box
								</Span>
								{" "}on the page and open the{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Layouts
								</Em>
								{"  "}tab on the{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Styles
								</Em>
								{" "}panel. Choose the flex value for the display property. This means that
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{"  "}will use flexbox — the more convenient way to align elements.
							</Text>
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-display-flex.svg?v=2020-10-29T09:06:15.535Z" border-radius="4px" max-width="100%" />
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="16px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Once you've chosen the flex value for display, new properties will appear under{"  "}
								<Em>
									Layout.
								</Em>
								{" "}Search for Flex direction and choose the column value.
							</Text>
							<Image
								src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-flex-direction-column.svg?v=2020-10-29T09:17:53.875Z"
								border-radius="4px"
								margin="0px 0px 24px 0px"
								max-width="100%"
								sm-margin="0px 0px 0px 0px"
							/>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="16px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							3
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 18px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 18px 0px"
							>
								Choose the center value for Align items and Justify content properties.
							</Text>
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-flex-ai-jc-center.svg?v=2020-10-29T09:18:06.412Z" border-radius="4px" margin="0px 0px 24px 0px" max-width="100%" />
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
								Experiment with different values to get familiar with how this works.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
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
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 50% 50%/cover" border-radius="12px" height="320px">
							<Icon category="fa" icon={FaTree} font="44px sans-serif" color="--light" />
							<Text font="normal 500 28px/1.2 --fontFamily-googleRobotoCondensed" text-transform="uppercase" color="--light" text-align="center">
								Into the Wild
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
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
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
							border-radius="12px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="44px sans-serif" color="--light" />
							<Text font="normal 500 28px/1.2 --fontFamily-googleRobotoCondensed" text-transform="uppercase" color="--light" text-align="center">
								Into the Wild
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
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 7. Add Padding">
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
					STEP 7 OF 7
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
				lg-width="100%"
			>
				Add paddings
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				By default,{" "}
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
				>
					<Image
						width="24px"
						height="24px"
						vertical-align="text-top"
						src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
						margin="0px 2px 0px 2px"
					/>
					Box
				</Span>
				{" "}doesn't have paddings. Let's add them to make our card more attractive.
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column" sm-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="16px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Select
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
										margin="0px 2px 0px 2px"
									/>
									Box
								</Span>
								{" "}on the page and open the{" "}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Indents{" "}
									</Em>
									tab
								</Span>
								. Specify{" "}
								<Em>
									48px
								</Em>
								{" "}for the top field,{" "}
								<Em>
									36px
								</Em>
								{" "}for the sides and{" "}
								<Em>
									72px
								</Em>
								{" "}for the bottom field.
							</Text>
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-indents-section.svg?v=2020-10-27T19:37:29.664Z" border-radius="4px" max-width="100%" />
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
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
							border-radius="12px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
						>
							<Icon category="fa" icon={FaTree} font="44px sans-serif" color="--light" />
							<Text font="normal 500 28px/1.2 --fontFamily-googleRobotoCondensed" text-transform="uppercase" color="--light" text-align="center">
								Into the Wild
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
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
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
							border-radius="12px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="44px sans-serif" color="--light" />
							<Text font="normal 500 28px/1.2 --fontFamily-googleRobotoCondensed" text-transform="uppercase" color="--light" text-align="center">
								Into the Wild
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
				lg-width="100%"
			>
				Try it yourself!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				You've created your first card and learnt the basics of web design. How about practicing a little now?{" "}
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
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
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							★
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 18px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 18px 0px"
							>
								Build a new card on your own. If you forget something scroll back to the top and revise the materials. Happy designing!
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
								Choose elements from the example and view their styles.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
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
							padding="48px 36px 72px 36px"
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
							<Text font="--headline3" color="--darkL2" text-align="center" margin="24px 0px 0px 0px">
								Woods & Mountains
							</Text>
							<Text font="--base" color="--grey" text-align="center" margin="16px 0px 0px 0px">
								43 places
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0 60px 0" md-padding="60px 0 90px 0" quarkly-title="What's Next?">
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
					What's next?
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
				lg-width="100%"
			>
				Move to the next stage
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 0px 0"
				width="50%"
				color="--darkL2"
				lg-width="100%"
				md-width="100%"
			>
				Congrats! You've done a great job getting to know the Quarkly basics. In the next stage you're going to deepen your knowledge and learn how to:
			</Text>
			<List margin="0px 0px 16px 0px" color="--darkL2" font="--base" sm-padding="0px 0px 0px 20px">
				<Text>
					Style states: hover, focused and other
				</Text>
				<Text>
					Make a smooth transition between states
				</Text>
				<Text>
					Create an adaptive design
				</Text>
			</List>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 16px 0"
				width="50%"
				color="--darkL2"
				lg-width="80%"
				md-width="100%"
			>
				Enable Preview
				<Image vertical-align="-5px" src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-code-preview.svg?v=2020-10-24T19:04:24.532Z" margin="0px 0px 0px 0px" />
				{" "}and mouse over the card below ↓
			</Text>
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
				margin="0px 0px 48px 0px"
				max-width="440px"
			>
				<Icon
					category="fa"
					icon={FaTree}
					font="44px sans-serif"
					color="--light"
					md-font="54px sans-serif"
					sm-font="36px sans-serif"
				/>
				<Text
					font="normal 500 28px/1.2 --fontFamily-googleRobotoCondensed"
					text-transform="uppercase"
					color="--light"
					text-align="center"
					margin="16px 0px 0px 0px"
					md-font="normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-font="normal 600 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
				>
					INTO THE WILD
				</Text>
				<Text
					font="--base"
					color="--lightD2"
					text-align="center"
					md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-font="--base"
					sm-margin="10px 0px 4px 0px"
					md-margin="16px 0px 8px 0px"
				>
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
					md-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-font="normal 300 12px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-padding="12px 18px 12px 18px"
				>
					JOIN
				</Button>
			</Box>
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
					Stage 2. Hover & Adaptive →
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-next-stage-bg.svg?v=2020-10-27T09:36:49.534Z) center/contain no-repeat scroll padding-box"
					display="inline-block"
					width="125.874px"
					height="47.268px"
					position="absolute"
					top="-4px"
					left="-13px"
					right="auto"
					bottom="auto"
					sm-width="95.874px"
					sm-top="-9px"
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