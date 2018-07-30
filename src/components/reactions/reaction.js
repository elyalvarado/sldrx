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
  state = {
    hover: false,
    clickCount: 0,
  }

  handleFocus = (event) => {
    this.setState({ hover: event.type == 'mouseover' })
  }

  handleClick = (event) => {
    this.setState({ clickCount: this.state.clickCount + 1 })
    this.props.handleClick(this.props.children[0])
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
      </span>
    )
  }
}
