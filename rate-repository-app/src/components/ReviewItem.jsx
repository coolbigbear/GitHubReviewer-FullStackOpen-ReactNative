import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import Text from './Text';
import { format } from 'date-fns'

const ReviewItem = ({ item }) => {
	const styles = StyleSheet.create({
        card: {
            display: 'flex',
			backgroundColor: 'white',
			padding: 10,
			flexDirection: 'row',
		},
		topInfo: {
            flexDirection: 'column',
			flexShrink: 1,
			paddingLeft: 15,
			paddingBottom: 10,
		},
		pointStyle: {
			width: 40,
			height: 40,
			borderRadius: 40 / 2,
            justifyContent: 'center',
            alignItems: 'center',
			borderStyle: 'solid',
            borderWidth: 2,
            borderColor: theme.colors.primary
		},
		paddingBottom: {
			paddingBottom: 5,
		},
	});

	const formattedDate = format(new Date(item.createdAt), 'kk:mm - dd/MM/yyyy');

	return (
		<View testID="ReviewItem" style={styles.card}>
			<View style={styles.pointStyle}>
				<Text color={'primary'} fontWeight={'bold'}>{item.rating}</Text>
			</View>
			<View style={styles.topInfo}>
				<Text fontWeight={'bold'} fontSize={'subheading'}>
					{item.user.username}
				</Text>
				<Text style={(styles.repositorySubheadings, styles.paddingBottom)}>
					{formattedDate}
				</Text>
				<Text>{item.text}</Text>
			</View>
		</View>
	);
};

export default ReviewItem;
