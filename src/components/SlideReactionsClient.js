import { h, Component } from 'preact'
import ReactionsContainer from './ReactionsContainer'
import Reaction from './reaction'
import { Emojis } from './SlideReactions'

const REFRESH_TOKEN_KEY = 'refreshToken'

export default class SlideReactionsClient extends Component {
  state = { user: null, }

  // updates the user in the state and local storage, and schedules a refresh before expire
  setUser = (user) => {
    this.setState({ user })
    localStorage.setItem(REFRESH_TOKEN_KEY, user.refreshToken)
    setTimeout(this.refreshAuth, parseInt(user.expiresIn)*1000 - 1000)
  }

  // Calls the signup new user endpoint for anonymous authentication to create a new user
  signupNewUser = async () => {
    const url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${this.props.apiKey}`
    const data = { returnSecureToken: true }
    const response = await fetch(url, { method: 'POST', body: JSON.stringify(data) })
    const { kind, ...user } = await response.json()
    this.setUser(user)
  }

  // Uses the refresh token to update the users credentials
  refreshAuth = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)
    const url =  `https://securetoken.googleapis.com/v1/token?key=${this.props.apiKey}`
    const data = { "grant_type": "refresh_token", "refresh_token": refreshToken }
    const response = await fetch(url, { method: 'POST', body: JSON.stringify(data) })
    const responseData = await response.json()
    // The response format of this endpoint is completely different than the signup one
    // hence the weird dictionary translation
    const user = { 
      expiresIn: responseData.expires_in,
      idToken: responseData.id_token,
      localId: responseData.user_id,
      refreshToken: responseData.refresh_token,
    }
    this.setUser(user)
  }

  // If there is refresh token in the local storage, then refresh the credentials
  // else sign up as a new user
  signupOrRefreshAuth = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)
    if(refreshToken && refreshToken !== "undefined") {
      this.refreshAuth()
    } else {
      this.signupNewUser()
    }
  }

  // Gets the count of how many reactions for the emoji the user has
  getCount  = async (emoji) => {
    let count
    // console.debug(`getCount ${emoji}`,'Called')
    // If the user is logged in query firebase database
    // else call again after waiting 1 second
    if(this.state.user) { 
      // console.debug(`getCount ${emoji}`,'User logged in')
      const url = `${this.props.databaseURL}/reactions/${emoji}.json?orderBy="userId"&equalTo="${this.state.user.localId}"`
      const response = await fetch(url)
      const data = await response.json()
      count = Object.keys(data).length
      // console.debug(`getCount ${emoji}`,`Count: ${count}`)
    } else {
      // console.debug(`getCount ${emoji}`,'User not yet logeed in. Sleeping 1s')
      const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
      await sleep(1000)
      // console.debug(`getCount ${emoji}`,'Done sleeping. Calling again')
      count = await this.getCount(emoji)
      // console.debug(`getCount ${emoji}`,`After Calling again Count: ${count}`)
    }
    return count
  }

  // Adds a new reaction object to the emoji tree
  increment = async (emoji) => {
    const url = `${this.props.databaseURL}/reactions/${emoji}.json?auth=${this.state.user.idToken}`
    const data = { timestamp: Date.now(), userId: this.state.user.localId }
    const response = await fetch(url, { method: 'POST', body: JSON.stringify(data) })
    await response.json()
  }

  // Makes sure the user is logged in and calls increment, else waits 1s before calling itself again
  handleClick = (emoji) => {
    // console.log('handleClick', emoji)
    if(this.state.user) {
      // console.log('handleClick','User logged in, incrementing counter')
      this.increment(emoji)
    } else {
      // Wait 1sec and try to call again
      // console.log('handleClick','User not yet logged in, waiting 1s to retry')
      setTimeout(() => this.handleClick(emoji), 1000)
    }
  }

  componentDidMount() {
    this.signupOrRefreshAuth()
  }

  render(props) {
    const style={
      fontSize: props.fontSize ? props.fontSize : '30px',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }

    const emojis = props.emojis ? props.emojis : Emojis

    return (
      <div style={style}>
        <ReactionsContainer handleClick={this.handleClick} getCount={this.getCount} >
          {emojis.map(emoji => <Reaction>{emoji}</Reaction>)}
        </ReactionsContainer>
      </div>
    )
  }
}

