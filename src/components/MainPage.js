import { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
const MainPage = () => {
    const [playing,setPlaying] = useState(true)
  return (
    <div className="vid-container">
      <ReactPlayer
        muted={true}
        loop={true}
        playing={playing}
        controls={false}
        url="https://www.youtube.com/watch?v=sVYyjr84ZXI"
        width="100%"
        height="100%"
        // onPause={setPlaying(true)}
      />
      <div className="vid-cover"></div>
      <div className="user-input">
        <input type="text" value=""/>
      </div>
    </div>
  )
}

export default MainPage
