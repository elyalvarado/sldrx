import SlideReactionsClient from './SlideReactionsClient'
import SlideReactionsMaster from './SlideReactionsMaster'

// Default set of valid emojis for the widgets if no emojis prop is passed
export const Emojis = [ "👍", "🤔", "😡" ]

const SlideReactions = (props) => {
  const { dataWidgetSldrx, ...passProps } = props
  return (
    dataWidgetSldrx == 'master'
    ? <SlideReactionsMaster {...passProps} />
    : <SlideReactionsClient {...passProps} />
  )
}

export default SlideReactions
