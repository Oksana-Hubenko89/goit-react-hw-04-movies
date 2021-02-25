import React, {Component} from 'react';
import * as API from '../../service/API/API';

class Reviews extends Component {
  state = {
      results: [],
  };
   
  async componentDidMount() {
    //this.props.history.replace(this.props.history.location)
    const { movieId } = this.props.match.params;
    
    const response = await API.ReviewsApi(movieId)
    this.setState({ ...response.data});
    console.log(response.data.results)
  }
   
  render() {
    const { results } = this.state;
    return (
      <>
               {results.length === 0 ? (<h3>Отсутствует информиация</h3>) :
        (
                <ul  onClick={this.props.onClick}>
                    {results.map(({id,author,content}) => (
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
