import { useState } from 'react'
import './Home.css'
import EmojiCard from '../component/EmojiCard/EmojiCard'
import RotatedImg from './rotation.png'
import ColorPicker from '../component/ColorPicker/ColorPicker';

function Home() {

    const [emoji, setEmoji] = useState('🦁');
    const [slider, setSlider] = useState(50);
    const [bgColor, setBgColor] = useState('#ffffff');
    const [rotate, setRotate] = useState(0);

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
              fontSize: `${slider}px`,
              backgroundColor: bgColor,
            }}
                >
                    <span style={{transform:`rotate(${rotate}deg)`}}>{emoji}</span>
                </div>
                <div className='slider-container'>
                    <input type="range" min="0" max="100" className='slider' 
                    onChange={(e) => {
                setSlider(e.target.value)
              }}
              value={slider}
                    />
                </div>


<div className='card-options'>
                <div className='emoji-option'>
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

                <div className='rotation'>
                    <img src={RotatedImg} className='rotate-img'  
                    onClick={() => {
                        setRotate(rotate + 30);
                    }}
                    />
                </div>

                <div className='color-picker'>
                    <ColorPicker bgColor={'#ff0000'} setBgColor={setBgColor} />
                    <ColorPicker bgColor={'#00b300'} setBgColor={setBgColor} />
                    <ColorPicker bgColor={'#b3ffb3'} setBgColor={setBgColor} />
                    <ColorPicker bgColor={'#ffc0cb'} setBgColor={setBgColor} />
                    <ColorPicker bgColor={'#0000ff'} setBgColor={setBgColor} />
                    <ColorPicker bgColor={'#b3b3ff'} setBgColor={setBgColor} />
                    <ColorPicker bgColor={'#e6e600'} setBgColor={setBgColor} />
                    <ColorPicker bgColor={'#4da6ff'} setBgColor={setBgColor} />
                    <ColorPicker bgColor={'#99cc00'} setBgColor={setBgColor} />
                    <ColorPicker bgColor={'#ff33bb'} setBgColor={setBgColor} />
                    <ColorPicker bgColor={'#990000'} setBgColor={setBgColor} />
                    <ColorPicker bgColor={'#66ffff'} setBgColor={setBgColor} />
                    <ColorPicker bgColor={'#ff9900'} setBgColor={setBgColor} />
                    <ColorPicker bgColor={'#990099'} setBgColor={setBgColor} />
                    <ColorPicker bgColor={'#cc9900'} setBgColor={setBgColor} />
                    <ColorPicker bgColor={'#8a00e6'} setBgColor={setBgColor} />
                    <ColorPicker bgColor={'#c0c0c0'} setBgColor={setBgColor} />
                    <ColorPicker bgColor={'#ffd700'} setBgColor={setBgColor} />
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home
