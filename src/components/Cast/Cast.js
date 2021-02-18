import React, {Component} from 'react';
import Axios from 'axios';

class Cast extends Component {
  state = {
    cast: null,
  };
   
  async componentDidMount() {
    console.log(this.props.match.params.movieId)
    const { movieId } = this.props.match.params;
    
    const response = await Axios.get(` https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=461700ffddee4ce5239e6dda1aad5503`);
    this.setState({ ...response.data});
    console.log(response.data)
  }
   
  render() {
    return (
      <>
         {this.state.cast?(
                <ul>
                    {this.state.cast.map(({id,name,character,profile_path}) => (
                        <li key={id}>
        <img src={profile_path ?
          `https://image.tmdb.org/t/p/w300${profile_path}` : "http://dummyimage.com/300x400/99cccc.gif&text=No+picture"} className='imgCast' alt={name} />
        <h2>{name} </h2>
        <h2>Character: {character}</h2>
                        </li>
                    ))}
                </ul>
               ):(<h3>Отсутствует информиация</h3>)} 
      </>
    )
  }
}
export default Cast;
