import { useQuery } from "@apollo/client";
import React from "react";
import { FlatList } from "react-native";
import { GET_USER } from "../graphql/queries";
import useReviews from "../hooks/useReviews";
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";

const ReviewList = () => {
	const { reviews, fetchMore } = useReviews({first: 6, includeReviews: true})
    
	const reviewNodes = reviews
		? reviews.edges.map((edge) => edge.node)
		: [];

    const onEndReached = () => {
        console.log('Reached end');
        fetchMore();
        // console.log(reviews);
	};

	return (
		<FlatList
			data={reviewNodes}
			renderItem={({ item }) => <ReviewItem item={item} />}
			ItemSeparatorComponent={() => <ItemSeparator />}
			keyExtractor={(item) => item.id}
			onEndReached={onEndReached}
			onEndReachedThreshold={0.1}
		/>
	);
}

export default ReviewList;