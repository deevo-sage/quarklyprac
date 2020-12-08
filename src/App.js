import React from "react";
import Index from "pages/index";
import Stage2Elementary from "pages/stage2Elementary";
import Stage3Components from "pages/stage3Components";
import Stage4Theme from "pages/stage4Theme";
import Stage5CodeEditor from "pages/stage5CodeEditor";
import Stage1Basics from "pages/stage1Basics";
import ParrentPage from "pages/parrentPage";
import ChildrenPage from "pages/childrenPage";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/stage-2-elementary' component={Stage2Elementary}/>
			<Route exact path='/stage-3-components' component={Stage3Components}/>
			<Route exact path='/stage-4-theme' component={Stage4Theme}/>
			<Route exact path='/stage-5-code-editor' component={Stage5CodeEditor}/>
			<Route exact path='/stage-1-basics' component={Stage1Basics}/>
			<Route exact path='/parrent-page' component={ParrentPage}/>
			<Route exact path='/children-page' component={ChildrenPage}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
