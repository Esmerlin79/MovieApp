import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { RootStackParams } from '../navigation/StackNavigation';


interface Props {
    movie: Movie;
    width?: number;
    height?: number;
}

type NavigationProp = StackNavigationProp<RootStackParams, 'HomeScreen'>;

const MoviePoster = ({ movie, width = 300, height = 420 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const navigation = useNavigation<NavigationProp>();
    
    return (
        <TouchableOpacity 
            onPress={ () => navigation.navigate("DetailScreen", movie) }
            style={{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7
            }}
            activeOpacity={ 0.9 }
        >
            <View style={ styles.imageContainer }>
                <Image 
                    source={{ uri }}
                    style={ styles.image }
                />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    },
    image: {
        flex: 1,
        borderRadius: 18,
    }    
});


export default MoviePoster
