import s from './Searchbar.module.css';
import f from './SearchForm.module.css';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import * as API from '../../service/API/API';
//import { Link} from 'react-router-dom';
import MovieList from '../../components/MovieList';

class MoviesPage extends Component {
  
     state = {
         movieName: " ",
         movie:[],
     }
    componentDidMount() {
        console.log('App componentDidMount');
        const movie = sessionStorage.getItem("movieName");
        const parsedMovie = JSON.parse(movie);

        if (parsedMovie) {
          console.log('App componentDidMount movie');
                this.setState({ movieName:parsedMovie});
          }
     
    };
  
    async componentDidUpdate(prevProps, prevState) {
        console.log('App componentDidUpdate');

        if (this.state.movieName !== prevState.movieName) {
         
         localStorage.setItem('movieName', JSON.stringify(this.state.movieName));
        }
        ;
        const response = await API.Search(this.state.movieName);
        this.setState({movie:response.data.results } );
    };

    handleNameChange = e => {
            this.setState({ movieName: e.currentTarget.value.toLowerCase() });
        };

    async handleSubmit(e){
        e.preventDefault();

        if (this.state.movieName.trim() === '') {
           await  toast.error('Введите имя картинки');
            return;
        }
       this.setState({ movieName: e.currentTarget.value.toLowerCase() }); 
        
    };
    
    render() {
        const { movie, movieName} = this.state;
        const { handleSubmit, handleNameChange } = this;
        const { location } = this.props;
        return (
      <>
            <header className={s.Searchbar}>
                <form className={f.SearchForm}
                  
                >
                    <button type="button" className={f.SearchFormButton} onSubmit={handleSubmit}  >
                        <span className={f.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={f.SearchFormInput}
                        type="text"
                       //autoComplete="off"
                       autoFocus
                       value={movieName}
                       placeholder="Search movie"
                       onChange={handleNameChange}
                    />
                </form>
            </header>
            

                {movie ? (
                    <MovieList movie={movie} location={location}/>
               ):(<h3>Отсутствует информиация</h3>) } 
         </>   
        )
    }
}

export default MoviesPage;