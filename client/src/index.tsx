import * as React from "react";
import * as ReactDOM from "react-dom";

import { CommentList } from "./components";

ReactDOM.render(
    <CommentList url="/comments" />,
    document.getElementById("app")
);
