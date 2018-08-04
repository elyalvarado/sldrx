import styles from './ReactionBubbles.scss'

const ReactionBubbles = (props) => (
  <div className={styles.bubbles} >
    {
      props.incomingReactions.map(r => 
        (
          <span key={r[1]} className={`${r[2] % 2 === 0 ? styles.x1 : styles.x2} ${styles.bubble}`}>
            {r[0]}
          </span>
        )
      )
    }
  </div>
)

export default ReactionBubbles
