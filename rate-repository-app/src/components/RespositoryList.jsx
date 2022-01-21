import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import Sort from './Sort';
import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';
import { Searchbar } from 'react-native-paper';

export class RepositoryListContainer extends React.Component {
	renderHeader = () => {
		const search = this.props.search;
		const setSearch = this.props.setSearch;
		const selectedSorting = this.props.selectedSorting;
		const setSelectedSorting = this.props.setSelectedSorting;

		return (
			<>
				<Searchbar
					placeholder="Search"
					onChangeText={(query) => setSearch(query)}
					value={search}
					style={{ margin: 10 }}
				/>
				<Sort
					selectedSorting={selectedSorting}
					setSelectedSorting={setSelectedSorting}
				/>
			</>
		);
	};

	render() {
		const repositoryNodes = this.props.repositories
			? this.props.repositories.edges.map((edge) => edge.node)
			: [];

		return (
			<FlatList
				data={repositoryNodes}
				ListHeaderComponent={this.renderHeader()}
				ItemSeparatorComponent={() => <ItemSeparator />}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <RepositoryItem item={item} />}
				onEndReached={this.props.onEndReached}
				onEndReachedThreshold={0.5}
			/>
		);
	}
}

const RepositoryList = () => {
	const [selectedSorting, setSelectedSorting] = useState({
		sorting: {
			orderBy: 'CREATED_AT',
			orderDirection: 'DESC',
			value: 'latest',
		},
	});
	const [search, setSearch] = useState('');
	const [deBouncedSearch] = useDebounce(search, 500);
	const { repositories, fetchMore } = useRepositories({
		orderBy: selectedSorting.sorting.orderBy,
		orderDirection: selectedSorting.sorting.orderDirection,
		searchKeyword: deBouncedSearch,
		first: 6
	});

	const onEndReached = () => {
		fetchMore();
	};

	return (
		<RepositoryListContainer
			repositories={repositories}
			selectedSorting={selectedSorting}
			setSelectedSorting={setSelectedSorting}
			search={search}
			setSearch={setSearch}
			onEndReached={onEndReached}
		/>
	);
};

export default RepositoryList;
