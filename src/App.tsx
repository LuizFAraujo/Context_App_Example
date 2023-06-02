import { useContext, useEffect } from 'react'
import { UserAvatar } from './components/Avatar/UserAvatar'
import { AppContext } from './contexts/AppContext'
import Home from './pages/Home'

export default function App() {
  const context = useContext(AppContext);

  // Função, com delay, para simular um request
  async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return {
      img: <UserAvatar />,
      name: "User Name Test"
    }
  };

  useEffect(() => {
    getData().then((data) => {
      context.updateUser(data)
    })
  }, [])

  return (
    <>
      <Home />
    </>
  )
}


