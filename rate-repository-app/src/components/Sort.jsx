import React, { useState } from 'react';
import Text from './Text';
import { Picker } from '@react-native-picker/picker';
import Button from './Button';
import theme from '../theme';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
	picker: {
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 20,
		paddingTop: 10,
	},
});

const Sort = ({ selectedSorting, setSelectedSorting }) => {
	const [selectedValue, setSelectedValue] = useState(selectedSorting.sorting.value);

	return (
		<View style={styles.picker}>
			<Picker
				dropdownIconColor={'black'}
				selectedValue={selectedValue}
				mode={'dropdown'}
                onValueChange={(itemValue) => {
                    if (itemValue == 'lowestRated') {
                        setSelectedSorting({sorting: {orderBy: 'RATING_AVERAGE', orderDirection: 'ASC', value: itemValue}});
                    } else if (itemValue == 'highestRated') {
                        setSelectedSorting({sorting: {orderBy: 'RATING_AVERAGE', orderDirection: 'DESC', value: itemValue}});
                    } else {
                        setSelectedSorting({sorting: {orderBy: 'CREATED_AT', orderDirection: 'DESC', value: itemValue}});
                    }
                    setSelectedValue(itemValue)
				}}
			>
				<Picker.Item
					label="Latest repositories"
					value='latest'
				/>
				<Picker.Item
					label="Highest rated repositories"
					value='highestRated'
				/>
				<Picker.Item
					label="Lowest rated repositories"
					value='lowestRated'
				/>
			</Picker>
		</View>
	);
};

export default Sort;
