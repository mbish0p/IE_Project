import React from "react";
import { connect } from "react-redux";
import axios from 'axios'
import MainSearch from './MainSearch'
import SimpleTabs from './WeekTabs'
import Events from './Events'

class Main extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props.userInformation);
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: "https://ie2020.kisim.eu.org/api//presentations"
        }).then((response) => {
            const events = response.data
            events.forEach(({ id, title, authors, session, date, filename, keywords, reminder }) => {
                this.props.addEvent(id, title, authors, session, date, filename, keywords)
            })
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
                <div className='main--header'>
                    <h1>Main email: {this.props.userInformation.email}</h1>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
                <MainSearch />
                <SimpleTabs />
                <Events />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userInformation: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addEvent: (id, title, authors, session, date, filename, keywords, reminder) => dispatch({
            type: 'ADD_EVENT',
            event: {
                id,
                title,
                authors,
                session,
                date,
                filename,
                keywords,
                reminder
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
