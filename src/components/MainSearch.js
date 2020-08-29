import React from 'react'
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'


class MainSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
    }

    onChange = (event) => {
        const value = event.target.value
        this.props.setFilterText(value)

        this.setState({
            inputValue: value
        })
    }

    render() {
        return (
            <div className='main--search'>
                <form className='main--form' noValidate autoComplete="off">
                    <TextField className='main--search-input'
                        label="Search (title, authors, keywords)"
                        variant="outlined"
                        value={this.state.value}
                        onChange={this.onChange}
                    />
                </form>
            </div>
        )
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        setFilterText: (text) => dispatch({
            type: 'SET_TEXT_FILTER',
            payload: {
                text
            }
        })
    }
}

export default connect(undefined, mapDisptachToProps)(MainSearch)