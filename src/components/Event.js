import React from 'react'

class Event extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <div className='event--container'>
                <p>{this.props.hour}</p>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default Event