import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const useReviews = (variables) => {

    const { data, error, loading, fetchMore, refetch } = useQuery(GET_USER, {
        variables,
        fetchPolicy: 'cache-and-network',
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.authorizedUser.reviews.pageInfo.hasNextPage;
        if (!canFetchMore) {
            return;
        }
        fetchMore({
            variables: {
                after: data.authorizedUser.reviews.pageInfo.endCursor,
                ...variables,
            },
        });
    };

    return { reviews: data?.authorizedUser.reviews, fetchMore: handleFetchMore, refetch };
};

export default useReviews;