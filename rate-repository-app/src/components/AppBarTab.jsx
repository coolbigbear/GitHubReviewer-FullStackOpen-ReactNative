import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
	tab: {
        paddingLeft: 10,
        paddingRight: 20,
        paddingBottom: 20,
		color: 'white',
		fontWeight: theme.fontWeights.bold
	},
});

const AppBarTab = ({text}) => {
	return (
		<Pressable
			onPress={() => {
				console.log('Pressed');
			}}>
            <Text style={styles.tab}>{ text}</Text>
		</Pressable>
	);
};

export default AppBarTab;
