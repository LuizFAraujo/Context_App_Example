import userAvatar from "../../assets/img/User-01.png";

const styleImg = {
  width: 100,
  height: 100,
  borderRadius: 50,
};

export function UserAvatar() {
  return (
    <img src={userAvatar} alt="User Avatar" style={styleImg} />
  )
}

