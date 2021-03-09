import React from 'react';
import { userSignUp } from '../UTILS/ApiUtils.js';

export default class SignUpPage extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleEmailChange = (e) => this.setState({
        email: e.target.value,
    })

    handlePasswordChange = (e) => this.setState({
        password: e.target.value,
    })

    handleSignUp = async (e) => {
        e.preventDefault();

        const user = await userSignUp(this.state.email, this.state.password);

        this.props.handleUserChange(user);

        this.props.history.push('/search');  // user is pushed to seach page after signin
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSignUp}>
                    <label>
                        <p>
                            Email
                        </p>
                        <input type="email" value={this.state.email} onChange={this.handleEmailChange} required />
                    </label>
                    <label>
                        <p>
                            Password
                        </p>
                        <input value={this.state.password} onChange={this.handlePasswordChange} required />
                    </label>
                    <button>
                        Sign Up
                    </button>
                </form>
            </div>
        );
    }
}