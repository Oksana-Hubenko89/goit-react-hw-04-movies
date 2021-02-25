import React, {Component} from 'react';
import * as API from '../../service/API/API';

class Cast extends Component {
  state = {
    cast: [],
  };
   
  async componentDidMount() {
    //this.props.history.replace(this.props.history.location)
    console.log(this.props.match.params.movieId)
    const { movieId } = this.props.match.params;
    
    const response = await API.CastApi(movieId);
    this.setState({ ...response.data});
    console.log(response.data)
  }
   
  render() {
    return (
      <>
         {this.state.cast.length>0?(
                <ul onClick={this.props.handleGoBack} >
                    {this.state.cast.map(({id,name,character,profile_path}) => (
                        <li key={id} >
        <img src={profile_path ?
          `https://image.tmdb.org/t/p/w300${profile_path}` : "http://dummyimage.com/300x400/99cccc.gif&text=No+picture"} className='imgCast' alt={name} />
        <p>{name} </p>
        <p>Character: {character}</p>
                        </li>
                    ))}
                </ul>
               ):(<h3>Отсутствует информиация</h3>)} 
      </>
    )
  }
}
export default Cast;
