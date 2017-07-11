import React, { Component } from 'react';
import LoginStore from '../stores/LoginStore';
import LoginActions from '../actions/LoginActions';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = LoginStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		LoginStore.listen(this.onChange);

		LoginActions.isLoggedIn({
			history: this.props.history
		});
	}

	componentWillUnmount() {
		LoginStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleSubmit(event) {
		event.preventDefault();

		let username = this.state.username.trim();
		let password = this.state.password.trim();

		if (username && password) {
			// using md5 from our vendor configured in gulp
			LoginActions.loginUser({
				username: username,
				password: md5(password),
				loginForm: this.refs.loginForm,
				history: this.props.history
			});
		}
	}

	render() {
		return(
			//
			<div className='login-box'>
			  <div className='login-logo'>
			    <b>Crossover</b> ReactPE
			  </div>
			  { /* <!-- /.login-logo --> */ }
			  <div className='login-box-body'>
			    <p className='login-box-msg'>Sign in to start your session</p>

			    <form role='form' action={ this.handleSubmit.bind(this) } method='post' ref='loginForm' className='animated'>
			      <div className='form-group has-feedback'>
			        <input type='text' className='form-control' placeholder='Username' onChange={ LoginActions.updateUsername } value={ this.state.username } />
			        <span className='glyphicon glyphicon-user form-control-feedback'></span>
			      </div>
			      <div className='form-group has-feedback'>
			        <input type='password' className='form-control' placeholder='Password' onChange={ LoginActions.updatePassword } value={ this.state.password } />
			        <span className='glyphicon glyphicon-lock form-control-feedback'></span>
			      </div>
			      <div className='row'>
			        <div className='col-xs-12'>
			          <button type='submit' className='btn btn-primary btn-block btn-flat' onClick={ this.handleSubmit.bind(this) }>Sign In</button>
			        </div>
			        { /* <!-- /.col --> */ }
			      </div>
			    </form>

			    <a href='#'>I forgot my password</a><br />
			    <a href='register.html' className='text-center'>Register a new membership</a>

			  </div>
			  { /* <!-- /.login-box-body --> */ }
				{ /* <!-- /.login-box --> */ }
			</div>
		);
	}
}

export default Login;