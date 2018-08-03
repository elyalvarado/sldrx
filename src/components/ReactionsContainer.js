import { h, cloneElement, Component } from "preact";

const style = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '30px',
}

export default class ReactionsContainer extends Component {

  render(props) {
    const childProps = { handleClick: props.handleClick, getCount: props.getCount }
    return (
      <div style={style}>
        { props.children.map(child => cloneElement(child, childProps)) }
      </div>
    );
  }
}