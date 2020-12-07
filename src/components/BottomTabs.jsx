import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { vars } from '../utils';
import home from '../../assets/icons/home.png';
import home1 from '../../assets/icons/home1.png';
import folder from '../../assets/icons/folder.png';
import heart from '../../assets/icons/heart.png';
import person from '../../assets/icons/person.png';
import settings from '../../assets/icons/settings.png';


const tabs = {
	home: [home, home1],
	folder: [folder],
	heart: [heart],
	person: [person],
	settings: [settings],
};

function BottomTabs () {
	const [active, setActive] = useState(1)
	return (
		<View style={styles.frame}>
			{
				[
					'home', 'folder', 'heart', 'person', 'settings'
				].map((name, i) => {
					const icon = tabs[name];
					return <Image
						source={i+1 === active ? icon[1] : icon[0]}
						style={styles.icon}
						key={i}
					/>
				})
			}
		</View>
	)
};

const styles = StyleSheet.create({
	frame: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: vars.gap.s,
		backgroundColor: '#fff',
		position: 'absolute',
		bottom: 0,
		left: 0,
	},

	icon: {
		width: 30,
		height: 30,
	}
});

export default BottomTabs;
