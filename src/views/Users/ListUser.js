import React from "react";
import axios from "axios";
import './ListUser.scss';
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
class ListUser extends React.Component {
    state = {
        listUsers: []
    }
    async componentDidMount() {
        // axios.get("https://reqres.in/api/users?page=2").then((res) => {
        //     console.log(">>> res = ", res);
        // })
        let res = await axios.get("https://reqres.in/api/users?page=2");
        console.log("res = ", res.data.data);
        if (res && res.data && res.data.data) {
            this.setState({
                listUsers: res.data.data
            })
        }
        else {
            this.setStatesetS({
                listUsers :[]
            });
        }
    }
    handleViewDetailUser = (user) => {
        console.log("Navigate vào view detail = ", this.props);
        this.props.history.push(`/user/${user.id}`);
    }
    render() {
        let { listUsers } = this.state;
        return (
            <div className="list-user-container">
                <div className="all-list-users">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                        return (<div
                                style={{cursor: "pointer"}}
                                className="child" key={item.id }
                                onClick={() => {this.handleViewDetailUser(item)}}
                            >
                            {index + 1} - {item.first_name} - {item.last_name}
                        </div>);
                    })}
                </div>
            </div>
        );
    }
}

export default withRouter(ListUser);

// API: https://reqres.in/

// https://reqres.in/api/users?page=2