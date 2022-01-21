import React from 'react';
// import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import AppBar from './AppBar';
import SignIn from './SignIn';
import RepositoryList from './RespositoryList';
import { Switch, Route, Redirect, NativeRouter } from 'react-router-native';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';
import SignUp from './SignUp';
import ReviewList from './ReviewList';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
		backgroundColor: theme.colors.backgroundColorPrimary,
	},
});

const Main = () => {
	return (
		<>
			<NativeRouter>
				<AppBar />
				<Switch>
					<Route path="/" exact>
						<View style={styles.container}>
							<RepositoryList />
						</View>
					</Route>
					<Route path="/signin" exact>
						<View style={styles.container}>
							<SignIn />
						</View>
					</Route>
					<Route path="/signup" exact>
						<View style={styles.container}>
							<SignUp />
						</View>
					</Route>
					<Route path="/repositories/:id" exact>
						<View style={styles.container}>
							<SingleRepository />
						</View>
					</Route>
					<Route path="/createReview" exact>
						<View style={styles.container}>
							<CreateReview />
						</View>
					</Route>
					<Route path="/myReviews" exact>
						<View style={styles.container}>
							<ReviewList />
						</View>
					</Route>
					<Redirect to="/" />
				</Switch>
			</NativeRouter>
		</>
	);
};

export default Main;
