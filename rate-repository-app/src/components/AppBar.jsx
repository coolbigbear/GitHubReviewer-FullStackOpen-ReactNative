import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
	},
}); 

const AppBar = () => {
	return (
		<View style={styles.container}>
			<AppBarTab text={'Repositories'}/>
			<AppBarTab text={'Repositories'}/>
			<AppBarTab text={'Repositories'}/>
		</View>
	);
};

export default AppBar;
