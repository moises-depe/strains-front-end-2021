import React from 'react';
import { userSignIn } from '../UTILS/ApiUtils.js';

export default class SignInPage extends React.Component {
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

    handleSignIn = async (e) => {
        e.preventDefault();

        const user = await userSignIn(this.state.email, this.state.password);

        this.props.handleUserChange(user);

        this.props.history.push('/search');  // user is pushed to seach page after signin
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSignIn}>
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
                        Sign In
                    </button>
                </form>
            </div>
        );
    }
}