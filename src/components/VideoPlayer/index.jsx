import { useState, useRef } from 'react'
import styles from './styles.module.css'
const SRC = 'https://v16-webapp.tiktok.com/16f040e1e41740aada7d537858ad7ac9/62194f9b/video/tos/useast2a/tos-useast2a-ve-0068c002/cd2c72444db845dcb8b35fed50c4727e/?a=1988&br=4226&bt=2113&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33Znz7ThqNK2DXq&l=202202251550510101910532210C38D660&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajQ7PDQ6ZmtmOTMzNzczM0ApNzw0OWQ5Ozs3NzVkNzM8ZGdyY2ZmcjRfNGZgLS1kMTZzczUzMGE1YV5gMDMwMV9jXzY6Yw%3D%3D&vl=&vr='

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }

    setPlaying(!playing)
  }
  return (
    <div>
      <video
        className={styles.video}
        controls={false}
        ref={video}
        src={SRC}
      />
      <button onClick={handlePlay} className={styles.player} />
    </div>
  )
}
