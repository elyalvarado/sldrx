import { h, cloneElement, Component } from "preact";

export default class ReactionsContainer extends Component {
  render(props) {
    const style = {
      fontSize: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

    return (
      <div style={style}>
        { props.children.map(child => cloneElement(child, this.props)) }
      </div>
    )
  }
}
