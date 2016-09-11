import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Icon,
  Button,
  Container,
  Header,
  Title,
  Content
} from 'native-base';
import yayoiTheme from '../themes/yayoi';
import TodoForm from '../components/TodoForm';

class NewTodo extends Component {

  static contextTypes = {
    navigator : React.PropTypes.any
  };

  static propTypes = {
    dispatch : React.PropTypes.func
  }

  handleBackBtnPress() {
    this.context.navigator.pop();
  }

  handleNewTodo(todo) {
    const { dispatch } = this.props;
    dispatch({
      type : 'todos/add',
      todo
    });
    this.context.navigator.pop();
  }

  render() {
    return (
      <Container theme={yayoiTheme}>

        <Header>
          <Button transparent onPress={this.handleBackBtnPress.bind(this)}>
            <Icon name='ios-arrow-back' />
          </Button>
          <Title>New Todo</Title>
        </Header>

        <Content style={{backgroundColor:'#FFFFFF'}}>
          <TodoForm handleNewTodo={this.handleNewTodo.bind(this)} />
        </Content>

      </Container>
    );
  }
}

function mapStateToProps({ todos }) {
  return {
    todos
  };
}

export default connect(mapStateToProps)(NewTodo);
