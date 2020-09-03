import React from "react";
import { connect } from "react-redux";
import axios from 'axios'
import MainSearch from './MainSearch'
import SimpleTabs from './WeekTabs'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Events from './Events'
import FavoriteIcon from '@material-ui/icons/Favorite';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Chat from './KomunicateChat'

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonMode: false
        }
        console.log(this.props.userInformation);
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: "https://ie2020.kisim.eu.org/api/presentations"
        }).then((response) => {
            const events = response.data
            events.forEach(({ id, title, authors, session, date, filename, keywords, }) => {
                this.props.addEvent(id, title, authors, session, date, filename, keywords)
            })
        })
            .catch((error) => {
                console.log(error);
            })
    }

    changeButtonMode = () => {
        this.setState({
            buttonMode: !this.state.buttonMode
        })
        console.log(this.state.buttonMode)
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
                    <div className='main--header-lefside'>
                        <BottomNavigation className='main--header-lefside-fav' showLabels color={this.state.buttonMode ? "secondary" : 'default'}>
                            <BottomNavigationAction onClick={this.changeButtonMode} label="Favorites" icon={<FavoriteIcon />} />
                        </BottomNavigation>
                        <button onClick={this.handleLogout}>Logout</button>
                    </div>

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
        addEvent: (id, title, authors, session, date, filename, keywords, reminder = false) => dispatch({
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
