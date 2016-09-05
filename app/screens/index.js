import React, { Component } from 'react';
import { Navigator, Text } from 'react-native';
import MainScreen from './MainScreen';
import NewTodoScreen from './NewTodoScreen';

function renderScene(route, navigator) {
  switch(route.index) {
  case 0:
    return (<MainScreen navigator={navigator} />);
  case 1:
    return (<NewTodoScreen navigator={navigator} />);
  default:
    return (<Text>Ops, screen not found. Route index is {route.index}, title is {route.title}</Text>);
  }
}

class Router extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{index: 0, title: 'Home Screen'}}
        renderScene={renderScene} />
    );
  }
}

export default Router;
