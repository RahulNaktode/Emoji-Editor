import { useState } from 'react'
import './EmojiEditor.css'
import EmojiCard from '../component/EmojiCard'

function EmojiEditor() {

    const [emoji, setEmoji] = useState('🦁');
    const [slider, setSlider] = useState(50);
    return (
        <div>
            <div className="min-h-screen w-full relative">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: `linear-gradient(135deg, #F8BBD9 0%, #FDD5B4 25%, #FFF2CC 50%, #E1F5FE 75%, #BBDEFB 100%)`,
                    }}
                />
                <div className='container'>
                <h1 className='heading'>Playing with Emoji</h1>
                <p className='p'>This is Simple Emoji app</p>

                <div className='card'
                style={{
              fontSize: `${slider}px`
            }}
                >
                    {emoji}
                </div>
                <div className='slider-container'>
                    <input type="range" min="0" max="100" className='slider' 
                    onChange={(e) => {
                setSlider(e.target.value)
              }}
              value={slider}
                    />
                </div>

                <div className='emoji-card'>
                    <EmojiCard emoji={'🐯'} setEmoji={setEmoji} />
                    <EmojiCard emoji={'🐵'} setEmoji={setEmoji} />
                    <EmojiCard emoji={'🐶'} setEmoji={setEmoji} />
                    <EmojiCard emoji={'🐺'} setEmoji={setEmoji} />
                    <EmojiCard emoji={'🦝'} setEmoji={setEmoji} />
                    <EmojiCard emoji={'🦊'} setEmoji={setEmoji} />
                    <EmojiCard emoji={'🐷'} setEmoji={setEmoji} />
                    <EmojiCard emoji={'🐮'} setEmoji={setEmoji} />
                    <EmojiCard emoji={'🐻'} setEmoji={setEmoji} />
                    <EmojiCard emoji={'🐴'} setEmoji={setEmoji} />
                    <EmojiCard emoji={'🐰'} setEmoji={setEmoji} />
                    <EmojiCard emoji={'🐹'} setEmoji={setEmoji} />
                    <EmojiCard emoji={'🦒'} setEmoji={setEmoji} />
                    <EmojiCard emoji={'🐻‍❄️'} setEmoji={setEmoji} />
                    <EmojiCard emoji={'🐨'} setEmoji={setEmoji} />
                    <EmojiCard emoji={'🐸'} setEmoji={setEmoji} />
                    <EmojiCard emoji={'🦓'} setEmoji={setEmoji} />
                    <EmojiCard emoji={'🫎'} setEmoji={setEmoji} />
                </div>
                </div>
            </div>
        </div>
    )
}

export default EmojiEditor
