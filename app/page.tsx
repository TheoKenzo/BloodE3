import { SideBar } from './components/sidebar'
import { MainPage } from './components/mainpage/mainpage'

export default function Home() {
  return (
    <div className='w-[99vw] h-full'>
      <SideBar />
      <div className='flex flex-col justify-center items-center'>
        <MainPage />
      </div>
    </div>
  )
}
