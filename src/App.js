import React, { Component } from "react";
// theme - #4dd0e1 cyan lighten-2
import Sidenav from "./Sidenav";
import Navigation from "./Navigation";
import Home from "./Home";
import Comp from "./comp";
import GettingStarted from "./GettingStarted";
import CarouselGuide from "./CarouselGuide";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import CollapsibleGuide from "./CollapsibleGuide";
import DropdownGuide from "./DropdownGuide";
import ModalGuide from "./ModalGuide";
import SidenavGuide from "./SidenavGuide";

class App extends Component {
    render() {
        return(
            <div className="parent">
                <Router>
                    <Navigation />
                    <Sidenav />
                    <Switch>
                        <Route exact path="/"><Redirect to="/react-materialize-made-easy" /></Route>
                        <Route path="/react-materialize-made-easy" exact component={() => <Home />} />
                        <Route path="/getting-started" exact component={() => <GettingStarted />} />
                        <Route path="/components" exact component={() => <Comp />} />
                        <Route path="/carousel" exact component={() => <CarouselGuide />} />
                        <Route path="/collapsible" exact component={() => <CollapsibleGuide />} />
                        <Route path="/dropdown" exact component={() => <DropdownGuide />} />
                        <Route path="/modal" exact component={() => <ModalGuide />} />
                        <Route path="/sidenav" exact component={() => <SidenavGuide />} />
                    </Switch>
                </Router>

            </div>
        );
    }
}

export default App;
