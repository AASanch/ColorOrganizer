import "./styles/styles.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DataProvider } from "./api/data-provider";
import { AppComponent } from "./components/app.component";

ReactDOM.render(<AppComponent />, document.getElementById("app"));
