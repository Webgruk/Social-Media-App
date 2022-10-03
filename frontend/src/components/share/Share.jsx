import './share.css'
import LabelIcon from '@mui/icons-material/Label'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'

import PermMediaIcon from '@mui/icons-material/PermMedia'
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/ajimahPic.jpg" alt="" />
          <input
            placeholder="What is in you mind Immanuel"
            type="text"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareButton">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOpitonText"> Photo or Text</span>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOpitonText"> Tag</span>
            </div>
            <div className="shareOption">
              <LocationOnIcon htmlColor="green" className="shareIcon" />
              <span className="shareOpitonText"> Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="orange" className="shareIcon" />
              <span className="shareOpitonText"> Feelings</span>
            </div>
          </div>
          <button className="shareButtom">Share</button>
        </div>
      </div>
    </div>
  )
}
