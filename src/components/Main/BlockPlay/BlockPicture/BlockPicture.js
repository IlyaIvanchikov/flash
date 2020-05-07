import React from 'react'
import './BlockPicture.css'
import Top0 from '../../../../resources/img/abakus/top0.png'
import Top1 from '../../../../resources/img/abakus/top1.png'
import Bottom0 from '../../../../resources/img/abakus/bottom0.png'
import Bottom1 from '../../../../resources/img/abakus/bottom1.png'
import Bottom2 from '../../../../resources/img/abakus/bottom2.png'
import Bottom3 from '../../../../resources/img/abakus/bottom3.png'
import Bottom4 from '../../../../resources/img/abakus/bottom4.png'

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
  FullPic0, FullPic1, FullPic2, FullPic3, FullPic4,
  FullPic5, FullPic6, FullPic7, FullPic8, FullPic9
]

export default function MediaCard(props) {
  const number = props.random
  let bottomPicture
  if (number === 0 || number === 5) bottomPicture = Bottom0
  if (number === 1 || number === 6) bottomPicture = Bottom1
  if (number === 2 || number === 7) bottomPicture = Bottom2
  if (number === 3 || number === 8) bottomPicture = Bottom3
  if (number === 4 || number === 9) bottomPicture = Bottom4

  return (
    <div id="blockPicture" tabIndex="3" className="blockPicture">
      <div className="oneStick">
        <div className="fullCard">
          <img alt="fullCard" src={pictures[number]} />
        </div>
        {/* <div className="stickTop">
          <img alt="top" src={number > 4 ? Top1 : Top0} />
        </div>
        <div className="stickBottom">
          <img alt="bottom" src={bottomPicture} />
        </div> */}
      </div>
    </div>
  )
}
