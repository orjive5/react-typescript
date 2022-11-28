import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  /* Type assertion: we use it when we are confident that the user
    will be initialized soon after the component mounts. If not - 
    use commented code (with null and ?.) */
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  //   const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "German",
      email: "german@example.com",
    });
  };
  //   const handleLogout = () => {
  //     setUser(null);
  //   };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user.name}</div>
      {/* <div>User name is {user?.name}</div> */}
      <div>User email is {user.email}</div>
      {/* <div>User email is {user?.email}</div> */}
    </div>
  );
};
