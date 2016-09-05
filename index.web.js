/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import { AppRegistry, Platform } from 'react-native';
import Entry from './app/entry/index';
import { OSTheme } from 'native-base';

//Use IOS theme for our web app
if (Platform.OS === 'web') {
  OSTheme.setOSTheme('ios');
}

AppRegistry.registerComponent('App', () => Entry);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-root')
})
