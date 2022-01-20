import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import theme from '../theme';
import Button from './Button';
import RepositoryItemStatistic from './RepositoryItemStatistic';
import Text from './Text';
import * as Linking from 'expo-linking';
import { useHistory } from 'react-router-native';

const RepositoryItem = ({ item, openInGithubButton = false }) => {

	const history = useHistory();

	const styles = StyleSheet.create({
		card: { backgroundColor: 'white', padding: 10 },
		topInfo: {
			flexDirection: 'column',
			flexShrink: 1,
			paddingLeft: 15,
			paddingBottom: 10,
		},
		bottomInfo: {
			flexDirection: 'row',
			justifyContent: 'space-around',
		},
		repositoryHeadings: {
			fontWeight: theme.fontWeights.bold,
			fontSize: theme.fontSizes.subheading,
			paddingBottom: 10,
		},
		repositorySubheadings: {
			fontSize: theme.fontSizes.subheading,
			paddingBottom: 10,
		},
		languageInfo: {
			backgroundColor: theme.colors.primary,
			color: 'white',
			alignSelf: 'flex-start',
			padding: 5,
			borderRadius: 5,
		},
		imageStyle: { width: 50, height: 50, borderRadius: 5 },
	});

	return (
		<Pressable onPress={() => history.push(`repositories/${item.id}`)}>
			<View style={styles.card}>
				<View testID="repositoryItem" style={{ flexDirection: 'row' }}>
					<Image
						style={styles.imageStyle}
						source={{ uri: item.ownerAvatarUrl }}
					/>
					<View style={styles.topInfo}>
						<Text style={styles.repositoryHeadings}>{item.fullName}</Text>
						<Text style={styles.repositorySubheadings}>{item.description}</Text>
						<Text style={styles.languageInfo}>{item.language}</Text>
					</View>
				</View>
				<View testID="repositoryItemStatistic" style={styles.bottomInfo}>
					<RepositoryItemStatistic
						heading={item.stargazersCount}
						subheading={'Stars'}
					/>
					<RepositoryItemStatistic
						heading={item.forksCount}
						subheading={'Forks'}
					/>
					<RepositoryItemStatistic
						heading={item.reviewCount}
						subheading={'Reviews'}
					/>
					<RepositoryItemStatistic
						heading={item.ratingAverage}
						subheading={'Ratings'}
					/>
				</View>
				{openInGithubButton && (
					<Pressable onPress={() => Linking.openURL(item.url)}>
						<Button>Open in Github</Button>
					</Pressable>
				)}
			</View>
		</Pressable>
	);
};

export default RepositoryItem;
