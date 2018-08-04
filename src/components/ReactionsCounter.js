import { h, Component } from 'preact'
import ReactionsContainer from './ReactionsContainer'
import ReactionButton from './ReactionButton'

const noop = () => {}

export default class ReactionsCounter extends Component {
  render(props) {
    const reactions = this.props.reactions
    const emojis = Object.keys(reactions)
    const style = {
      fontSize: '30px',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }

    return (
      <div style={style}>
        <div>SldRX</div>
        <ReactionsContainer handleClick={noop} >
          {emojis.map(
            emoji => (
              <ReactionButton key={emoji} emoji={emoji} count={reactions[emoji]} />
            )
          )}
        </ReactionsContainer>
      </div>
    )
  }
}
