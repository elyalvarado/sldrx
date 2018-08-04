import { cloneElement } from 'preact'

const style = {
  fontSize: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const ReactionsContainer = (props) => (
  <div style={style}>
    { props.children.map(child => cloneElement(child, props)) }
  </div>
)

export default ReactionsContainer
