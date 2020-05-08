import React from 'react'
import './BlockPicture.css'
import FullPic0 from '../../../../resources/img/abakus/number0.png'
import FullPic1 from '../../../../resources/img/abakus/number1.png'
import FullPic2 from '../../../../resources/img/abakus/number2.png'
import FullPic3 from '../../../../resources/img/abakus/number3.png'
import FullPic4 from '../../../../resources/img/abakus/number4.png'
import FullPic5 from '../../../../resources/img/abakus/number5.png'
import FullPic6 from '../../../../resources/img/abakus/number6.png'
import FullPic7 from '../../../../resources/img/abakus/number7.png'
import FullPic8 from '../../../../resources/img/abakus/number8.png'
import FullPic9 from '../../../../resources/img/abakus/number9.png'

const pictures = [
  FullPic0,
  FullPic1,
  FullPic2,
  FullPic3,
  FullPic4,
  FullPic5,
  FullPic6,
  FullPic7,
  FullPic8,
  FullPic9,
]

export default function MediaCard(props) {
  const number = props.random

  return (
    <div id="blockPicture" tabIndex="3" className="blockPicture">
      <img alt="fullCard" src={pictures[number]} />
    </div>
  )
}
