import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Title, Text } from "react-native-paper"; 
import { getNewsMoviesApi, getAllGenresApi, getGenresMoviesApi } from "../api/movies";
import CarouselVertical from "../components/CarouselVertical";
import { map } from "lodash";
import { useSelector } from "react-redux";

import CarruselMulti from "../components/CarrouselMulti";

export default function Home(props){    
    const { navigation } = props;
    const [newMovies, setnewMovies] = useState(null);
    const [genreList, setGenreList] = useState([]);
    const [genreSelected, setGenreSelected] = useState(28);
    const [genreMovies, setGenreMovies] = useState(null);

    useEffect(() => {
        getNewsMoviesApi().then((response) => {
            setnewMovies(response.results);
        });
    }, []);

    useEffect(() => {
        getAllGenresApi().then((response) => {
            setGenreList(response.genres);
        });
    }, []);

    useEffect(() => {
        getGenresMoviesApi(genreSelected).then((response) => {            
            setGenreMovies(response.results);
        });
    }, [genreSelected]);

    const onChangeGenre = (newGenreId) => {
        setGenreSelected(newGenreId);
        console.log(newGenreId)
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            {newMovies && (
                <View style={styles.news}>
                    <Title style={styles.newsTitle}>
                        Nuevas peliculas
                    </Title>
                    <CarouselVertical data={newMovies} navigation={navigation}/>
                </View>
            )}
            
            <View style={styles.genres}>
                <Title style={styles.genresTitle}>Peliculas por genero</Title>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.genreList}>
                    {map(genreList, (genre) => (
                        <Text key={genre.id} style={[styles.genre, { color: genre.id !== genreSelected ? '#8697a5' : "#fff"}]} onPress={() => onChangeGenre(genre.id)}>{genre.name}</Text>
                    ))}
                </ScrollView>
                {genreMovies && (
                    <CarruselMulti data={genreMovies} navigation={navigation} />
                )

                }
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    news: {
        marginVertical: 10
    },
    newsTitle: {
        marginBottom: 15,
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 22
    },
    genres: {
        marginTop: 20,
        marginBottom: 50
    },
    genresTitle: {
        marginHorizontal: 20,
        fontWeight: "bold",
        fontSize: 22
    },
    genreList: {
        marginTop: 5,
        marginBottom: 15,
        paddingHorizontal: 20,
        padding: 10 
    },
    genre: {
        marginRight: 20,
        fontSize: 20
    }
});