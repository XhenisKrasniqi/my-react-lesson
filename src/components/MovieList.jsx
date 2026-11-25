import React from 'react'
import MovieCard from './MovieCard'
import movies from '../data/movies'
function MovieList() {

  return (
    <section>
        <div className="section-header">
            <p>tonight</p>
            <h2>Movie</h2>
            <p>{movies.length} movies</p>
        </div>
        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard
                key={movie.Id}
                title={movie.title}
                category={movie.category}
                time={movie.time}
                hall={movie.hall}
                price={movie.price}
                available={movie.available}
                style={movie.style} 
                />
            ))}
        </div>
    </section>
  )
}

export default MovieList