import { h, Component } from "preact";
import SlideReactionsClient from './SlideReactionsClient'
import SlideReactionsMaster from './SlideReactionsMaster'

export default class SlideReactions extends Component {

  render(props) {
    const { dataWidgetSldrx, ...passProps } = this.props
    return (
      dataWidgetSldrx == 'master'
        ? <SlideReactionsMaster {...passProps} />
        : <SlideReactionsClient {...passProps} />
    );
  }
}
