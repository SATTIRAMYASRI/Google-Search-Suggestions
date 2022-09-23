// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsItem, arrowClicked} = props
  const {id, suggestion} = suggestionsItem

  const btnClicked = () => {
    arrowClicked(suggestion)
  }
  return (
    <li className="li-container">
      <p className="suggestion-text">{suggestion}</p>
      <button className="btn-container" onClick={btnClicked}>
        <img
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          className="arrow-img"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
