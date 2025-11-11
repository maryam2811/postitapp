import user from "../Images/user.png";
import Location from "./Location";
import { useSelector } from "react-redux";

const User = () => {
  const email = useSelector((state) => state.users.user.email);
  const name = useSelector((state) => state.users.user.name);

  return (
    <div>
      <img src={user} className="userImage" />
      <br />
      <strong>{name}</strong>
      <br />
      {email}
      <Location />
    </div>
  );
};

export default User;
