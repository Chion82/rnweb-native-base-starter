import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Icon,
  Content,
  Button
} from 'native-base';
import { Text, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import yayoiTheme from '../themes/yayoi';
import TodoList from '../components/TodoList';

class HomeTab extends Component {

  static contextTypes = {
    navigator : React.PropTypes.any
  };

  static propTypes = {
    dispatch : React.PropTypes.func,
    todos : React.PropTypes.object
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type : 'todos/get'
    });
  }

  handleNewBtnPress() {
    this.context.navigator.push({
      index : 1,
      title : 'New Todo'
    });
  }

  handleDeleteTodo(todo) {
    const { dispatch } = this.props;
    dispatch({
      type : 'todos/delete',
      todo
    });
  }

  render() {
    return (
      <Container theme={yayoiTheme}>
        <Header>
          <Button transparent>
            <Text></Text>
          </Button>
          <Title>Home</Title>
          <Button transparent onPress={this.handleNewBtnPress.bind(this)}>
            <Icon name="md-add" />
          </Button>
        </Header>
        <Content refreshControl={
          <RefreshControl
            refreshing={this.props.todos.isLoading}
            onRefresh={() => this.props.dispatch({type : 'todos/get'})}
          />}
          style={{backgroundColor:'#FFFFFF'}} >
          <TodoList todos={this.props.todos.list} handleDeleteTodo={this.handleDeleteTodo.bind(this)} />
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

export default connect(mapStateToProps)(HomeTab);
