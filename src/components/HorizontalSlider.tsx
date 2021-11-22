import React from 'react'
import { FlatList, Text, View } from 'react-native'

import { Movie } from '../interfaces/movieInterface'
import MoviePoster from './MoviePoster'



interface Props {
    title?: string;
    movies: Movie[];
}

const HorizontalSlider = ({ movies, title }: Props) => {
    return (
        <View style={{ 
            height: title ? 270 : 230,
        }}> 
            { title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10, color: '#000' }}>{ title }</Text> }
            <FlatList 
                data={ movies }
                renderItem={ ({ item }: any ) => (
                    <MoviePoster movie={ item }  width={ 140 } height={ 210 } />
                )}
                keyExtractor={ (item) => item.id.toString() }
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
            />
        </View>
    )
}

export default HorizontalSlider
