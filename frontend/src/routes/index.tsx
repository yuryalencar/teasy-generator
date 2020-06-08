import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home"; 
import ImportTeasyJson from "../pages/ImportTeasyJson"; 
import ImportTeasyJsonAndBackup from "../pages/ImportTeasyJsonAndBackup"; 
import ChooseRoot from "../pages/ChooseRoot"; 
import MountTree from "../pages/MountTree"; 
import DownloadScriptAndBackup from "../pages/DownloadScriptAndBackup";

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/import-teasy-json" exact component={ImportTeasyJson} />
        <Route path="/import-teasy-and-backup" exact component={ImportTeasyJsonAndBackup} />
        <Route path="/choose-root" exact component={ChooseRoot} />
        <Route path="/mount-tree" exact component={MountTree} />
        <Route path="/download-script" exact component={DownloadScriptAndBackup} />
        <Redirect from="*" to="/" />
    </Switch>
);

export default Routes;
