import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [Loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      console.log(user)
      if (user) navigate("/chat");
    });
  }, [user, navigate]);

  return (
    <AuthContext.Provider value={user}>
      {!Loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
