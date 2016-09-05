import React, { Component } from 'react';
import {
	Icon
} from 'native-base';
import {
	TabBarIOS,
	Text,
	View
} from 'react-native';
import yayoiTheme from '../themes/yayoi';
import HomeTab from '../containers/HomeTab';

class MainScreen extends Component {

	static childContextTypes = {
		navigator : React.PropTypes.any
	}

	constructor(props) {
		super(props);
		this.state = {
			tabIndex : 0
		}
	}

	getChildContext() {
		return {
			navigator : this.props.navigator
		}
	}

	render() {
		return (
			<TabBarIOS
				tintColor={yayoiTheme.brandPrimary}
				unselectedTintColor={yayoiTheme.grey}>

				<Icon.TabBarItem
					title="Home"
					iconName="ios-home-outline"
					selectedIconName="ios-home"
					selected={this.state.tabIndex===0}
					onPress={() => this.setState({tabIndex:0})}
					iconColor={yayoiTheme.grey}
					selectedIconColor={yayoiTheme.brandPrimary}>

					<HomeTab />

				</Icon.TabBarItem>

				<Icon.TabBarItem
					title="Contacts"
					iconName="ios-people-outline"
					selectedIconName="ios-people"
					selected={this.state.tabIndex===1}
					onPress={() => this.setState({tabIndex:1})}
					iconColor={yayoiTheme.grey}
					selectedIconColor={yayoiTheme.brandPrimary}>
					<Text>Contacts Page</Text>
				</Icon.TabBarItem>

				<Icon.TabBarItem
					title="Calendar"
					iconName="ios-calendar-outline"
					selectedIconName="ios-calendar"
					selected={this.state.tabIndex===2}
					onPress={() => this.setState({tabIndex:2})}
					iconColor={yayoiTheme.grey}
					selectedIconColor={yayoiTheme.brandPrimary}>
					<Text>Calendar Page</Text>
				</Icon.TabBarItem>

				<Icon.TabBarItem
					title="Me"
					iconName="ios-person-outline"
					selectedIconName="ios-person"
					selected={this.state.tabIndex===3}
					onPress={() => this.setState({tabIndex:3})}
					iconColor={yayoiTheme.grey}
					selectedIconColor={yayoiTheme.brandPrimary}>
					<Text>My Page</Text>
				</Icon.TabBarItem>

			</TabBarIOS>
		);
	}

}

export default MainScreen;
