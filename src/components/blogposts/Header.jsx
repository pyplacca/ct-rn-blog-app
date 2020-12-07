import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from 'react-native';
import { vars, colors } from '../../utils';


function Header () {
	return (
		<View style={styles.frame}>
		<StatusBar backgroundColor="transparent"/>
			<Image
				source={require('../../../assets/icons/menu.png')}
				style={styles.icon}
			/>
			<Text style={styles.title}>Discover</Text>
			<Image
				source={require('../../../assets/icons/search.png')}
				style={styles.icon}
			/>
		</View>
	)
};

const {gap} = vars;

const styles = StyleSheet.create({
	frame: {
		paddingVertical: gap.s - gap.xs * 2,
		paddingTop: gap.m,
		paddingHorizontal: gap.s,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	title: {
		color: colors.primary,
		fontSize: 40,
		fontFamily: 'CrimsonBold',
	},

	icon: {
		width: 30,
		height: 30,
	}
});

export default Header;
