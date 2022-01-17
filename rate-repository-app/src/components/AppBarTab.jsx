import React from 'react';
import { StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
	tab: {
		paddingLeft: 10,
		paddingRight: 20,
		paddingBottom: 20,
		color: 'white',
		fontWeight: theme.fontWeights.bold,
	},
});

const AppBarTab = ({ text, route, onPress }) => {
	return (
			<Link to={route} onPress={onPress}>
				<Text style={styles.tab}>{text}</Text>
			</Link>
	);
};

export default AppBarTab;
