import { h, Component } from "preact";
import SlideReactions from './SlideReactions'
import Reaction from './reaction'
// import "./style.scss";

export default class App extends Component {
  handleClick = (emoji) => {
    console.log('clicked:', emoji)
  }

  render(props) {
    return (
      <SlideReactions handleClick={this.handleClick}>
        <Reaction>👍</Reaction>
        <Reaction>🤔</Reaction>
        <Reaction>😡</Reaction>
      </SlideReactions>
    );
  }
}

