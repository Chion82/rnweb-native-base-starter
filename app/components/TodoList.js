import React, { Component } from 'react';
import { List, ListItem } from 'native-base';
import { Text } from 'react-native';

const TodoList = (props) => {
	return (
		<List>
			{props.todos.map((todo, index) => (
				<ListItem key={index}>
					<Text>{todo.title}</Text>
				</ListItem>
			))}
			{props.todos.length === 0 && (
				<ListItem>
					<Text>You have no Todo. Add one!</Text>
				</ListItem>
			)}
		</List>
	);
}

export default TodoList;
