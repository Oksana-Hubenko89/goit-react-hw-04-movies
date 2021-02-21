// import { Component } from 'react';
import { lazy, Suspense } from 'react';
import './App.css';
import React from 'react';
import { Switch, Route} from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from '../components/AppBar';
import Container from '../components/Container';


const HomePage = lazy(() =>
  import('../views/HomePage' /* webpackChunkName: "home-view" */),
);
const MoviesPage = lazy(() =>
  import('../views/MoviesPage' /* webpackChunkName: "movie-view" */),
);
const MovieDetailsPage = lazy(() =>
  import('../views/MovieDetailsPage' /* webpackChunkName: "movie-detali-page" */),
);
const NotFoundView = lazy(() =>
  import('../views/NotFoundView'));


const App = () => (
  <div>
    <Container>
     <AppBar />
     <Suspense fallback={<h1>ЗАГРУЖАЕМ МАРШРУТ...</h1>}>
    <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/movies/:movieId" component={MovieDetailsPage}></Route>
          <Route path="/movies" exact component={MoviesPage}></Route> 
      <Route>
            <NotFoundView />
      </Route>
      </Switch>
      </Suspense>
      </Container>
  </div>
);

export default App;
