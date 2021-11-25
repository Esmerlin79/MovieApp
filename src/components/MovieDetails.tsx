import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import ActorItem from './ActorItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>

                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star-outline" size={ 16 } color="grey" />
                    <Text style={{ color: '#000'}}> { movieFull.vote_average } - </Text>
                    
                    <Text style={{ color: '#000'}}>
                         { movieFull.genres.map( genre => genre.name).join(', ') }
                    </Text>
                </View>
                
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: '#000'}}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16, color: '#000' }}>{movieFull.overview}</Text>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: '#000'}}>
                    Presupuesto
                </Text>
                <Text style={{ color: '#000', fontSize: 18 }}>
                    { currencyFormatter.format(movieFull.budget, { code: 'USD' }) }
                </Text>
            </View>

            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: '#000', marginHorizontal: 20 }}>
                    Actores
                </Text>

               <FlatList 
                    data={ cast }
                    renderItem={ ({ item } ) =>  <ActorItem actor={ item } /> }
                    horizontal={ true }
                    keyExtractor={ (item) => item.id.toString() }
                    showsHorizontalScrollIndicator={ false }
                    style={{ marginTop: 10, height: 70 }}
               />
            </View>
        </>
    )
}

export default MovieDetails
