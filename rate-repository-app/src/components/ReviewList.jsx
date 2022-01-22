import { useQuery } from "@apollo/client";
import React from "react";
import { FlatList } from "react-native";
import useReviews from "../hooks/useReviews";
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";

const ReviewList = () => {
	const { reviews, fetchMore, refetch } = useReviews({first: 6, includeReviews: true})
    
	const reviewNodes = reviews
		? reviews.edges.map((edge) => edge.node)
		: [];

    const onEndReached = () => {
        fetchMore();
	};

	return (
		<FlatList
			data={reviewNodes}
            renderItem={({ item }) => <ReviewItem item={item} viewButtons={true} refetch={refetch} />}
			ItemSeparatorComponent={() => <ItemSeparator />}
			keyExtractor={(item) => item.id}
			onEndReached={onEndReached}
			onEndReachedThreshold={0.1}
		/>
	);
}

export default ReviewList;