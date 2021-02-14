// import { Component } from 'react';
import { lazy, Suspense } from 'react';
import './App.css';
import React from 'react';
import { Switch, Route} from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import HomePage from '../views/HomePage';
//import MoviesPage from '../views/MoviesPage';
//import MovieDetailsPage from '../views/MovieDetailsPage';
//import Cast from '../views/Cast';
//import Reviews from '../views/Reviews';
import AppBar from '../components/AppBar';
import Container from '../components/Container';


const HomePage = lazy(() =>
  import('../views/HomePage' /* webpackChunkName: "home-view" */),
);
const MoviesPage = lazy(() =>
  import('../views/MoviesPage' /* webpackChunkName: "movie-view" */),
);
const MovieDetailsPage = lazy(() =>
  import('../views/MovieDetailsPage'),
);
const Cast = lazy(() =>
  import('../views/Cast'),
);
const Reviews = lazy(() =>
  import('../views/Reviews'),
);
const NotFoundView = lazy(() =>
  import('../views/NotFoundView'));


const App = () => (
  <div>
    <Container>
       <AppBar />
     <Suspense fallback={<h1>ЗАГРУЖАЕМ МАРШРУТ...</h1>}>
    <Switch>
      <Route path="/" exact ><HomePage/></Route>
      <Route path="/movies"  exact ><MoviesPage/></Route> 
      <Route path="/movies/:movieId"><MovieDetailsPage/></Route> 
      <Route path="/movies/:movieId/cast"> <Cast/></Route> 
      <Route path="/movies/:movieId/reviews"><Reviews/> </Route>
      <Route>
            <NotFoundView />
      </Route>
      </Switch>
      </Suspense>
      </Container>
  </div>
);



export default App;
