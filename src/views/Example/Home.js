import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component {
    render() {
        console.log(">>>>> this.props at Home = ", this.props);
        return (
            <div>Hello world from HomeComponent</div>
        );
    }
}

export default withRouter(Home);