import React, {Component} from 'react';
import Axios from 'axios';

class Reviews extends Component {
  state = {
      results: null,
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
         {this.state.results?(
                <ul>
                    {this.state.results.map(({id,author,content}) => (
                        <li key={id}>
        <h2>Author: {author} </h2>
        <p>Content: {content}</p>
                        </li>
                    ))}
                </ul>
               ):(<h3>Отсутствует информиация</h3>)} 
      </>
    )
  }
}
export default Reviews;
