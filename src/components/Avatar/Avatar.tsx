import { UserAvatar } from "./UserAvatar";


const style = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
};


export function Avatar() {
  return (
    <div style={style.container}>
      <h2> User Page </h2>
      <hr />
      <UserAvatar />
      <p>
        User Name
      </p>
    </div>
  )
}

