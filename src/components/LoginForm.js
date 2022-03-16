import React from 'react';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            error: ''
        };
    };

    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({ username }))
    }

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }))
    }


    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.username || !this.state.password) {
            this.setState(() => ({ error: 'Please enter a valid username and password' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                username: this.state.username,
                password: this.state.password
            })
        }
    };

    render() {
        return (

            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <label htmlFor='username'>Username
                        <input
                            id='username'
                            type='text'
                            placeholder='Required'
                            autoFocus
                            value={this.state.username}
                            onChange={this.onUsernameChange} />
                    </label>
                    <label htmlFor='password'>Password
                        <input
                            id='password'
                            type='text'
                            placeholder='Required'
                            value={this.state.password}
                            onChange={this.onPasswordChange} />
                    </label>
                    <button>Log In</button>
                </form>
            </div>

        )
    }
}