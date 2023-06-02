import { UserAvatar } from './components/Avatar/UserAvatar'
import Home from './pages/Home'

export default function App() {

  // Função, com delay, para simular um request
  async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return {
      img: <UserAvatar />,
      name: "User Name Test"
    }
  }

  return (
    <>
      <Home />
    </>
  )
}


