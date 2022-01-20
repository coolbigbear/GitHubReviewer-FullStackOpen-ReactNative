import { Formik } from 'formik';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Text from './Text';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import Button from './Button';
import useCreateReview from '../hooks/useCreateReview';
import { useHistory } from 'react-router-native';

const CreateReview = () => {
    const [createReview] = useCreateReview();
    const history = useHistory();

	const initialValues = {
		repositoryOwnerName: '',
		repositoryName: '',
		rating: '',
		reviewText: '',
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
		repositoryOwnerName: yup
			.string()
			.required('Repository owner name is required'),
		repositoryName: yup.string().required('Repository name is required'),
		rating: yup
			.number()
			.required('Rating number between 0 and 100 is required')
			.integer('Rating must be an integer number between 0 and 100')
			.moreThan(-1, 'Rating must be between 0 and 100')
			.lessThan(101, 'Rating must be between 0 and 100'),
	});

    const onSubmit = async (values) => {
        console.log(values);
		const { repositoryOwnerName, repositoryName, rating, reviewText } = values;

		try {
			const result = await createReview({
				ownerName: repositoryOwnerName,
				repositoryName,
				rating: Number(rating),
                text: reviewText,
			});
			console.log('nice: ', result);
			history.push(`/repository/${result.data.createReview.repository.url}`);
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
							name="repositoryOwnerName"
							placeholder="Repository owner name"
						/>
						<FormikTextInput
							name="repositoryName"
							placeholder="Repository name"
						/>
						<FormikTextInput
							name="rating"
							placeholder="Rating between 0 and 100"
						/>
						<FormikTextInput
							name="reviewText"
							placeholder="Review"
							multiline={true}
						/>
						<Pressable onPress={handleSubmit}>
							<Button>Create a review</Button>
						</Pressable>
					</>
				)}
			</Formik>
		</View>
	);
};

export default CreateReview;
