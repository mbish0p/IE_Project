import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { user } from "../redux/actions/userAction";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class Registry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            repeatedPassword: "",
            error: "",
            showPasswordFirst: false,
            showPasswordSecond: false
        };
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
        });
    };

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value,
        });
    };

    handleRPChange = (event) => {
        if (event.target.value === this.state.password) {
            this.setState({
                error: "",
            });
        } else {
            this.setState({
                error: "Repeated password need to be same as password above",
            });
        }
        this.setState({
            repeatedPassword: event.target.value,
        });
    };

    handleClickShowPasswordOne = () => {
        this.setState({
            showPasswordFirst: !this.state.showPasswordFirst
        })
    };

    handleClickShowPasswordTwo = () => {
        this.setState({
            showPasswordSecond: !this.state.showPasswordSecond
        })
    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    handleSubmitForm = (e) => {
        e.preventDefault();

        if (
            this.state.email &&
            this.state.password &&
            this.state.repeatedPassword &&
            !this.state.error
        ) {
            axios({
                method: "POST",
                url: "https://ie2020.kisim.eu.org/api/users",
                data: {
                    email: this.state.email,
                    password: this.state.password,
                },
            })
                .then((res) => {
                    console.log(res);
                    localStorage.setItem("jwt", res.data.token);
                    this.props.dispatch(
                        user({
                            id: res.data.user.id,
                            email: res.data.user.email
                        })
                    );
                    this.props.history.push("/main");
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            this.setState({
                error: "You need provide all informations",
            });
        }
    };

    render() {
        return (
            <div>
                <h1 className='registry--header' >Provide some information to registration your account</h1>
                <form onSubmit={this.handleSubmitForm} autoComplete='off' className='registry--form' >
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
                    <div className='registry--input-container'>
                        <FormControl>
                            <InputLabel htmlFor="filled-adornment-repeatPassword">Repeat password</InputLabel>
                            <Input
                                id="filled-adornment-repeatPassword"
                                type={this.state.showPasswordSecond ? 'text' : 'password'}
                                value={this.state.repeatedPassword}
                                onChange={this.handleRPChange}
                                className='registry--input'
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowPasswordTwo}
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
                    {this.state.error && <p className='registry--error' >{this.state.error}</p>}
                    <button className='registry--button' >Submit</button>
                </form>
                <p className='registry--link' >
                    If you have account <Link to="/login">Login</Link>
                </p>
            </div>
        );
    }
}

export default connect()(Registry);
