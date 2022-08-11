import React from "react";

class Search extends React.Component {
    state = {
        search: '',
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
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export {Search};