import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, Text, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';

import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';




const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { currentMovies, isLoading } = useMovies();

    if( isLoading ) {
        return (
            <View 
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <ActivityIndicator color="red" size={ 100 }  />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>

                <View style={{ height: 440 }}>
                    <Carousel
                        data={ currentMovies }
                        renderItem={ ({ item }: any ) => <MoviePoster movie={ item } /> }
                        sliderWidth={ windowWidth }
                        itemWidth={ 300 }
                        inactiveSlideOpacity={ 0.9 }
                    />
                </View>
                
                <HorizontalSlider title="Populares" movies={ currentMovies } />
            </View>
        </ScrollView>
    )
}

export default HomeScreen
