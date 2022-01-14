import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
	general: {
		borderStyle: 'solid',
		borderRadius: 5,
		borderWidth: 2,
		padding: 10,
	},
	errorTextInput: {
		borderColor: theme.colors.textError,
	},
	textInput: {
		borderColor: theme.colors.backgroundColorPrimary,
		marginBottom: 10
	},
});

const TextInput = ({ style, error, ...props }) => {
	const textInputStyle = [
		style,
		styles.general,
		error && styles.errorTextInput,
		!error && styles.textInput
	];

	return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
