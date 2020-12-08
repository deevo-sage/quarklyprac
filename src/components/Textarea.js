import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"as": "p",
	"font": "--lead",
	"margin": "0px 0 24px 0",
	"width": "66.66%",
	"color": "--lightD2",
	"lg-width": "80%",
	"md-width": "100%",
	"children": <>
		Drag a page, zoom in and out.
		<br />
		See the Props panel when selecting an element.
		<br />
		Undo/redo buttons and keyboard shortcuts are at your fingertips.
	</>
};
const overrides = {};

const Textarea = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(Textarea, { ...Text,
	defaultProps,
	overrides
});
export default Textarea;