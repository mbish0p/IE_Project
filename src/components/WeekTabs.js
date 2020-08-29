import React from 'react'
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import store from '../redux/store'


class SimpleTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 1
        }
    }
    // const [value, setValue] = React.useState(0);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    handleChange = (event, newValue) => {
        const daysOfWeek = {
            0: 'Monday',
            1: 'Tuesday',
            2: 'Wednesday',
            3: 'Thursday',
            4: 'Friday',
        }
        this.props.currentDay(daysOfWeek[newValue])
        this.setState({
            value: newValue
        })
    }

    a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    render() {
        return (
            <div className='main--week-navigator'>
                <AppBar position="static">
                    <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                        <Tab label="Monday"  {... this.a11yProps(0)} />
                        <Tab label="Tuesday"  {... this.a11yProps(1)} />
                        <Tab label="Wednesday"  {... this.a11yProps(2)} />
                        <Tab label="Thursday"  {... this.a11yProps(3)} />
                        <Tab label="Friday"  {... this.a11yProps(4)} />
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        currentDay: (weekDay) => dispatch({
            type: 'SORT_BY_DAY_OF_WEEK',
            payload: {
                text: weekDay
            }
        })
    }
}

export default connect(undefined, mapDispatchToProps)(SimpleTabs)