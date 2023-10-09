import React, { useState, useEffect } from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const UserLoggedIn = localStorage.getItem("LoggedIn");

    if (UserLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.setItem("LoggedIn", "0");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("LoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
