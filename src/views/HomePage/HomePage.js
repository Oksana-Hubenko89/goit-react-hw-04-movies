import React, {Component} from 'react'
//import * as API from '../../service/API/API';
import Axios from 'axios';
//import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PageHeading from '../../components/PageHeading';

class HomePage extends Component {

    state = {
        movieTrending: [],
    };
   
    async componentDidMount() {
        const response = await Axios.get(` https://api.themoviedb.org/3/trending/movie/day?api_key=461700ffddee4ce5239e6dda1aad5503`);
        console.log(response.data.results)
        this.setState({ movieTrending: response.data.results })
    }
    render() {
       
        return (
            <>
                <PageHeading text="Movies Trending" />

                {this.state.movieTrending && (
                <ul>
                    {this.state.movieTrending.map(movie => (
                        <li key={movie.id}>
                            <Link to={`movies/${movie.id}`}>{movie.title}{movie.release_date}</Link>
                        </li>
                    ))}
                </ul>
                
               )} 
            </>
     
        );
    }
}      
    
export default HomePage;
