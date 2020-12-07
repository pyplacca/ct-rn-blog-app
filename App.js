import React from 'react';
import { useFonts } from '@use-expo/font';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Article, BlogPosts } from './src/screens';
import Header from './src/components/blogposts/Header';
import ArticleHeader from './src/components/article/ArticleHeader'


const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#fff'
	}
}
const Stack = createStackNavigator()

export default function App() {

	const [loaded] = useFonts({
		'Crimson': require('./assets/fonts/CrimsonText-Regular.ttf'),
		'CrimsonBold': require('./assets/fonts/CrimsonText-Bold.ttf'),
		'CrimsonSemi': require('./assets/fonts/CrimsonText-SemiBold.ttf'),
	})

  return !loaded ? null :  (
  	<NavigationContainer theme={theme}>
  		<Stack.Navigator>
  			<Stack.Screen
  				name='blogposts'
  				component={BlogPosts}
  				options={{
  					header: () => <Header/>
  				}}
  			/>
  			<Stack.Screen
  				name='article'
  				component={Article}
  				options={{
  					header: ({navigation, scene: {route}}) => (
  						<ArticleHeader navigation={navigation} route={route}/>
  					)
  				}}
  			/>
  		</Stack.Navigator>
  	</NavigationContainer>
  );
}
