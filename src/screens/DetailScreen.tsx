import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackParams } from '../navigation/StackNavigation';


const { height } = Dimensions.get('screen');

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

const DetailScreen = ({ route }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    return (
        <ScrollView>
            <View style={ styles.imageContainer }>
                <View style={ styles.imageBorder }>
                    <Image 
                        source={{ uri }}
                        style={ styles.posterImage }
                    />
                </View>
            </View>
            
            <View style={ styles.marginContainer }>
                <Text style={ styles.subTitle }>{ movie.original_title }</Text>
                <Text style={ styles.title }>{ movie.title }</Text>
            </View>

            <View style={ styles.marginContainer }>
                <Icon name="star-outline"  size={20} color='grey' />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        // backgroundColor: 'red',
        height: height * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 16,
        color: '#000',
        opacity: 0.5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    }
});


export default DetailScreen
