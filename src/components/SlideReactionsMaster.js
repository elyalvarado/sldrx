import { h, Component } from 'preact'
import ReactionsCounter from './ReactionsCounter'
import ReactionBubbles from './ReactionBubbles'
import { Emojis } from './SlideReactions'

export default class SlideReactionsMaster extends Component {
  state = {
    emojis: null,
    source: null,
    reactions: {},
    incomingReactions: []
  }

  syncState = (data) => {
    // console.log('sync', data)
    if(!data) { return }
    let syncedReactions = {}
    Object.keys(data).filter(emoji => this.state.emojis.includes(emoji)).map(
      emoji => syncedReactions[emoji] = (this.state.reactions[emoji] || 0) + Object.keys(data[emoji]).length
    )
    this.setState({ reactions: { ...this.state.reactions, ...syncedReactions } })
  }

  updateState = (data) => {
    // console.log('update', data)
    const incoming = data.path.split("/")
    incoming.shift() // Remove empty string from 1st slash in the path
    incoming.push(data.data.timestamp)

    // Ignore other emojis
    if(!this.state.emojis.includes(incoming[0])) { return }

    this.setState({
      reactions: { ...this.state.reactions, [incoming[0]]: (this.state.reactions[incoming[0]] || 0) + 1 },
      incomingReactions: [ ...this.state.incomingReactions, incoming ]
    })
    setTimeout(this.clearIncoming, 5100)
  }

  clearIncoming = () => {
    const incomingReactions = [ ...this.state.incomingReactions ]
    incomingReactions.shift()
    this.setState({ incomingReactions })
  }

  parsePutEvent = (event) => {
    // console.log('event',event)
    const data = JSON.parse(event.data)
    data.path === '/'
      ? this.syncState(data.data)
      : this.updateState(data)
  }

  componentDidMount() {
    const emojis = this.props.emojis ? this.props.emojis : Emojis
    const reactions = emojis.reduce((m,i) => { m[i] = 0; return m },{})
    this.setState({ emojis, reactions })
    const source = new EventSource(`${this.props.databaseURL}/reactions.json`)
    source.addEventListener("put", this.parsePutEvent, false)
    this.setState({ source })
  }

  componentWillUnmount() {
    this.state.source.close()
  }

  render(props) {
    return (
      <div style={{fontSize: props.fontSize ? props.fontSize : '30px'}}>
        <ReactionsCounter reactions={this.state.reactions} url={props.url}/>
        <ReactionBubbles incomingReactions={this.state.incomingReactions} />
      </div>
    )
  }
}
