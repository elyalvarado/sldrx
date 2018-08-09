import ReactionsContainer from './ReactionsContainer'
import ReactionButton from './ReactionButton'

const noop = () => {}

const style = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: '"HelveticaNeue-CondensedBold", "HelveticaNeueBoldCondensed", "HelveticaNeue-Bold-Condensed", "Helvetica Neue Bold Condensed", "HelveticaNeueBold", "HelveticaNeue-Bold", "Helvetica Neue Bold", "HelveticaNeue", "Helvetica Neue", "TeXGyreHerosCnBold", "Helvetica", "Tahoma", "Geneva", "Arial Narrow", "Arial", sans-serif',
}

const ReactionsCounter = (props) => (
  <div style={style}>
    <div>{props.url || 'SldRX'}</div>
    <ReactionsContainer handleClick={noop} >
      {Object.keys(props.reactions).map(
        emoji => (
          <ReactionButton key={emoji} emoji={emoji} count={props.reactions[emoji]} />
        )
      )}
    </ReactionsContainer>
  </div>
)

export default ReactionsCounter
