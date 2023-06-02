import useAppContext from "../../hooks/useAppContext";
// import { UserAvatar } from "./UserAvatar";

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
  const context = useAppContext();

  if (!context.user) {
    return <h2> Carregando ... </h2>
  }

  return (
    <div style={style.container}>
      <h2> *** User Page *** </h2>
      {/* <UserAvatar /> */}

      <img style={{
        width: 100,
        height: 100,
        borderRadius: 50,
      }}
        src={context.user?.img}
      // src="https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
      />

      {/* <h3> User Name </h3> */}
      <h3> {context.user?.name} </h3>

    </div>
  )
}

