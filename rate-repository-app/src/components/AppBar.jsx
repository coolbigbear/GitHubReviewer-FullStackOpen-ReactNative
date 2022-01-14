import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
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
			<ScrollView horizontal>
				<AppBarTab text={'Repositories'} route={'/'} />
				<AppBarTab text={'Sign in'} route={'/signin'} />
			</ScrollView>
		</View>
	);
};

export default AppBar;
