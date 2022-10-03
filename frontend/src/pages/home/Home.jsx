import Feed from '../../components/Feed'
import Rightbar from '../../components/Rightbar'
import SideBar from '../../components/SideBar'
import Topbar from '../../components/Topbar'
import './home.css'
function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}

export default Home
