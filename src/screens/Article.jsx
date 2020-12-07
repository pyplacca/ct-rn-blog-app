import React, { useEffect } from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import { Author, ReadTime } from '../components'
import { vars, colors } from '../utils';


function Article ({route: {params: {props}}}) {
	// props: title, content, cover, author

	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<View style={styles.imageFrame}>
				<Image source={props.image} style={styles.image}/>
			</View>
			<View style={styles.contentFrame}>
				<Text style={styles.title}>{props.title}</Text>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginTop: gap.s,
						marginBottom: gap.s * 2,
					}}
				>
					<Author {...props.author} style={{marginRight: gap.s}}/>
					<ReadTime time={props.readTime}/>
				</View>
				<Text style={styles.content}>{props.content}</Text>
			</View>
		</ScrollView>
	)
};

const {gap} = vars;

const styles = StyleSheet.create({
	container: {
		padding: gap.s,
		zIndex: 10
	},

	imageFrame: {
		padding: gap.s,
		backgroundColor: colors.white,
	},

	image: {
		width: '100%',
		resizeMode: 'cover',
		height: 250,
	},

	title: {
		fontFamily: 'CrimsonSemi',
		fontSize: 28,
	},

	contentFrame: {
		marginBottom: gap.m,
		paddingHorizontal: gap.s,
		backgroundColor: colors.white,
	},

	content: {
		fontFamily: 'Crimson',
		fontSize: 21,
		color: colors.primaryLight,
	}
});

export default Article;
