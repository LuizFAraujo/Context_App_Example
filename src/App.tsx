import { useEffect } from 'react'
// import { UserAvatar } from './components/Avatar/UserAvatar'
import Home from './pages/Home'
import useAppContext from './hooks/useAppContext'

export default function App() {
  const context = useAppContext();

  // Função, com delay, para simular um request
  async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return {
      // img: <UserAvatar />,
      img: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
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


