import React from 'react';
import { Link } from 'react-router-dom';


const MovieList = ({ movie,location}) => {
 return  ( <ul>
                    {movie.map(({id,title,release_date}) => (
                        <li key={id}>
                            <Link to={{
                                pathname: `movies/${id}`,
                                state: {
                                from:location,
                            }
                            }}>{title}{release_date}</Link>
                        </li>
                    ))}
                </ul>)
}
export default MovieList;