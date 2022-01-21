import React from 'react';
import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';

const SingleRepository = () => {
	const { id } = useParams();
	const { repository, fetchMore } = useRepository({ id, reviews: true, first: 10 });

	const reviews = repository
		? repository.reviews.edges.map((edge) => edge.node)
		: [];
	
	const onEndReached = () => {
		fetchMore();
	}
	
	return (
		<FlatList
			data={reviews}
			renderItem={({ item }) => <ReviewItem item={item} />}
			ItemSeparatorComponent={() => <ItemSeparator />}
			keyExtractor={(item) => item.id}
			onEndReached={onEndReached}
			onEndReachedThreshold={0.1}
			ListHeaderComponent={() => (
				<>
					{repository && (
						<>
							<RepositoryItem item={repository} openInGithubButton={true} />
							<ItemSeparator />
						</>
					)}
				</>
			)}
		/>
	);
};

export default SingleRepository;
