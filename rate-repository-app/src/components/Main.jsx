import React from 'react';
// import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import AppBar from './AppBar';
import RepositoryList from './RespositoryList';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
	flexShrink: 1,
	backgroundColor: theme.colors.backgroundColorPrimary
  },
});

const Main = () => {
    return (
			<View>
				<AppBar></AppBar>
				<View style={styles.container}>
					<RepositoryList></RepositoryList>
				</View>
			</View>
		);
};

export default Main;