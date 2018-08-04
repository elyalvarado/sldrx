import { cloneElement } from 'preact'

const style = {
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
