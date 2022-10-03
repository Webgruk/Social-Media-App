import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import GroupIcon from '@mui/icons-material/Group'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import WorkIcon from '@mui/icons-material/Work'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import SchoolIcon from '@mui/icons-material/School'

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatBubbleIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <SmartDisplayIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Job</span>
          </li>
          <li className="sidebarListItem">
            <CalendarMonthIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton"> Show More</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="/assets/avatar4.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Alex</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/avatar4.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Alex</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/avatar4.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Alex</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/avatar4.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Alex</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/avatar4.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Alex</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/avatar4.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Alex</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/avatar4.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Alex</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/avatar4.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Alex</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/avatar4.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Alex</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/avatar4.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Alex</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/avatar4.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Alex</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/avatar4.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Alex</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/avatar4.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Alex</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/avatar4.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Alex</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/avatar4.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Alex</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/avatar4.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Alex</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
