import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
	text: {
        textAlign: 'center',
        color: theme.colors.white,
		fontSize: theme.fontSizes.body,
		fontFamily: theme.fonts.main,
		fontWeight: theme.fontWeights.bold,
        backgroundColor: theme.colors.primary,
        padding: 10,
        borderRadius: 5
    },
	colorPrimary: {
		color: theme.colors.primary,
	},
	fontSizeSubheading: {
		fontSize: theme.fontSizes.subheading,
	},
	fontWeightBold: {
		fontWeight: theme.fontWeights.bold,
	},
});

const Button = ({ color, fontSize, fontWeight, ...props }) => {
	const textStyle = [
		styles.text,
		color === 'primary' && styles.colorPrimary,
		fontSize === 'subheading' && styles.fontSizeSubheading,
		fontWeight === 'bold' && styles.fontWeightBold
	];

	return <NativeText style={textStyle} {...props} />;
};

export default Button;
