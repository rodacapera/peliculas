import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, Image, TouchableWithoutFeedback, Dimensions, Platform } from "react-native";
import { size, map } from "lodash";
import { Searchbar, Text, Title } from "react-native-paper";

import { searchMovieApi } from "../api/movies";
import { BASE_PATH_IMG } from "../utils/constants";
const {width} = Dimensions.get('window');

//esto hace parte de redux saga
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../redux/actions/Search";
import { movieResults, isSearchLoading } from "../redux/selectors";
import Spinner from 'react-native-loading-spinner-overlay';


export default function Search(props){
    const { navigation } = props;
    const [movies, setMovies] = useState(null);
    const [search, setSearch] = useState("");
    const [spinner, setSpinner] = useState(false);

    const dispatch = useDispatch();
    
    const moviesR = useSelector(state => movieResults(state));
    console.log(moviesR);


    useEffect(() => {      
        console.log('buscando');  
        console.log(search);
        if(size(search) > 2) {
            dispatch(searchMovie({ search }));
            setMovies(moviesR);            
        }
    }, [search]);

    const Progress = () => {
        return <Spinner
        visible={spinner}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
    }

    const RenderMovies = () => {
        console.log('render');
        console.log(movies);
        if(movies) {    
            setSpinner(false);
            return map(movies, (movie, index) => (
                <Movie key={index} movie={movie} navigation={navigation} />
            ));
        }else{
            console.log('setspinner');
            setSpinner(true);
        }  
    }

    

    // useEffect(() => {
    //     console.log(search);
    //     if(size(search) > 2) {
    //         searchMovieApi(search).then((response) => {
    //             setMovies(response.results);
    //         });
    //     }
    // }, [search]);    

    return(
        <SafeAreaView>
            <Searchbar
            iconColor={Platform.OS === "ios" && "transparent" }
            placeholder="Busca tu pelicula..." 
            icon="arrow-left"
            style={styles.input} 
            onChangeText={(e) => setSearch(e)
            } />
            <ScrollView>
                {Progress()}            
                <View style={styles.container}>
                    {RenderMovies()}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


function Movie(props) {
    console.log(props);
    const { movie, navigation } = props;
    // const { id, poster_path, title } = movie;
    const { imdbID, Poster, Title } = movie;//esto hace parte de redux saga

    const goMovie = () => {
        navigation.navigate("movie", { imdbID });
    }

    return (
        <TouchableWithoutFeedback onPress={goMovie}>
            <View style={styles.movie}>
                {Poster ? (
                // <Image style={styles.image} source={{ uri: `${BASE_PATH_IMG}/w500${poster_path}` }} />  
                <Image style={styles.image} source={{ uri: Poster }} /> //esto hace parte de redux saga 
                ) : (
                    <Title>{Title}</Title>
                )}              
            </View>
            
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    input: {
        marginTop: -3,
        backgroundColor: "#15212b"
    },
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    movie: {
       width:  width/2,
       height: 300,
       justifyContent: "center",
       alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    spinnerTextStyle: {
        color: '#FFF'
      },
})