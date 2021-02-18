import React, {Component} from 'react';
import Axios from 'axios';

class Reviews extends Component {
  state = {
      results: [],
  };
   
  async componentDidMount() {
    
    const { movieId } = this.props.match.params;
    
    const response = await Axios.get(` https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=461700ffddee4ce5239e6dda1aad5503`);
    this.setState({ ...response.data});
    console.log(response.data.results)
  }
   
  render() {
    return (
      <>
        {this.state.results.length === 0 ? (<h3>Отсутствует информиация</h3>) :
        (
                <ul>
                    {this.state.results.map(({id,author,content}) => (
                        <li key={id}>
        <h2>Author: {author} </h2>
        <p>Content: {content}</p>
                        </li>
                    ))}
                </ul>
               )} 
      </>
    )
  }
}
export default Reviews;
