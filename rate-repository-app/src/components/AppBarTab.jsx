import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
	tab: {
        paddingLeft: 10,
        paddingRight: 20,
        paddingBottom: 20,
		color: 'white',
		fontWeight: theme.fontWeights.bold
	},
});

const AppBarTab = ({text, route}) => {
	return (
		<Pressable
			onPress={() => {
				console.log('Pressed');
			}}
		>
			<Link to={route}>
				<Text style={styles.tab}>{text}</Text>
			</Link>
		</Pressable>
	);
};

export default AppBarTab;
