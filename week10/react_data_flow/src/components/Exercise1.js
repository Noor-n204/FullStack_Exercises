import React, { useState } from 'react'

export default function Exercise1() {
    const imgOBG = {
        images: [
      "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
    ],
        currentImg: 0
    }

    const [img , setImg] = useState(imgOBG.currentImg)

    function shiftImageBack(){
        if(img>0){
            setImg(img -1)
        }
    }

    function shiftImageForward(){
        if(img< imgOBG.images.length -1){
            setImg(img +1)
        }
    }
  return (
    <div>
      <img src = {imgOBG.images[img]}></img>
      <button onClick={shiftImageBack}>Back</button>
      <button onClick={shiftImageForward}>Forward</button>

    </div>
  )
}

