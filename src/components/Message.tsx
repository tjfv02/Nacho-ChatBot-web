import React from 'react';
import { MessageProps } from '../interfaces/interfaces';
import { Avatar, Typography } from '@mui/material';
import ProfilePhoto from "../assets/profile.png";


const Message: React.FC<MessageProps> = ({ message, timestamp }) => {
  const messageContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px", // Puedes ajustar el margen según tus preferencias
  };

  const avatarStyle: React.CSSProperties = {
    marginRight: "16px", // Puedes ajustar el margen según tus preferencias
  };

  const messageTextStyle: React.CSSProperties = {
    backgroundColor: "#2196F3",
    color: "#FFFFFF",
    padding: "8px", // Puedes ajustar el relleno según tus preferencias
    borderRadius: "8px", // Puedes ajustar el radio de borde según tus preferencias
  };

  const senderName = 'Tú';
  return (
    <div style={messageContainerStyle}>
      <Avatar src={ProfilePhoto} alt={senderName} style={avatarStyle} />
      <div>
        <Typography variant="subtitle2" color="textSecondary">
          {senderName}
        </Typography>
        <Typography style={messageTextStyle}>{message}</Typography>
        <Typography variant="caption" color="textSecondary">
        {timestamp.toLocaleTimeString()}
        </Typography>
      </div>
    </div>
  );
};

export default Message;
