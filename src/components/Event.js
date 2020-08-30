import React from 'react'
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';

class Event extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            buttonMode: false
        }
    }

    onClick = (event) => {
        this.setState({
            buttonMode: !this.state.buttonMode
        })
    }

    render() {
        const url = `https://m.kisim.eu.org/abstracts/${this.props.filename}`
        let authors = ''
        this.props.authors.forEach((author) => {
            authors += author + " "
        })
        return (
            <div className='event--container'>
                <p className='event--hour'>{this.props.hour}</p>
                <div className='event--data'>
                    <a className='event--href' href={url} target="_blank">{this.props.title}</a>
                    <p className='event--authors'>{authors}</p>
                </div>
                <div className='event--button-container'>
                    <Fab className='event--reminder-button'
                        color={this.state.buttonMode ? "secondary" : 'default'}
                        aria-label="like"
                        onClick={this.onClick}>
                        <FavoriteIcon />
                    </Fab>
                </div>

            </div>
        )
    }
}

export default Event