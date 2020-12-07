import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { vars, colors } from '../utils';


function Author ({name, image, style}) {
	return (
		<View style={[styles.frame, style]}>
			<Image
				source={image}
				style={styles.image}
			/>
			<Text style={styles.text}>{name}</Text>
		</View>
	)
};

const { gap } = vars;
const imgsz = gap.s + gap.xs * 2;

const styles = StyleSheet.create({
	frame: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	image: {
		width: imgsz,
		height: imgsz,
		borderRadius: 100,
		marginRight: gap.xs + 3,
	},

	text: {
		color: colors.primary,
		fontSize: gap.s,
		fontFamily: 'Crimson',
		fontSize: 19,
	}
})

export default Author
