import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, StatusBar } from 'react-native';
import PostCard from '../components/blogposts/PostCard';
import { BottomTabs } from '../components'
import { vars, colors } from '../utils'
import blogs from '../blogs';


function BlogPosts (props) {
	const [refresh, setRefresh] = useState(false)

	return (
		<View style={styles.container}>
			<FlatList
				/*
					This refresh stuff does nothing really. I was only trying it out.
					Swipe down in the first page of the app, and you'll see
						a refresh icon pop out from the top
				*/
				onRefresh={arg => {
					console.log(arg)
					setRefresh(true)
					setTimeout(() => setRefresh(false), 2000)
				}}
				refreshing={refresh}
				// and it ends right above this line
				data={blogs}
				renderItem={
					({item}) => <PostCard {...item} navigation={props.navigation} />
				}
				keyExtractor={blog => blog.id}
				showsVerticalScrollIndicator={false}
				style={styles.list}
			/>
			<BottomTabs/>
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
