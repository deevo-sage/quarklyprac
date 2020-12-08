import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box, List, Span, Em, Icon, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
import { FaYoutube, FaTree } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Intro | Onboarding Quarkly
			</title>
			<meta name={"description"} content={"At this stage, you are going to get to know the Quarkly interface and main features.\n"} />
			<meta property={"og:title"} content={"Intro | Onboarding Quarkly"} />
			<meta property={"og:description"} content={"At this stage, you are going to get to know the Quarkly interface and main features.\n"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.HeaderMenu>
			<Override slot="SectionContent" />
			<Override slot="menu" />
			<Override slot="menuOverride1" />
			<Override slot="menuOverride12" />
			<Override slot="menuOverride2" />
			<Override slot="menuOverride3" />
			<Override slot="menuOverride4" />
			<Override slot="menuOverride5" />
		</Components.HeaderMenu>
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
				Introduction to Quarkly
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 18px 0"
				width="66.66%"
				color="--lightD2"
				lg-width="80%"
				md-width="100%"
			>
				Quarkly comes with the familiar interface of any design tool:
			</Text>
			<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-interface-scheme.svg?v=2020-10-27T14:17:15.256Z" margin="0px 0px 24px 0px" sm-width="100%" />
			<Components.Textarea />
			<Box position="relative">
				<Text
					as="p"
					font="--headline3"
					margin="0px 0 0 0"
					color="--lightD2"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					position="relative"
					z-index="1"
					sm-font="--lead"
				>
					Try Quarkly and see for yourself!
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0%/cover no-repeat scroll padding-box"
					display="inline-block"
					width="96px"
					height="16px"
					position="absolute"
					top="auto"
					right="-10px"
					bottom="-1px"
					left="auto"
				/>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 1. Pages">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 32px 0px 0px"
					margin="0px 0px 16px 0px"
					width="50%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
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
							STEP 1 OF 9
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
						color="--darkL2"
						sm-font="--headline3"
					>
						Pages set free
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="0px 0 30px 0"
						width="100%"
						color="--darkL2"
						md-margin="0px 0 0px 0"
					>
						Drag the page wherever you want!
					</Text>
				</List>
				<Box
					width="50%"
					text-align="center"
					position="relative"
					padding="98px 0px 0px 24px"
					box-sizing="border-box"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					md-padding="0px 0px 0px 0px"
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
							border-width="1px"
							border-style="solid"
							border-color="--color-darkL2"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
							sm-margin="12px 12px 0px 0px"
						>
							1
						</Text>
						<Box width="100%" text-align="left">
							<Text
								display="inline-block"
								font="--base"
								margin="18px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Hold down the
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
								>
									SPACE
								</Span>
								{" "}key and the left mouse button
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
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
							sm-margin="12px 12px 0px 0px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="18px 0px 8px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Use the mouse to move the page
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
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
							sm-margin="12px 12px 0px 0px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="18px 0px 16px 0px"
							width="100%"
							color="--darkL2"
							text-align="left"
							sm-margin="12px 0px 16px 0px"
						>
							If you use a touchpad, move the page by placing two fingers on the touchpad and sliding{"  "}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 2. Zooming">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 32px 0px 0px"
					margin="0px 0px 16px 0px"
					width="50%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
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
							STEP 2 OF 9
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
						color="--darkL2"
						sm-font="--headline3"
					>
						Zooming
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="0px 0 30px 0"
						width="100%"
						color="--darkL2"
						md-margin="0px 0 0px 0"
					>
						Zoom in to take a closer look at the details and choose a specific element. Zoom out to get an overall view of the page design.
					</Text>
				</List>
				<Box
					width="50%"
					text-align="center"
					position="relative"
					padding="98px 0px 0px 24px"
					box-sizing="border-box"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
				>
					<List
						as="ol"
						list-style-type="none"
						padding="0px 12px 0px 0px"
						margin="0px 0px 16px 0px"
						width="100%"
						box-sizing="border-box"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						text-align="left"
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								1
							</Text>
							<Box width="100%">
								<Text
									display="inline-block"
									font="--base"
									margin="18px 0px 16px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 16px 0px"
								>
									To{" "}
									<Span
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										<Em>
											zoom in
										</Em>
									</Span>
									, press{" "}
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
										+
									</Span>
									{" "}or Win:{" "}
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
										margin="0px 3px 0px 0px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										+
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								2
							</Text>
							<Box width="100%">
								<Text
									display="block"
									font="--base"
									margin="18px 0px 8px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 8px 0px"
								>
									To{" "}
									<Span
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										<Em>
											zoom out
										</Em>
									</Span>
									, press
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
										-
									</Span>
									{" "}or Win:{" "}
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
										margin="0px 3px 0px 0px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										-
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								3
							</Text>
							<Box width="100%">
								<Text
									display="block"
									font="--base"
									margin="18px 0px 8px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 8px 0px"
								>
									To get back to{" "}
									<Span
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										<Em>
											100% zoom
										</Em>
									</Span>
									, press{" "}
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
										0
									</Span>
									{" "}or Win:{" "}
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
										margin="0px 3px 0px 0px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										0
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								4
							</Text>
							<Text
								display="block"
								font="--base"
								margin="18px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								text-align="left"
								sm-margin="12px 0px 16px 0px"
							>
								On a touchpad, you can zoom in and out with pinch and spread gestures.
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								5
							</Text>
							<Box width="100%" display="flex" flex-direction="column" align-items="flex-start">
								<Text
									display="block"
									font="--base"
									margin="18px 0px 16px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 16px 0px"
								>
									Or, you can select a custom zoom level in the top bar.
								</Text>
								<Image width="auto" src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-zoom-options.svg?v=2020-10-23T14:06:12.870Z" border-radius="4px" height="auto" />
							</Box>
						</Box>
					</List>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 3. Theme">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 32px 0px 0px"
					margin="0px 0px 16px 0px"
					width="50%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
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
							STEP 3 OF 9
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
						color="--darkL2"
						sm-font="--headline3"
					>
						Theme
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="0px 0 30px 0"
						width="100%"
						color="--darkL2"
						md-margin="0px 0 0px 0"
					>
						It’s more convenient when a project has a limited number of text styles, colors, and effects. For this we created a theme.
					</Text>
				</List>
				<Box
					width="50%"
					text-align="center"
					position="relative"
					padding="98px 0px 0px 24px"
					box-sizing="border-box"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<List
						as="ol"
						list-style-type="none"
						padding="0px 12px 0px 0px"
						margin="0px 0px 16px 0px"
						width="100%"
						box-sizing="border-box"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						text-align="left"
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
								flex="0 0 auto"
								min-width="12px"
								text-align="center"
								border-color="--color-darkL2"
								border-style="solid"
								border-width="1px"
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								1
							</Text>
							<Box width="100%">
								<Text
									display="inline-block"
									font="--base"
									margin="18px 0px 24px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 16px 0px"
								>
									If an element is selected, the right panel will display the properties of this element. If you deselect the element by pressing{" "}
									<Span
										border-color="--color-lightD2"
										border-radius="4px"
										border-style="solid"
										border-width="2px"
										box-shadow="0px 1px 0 1px --color-lightD2"
										color="--greyD2"
										display="inline-block"
										font="--capture"
										hyphens="manual"
										letter-spacing="1px"
										margin="0px 0px 0px 3px"
										min-width="18px"
										overflow-wrap="normal"
										padding="2px 5px 2px 5px"
										text-align="center"
										text-indent="0"
										text-overflow="clip"
										text-transform="uppercase"
										white-space="normal"
										word-break="normal"
									>
										Esc
									</Span>
									, the{" "}
									<Span
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										<Em>
											Theme panel
										</Em>
									</Span>
									{" "}will appear.
								</Text>
								<Image
									width="auto"
									src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-theme-panel.svg?v=2020-10-23T14:43:56.784Z"
									border-radius="4px"
									height="auto"
									margin="0px 0px 0px 0px"
								/>
								<Text
									display="block"
									font="normal 300 14px/1.5 --fontFamily-sans"
									margin="18px 0px 24px 0px"
									color="--darkL2"
									background="rgba(0, 119, 204, 0.04)"
									padding="8px 14px 16px 14px"
									border-radius="6px"
									border-width="1px"
									border-style="solid"
									border-color="--color-lightD2"
									position="relative"
								>
									<Icon
										category="fa"
										icon={FaYoutube}
										color="--greyD2"
										font="22px sans-serif"
										margin="0px 8px 0px 0px"
										display="inline-block"
										position="absolute"
									/>
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
										display="inline-block"
										margin="0px 0px 0px 31px"
									>
										YOUTUBE
									</Span>
									<br />
									<Text
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										text-decoration-line="initial"
										margin="0 0px 0px 0px"
									>
										About Theme
									</Text>
									<Link
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										text-decoration-line="initial"
										color="--primary"
										href="https://youtu.be/fyLLNYVNG30"
										target="_blank"
									>
										https://youtu.be/fyLLNYVNG30
									</Link>
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
							margin="0px 0px 0px 0px"
							sm-flex-direction="column"
						>
							<Text
								background="--color-indigo"
								font="--base"
								color="--lightD2"
								padding="2px 8px 2px 8px"
								border-radius="33px"
								margin="16px 12px 16px 0px"
								flex="0 0 auto"
								min-width="12px"
								text-align="center"
								border-color="--color-darkL2"
								border-style="solid"
								border-width="1px"
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								2
							</Text>
							<Box width="100%">
								<Text
									display="block"
									font="--base"
									margin="18px 0px 8px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 8px 0px"
								>
									There you will find various groups like colors, text styles, backgrounds, shadows, etc. Each group has variables. Here's what you can do with a variable:
								</Text>
								<List margin="0px 0px 16px 0px" list-style-type="disc" padding="0px 0px 0px 20px" color="--darkL2">
									<Text font="--base" margin="0px 0 8px 0px">
										Add
									</Text>
									<Text font="--base" margin="0px 0 8px 0px">
										Remove
									</Text>
									<Text font="--base" margin="0px 0 8px 0px">
										Sort
									</Text>
									<Text font="--base" margin="0px 0 8px 0px">
										Edit
									</Text>
									<Text font="--base" margin="0px 0 8px 0px">
										Duplicat
									</Text>
									<Text font="--base" margin="0px 0 8px 0px">
										Rename
									</Text>
								</List>
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
								flex="0 0 auto"
								min-width="12px"
								text-align="center"
								border-color="--color-darkL2"
								border-style="solid"
								border-width="1px"
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								3
							</Text>
							<Box>
								<Text
									display="block"
									font="--base"
									margin="18px 0px 16px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 16px 0px"
								>
									Last but not least are the{" "}
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										breakpoints.{" "}
									</Em>
									These will help you create a mobile-friendly view of your website.
								</Text>
								<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-breakpoints-section.svg?v=2020-10-29T14:45:20.688Z" border-radius="4px" margin="0px 0px 24px 0px" object-position="0px 0px" />
								<Text
									display="inline-block"
									font="normal 300 14px/1.5 --fontFamily-sans"
									margin="0px 0px 0px 0px"
									color="--darkL2"
									background="rgba(0, 119, 204, 0.04)"
									border-color="--color-lightD2"
									border-radius="6px"
									border-style="solid"
									border-width="1px"
									padding="8px 14px 16px 14px"
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
									To learn more about breakpoints, go to{" "}
									<Em>
										Stage 4. Theme
									</Em>
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									/>
									<Span
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										<Link
											href="stage-5-code-editor"
											overflow-wrap="normal"
											word-break="normal"
											white-space="normal"
											text-indent="0"
											text-overflow="clip"
											hyphens="manual"
										/>
									</Span>
								</Text>
							</Box>
						</Box>
					</List>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 4. Props panel">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 32px 0px 0px"
					margin="0px 0px 16px 0px"
					width="50%"
					box-sizing="border-box"
					md-width="100%"
					md-margin="0px 0px 16px 0px"
					sm-padding="0px 0px 0px 0px"
				>
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
							STEP 4 OF 9
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
						color="--darkL2"
						sm-font="--headline3"
					>
						Props panel
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="0px 0 30px 0"
						width="100%"
						color="--darkL2"
						md-margin="0px 0 0px 0"
					>
						To change the styles and functions of the elements, navigate to the right panel.{" "}
					</Text>
				</List>
				<Box
					width="50%"
					text-align="center"
					position="relative"
					padding="98px 0px 0px 24px"
					box-sizing="border-box"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<List
						as="ol"
						list-style-type="none"
						padding="0px 12px 0px 0px"
						margin="0px 0px 16px 0px"
						width="100%"
						box-sizing="border-box"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						text-align="left"
						sm-margin="0px 0px 0px 0px"
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								1
							</Text>
							<Box width="100%">
								<Text
									display="inline-block"
									font="--base"
									margin="18px 0px 16px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 16px 0px"
								>
									Click on an element to choose it, and its Props panel will show up.{" "}
								</Text>
								<Image width="auto" src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-props-panel.svg?v=2020-10-23T20:59:55.902Z" border-radius="4px" height="auto" />
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
							sm-margin="0px 0px 0px 0px"
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								2
							</Text>
							<Box width="100%">
								<Text
									display="block"
									font="--base"
									margin="18px 0px 8px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 8px 0px"
								>
									The panel has two tabs:
								</Text>
								<List margin="0px 0px 16px 0px" list-style-type="disc" padding="0px 0px 0px 20px">
									<Text font="--base" margin="8px 0px 8px 0px">
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
										{" "}with style properties
									</Text>
									<Text font="--base" margin="0px 0px 0px 0px">
										<Em
											overflow-wrap="normal"
											word-break="normal"
											white-space="normal"
											text-indent="0"
											text-overflow="clip"
											hyphens="manual"
										>
											Props
										</Em>
										{" "}with functional properties
									</Text>
								</List>
							</Box>
						</Box>
					</List>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 5. Pages and Layers">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 32px 0px 0px"
					margin="0px 0px 16px 0px"
					width="50%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
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
							STEP 5 OF 9
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
						color="--darkL2"
						sm-font="--headline3"
					>
						Pages and layers
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="0px 0 30px 0"
						width="100%"
						color="--darkL2"
						md-margin="0px 0 0px 0"
					>
						A project consists of{" "}
						<Em>
							pages
						</Em>
						, and a page consists of{" "}
						<Em>
							elements
						</Em>
						. You can apply a lot of actions to elements — add, remove, nest, and more.{" "}
					</Text>
				</List>
				<Box
					width="50%"
					text-align="center"
					position="relative"
					padding="98px 0px 0px 24px"
					box-sizing="border-box"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<List
						as="ol"
						list-style-type="none"
						padding="0px 12px 0px 0px"
						margin="0px 0px 16px 0px"
						width="100%"
						box-sizing="border-box"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						text-align="left"
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								1
							</Text>
							<Box width="100%">
								<Text
									display="inline-block"
									font="--base"
									margin="18px 0px 0px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 0px 0px"
								>
									To open the panel with{" "}
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										pages and layers
									</Em>
									, press the button{" "}
									<Image vertical-align="-5px" src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-tree.svg?v=2020-10-24T19:00:40.575Z" margin="0px 0px 0px 0px" />
									{" "}in the top bar.
								</Text>
								<Image
									src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-tree-panel.svg?v=2020-10-23T21:18:23.248Z"
									border-radius="4px"
									margin="16px 0px 24px 0px"
									width="300px"
									height="42px"
									object-fit="none"
									object-position="0% 0%"
									sm-margin="16px 0px 12px 0px"
								/>
								<Text
									display="inline-block"
									font="normal 300 14px/1.5 --fontFamily-sans"
									margin="0px 0px 0px 0px"
									width="auto"
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
									Keyboard shortcuts may come in handy.{" "}
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
										1
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
										1
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
								border-color="--color-darkL2"
								border-style="solid"
								border-width="1px"
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								2
							</Text>
							<Box width="100%">
								<Text
									display="block"
									font="--base"
									margin="18px 0px 8px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 8px 0px"
								>
									Here’s what you can do with pages and layers (elements):
								</Text>
								<List margin="0px 0px 16px 0px" list-style-type="disc" padding="0px 0px 0px 20px" color="--darkL2">
									<Text font="--base" margin="0px 0 8px 0px">
										Add
									</Text>
									<Text font="--base" margin="0px 0 8px 0px">
										Remove
									</Text>
									<Text font="--base" margin="0px 0 8px 0px">
										Sort
									</Text>
									<Text font="--base" margin="0px 0 8px 0px">
										Nest
									</Text>
									<Text font="--base" margin="0px 0 8px 0px">
										Duplicate
									</Text>
									<Text font="--base" margin="0px 0 8px 0px">
										Rename
									</Text>
									<Text font="--base" margin="0px 0 8px 0px">
										Change settings (pages only)
									</Text>
								</List>
								<Text
									display="block"
									font="--base"
									margin="0px 0px 0px 0px"
									width="100%"
									color="--darkL2"
								>
									Right-click to open the context menu with actions.
								</Text>
								<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-tree-panel.svg?v=2020-10-23T21:18:23.248Z" border-radius="4px" margin="16px 0px 0px 0px" />
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								3
							</Text>
							<Box width="100%">
								<Text
									display="block"
									font="--base"
									margin="18px 0px 24px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 24px 0px"
								>
									Drag the{" "}
									<Em>
										Сhildren page
									</Em>
									{" "}to the{" "}
									<Em>
										Parent page{" "}
									</Em>
									to create a nested page. Similarly, you can create nested elements.
								</Text>
								<Text
									display="inline-block"
									font="normal 300 14px/1.5 --fontFamily-sans"
									margin="0px 0px 12px 0px"
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
										<br />
									</Span>
									The{" "}
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Home
									</Em>
									{" "}page is the main page that cannot be moved or nested. The same applies to the{" "}
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										404
									</Em>
									{" "}page.
								</Text>
								<Text
									display="block"
									font="normal 300 14px/1.5 --fontFamily-sans"
									margin="8px 0px 16px 0px"
									color="--darkL2"
									background="rgba(0, 119, 204, 0.04)"
									padding="8px 14px 16px 14px"
									border-radius="6px"
									border-width="1px"
									border-style="solid"
									border-color="--color-lightD2"
									position="relative"
								>
									<Icon
										category="fa"
										icon={FaYoutube}
										color="--greyD2"
										font="22px sans-serif"
										margin="0px 8px 0px 0px"
										display="inline-block"
										position="absolute"
									/>
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
										display="inline-block"
										margin="0px 0px 0px 31px"
									>
										YOUTUBE
									</Span>
									<br />
									<Text
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										text-decoration-line="initial"
										margin="0 0px 0px 0px"
									>
										Nesting Pages
									</Text>
									<Link
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										text-decoration-line="initial"
										color="--primary"
										href="https://youtu.be/BZZ3Sdd1g64"
										target="_blank"
									>
										https://youtu.be/BZZ3Sdd1g64
									</Link>
								</Text>
							</Box>
						</Box>
					</List>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 6. Component">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 32px 0px 0px"
					margin="0px 0px 16px 0px"
					width="50%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
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
							STEP 6 OF 9
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
						color="--darkL2"
						sm-font="--headline3"
					>
						Components
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="0px 0 30px 0"
						width="100%"
						color="--darkL2"
						md-margin="0px 0 0px 0"
					>
						From the{" "}
						<Em>
							Components
						</Em>
						{" "}tab you can take the elements to fill the page. There are two groups:{" "}
						<Em
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Library
						</Em>
						{" "}with ready-to-use components, and{" "}
						<Em
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Project
						</Em>
						{" "}with your custom components.
					</Text>
				</List>
				<Box
					width="50%"
					text-align="center"
					position="relative"
					padding="98px 0px 0px 24px"
					box-sizing="border-box"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<List
						as="ol"
						list-style-type="none"
						padding="0px 12px 0px 0px"
						margin="0px 0px 16px 0px"
						width="100%"
						box-sizing="border-box"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						text-align="left"
						sm-margin="0px 0px 0px 0px"
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								1
							</Text>
							<Box width="100%">
								<Text
									display="inline-block"
									font="--base"
									margin="18px 0px 16px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 16px 0px"
								>
									Click the button{" "}
									<Image vertical-align="-5px" src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-tree.svg?v=2020-10-24T19:00:40.575Z" margin="0px 0px 0px 0px" />
									{" "}and go to the{" "}
									<Em>
										Components
									</Em>
									{" "}tab.
								</Text>
								<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-components-tab.svg?v=2020-10-23T20:29:02.009Z" border-radius="4px" sm-width="100%" />
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
							sm-margin="0px 0px 0px 0px"
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								2
							</Text>
							<Box width="100%">
								<Text
									display="block"
									font="--base"
									margin="18px 0px 36px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 36px 0px"
								>
									Here you can choose the{" "}
									<Em>
										components
									</Em>
									{" "}and add them to the project page. Just drag and drop them wherever you want.
								</Text>
								<Box position="relative">
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
										position="absolute"
										top="-14px"
										border-style="solid"
										border-width="1px"
										border-color="--color-darkL2"
										bottom="auto"
										left={0}
										right={0}
										height="12px"
										width="184px"
										z-index="1"
										text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
										border-radius="6px"
									>
										↓  DROP AN Element HERE   ↓
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
										position="relative"
										align-items="center"
										justify-content="center"
									/>
								</Box>
								<Text
									display="inline-block"
									font="normal 300 14px/1.5 --fontFamily-sans"
									margin="0px 0px 0px 0px"
									color="--darkL2"
									background="rgba(0, 119, 204, 0.04)"
									border-color="--color-lightD2"
									border-radius="6px"
									border-style="solid"
									border-width="1px"
									padding="8px 14px 16px 14px"
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
									To add a component, you can also click on it. This will place it at the very bottom of the page.
								</Text>
							</Box>
						</Box>
					</List>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 7. Code Editor">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 32px 0px 0px"
					margin="0px 0px 16px 0px"
					width="50%"
					box-sizing="border-box"
					md-width="100%"
				>
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
							STEP 7 OF 9
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
						color="--darkL2"
						sm-font="--headline3"
					>
						Code editor
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="0px 0 30px 0"
						width="100%"
						color="--darkL2"
						md-margin="0px 0 0px 0"
					>
						The whole page also “lives” in the code.
						<br />
						In the{" "}
						<Em>
							code editor
						</Em>
						, you can perform the same actions to components as you would normally do in the visual mode, and even more.
					</Text>
				</List>
				<Box
					width="50%"
					text-align="center"
					position="relative"
					padding="98px 0px 0px 24px"
					box-sizing="border-box"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<List
						as="ol"
						list-style-type="none"
						padding="0px 12px 0px 0px"
						margin="0px 0px 16px 0px"
						width="100%"
						box-sizing="border-box"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						text-align="left"
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
							sm-margin="0px 0px 0px 0px"
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								1
							</Text>
							<Box width="100%">
								<Text
									display="inline-block"
									font="--base"
									margin="18px 0px 16px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 16px 0px"
								>
									Click the button{" "}
									<Image vertical-align="-5px" src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-code-editor.svg?v=2020-10-24T19:03:09.997Z" margin="0px 0px 0px 0px" />
									{" "}on the top bar to open the{" "}
									<Em>
										code editor
									</Em>
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
							sm-margin="0px 0px 0px 0px"
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								2
							</Text>
							<Box width="100%">
								<Text
									display="block"
									font="--base"
									margin="18px 0px 0px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 16px 0px"
								>
									Look at the syntax of the page code. It’s the{" "}
									<Em>
										JSX
									</Em>
									{" "}syntax. It looks like usual HTML, but actually it uses React elements. Everything you add or modify should be according to this syntax.
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								3
							</Text>
							<Box width="100%">
								<Text
									display="block"
									font="--base"
									margin="18px 0px 16px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 16px 0px"
								>
									If you add something new or edit the existing code,
									<br />
									use these shortcuts to save the changes:{" "}
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
										s
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
										margin="0px 3px 0px 0px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										s
									</Span>
								</Text>
								<Text
									display="inline-block"
									font="normal 300 14px/1.5 --fontFamily-sans"
									margin="0px 0px 0px 0px"
									color="--darkL2"
									background="rgba(0, 119, 204, 0.04)"
									border-color="--color-lightD2"
									border-radius="6px"
									border-style="solid"
									border-width="1px"
									padding="8px 14px 16px 14px"
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
									To learn more about this topic, go to{" "}
									<Em>
										Stage 5. Code Editor
									</Em>
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									/>
									<Span
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										<Link
											href="stage-5-code-editor"
											overflow-wrap="normal"
											word-break="normal"
											white-space="normal"
											text-indent="0"
											text-overflow="clip"
											hyphens="manual"
										/>
									</Span>
								</Text>
							</Box>
						</Box>
					</List>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 8. Preview">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 32px 0px 0px"
					margin="0px 0px 16px 0px"
					width="50%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
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
							STEP 8 OF 9
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
						color="--darkL2"
						sm-font="--headline3"
					>
						Preview
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="0px 0 30px 0"
						width="100%"
						color="--darkL2"
						md-margin="0px 0 0px 0"
					>
						Use this feature to see how the page will look for your site visitors and check out how the visual effects work.
					</Text>
				</List>
				<Box
					width="50%"
					text-align="center"
					position="relative"
					padding="98px 0px 0px 24px"
					box-sizing="border-box"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<List
						as="ol"
						list-style-type="none"
						padding="0px 12px 0px 0px"
						margin="0px 0px 16px 0px"
						width="100%"
						box-sizing="border-box"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						text-align="left"
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								1
							</Text>
							<Box width="100%">
								<Text
									display="inline-block"
									font="--base"
									margin="18px 0px 16px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 16px 0px"
								>
									Click the button{" "}
									<Image vertical-align="-5px" src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-code-preview.svg?v=2020-10-24T19:04:24.532Z" margin="0px 0px 0px 0px" />
									{" "}to go to the{" "}
									<Em>
										Preview mode
									</Em>
									.
								</Text>
								<Box width="100%">
									<Text
										display="inline-block"
										font="normal 300 14px/1.5 --fontFamily-sans"
										margin="0px 0px 0px 0px"
										color="--darkL2"
										background="rgba(0, 119, 204, 0.04)"
										border-color="--color-lightD2"
										border-radius="6px"
										border-style="solid"
										border-width="1px"
										padding="8px 14px 16px 14px"
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
										To open this mode, shortcuts may come in handy.
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
											p
										</Span>
										, Windows:{" "}
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
											Ctrl
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
											p
										</Span>
									</Text>
								</Box>
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								2
							</Text>
							<Box width="100%">
								<Text
									display="block"
									font="--base"
									margin="18px 0px 16px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 16px 0px"
								>
									You may want to preview how your site looks on different devices. Use presets for this.{" "}
								</Text>
								<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-device-presets.svg?v=2020-10-23T21:27:56.019Z" border-radius="4px" />
							</Box>
						</Box>
					</List>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 9. Undo / Redo">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 32px 0px 0px"
					margin="0px 0px 16px 0px"
					width="50%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
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
							STEP 9 OF 9
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
						color="--darkL2"
						sm-font="--headline3"
					>
						Undo / Redo
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="0px 0 30px 0"
						width="100%"
						color="--darkL2"
						md-margin="0px 0 0px 0"
					>
						Use these options if you want to undo the changes or redo your most recent actions.
					</Text>
				</List>
				<Box
					width="50%"
					text-align="center"
					position="relative"
					padding="98px 0px 0px 24px"
					box-sizing="border-box"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<List
						as="ol"
						list-style-type="none"
						padding="0px 12px 0px 0px"
						margin="0px 0px 16px 0px"
						width="100%"
						box-sizing="border-box"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						text-align="left"
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								1
							</Text>
							<Box width="100%">
								<Text
									display="inline-block"
									font="--base"
									margin="18px 0px 16px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 16px 0px"
								>
									Click the button{" "}
									<Image vertical-align="-5px" src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-code-undo.svg?v=2020-10-24T19:06:12.231Z" margin="0px 0px 0px 0px" />
									{" "}to undo the changes.
								</Text>
								<Text
									display="inline-block"
									font="normal 300 14px/1.5 --fontFamily-sans"
									margin="0px 0px 0px 0px"
									color="--darkL2"
									background="rgba(0, 119, 204, 0.04)"
									border-color="--color-lightD2"
									border-radius="6px"
									border-style="solid"
									border-width="1px"
									padding="8px 14px 16px 14px"
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
									To speed up the process, use shortcuts.{"  "}
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
										z
									</Span>
									, Windows:{" "}
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
										Ctrl
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
										z
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
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
								sm-margin="12px 12px 0px 0px"
							>
								2
							</Text>
							<Box width="100%">
								<Text
									display="block"
									font="--base"
									margin="18px 0px 16px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 16px 0px"
								>
									To redo your most recent actions, click{" "}
									<Image vertical-align="-5px" src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-code-redo.svg?v=2020-10-24T19:06:12.230Z" margin="0px 0px 0px 0px" />
								</Text>
								<Text
									display="inline-block"
									font="normal 300 14px/1.5 --fontFamily-sans"
									margin="0px 0px 0px 0px"
									color="--darkL2"
									background="rgba(0, 119, 204, 0.04)"
									border-color="--color-lightD2"
									border-radius="6px"
									border-style="solid"
									border-width="1px"
									padding="8px 14px 16px 14px"
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
										<br />
									</Span>
									Use shortcuts.
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
										z
									</Span>
									, Windows:{" "}
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
										Ctrl
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
										Shift
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
										z
									</Span>
								</Text>
							</Box>
						</Box>
					</List>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0 60px 0" md-padding="60px 0 120px 0" quarkly-title="What's Next?">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px -6px"
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
					WHAT’S NEXT?
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
				color="--darkL2"
				sm-font="--headline3"
			>
				It’s time to move to the next stage
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 0px 0"
				width="50%"
				color="--darkL2"
				lg-width="80%"
				md-width="100%"
			>
				Congrats! You’ve been introduced to Quarkly. In the next stage, you’re going to get to know the platform better — you’ll try your hand at creating a card and learn how to:
			</Text>
			<List margin="0px 0px 16px 0px" font="--base" md-width="calc(100% - 40px)" md-padding="0px 0px 0px 40px">
				<Text>
					Add elements
				</Text>
				<Text>
					Style elements
				</Text>
				<Text>
					Edit their content
				</Text>
				<Text>
					Position elements
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
				As a result, you’ll be creating the following card:
			</Text>
			<Box
				width="100%"
				background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
				border-radius="12px"
				height="320px"
				display="flex"
				flex-direction="column"
				align-items="center"
				justify-content="center"
				padding="48px 36px 72px 36px"
				opacity="1"
				max-width="360px"
				margin="0px 0px 48px 0px"
				sm-width="auto"
			>
				<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
				<Text
					font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed"
					text-transform="uppercase"
					color="--light"
					text-align="center"
					sm-font="normal 500 32px/1.2 --fontFamily-googleRobotoCondensed"
					sm-margin="16px 0px 26px 0px"
					sm-height="auto"
				>
					Into the Wild
				</Text>
				<Text
					font="--lead"
					color="--lightD2"
					text-align="center"
					sm-height="100%"
					sm-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
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
					Stage 1.  Basics →
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-next-stage-bg.svg?v=2020-10-27T09:36:49.534Z) center/contain no-repeat scroll padding-box"
					display="inline-block"
					width="121.874px"
					height="47.268px"
					position="absolute"
					top="-4px"
					left="-13px"
					right="auto"
					bottom="auto"
					sm-width="91.874px"
					sm-top="-10px"
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