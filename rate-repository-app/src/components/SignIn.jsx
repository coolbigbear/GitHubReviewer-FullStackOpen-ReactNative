import { Formik } from 'formik';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

export const SignInContainer = ({ signIn, history }) => {

	const initialValues = {
		username: '',
		password: '',
	};

	const styles = StyleSheet.create({
		loginForm: {
			// display: 'flex',
			flexDirection: 'column',
			alignItems: 'stretch',
			backgroundColor: 'white',
			padding: 10,
		},
		loginButton: {
			backgroundColor: theme.colors.primary,
			color: 'white',
			padding: 10,
			fontWeight: theme.fontWeights.bold,
			textAlign: 'center',
			borderRadius: 5,
		},
	});

	const validationSchema = yup.object().shape({
		username: yup.string().required('Username is required'),
		password: yup.string().required('Password is required'),
	});

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			await signIn({ username, password });
			history.push('/');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View style={styles.loginForm}>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				{({ handleSubmit }) => (
					<>
						<FormikTextInput
							style={styles.loginInputs}
							name="username"
							placeholder="Username"
						/>
						<FormikTextInput
							style={styles.loginInputs}
							name="password"
							placeholder="Password"
							secureTextEntry={true}
						/>
						<Pressable onPress={handleSubmit}>
							<Text style={styles.loginButton}>Sign in</Text>
						</Pressable>
					</>
				)}
			</Formik>
		</View>
	);
};

const SignIn = () => {
	const [signIn] = useSignIn();
	const history = useHistory();

	return <SignInContainer signIn={signIn} history={history} />;
};

export default SignIn;
