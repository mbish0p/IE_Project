import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: "",
        };
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    };

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    handleClickShowPasswordOne = () => {
        this.setState({
            showPasswordFirst: !this.state.showPasswordFirst
        })
    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    handleSubmitForm = (e) => {
        e.preventDefault();

        if (this.state.email && this.state.password) {
            axios({
                method: "POST",
                url: "https://ie2020.kisim.eu.org/api/auth",
                data: {
                    username: this.state.email,
                    password: this.state.password,
                },
            })
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            this.setState({
                error: "You need provide all information",
            });
        }
    };

    render() {
        return (
            <div>
                <h1 className='registry--header' >Login</h1>
                <h3 className='registry--header' >Provide some information to login in your account</h3>
                <form onSubmit={this.handleSubmitForm} className='registry--form'>
                    <div className='registry--input-container'>
                        <TextField
                            id="standard-basic"
                            label="Email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            className='registry--input'
                        />
                    </div>
                    <div className='registry--input-container'>
                        <FormControl>
                            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                            <Input
                                id="filled-adornment-password"
                                type={this.state.showPasswordFirst ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                className='registry--input'
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowPasswordOne}
                                            onMouseDown={this.handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                    {this.state.error && <p className='registry--error'>{this.state.error}</p>}
                    <button>Submit</button>
                </form>

                <p className='registry--link' >
                    If you don`t have account <Link to="/">Registration</Link>
                </p>
            </div>
        );
    }
}

export default Login;
