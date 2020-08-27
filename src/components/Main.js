import React from "react";
import { connect } from "react-redux";
import axios from 'axios'

class Main extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props.userInformation);
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: "https://ie2020.kisim.eu.org/api//presentations"
        }).then((res) => {
            console.log(res);
        })
            .catch((error) => {
                console.log(error);
            })
    }

    handleLogout = () => {
        localStorage.removeItem("jwt");
        this.props.history.push("/");
    };

    render() {
        return (
            <div>
                <h1>Main email: {this.props.userInformation.email}</h1>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userInformation: state.user,
    };
};

export default connect(mapStateToProps)(Main);
