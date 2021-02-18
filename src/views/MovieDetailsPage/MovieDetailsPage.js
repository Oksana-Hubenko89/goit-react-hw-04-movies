import React, {Component} from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import styles from '../../components/Navigation/Navigation.module.css';
import { Route } from 'react-router-dom';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';

class MovieDetailsPage extends Component {
  state = {
    overview:null,
    movie: null,
    id: null,
    poster_path: null,
    genres: null,
    release_date: null,
    title: null,
    cast: null,
    vote_average:null,
  };
   
  async componentDidMount() {
  console.log(this.props.match.params.movieId)
  const { movieId } = this.props.match.params;
    
  const response = await Axios.get(` https://api.themoviedb.org/3/movie/${movieId}?api_key=461700ffddee4ce5239e6dda1aad5503`);
    this.setState({...response.data }); 
        console.log(response.data)
    }
  
    handleGoBack = () => {
      this.props.history.push(this.props.location?.state?.from || "/movies")  
     
    }
  
  render() {
    return (
      <>
         <button type="button" onClick={this.handleGoBack }>Go back</button>
        <img src={this.state.poster_path ?
          `https://image.tmdb.org/t/p/w300${this.state.poster_path}` : "http://dummyimage.com/300x400/99cccc.gif&text=No+picture"} className='singleMovie-img' alt={this.state.title} />
        <h2>{this.state.title} {this.state.release_date}</h2>
        <p></p>
        <h3>Overview</h3>
        <p>{this.state.overview}</p>
        <h3>User score: {this.state.vote_average}</h3>
        <h3>Genres</h3>
        {this.state.genres && (
          this.state.genres.map(({ id, name })=>
        (<li key={id}>{name}</li>)
          ))
        }
        
        <div>
          <hr/>
           <p>Additional information</p>
      <NavLink
        exact
        to={`${this.props.match.url}/cast`}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Cast
      </NavLink>

      <NavLink
        to={`${this.props.match.url}/reviews`}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
              Reviews
      </NavLink>
        <hr/>    
        </div>
        
        <Route path="/movies/:movieId/cast" component={Cast}/>
        <Route path="/movies/:movieId/reviews"  component={Reviews}/>
        
      </>
    )
  }
}

export default MovieDetailsPage;