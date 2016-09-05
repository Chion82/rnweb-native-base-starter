import React from 'react';
import { List, ListItem, Icon } from 'native-base';
import { Text, View, Alert } from 'react-native';
import yayoiTheme from '../themes/yayoi';
import todoListStyle from '../stylesheets/TodoList';

const TodoList = (props) => {

  function handleDeleteBtnPress(todo) {
    Alert.alert('Confirm', `Are you sure you want to delete "${todo.title}" ?`, [
      {
        text : 'DELETE',
        onPress : () => props.handleDeleteTodo(todo)
      }, {
        text : 'CANCEL'
      }
    ]);
  }

  return (
    <List>
      {props.todos.map((todo, index) => (
        <ListItem key={index}>
          <View style={todoListStyle.listItemWrap}>
            <Text>
              {todo.title}
            </Text>
            <Text onPress={() => handleDeleteBtnPress(todo)}>
              <Icon name="ios-trash" color={yayoiTheme.grey} />
            </Text>
          </View>
        </ListItem>
      ))}
      {props.todos.length === 0 && (
        <ListItem>
          <Text>You have no Todo. Add one!</Text>
        </ListItem>
      )}
    </List>
  );
};

TodoList.propTypes = {
  todos : React.PropTypes.array.isRequired
};

export default TodoList;
