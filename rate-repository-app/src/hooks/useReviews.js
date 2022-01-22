import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const useReviews = (variables) => {

    const { data, error, loading, fetchMore, refetch } = useQuery(GET_USER, {
        variables,
        fetchPolicy: 'cache-and-network',
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;
        if (!canFetchMore) {
            return;
        }
        fetchMore({
            variables: {
                after: data.me.reviews.pageInfo.endCursor,
                ...variables,
            },
        });
    };

    return { reviews: data?.me.reviews, fetchMore: handleFetchMore, refetch };
};

export default useReviews;