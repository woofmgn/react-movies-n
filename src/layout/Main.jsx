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
    this.setState({loading: true})
    fetch('http://www.omdbapi.com/?apikey=6a9aae1a&s=terminator')
      .then(res => res.json())
      .then(data => this.setState({movies: data.Search, loading: false}))
  }

  searchMovie = (dataSearch, type = 'all') => {
    this.setState({loading: true});
    fetch(`http://www.omdbapi.com/?apikey=6a9aae1a&s=${dataSearch}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(res => res.json())
      .then(data => this.setState({movies: data.Search, loading: false}))
  }

  render() {
    const {movies, loading} = this.state;

    return (
      <main className="container content">
        <Search searchMovie={this.searchMovie}/>
        {loading ? <Preloader/> : <MoviesList movies={movies}/>}     
      </main>
    )
    }
}

export {Main};