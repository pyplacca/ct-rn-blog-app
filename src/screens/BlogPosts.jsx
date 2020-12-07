import React from 'react';
import { FlatList, View, Text, StyleSheet, StatusBar } from 'react-native';
import PostCard from '../components/blogposts/PostCard';
import { vars, colors } from '../utils'
import blogs from '../blogs';


function BlogPosts (props) {
	return (
		<View style={styles.container}>
			<FlatList
				data={blogs}
				renderItem={
					({item}) => <PostCard {...item} navigation={props.navigation} />
				}
				keyExtractor={blog => blog.id}
				showsVerticalScrollIndicator={false}
				style={styles.list}
			/>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: colors.secondary,
	},

	list: {
		flex: 1,
		padding: vars.gap.s,
		marginBottom: vars.gap.s,
	}
})

export default BlogPosts;
