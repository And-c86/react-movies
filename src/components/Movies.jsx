import React from 'react';
import Movie from '../components/Movie';

export default function Movies(props) {
    const { movies = [] } = props;

    return <div className="movies">
        {movies.length ?
            movies.map(m => (
                <Movie key={m.imdbID} {...m} />
            )) :
            <h5 className="blue-grey-text text-lighten-3">Nothing found</h5>}
    </div>
}