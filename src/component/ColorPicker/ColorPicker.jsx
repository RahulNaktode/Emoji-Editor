import './ColorPicker.css'

function ColorPicker({bgColor, setBgColor}) {
  return (
    <div className='color-option' onClick={() => {
        setBgColor(bgColor)
    }}
    style={{backgroundColor: bgColor}}
    > 
    </div>
  )
}

export default ColorPicker
