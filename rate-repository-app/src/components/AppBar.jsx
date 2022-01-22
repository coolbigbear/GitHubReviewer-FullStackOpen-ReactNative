import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { useApolloClient, useQuery } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import { GET_USER } from '../graphql/queries';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight + 10,
		backgroundColor: theme.colors.primary,
		flexDirection: 'row',
	},
});

const AppBar = () => {
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();
	const { data, loading } = useQuery(GET_USER);

	const signOut = async () => {
		await authStorage.removeAccessToken();
		apolloClient.resetStore();
	};

	const SignInOutTabs = () => {
		if (!loading && data.me) {
			return (
				<>
					<AppBarTab text={'My reviews'} route={'/myReviews'} />
					<AppBarTab text={'Create a review'} route={'/createReview'} />
					<AppBarTab text={'Sign out'} route={'/'} onPress={signOut} />
				</>
			);
		} else {
			return (
				<>
					<AppBarTab text={'Sign in'} route={'/signin'} />
					<AppBarTab text={'Sign up'} route={'/signup'} />
				</>
			);
		}
	};

	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<AppBarTab text={'Repositories'} route={'/'} />
				{SignInOutTabs()}
			</ScrollView>
		</View>
	);
};

export default AppBar;
