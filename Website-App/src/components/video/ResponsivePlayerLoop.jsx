import React from "react"
import ReactPlayer from "react-player/lazy"


const ResponsivePlayer2 = ({ url, aplay, }) => {
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
        width="348px"
        height="349px"
        controls={false}
        playing={aplay}
        loop
        />
    </div >
  )
}

export default ResponsivePlayer2