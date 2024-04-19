import React from 'react'
import './VideoBox.css'




const VideoBox = () => {
  return (
    <div className="paddings flexCenter c-container">
    <video src="/video-5.mp4" autoPlay loop muted  className="video"/>
</div>
  )
}

export default VideoBox