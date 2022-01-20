import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { useApolloClient, useQuery } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import { CHECK_IF_USER_AUTHORIZED } from '../graphql/queries';

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
	const { data, loading } = useQuery(CHECK_IF_USER_AUTHORIZED);

	const signOut = async () => {
		console.log('Sign out pressed');
		await authStorage.removeAccessToken();
		apolloClient.resetStore();
	};

	const SignInOutTabs = () => {
		if (!loading && data.authorizedUser) {
			return (
				<>
					<AppBarTab text={'Create a review'} route={'/createReview'} />
					<AppBarTab text={'Sign out'} route={'/'} onPress={signOut} />
				</>
			);
		} else {
			return <AppBarTab text={'Sign in'} route={'/signin'} />;
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
