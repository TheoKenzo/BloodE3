import { SideBar } from './components/sidebar'
import { MainPage } from './components/mainpage'

export default function Home() {
  return (
    <body className='w-screen h-screen'>
      <SideBar />
      <MainPage />
    </body>
  )
}
