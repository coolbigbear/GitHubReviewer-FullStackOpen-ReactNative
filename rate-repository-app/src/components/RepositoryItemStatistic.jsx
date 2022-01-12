import React from 'react';
import {View, StyleSheet} from 'react-native';
import theme from '../theme';
import Text from './Text';

const RepositoryItemStatistic = ({heading, subheading}) => {

const styles = StyleSheet.create({
	statisticHeading: {
		fontWeight: theme.fontWeights.bold,
		fontSize: theme.fontSizes.body,
		paddingBottom: 5,
		paddingLeft: 10,
	},
	statisticSubHeading: {
		fontWeight: theme.fontWeights.normal,
		fontSize: theme.fontSizes.subheading,
		paddingBottom: 10,
		paddingLeft: 10,
	},
	headingSubheadingPair: {
		flexDirection: 'column',
		alignItems: 'center',
	},
});

    return (
			<View style={styles.headingSubheadingPair}>
				<Text style={styles.statisticHeading}>{heading}</Text>
				<Text style={styles.statisticSubHeading}>{subheading}</Text>
			</View>
		);
};

export default RepositoryItemStatistic;