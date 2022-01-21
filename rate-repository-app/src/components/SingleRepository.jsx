import React from 'react';
import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';

const SingleRepository = () => {
	const { id } = useParams();
	const { repository, error, loading } = useRepository(id, true);

	if (error || loading || !repository) {
		return null;
	} else {
		const reviews = repository.reviews.edges;
		return (
			<FlatList
				data={reviews}
				renderItem={({ item }) => <ReviewItem item={item.node} />}
				ItemSeparatorComponent={() => <ItemSeparator />}
				keyExtractor={(item) => item.node.id}
				ListHeaderComponent={() => (
					<>
						<RepositoryItem item={repository} openInGithubButton={true} />
						<ItemSeparator />
					</>
				)}
				// ...
			/>
		);
	}
};

export default SingleRepository;
