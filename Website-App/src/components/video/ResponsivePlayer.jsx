import React from "react"
import ReactPlayer from "react-player"


const ResponsivePlayer = ({ url, aplay, }) => {
  return (
    <div sx={{
      position: 'relative',
      paddingTop: '56.25%', /* Player ratio: 100 / (1280 / 720) */    
    }}>
      <ReactPlayer
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
        }}
        url={url}
        width="100%"
        height="100%"
        controls={true}
        playing={aplay}
        
        />
    </div >
  )
}

export default ResponsivePlayer