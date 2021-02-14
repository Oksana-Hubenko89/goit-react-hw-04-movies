
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeading from '../../components/PageHeading';
import * as movieShelfAPI from '../../service/API/API';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieShelfAPI.fetchGetMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <PageHeading text={`Movie ${movieId}`} />

      {movie && (
        <>
          <img src={movie.imgUrl} alt={movie.title} />
          <h2>{movie.original_title} ({movie.release_date})</h2>
                  <p>{movie.overview}</p>
                  <p>{movie.genres.name}</p>
        </>
      )}
    </>
  );
}