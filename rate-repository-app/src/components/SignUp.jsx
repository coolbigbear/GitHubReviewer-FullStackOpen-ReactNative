import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useHistory } from 'react-router-native';
import useSignIn from '../hooks/useSignIn';
import useSignUp from '../hooks/useSignUp';
import SignIn from './SignIn';
import Text from './Text';
import * as yup from 'yup';
import { Formik, FormikProvider } from 'formik';
import FormikTextInput from './FormikTextInput';
import Button from './Button';

const SignUp = () => {
	const [signUp] = useSignUp();
	const [signIn] = useSignIn();
	const history = useHistory();

	const initialValues = {
		username: '',
		password: '',
		passwordConfirmation: '',
	};

	const styles = StyleSheet.create({
		loginForm: {
			flexDirection: 'column',
			alignItems: 'stretch',
			backgroundColor: 'white',
			padding: 10,
		},
	});

	const validationSchema = yup.object().shape({
		username: yup.string().required('Username is required').min(1).max(30),
		password: yup.string().required('Password is required').min(5).max(30),
		passwordConfirmation: yup
			.string()
			.required('Password confirmation is required')
			.oneOf([yup.ref('password'), null], 'Passwords must match'),
	});

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			await signUp({
				username,
				password,
			});
			await signIn({
				username,
				password,
			});
			history.push(`/`);
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
						<FormikTextInput name="username" placeholder="Username" />
						<FormikTextInput name="password" placeholder="password" />
						<FormikTextInput
							name="passwordConfirmation"
							placeholder="Password confirmation"
						/>
						<Pressable onPress={handleSubmit}>
							<Button>Sign up</Button>
						</Pressable>
					</>
				)}
			</Formik>
		</View>
	);
};

export default SignUp;
