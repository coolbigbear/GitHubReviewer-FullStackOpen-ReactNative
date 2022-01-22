import React from 'react';
import { Pressable, StyleSheet, View, Alert } from 'react-native';
import { useHistory } from 'react-router-native';
import theme from '../theme';
import Text from './Text';
import { format } from 'date-fns';
import Button from './Button';
import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import useDeleteReview from '../hooks/useDeleteReview';

const styles = StyleSheet.create({
	card: {
		display: 'flex',
		backgroundColor: 'white',
		padding: 10,
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
		borderColor: theme.colors.primary,
	},
	paddingBottom: {
		paddingBottom: 5,
	},
	bottomButtons: {
		flexDirection: 'row',
	},
	leftButton: {
		flexGrow: 1,
	},
	rightButton: {
		flexGrow: 1,
		backgroundColor: theme.colors.textError,
	},
});

const ReviewItem = ({ item, viewButtons = false, refetch }) => {
	const [deleteReview] = useDeleteReview();
	const history = useHistory();

	const formattedDate = format(new Date(item.createdAt), 'kk:mm - dd/MM/yyyy');

	const deleteAlert = () => {
		return Alert.alert(
			'Delete review',
			'Are you sure you want to delete this review?',
			[
				{ text: 'Cancel', onPress: () => console.log('Cancel Pressed') },
				{
					text: 'Delete',
					onPress: async () => {
						await deleteReview(item.id);
						await refetch();
					},
				},
			]
		);
	};

	return (
		<View style={styles.card}>
			<View testID="ReviewItem" style={{ flexDirection: 'row' }}>
				<View style={styles.pointStyle}>
					<Text color={'primary'} fontWeight={'bold'}>
						{item.rating}
					</Text>
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
			{viewButtons && (
				<View style={styles.bottomButtons}>
					<Pressable
						style={{ flexGrow: 1 }}
						onPress={() => history.push(`/repositories/${item.repositoryId}`)}
					>
						<Button style={styles.leftButton}>View repository</Button>
					</Pressable>
					<Pressable style={{ flexGrow: 1 }} onPress={() => deleteAlert()}>
						<Button style={styles.rightButton}>Delete review</Button>
					</Pressable>
				</View>
			)}
		</View>
	);
};

export default ReviewItem;
