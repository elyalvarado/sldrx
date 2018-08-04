import styles from './ReactionButton.scss'

const ReactionButton = (props) => (
  <button
    className={styles.reactionButton}
    onClick={props.handleClick}
  >
    <span className={styles.reactionEmoji}>{props.emoji}</span>
    <span className={styles.reactionNumber}>{props.count}</span>
  </button>
)

export default ReactionButton
