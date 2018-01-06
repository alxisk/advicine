import React from 'react'

const Video = ({ videoKey }) => {
  const src = `https://www.youtube.com/embed/${videoKey}`

  return (
    <iframe
      src={src}
      type="text/html"
      frameborder="0"
      allowFullScreen="allowFullScreen"
    />
  )
}

export default Video
