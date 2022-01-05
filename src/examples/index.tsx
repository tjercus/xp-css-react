import { render } from "react-dom";

import { WindowWithTitleBar } from "../index";

const App = () => (
  <WindowWithTitleBar text={"example"}>
    <p>Example</p>
  </WindowWithTitleBar>
);

render(<App />, document.getElementById("root"));
