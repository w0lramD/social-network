import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Registration from "../forms/registration";
import Login from "../forms/login";

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={styles.welcomeContainer}>
                <h1>Profile</h1>
                <img src="/images/welcome-logo.png" />
                <HashRouter>
                    <div>
                        <Route exact path="/" component={Registration} />
                        <Route path="/login" component={Login} />
                    </div>
                </HashRouter>
            </div>
        );
    }
}

const styles = {
    welcomeContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContents: "center",
        alignItems: "center"
    }
};
