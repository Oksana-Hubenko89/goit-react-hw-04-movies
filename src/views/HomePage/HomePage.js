import React, {Component} from 'react'
import * as API from '../../service/API/API';
import { withRouter} from 'react-router-dom';
import PageHeading from '../../components/PageHeading';
import MovieList from '../../components/MovieList'


class HomePage extends Component {

    state = {
        movieTrending: [],
    };
   
    async componentDidMount() {
       
            const response = await API.Trending();
            console.log(response.data.results);
            this.setState({ movieTrending: response.data.results })
        
        
    } 

    render() {
      const {movieTrending} =this.state;
        const { location } = this.props;
        return (
            <>
                <PageHeading text="Movies Trending" />

                {movieTrending && (
                    <MovieList movie={movieTrending} location={location}/>
               )} 
            </>
        );
    }
}      
    
export default withRouter(HomePage);


