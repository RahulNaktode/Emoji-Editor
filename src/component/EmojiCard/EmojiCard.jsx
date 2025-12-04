import './EmojiCard.css'

function EmojiCard({emoji, setEmoji}) {
  return (
    <div className='option' onClick={() => {
        setEmoji(emoji)
    }}>
      {emoji}
    </div>
  )
}

export default EmojiCard
