import React from "react"
import {MoviesList} from '../components/MoviesList'
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search'

class Main extends React.Component {
  state = {
    movies: [],
    loading: true
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=6a9aae1a&s=terminator')
      .then(res => res.json())
      .then(data => this.setState({movies: data.Search}))
  }

  searchMovie = (dataSearch, type = 'all') => {
    fetch(`http://www.omdbapi.com/?apikey=6a9aae1a&s=${dataSearch}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(res => res.json())
      .then(data => this.setState({movies: data.Search}))
  }

  render() {
    const {movies} = this.state;

    return (
      <main className="container content">
        <Search searchMovie={this.searchMovie}/>
        {movies.length ? (
          <MoviesList movies={this.state.movies}/>
          ) : (
          <Preloader/>
          )}     
      </main>
    )
    }
}

export {Main};