import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'Food',
    description: 'Comida',
    likes: 300,
    shares: 2,
    comments: 345,
    songTitle: 'sonido original - tiktok',
    albumCover: 'http',
    src: 'https://v16-webapp.tiktok.com/19da5682a4308e16fbd3821e143d6b5a/621d302d/video/tos/useast2a/tos-useast2a-ve-0068c001/d5f3d25495994776aeca83a02b2ddd98/?a=1988&br=2000&bt=1000&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33Znz7ThzzFcDXq&l=202202281426520102231282301B21903F&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3k3NWk6ZmlpOjMzNzczM0ApZWRkZDs7OzwzN2k2aDtlZWcxNTZgcjRnL21gLS1kMTZzczQwYi5hLTQwMS40YTEtNjI6Yw%3D%3D&vl=&vr='
  },
  {
    id: 2,
    author: 'Travel',
    description: 'Viajes en avión',
    likes: 600,
    shares: 4,
    comments: 345,
    songTitle: 'sonido original - tiktok',
    albumCover: 'http',
    src: 'https://v16-webapp.tiktok.com/dba976237302b3c69485cf4f72bd017b/621d302e/video/tos/useast2a/tos-useast2a-ve-0068c001/28aa1a9bb78c44bd9f8754b8e27dec40/?a=1988&br=3412&bt=1706&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33Znz7ThzzFcDXq&l=202202281426520102231282301B21903F&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anE1M2Q6ZmpzOTMzNzczM0ApPDxkaGg6NzxnN2g7ZmQ0OWdwNDVycjQwX21gLS1kMTZzczM1MTFiMzQwLV8yNGAyLi06Yw%3D%3D&vl=&vr='
  },
  {
    id: 3,
    author: 'Food',
    description: 'Comida',
    likes: 100,
    shares: 1,
    comments: 345,
    songTitle: 'sonido original - tiktok',
    albumCover: 'http',
    src: 'https://v16-webapp.tiktok.com/dae305039b9a92d79fae66b2eb5464bf/621d3019/video/tos/useast2a/tos-useast2a-ve-0068c001/bd468511fc004482a6bbca66581b631e/?a=1988&br=3246&bt=1623&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33Znz7ThzzFcDXq&l=202202281426520102231282301B21903F&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc7PDg6Zmh2OTMzNzczM0ApZ2Y7aTtnaGQ1NzpkaTtkaGc0YzRncjRvNHJgLS1kMTZzc2EyXzNjMTA2L18wLzQuXl46Yw%3D%3D&vl=&vr='
  }
]

export default function FeedVideos () {
  return (
    VIDEOS.map(video => (
      <div key={video.id} className={styles.item}>
        <VideoPlayer {...video} />
      </div>
    ))
  )
}
