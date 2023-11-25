import { SideBar } from './components/sidebar'
import { MainPage } from './components/mainpage'

export default function Home() {
  return (
    <body className='w-full h-full'>
      <SideBar />
      <div className='flex flex-col justify-center items-center'>
        <MainPage />
      </div>
    </body>
  )
}
