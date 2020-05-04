import React from 'react'
import './BlockPicture.css'
import Top0 from '../../../../resources/img/abakus/top0.png'
import Top1 from '../../../../resources/img/abakus/top1.png'
import Bottom0 from '../../../../resources/img/abakus/bottom0.png'
import Bottom1 from '../../../../resources/img/abakus/bottom1.png'
import Bottom2 from '../../../../resources/img/abakus/bottom2.png'
import Bottom3 from '../../../../resources/img/abakus/bottom3.png'
import Bottom4 from '../../../../resources/img/abakus/bottom4.png'

export default function MediaCard(props) {
  const number = props.random
  let bottomPicture
  if (number === 0 || number === 5) bottomPicture = Bottom0
  if (number === 1 || number === 6) bottomPicture = Bottom1
  if (number === 2 || number === 7) bottomPicture = Bottom2
  if (number === 3 || number === 8) bottomPicture = Bottom3
  if (number === 4 || number === 9) bottomPicture = Bottom4

  return (
    <div className="blockPicture">
      <div className="oneStick">
        <div className="stickTop">
          <img alt="top" src={number > 4 ? Top1 : Top0} />
        </div>
        <div className="stickBottom">
          <img alt="bottom" src={bottomPicture} />
        </div>
      </div>
    </div>
  )
}
