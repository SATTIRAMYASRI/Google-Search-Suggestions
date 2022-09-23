// Write your code here

import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  userEnteringInput = event => {
    this.setState({searchInput: event.target.value})
  }

  arrowBtnClicked = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const filteredSuggestionsList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="bg-alignment-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-img"
          />
          <div className="card-container">
            <div className="searchInput-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-img"
                alt="search icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-input"
                onChange={this.userEnteringInput}
                value={searchInput}
              />
            </div>
            <ul className="ul-container">
              {filteredSuggestionsList.map(listItem => (
                <SuggestionItem
                  suggestionsItem={listItem}
                  key={listItem.id}
                  arrowClicked={this.arrowBtnClicked}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
