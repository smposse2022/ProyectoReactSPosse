import { createContext, useState } from "react";

const Notification = ({ message, messageType }) => {
  const background = {
    success: "green",
    error: "red",
    warning: "orange",
    default: "Blue",
  };
  const notificationStyle = {
    position: "absolute",
    top: 50,
    right: 10,
    zIndex: 1,
    color: "white",
    backgroundColor: background[messageType] || background.default,
    borderRadius: "20px",
    padding: "10px 20px 10px 20px",
  };
  if (message === "") return;

  return <div style={notificationStyle}>{message}</div>;
};

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState();

  const setNotification = (type, msg) => {
    setMessageType(type);
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      <Notification message={message} messageType={messageType} />
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
