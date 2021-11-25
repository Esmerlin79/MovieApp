import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import GradientBackground from '../components/GradientBackground';
import HorizontalSlider from '../components/HorizontalSlider';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';


const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

    const { assignColors } = useContext(GradientContext);

    const getCurrentPoster = async ( index: number ) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${ nowPlaying[index].poster_path }`;

        const [ primary = 'green', secondary = 'orange' ] = await getImageColors(uri);
        assignColors({ primary, secondary })
    }

    useEffect(() => {
        if( nowPlaying.length > 0) {
            getCurrentPoster(0)
        }
    }, [nowPlaying])


    if( isLoading ) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color="red" size={ 100 }  />
            </View>
        )
    }

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>

                    <View style={{ height: 440 }}>
                        <Carousel
                            data={ nowPlaying }
                            renderItem={ ({ item }: any ) => <MoviePoster movie={ item } /> }
                            sliderWidth={ windowWidth }
                            itemWidth={ 300 }
                            inactiveSlideOpacity={ 0.9 }
                            onSnapToItem={ (index) => getCurrentPoster( index ) }
                        />
                    </View>
                    
                    <HorizontalSlider title="Populares" movies={ popular } />
                    <HorizontalSlider title="Top Rated" movies={ topRated } />
                    <HorizontalSlider title="Upcoming" movies={ upcoming } />
                </View>
            </ScrollView>
        </GradientBackground>
    )
}

export default HomeScreen
