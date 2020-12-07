import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Author, ReadTime } from '../'
import { colors, vars } from '../../utils';


function PostCard ({navigation, ...props}) {
	const openArticle = () => {
		navigation.navigate('article', {props})
	}

	return (
		<TouchableOpacity onPress={openArticle}>
			<View style={[styles.container, props.style]}>
				<View
					style={[
						styles.cbg,
						{backgroundColor: props.accent}
					]}
				/>
				<View style={styles.innerFrame}>
					<Image
						source={props.image}
						style={styles.innerImage}
					/>
					<View style={{justifyContent: 'space-between', flex: 1}}>
						<Text style={styles.title}>{props.title}</Text>
						<View style={styles.bottomFrame}>
							<Author
								{...props.author}
								style={styles.authorLabel}
							/>
							<ReadTime time={props.readTime}/>
						</View>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	)
};

const { gap } = vars;
const bsw = 100

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		backgroundColor: '#fff',
		justifyContent: 'center',
		padding: gap.s - 2,
		marginBottom: gap.s
	},

	cbg: {
		width: bsw,
		height: '70%',
		position: 'absolute',
		top: 0,
		left: 0,
	},

	innerFrame: {
		padding: gap.s - 4,
		backgroundColor: colors.white,
		flexDirection: 'row',
		position: 'relative',
	},

	innerImage: {
		minHeight: 120,
		height: "100%",
		borderColor: '#000',
		resizeMode: 'cover',
		width: bsw,
		marginRight: gap.s + gap.xs
	},

	title: {
		fontSize: 26,
		fontFamily: 'CrimsonSemi',
		marginBottom: gap.s,
	},

	bottomFrame: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	authorLabel: {
		marginRight: vars.s,
	}
});

export default PostCard
