import React, { Component } from 'react';
import NewTodo from '../containers/NewTodo';

class NewTodoScreen extends Component {

	static childContextTypes = {
		navigator : React.PropTypes.any
	}

	getChildContext() {
		return {
			navigator : this.props.navigator
		}
	}

	render() {
		return (<NewTodo {...this.props} />);
	}
}

export default NewTodoScreen;
