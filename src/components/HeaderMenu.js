import React from "react";
import { useOverrides, Override, Menu, Section } from "@quarkly/components";
import { Image } from "@quarkly/widgets";
const defaultProps = {
	"background": "--color-darkL2",
	"border-width": "0px 0px 2px 0px",
	"border-style": "solid",
	"border-color": "--color-darkL1"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"width": "154px",
			"src": "https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/logo-on-dark.svg?v=2020-10-24T12:38:11.194Z",
			"margin": "0px 24px 0px 0px"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"display": "flex",
			"padding": "20px 0px 18px 0px",
			"lg-flex-wrap": "wrap"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"padding": "8px 16px 8px 16px",
			"text-transform": "uppercase",
			"text-decoration-line": "initial",
			"letter-spacing": "1px",
			"font": "12px --fontFamily-sans",
			"color": "--grey",
			"opacity": "1",
			"hover-color": "--lightD2",
			"transition": "color --transitionDuration-fastest --transitionTimingFunction-easeInOut 0s"
		}
	},
	"menuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "link-stage-1-basics",
			"lg-padding": "8px 8px 8px 8px",
			"children": "1.Basics"
		}
	},
	"menuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "link-stage-2-elementary",
			"lg-padding": "8px 8px 8px 8px",
			"children": "2.Hover & Adaptive"
		}
	},
	"menuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link-stage-3-components",
			"lg-padding": "8px 8px 8px 8px",
			"children": "3.Components"
		}
	},
	"menuOverride4": {
		"kind": "Override",
		"props": {
			"slot": "link-stage-4-theme",
			"lg-padding": "8px 8px 8px 8px",
			"children": "4.Theme"
		}
	},
	"menuOverride5": {
		"kind": "Override",
		"props": {
			"slot": "link-stage-5-code-editor",
			"lg-padding": "8px 8px 8px 8px",
			"children": "5.Code Editor"
		}
	},
	"menuOverride6": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"padding": "0px 0px 0px 0px"
		}
	},
	"menuOverride7": {
		"kind": "Override",
		"props": {
			"slot": "item-404",
			"display": "none"
		}
	},
	"menuOverride8": {
		"kind": "Override",
		"props": {
			"slot": "link-parrent-page",
			"display": "none"
		}
	},
	"menuOverride9": {
		"kind": "Override",
		"props": {
			"slot": "item-parrent-page",
			"display": "none"
		}
	},
	"menuOverride10": {
		"kind": "Override",
		"props": {
			"slot": "item-children-page",
			"display": "none"
		}
	},
	"menuOverride11": {
		"kind": "Override",
		"props": {
			"slot": "item-draft",
			"display": "none"
		}
	},
	"menuOverride12": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"color": "--purple",
			"font": "600 12px -apple-system, system-ui, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif",
			"hover-color": "--purple",
			"cursor": "default",
			"lg-padding": "8px 8px 8px 8px"
		}
	},
	"SectionContent": {
		"props": {
			"lg-flex-direction": "column"
		}
	}
};

const HeaderMenu = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" flex-direction="row" />
		<Image {...override("image")} />
		<Menu {...override("menu")}>
			<Override {...override("menuOverride")} />
			<Override {...override("menuOverride1")} />
			<Override {...override("menuOverride2")} />
			<Override {...override("menuOverride3")} />
			<Override {...override("menuOverride4")} />
			<Override {...override("menuOverride5")} />
			<Override {...override("menuOverride6")} />
			<Override {...override("menuOverride7")} />
			<Override {...override("menuOverride8")} />
			<Override {...override("menuOverride9")} />
			<Override {...override("menuOverride10")} />
			<Override {...override("menuOverride11")} />
			<Override {...override("menuOverride12")} />
		</Menu>
		{children}
	</Section>;
};

Object.assign(HeaderMenu, { ...Section,
	defaultProps,
	overrides
});
export default HeaderMenu;