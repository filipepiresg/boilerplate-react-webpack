import React from "react";
import { observable, action } from "mobx";

import "./styles/App.scss";

class App extends React.Component {
    @observable start = Date.now();
    state = {
        date: ""
    };

    render() {
        return <h1 id="title">{this.start}</h1>;
    }
}
export default App;
