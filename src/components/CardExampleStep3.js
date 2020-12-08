import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon, Text, Button, Box } from "@quarkly/widgets";
import { FaTree } from "react-icons/fa";
const defaultProps = {
	"width": "100%",
	"display": "flex",
	"flex-direction": "column",
	"align-items": "center",
	"justify-content": "center",
	"box-sizing": "border-box",
	"padding": "48px 36px 72px 36px",
	"opacity": "1",
	"sm-padding": "36px 36px 48px 36px",
	"lg-margin": "0px 32px 24px 0px",
	"background": "rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 50% 50%/cover",
	"hover-background": "rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 100% 0%/cover",
	"transition": "background 0.3s ease 0s",
	"border-radius": "24px",
	"margin": "0px 0px 0px 0px"
};
const overrides = {
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaTree,
			"color": "--light",
			"md-font": "54px sans-serif",
			"sm-font": "36px sans-serif",
			"font": "32px sans-serif"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"text-transform": "uppercase",
			"color": "--light",
			"text-align": "center",
			"margin": "16px 0px 0px 0px",
			"md-font": "normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-font": "normal 600 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"font": "normal 500 21px/1.2 --fontFamily-serifGaramond",
			"children": "INTO THE WILD"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"color": "--lightD2",
			"text-align": "center",
			"md-font": "normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-font": "normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-margin": "10px 0px 4px 0px",
			"md-margin": "16px 0px 8px 0px",
			"font": "normal 400 17px/1.3 --fontFamily-serifGaramond",
			"children": "A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"padding": "12px 34px 12px 34px",
			"text-transform": "uppercase",
			"letter-spacing": "1.2px",
			"margin": "24px 0px 0px 0px",
			"opacity": "1",
			"box-shadow": "0 12px 3px -4px rgba(3, 18, 7, 0.3)",
			"md-font": "normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-font": "normal 300 12px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-padding": "12px 18px 12px 18px",
			"background": "--color-green",
			"color": "--light",
			"border-radius": "12px",
			"children": "JOIN"
		}
	}
};

const CardExample = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Icon {...override("icon")} />
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Button {...override("button")} />
		{children}
	</Box>;
};

Object.assign(CardExample, { ...Box,
	defaultProps,
	overrides
});
export default CardExample;