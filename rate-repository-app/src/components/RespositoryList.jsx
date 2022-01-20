import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRespositories';
import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';

export const RepositoryListContainer = ({ repositories }) => {
	const repositoryNodes = repositories
		? repositories.edges.map((edge) => edge.node)
		: [];

	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={() => <ItemSeparator/>}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => <RepositoryItem item={item} />}
		/>
	);
};

const RepositoryList = () => {
	const { repositories } = useRepositories();

	return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
