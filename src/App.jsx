import './App.css'
import FeedVideos from './components/FeedVideos'
const SRC = 'https://v16-webapp.tiktok.com/3f5df132be3141405c8b4c8ffba95d37/621984a1/video/tos/alisg/tos-alisg-pve-0037c001/4877310faf2d4341bd770ffb8f349e02/?a=1988&br=2618&bt=1309&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33Znz7ThZZ52DXq&l=20220225193816010223075152020EF47D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amprcTU6ZmhpOTMzODczNEApMzg7ZWU5ZWVnNzpmZGU3ZWctb2EwcjRvYXFgLS1kMS1zc2I1YF8tYC1jMzI0NV4yLjM6Yw%3D%3D&vl=&vr='

function App () {
  return (
    <div className='App'>
      <main>
        <FeedVideos />
      </main>
    </div>
  )
}

export default App
