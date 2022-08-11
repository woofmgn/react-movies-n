import React from "react";

class Search extends React.Component {
  state = {
    search: '',
    type: 'all'
  }

  handleKey = (evt) => {
    if(evt.key === 'Enter') {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  }

  handleFilter = (evt) => {
    this.setState(() => ({type: evt.target.dataset.type}), () => {
      this.props.searchMovie(this.state.search, this.state.type);
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input 
              placeholder="search" 
              type="search" 
              className="validate"
              value={this.state.search}
              onChange={(evt) => this.setState({search: evt.target.value})}
              onKeyDown={this.handleKey}
              />
            <button 
              className="btn search-btn" 
              onClick={() => this.props.searchMovie(this.state.search, this.state.type)}>Search
            </button>
          </div>
          <div>
            <label>
              <input 
                className="with-gap" 
                name="group3" 
                type="radio" 
                data-type="all" 
                onChange={this.handleFilter}
                checked={this.state.type === 'all'}
                />
                <span>All</span>
            </label>
            <label>
              <input 
                className="with-gap" 
                name="group3" 
                type="radio" 
                data-type="movie"
                onChange={this.handleFilter}
                checked={this.state.type === 'movie'}
                />
                <span>only movies</span>
            </label>
            <label>
              <input 
                className="with-gap" 
                name="group3" 
                type="radio" 
                data-type="series" 
                onChange={this.handleFilter}
                checked={this.state.type === 'series'}
                />
                <span>only series</span>
            </label>
          </div>
        </div>
      </div>
      )
  }
}

export {Search};