import React from 'react'
import TextField from '@material-ui/core/TextField';


class MainSearch extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className='main--search'>
                <form className='main--form' noValidate autoComplete="off">
                    <TextField className='main--search-input'
                        label="Search (title, authors, keywords)"
                        variant="outlined" />
                </form>
            </div>
        )
    }
}

export default MainSearch