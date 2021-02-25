import React, { Component} from 'react';
import Searchbar from '../../components/Searchbar';
import MovieList from '../../components/MovieList';
import parseQueryString from '../../utisl/parseQueryString';
import * as API from '../../service/API/API';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MoviesPage extends Component {
 
     state = {
          movies: [],
         
     }
    
   async componentDidMount() {
        const { query } = parseQueryString(this.props.location.search);
        console.log(query);
        if (query) {
           const response = await API.Search(query);
        this.setState({movies:response.data.results } );
        }
    }
     async componentDidUpdate(prevProps, prevState) {
    const {query: prevQuery}=parseQueryString(prevProps.location.serach)
    const {query: nextQuery}=parseQueryString(this.props.location.search)
        if (prevQuery !== nextQuery) {
        const response = await API.Search(nextQuery);
        this.setState({movies:response.data.results } );
       }
        return;
    };
    
    handleChangeQuery=query=> {

        this.props.history.push({
            ...this.props.location,
           // pathname: this.props.location.pathname,
            search: `query=${query}`,
        });
    };
    
    render() {
        const { movies} = this.state;
        const { handleChangeQuery } = this;
        const { location} = this.props;
        return (
      <>
          <Searchbar onSubmit={handleChangeQuery}/>
                {movies ? (
                    <MovieList component={MovieList} {...this.props} movie={movies} location={location}/>
                   
                ) : (<h3>Введите ключевое слово для поиска фильма</h3>)} 
           <ToastContainer autoClose={3000} />       
         </>   
        )
    }
}

export default MoviesPage;