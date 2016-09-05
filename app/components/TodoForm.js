import React, { Component } from 'react';
import {
  View,
  Alert
} from 'react-native';
import {
  List,
  ListItem,
  InputGroup,
  Input,
  Icon,
  Button
} from 'native-base';

class TodoForm extends Component {

  static propTypes = {
    handleNewTodo : React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      todoTitle : ''
    };
  }

  handleAddTodoBtnPress() {
    if (!this.state.todoTitle.trim()) {
      Alert.alert('Warning', 'Please enter your todo title.');
      return;
    }
    this.props.handleNewTodo({
      title : this.state.todoTitle
    });
  }

  render() {
    return (
      <View>
        <List>
          <ListItem>
            <InputGroup>
              <Icon name="ios-list" color="pink" />
              <Input placeholder="Enter your todo" onChangeText={(todoTitle) => this.setState({ todoTitle })} />
            </InputGroup>
          </ListItem>
        </List>
        <Button primary block style={{margin:10}} onPress={this.handleAddTodoBtnPress.bind(this)}>
          Add Todo
        </Button>
      </View>
    );
  }

}

export default TodoForm;
