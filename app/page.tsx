import { SideBar } from './components/sidebar'
import { MainPage } from './components/mainpage/mainpage'

export default function Home() {
  return (
    <div className='flex w-screen overflow-hidden'>
      <SideBar />
      <MainPage />
    </div>
  )
}
