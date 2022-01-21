import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const useReviews = (variables) => {

    const { data, error, loading, fetchMore } = useQuery(GET_USER, {
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

    console.log(data);
    return { reviews: data?.authorizedUser.reviews, fetchMore: handleFetchMore };
};

export default useReviews;