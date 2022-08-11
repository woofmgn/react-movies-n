import {Movie} from '../components/Movie'

function MoviesList(props) {
    const {movies} = props;

    return (
        <div className="movies">
            {movies.map(movie => {
                return <Movie key={movie.imdbID} {...movie}/>
            })}
        </div>
    )
}

export {MoviesList};