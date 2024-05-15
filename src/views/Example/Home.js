import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

import { connect } from "react-redux";
class Home extends React.Component {
    componentDidMount = () => {
        // setTimeout(() => {
        //     this.props.history.push("/todos");
        // }, 2000);
    }
    render() {
        console.log(">>>>> this.props at Home = ", this.props);
        return (
            <div>Hello world from HomeComponent</div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
export default connect(mapStateToProps)(Color(Home));