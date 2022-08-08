import React, { useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";

//Context
import { AuthContext } from "../contexts/AuthContextProvider";

//Components
import Navbar from "./Navbar";

//Style
import styles from "./Chat.module.css"

const Chat = () => {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(true);
  const user = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "4a5055e8-0784-4eeb-aeea-8be860f10b0f",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => { setLoading(false) })
      .catch(() => {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);
        getPic(user.photoUrl).then((avatar) => {
          formData.append("avatar", avatar)
          axios
            .post("https://api.chatengine.io/users", formData, {
              headers: {
                "private-key": "8503e20d-20cc-4f16-bd5f-afea898558c7"
              }
            })
            .then(() => setLoading(false))
            .catch((err) => console.error(err))
        })
      })
  }, [user, navigate]);

  const getPic = async (url) => {
    const response = await fetch(url);
    const data = response.blob();
    return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
  }

  const logoutHandler = async () => {
    await auth.signOut();
    navigate("/", { replace: true });
  };

  if (!user || Loading) return <div className={styles.loading}><span>Loading...</span></div>;

  return (
    <div>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 70px)"
        projectId="4a5055e8-0784-4eeb-aeea-8be860f10b0f"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chat;
