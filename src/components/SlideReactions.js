import SlideReactionsClient from './SlideReactionsClient'
import SlideReactionsMaster from './SlideReactionsMaster'

const SlideReactions = (props) => {
  const { dataWidgetSldrx, ...passProps } = props
  return (
    dataWidgetSldrx == 'master'
    ? <SlideReactionsMaster {...passProps} />
    : <SlideReactionsClient {...passProps} />
  )
}

export default SlideReactions
