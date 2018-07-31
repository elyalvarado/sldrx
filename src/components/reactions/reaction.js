import { h, Component } from "preact";

const style = {
  cursor: 'pointer',
  border: '1px red solid',
  padding: '2px 10px 0px',
  borderRadius: '5px',
  margin: '3px',
}

const hoverStyle = {
  ...style,
  backgroundColor: 'gray'
}

export default class Reaction extends Component {
  currentUpdater = null
  state = {
    hover: false,
    clickCount: 0,
  }

  // Updates the hover state depending on the type of the passed event
  handleFocus = (event) => {
    this.setState({ hover: event.type == 'mouseover' })
  }

  // Updates the count synchronously, calls the passed click handler and schedules a refresh from the database
  handleClick = (event) => {
    this.setState({ clickCount: this.state.clickCount + 1 })
    this.props.handleClick(this.props.children[0])
    this.refreshCount()
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
      <span 
        style={this.state.hover ? hoverStyle : style}
        onMouseOver={this.handleFocus}
        onMouseOut={this.handleFocus}
        onClick={this.handleClick}
      >
        {props.children}
        <span>{this.state.clickCount}</span>
      </span>
    )
  }
}
