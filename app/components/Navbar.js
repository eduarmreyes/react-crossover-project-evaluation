import React, { Component } from 'react';
import { Link } from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);

    let socket = io.connect();

    socket.on('onlineUsers', (data) => {
      NavbarActions.updateOnlineUsers(data);
    });

    /*$(document).ajaxStart(() => {
      NavbarActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        NavbarActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });*/
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    /*let searchQuery = this.state.searchQuery.trim();

    if (searchQuery) {
      NavbarActions.findCharacter({
        searchQuery: searchQuery,
        searchForm: this.refs.searchForm,
        history: this.props.history
      });
    }*/
  }

  render() {
    return (
    	<header className='main-header'>
    		{ /* <!-- Logo --> */ }
    		<Link to='/' className='logo'>
    	    { /* <!-- mini logo for sidebar mini 50x50 pixels --> */ }
    	    <span className='logo-mini'><b>C</b>PE</span>
    	    { /* <!-- logo for regular state and mobile devices --> */ }
    	    <span className='logo-lg'><b>Crossover</b></span>
  	    </Link>

    	  { /* <!-- Header Navbar: style can be found in header.less --> */ }
    	  <nav className='navbar navbar-static-top'>
    	  	<h2>Video Portal</h2>
    	    { /* <!-- Navbar Right Menu --> */ }
    	    <div className='navbar-custom-menu'>
    	      <ul className='nav navbar-nav'>
    	        { /* <!-- Messages: style can be found in dropdown.less--> */ }
    	        <li className='dropdown messages-menu'>
    	          <Link to='/' className='dropdown-toggle' data-toggle='dropdown'>
    	            <i className='fa fa-user-o'></i>
    	            <span className='label label-success'>{ this.state.onlineUsers }</span>
    	          </Link>
    	        </li>
    	        { /* <!-- User Account: style can be found in dropdown.less --> */ }
    	        <li className='dropdown user user-menu'>
    	          <Link to='/' className='dropdown-toggle' data-toggle='dropdown'>
    	            <img src='/img/avatar.png' className='user-image' alt='User Image' />
    	            <span className='hidden-xs'>Eduardo Mejía</span>
    	          </Link>
    	          <ul className='dropdown-menu'>
    	            { /* <!-- User image --> */ }
    	            <li className='user-header'>
    	              <img src='/img/avatar.png' className='img-circle' alt='User Image' />

    	              <p>
    	                Eduardo Mejía - Web Developer
    	                <small>Member since Nov. 2012</small>
    	              </p>
    	            </li>
    	            { /* <!-- Menu Footer--> */ }
    	            <li className='user-footer'>
    	              <div className='pull-left'>
    	                <Link to='/' className='btn btn-default btn-flat'>Profile</Link>
    	              </div>
    	              <div className='pull-right'>
    	                <Link to='/logout' className='btn btn-default btn-flat'>Sign out</Link>
    	              </div>
    	            </li>
    	          </ul>
    	        </li>
    	      </ul>
    	    </div>
    	  </nav>
    	</header>
    );
  }
}

export default Navbar;