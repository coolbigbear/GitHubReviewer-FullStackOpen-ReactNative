import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id, includeReviews = false) => {

    const [repository, setRepository] = useState();

    const { error, loading } = useQuery(GET_REPOSITORY, {
        variables: { id: id, reviews: includeReviews },
        fetchPolicy: 'cache-and-network',
        onCompleted: (repo) => {
            setRepository(repo.repository);
        },
    });

    return { repository, loading, error };
};

export default useRepository;