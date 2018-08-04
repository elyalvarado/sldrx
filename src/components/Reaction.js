import { h, Component } from "preact"
import ReactionButton from './ReactionButton'

export default class Reaction extends Component {
  currentUpdater = null
  state = {
    clickCount: 0,
  }

  // Updates the count synchronously, calls the passed click handler and schedules a refresh from the database
  handleClick = (event) => {
    this.setState({ clickCount: this.state.clickCount + 1 })
    this.props.handleClick(this.props.children[0])
    this.refreshCount()
    return true
  }

  // This is a dampened way of calling the RT version of the same method only once every half second
  // if upon calling there was a previously scheduled update, then it clears it out before setting a 
  // new one
  refreshCount = () => {
    if(this.currentUpdater) { 
      clearTimeout(this.currentUpdater)
      this.currentUpdater = null
    }
    this.currentUpdater = setTimeout(this.refreshCountRT, 500)
  }

  // Calls the passed getCount function and uses its return value to update the state
  refreshCountRT = () => {
    this.props.getCount(this.props.children[0]).then(clickCount => {
      this.setState({ clickCount })
    })
  }

  componentDidMount() {
    this.refreshCountRT()
  }

  render(props) {
    return(
      <ReactionButton handleClick={this.handleClick} emoji={props.children} count={this.state.clickCount} />
    )
  }
}
