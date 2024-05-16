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
    handleDeleteUser = (user) => {
        console.log("user = ", user);
        this.props.deleteUserRedux(user);
    }
    handleCreateUser = () => {
        this.props.addUserRedux();
    }
    render() {
        console.log(">>>>> this.props at Home = ", this.props);
        let listUsers = this.props.dataRedux;
        console.log("listUsers = ", listUsers);
        return (
            <>
                <div>Hello world from HomeComponent</div>
                {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                    return (
                        <div key={item.id}>
                            {index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>x</span>
                        </div>
                    ) 
                    })
                }
                <button onClick={() => this.handleCreateUser()}>Add new</button>

            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

// Mầy hàm này của redux, mình sử dụng prototype của nó để kết nối với redux
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: "DELETE_USER", payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));