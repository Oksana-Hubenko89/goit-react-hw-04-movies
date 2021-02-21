import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../components/Navigation/Navigation.module.css';
import { Route } from 'react-router-dom';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import * as API from '../../service/API/API';

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
       
        const { movieId } = this.props.match.params;
        const response = await API.Details(movieId)
        this.setState({...response.data }); 
        
    }
      handleGoBack = () => {
      this.props.history.push(this.props.location?.state?.from || "/movies")  
    }
  
  render() {
    const imagePath = "http://dummyimage.com/300x400/99cccc.gif&text=No+picture";
    const { title, vote_average, overview, release_date, poster_path } = this.state;
    const { url } = this.props.match;
    return (
      <>
         <button type="button" onClick={this.handleGoBack }>Go back</button>
        <img src={poster_path ?
          `https://image.tmdb.org/t/p/w300${poster_path}` : imagePath} className='singleMovie-img' alt={title} />
        <h2>{title} {release_date}</h2>
        <p></p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>User score: {vote_average}</h3>
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
        to={`${url}/cast`}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Cast
      </NavLink>

      <NavLink
        to={`${url}/reviews`}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
              Reviews
      </NavLink>
        <hr/>    
        </div>
        
        <Route path="/movies/:movieId/cast" component={Cast} {...this.props}/>
        <Route path="/movies/:movieId/reviews"  component={Reviews} {...this.props}/>
        
      </>
    )
  }
}

export default MovieDetailsPage;