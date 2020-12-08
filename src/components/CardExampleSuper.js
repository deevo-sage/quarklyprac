import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Icon, Box } from "@quarkly/widgets";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
const defaultProps = {
	"width": "100%",
	"display": "flex",
	"flex-direction": "column",
	"align-items": "flex-start",
	"justify-content": "flex-start",
	"box-sizing": "border-box",
	"padding": "48px 36px 48px 36px",
	"opacity": "1",
	"sm-padding": "36px 36px 48px 36px",
	"background": "#E9E8E5",
	"margin": "0px 32px 0px 0px",
	"border-radius": "24px",
	"transition": "background 0.3s ease 0s"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"color": "--lightD2",
			"text-align": "left",
			"md-font": "normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-font": "normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-margin": "10px 0px 4px 0px",
			"md-margin": "16px 0px 8px 0px",
			"font": "normal 500 14px/1.5 --fontFamily-mono",
			"text-transform": "uppercase",
			"letter-spacing": "3px",
			"margin": "0px 0px 22px 0px",
			"padding": "2px 12px 2px 12px",
			"background": "#96928D",
			"border-radius": "8px",
			"children": "тур"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"text-transform": "uppercase",
			"text-align": "left",
			"margin": "6px 0px 15px 0px",
			"md-font": "normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-font": "normal 600 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"font": "normal 300 32px/1.2 --fontFamily-sans",
			"color": "#191E22",
			"letter-spacing": "2px",
			"children": "Море"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"color": "#5f6365",
			"text-align": "left",
			"md-font": "normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-font": "normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-margin": "10px 0px 4px 0px",
			"md-margin": "16px 0px 8px 0px",
			"font": "normal 300 18px/1.5 --fontFamily-sans",
			"margin": "0px 0px 16px 0px",
			"children": "Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"width": "100%",
			"align-items": "flex-end",
			"justify-content": "space-between",
			"margin": "64px 0px 0px 0px"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaUmbrellaBeach,
			"align-self": "flex-start",
			"font": "95px sans-serif",
			"color": "#E0DAD5",
			"border-radius": "50%"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdArrowForward,
			"align-self": "flex-end",
			"font": "35px sans-serif",
			"color": "#191E22",
			"margin": "auto 0px 0px 0px",
			"background": "--color-light",
			"border-radius": "50%",
			"width": "64px",
			"height": "64px",
			"box-shadow": "--m"
		}
	}
};

const CardExampleSuper = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Text {...override("text2")} />
		<Box {...override("box")}>
			<Icon {...override("icon")} />
			<Icon {...override("icon1")} />
		</Box>
		{children}
	</Box>;
};

Object.assign(CardExampleSuper, { ...Box,
	defaultProps,
	overrides
});
export default CardExampleSuper;