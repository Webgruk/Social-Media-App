import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import FavoriteIcon from '@mui/icons-material/Favorite'
export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/avatar4.jpg" alt="" className="postProfileImg" />
            <span className="postUsername">Alex Sotex</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            Burna Boy's performance at the BET Award show
          </span>
          <img src="/assets/bb.jpg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpIcon className="likeIcon" htmlColor="dodgerblue" />
            <FavoriteIcon className="likeIcon" htmlColor="green" />
            <span className="postLikeCounter">32 people Liked it </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">10 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
