import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
class DetailUser extends React.Component {
    state = {
        user:  {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            try {
                let res = await axios.get(`https://reqres.in/api/users/${id}`);
                console.log("res = ", res, res.data.data);
                this.setState({
                    user: res && res.data && res.data.data ? res.data.data : {}
                })
                // console.log("Mặc cái quần = ", this.state.user);
            }
            catch(e) {
                console.log("Không tìm thấy id này");
            }
        }
    }
    handleBackButton = () => {
        this.props.history.push("/user")
    }
    render() {
        console.log("Cu hay đái = ", this.props.match.params.id);
        let { user } = this.state;
        console.log("user? = ", user);
        let isEmptyObj = Object.keys(user).length === 0

        return (
            <>
                <div>Hello detail user: {this.props.match.params.id}</div>
                {!isEmptyObj && 
                    <>
                        <div>User's name : {user.first_name} - {user.last_name}</div>
                        <div>User's email : {user.email}</div>
                        <div>
                            <img src={user.avatar} alt="Mặc cái quần" />
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={() => this.handleBackButton()}
                            >Back</button>
                        </div>
                    </>
                }
            </>
        );
    }
}

export default withRouter(DetailUser);