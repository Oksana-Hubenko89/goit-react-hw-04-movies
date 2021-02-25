import React, {Component, lazy} from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../components/Navigation/Navigation.module.css';
import { Route } from 'react-router-dom';
import * as API from '../../service/API/API';
import s from './MovieDetailsPage.module.css'

const Cast = lazy(() =>
  import('../../components/Cast' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('../../components/Reviews' /* webpackChunkName: "reviews" */),
);

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
    vote_average: null,
    locationFrom:null,
  };
   
  async componentDidMount() {
    const { location } = this.props;
    const locationFrom = location?.state?.from?location.state.from:null;
    this.setState({ locationFrom });
    
        const { movieId } = this.props.match.params;
        const response = await API.Details(movieId)
        this.setState({...response.data }); 
  }
  
  handleGoBack = () => {
      this.props.history.push(this.props.location?.state?.from || "/")  
  }
  
  render() {
    const imagePath = "http://dummyimage.com/300x400/99cccc.gif&text=No+picture";
    const { title, vote_average, overview, release_date, poster_path, locationFrom} = this.state;
    const { match} = this.props;
    
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>Go back</button>
        <div className={s.Position}>
        <img src={poster_path ?
          `https://image.tmdb.org/t/p/w300${poster_path}` : imagePath} className='singleMovie-img' alt={title} />
        <div className={s.right}>
        <h2>{title} {release_date}</h2>
        
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>User score: {vote_average}</h3>
        <h3>Genres</h3>
        {this.state.genres && (
          this.state.genres.map(({ id, name })=>
        (<li key={id}>{name}</li>)
          ))
        }
          </div>
          </div>
        <div>
          <hr/>
           <p>Additional information</p>
      <NavLink
            to={{pathname:`${match.url}/cast`,
                state: {
            from:locationFrom}
            }}
            className={styles.link}
            activeClassName={styles.activeLink} 
            
      >
        Cast
      </NavLink>

      <NavLink
            to={{
              pathname: `${match.url}/reviews`,
              state: {
              from: locationFrom}
            }}
        className={styles.link}
        activeClassName={styles.activeLink} 
      >
              Reviews
      </NavLink>
        <hr/>    
        </div>
        
        <Route path={`${match.path}/cast`} component={Cast} {...this.props} onClick={this.handleGoBack }/>
        <Route path={`${match.path}/reviews`}  component={Reviews} {...this.props} onClick={this.handleGoBack }/>
        
      </>
    )
  }
}

export default MovieDetailsPage;