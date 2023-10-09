import React from "react";
import { Avatar, Typography } from "@mui/material";
import nachoPhoto from "../assets/nacho.jpg";
import { NachoResponsesProps } from "../interfaces/interfaces";



const NachoResponses: React.FC<NachoResponsesProps> = ({
  message,
  timestamp,
}) => {
  const messageContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px", // Puedes ajustar el margen según tus preferencias
  };

  const avatarStyle: React.CSSProperties = {
    marginRight: "16px", // Puedes ajustar el margen según tus preferencias
  };

  const messageTextStyle: React.CSSProperties = {
    backgroundColor: "#f5f5f5",
    padding: "8px", // Puedes ajustar el relleno según tus preferencias
    borderRadius: "8px", // Puedes ajustar el radio de borde según tus preferencias
  };

  const senderName = 'Nacho';

  return (
    <div style={messageContainerStyle}>
      <Avatar src={nachoPhoto} alt={senderName} style={avatarStyle} />
      <div>
        <Typography variant="subtitle2" color="textSecondary">
          {senderName}
        </Typography>
        <Typography style={messageTextStyle}>{message}</Typography>
        <Typography variant="caption" color="textSecondary">
          {timestamp}
        </Typography>
      </div>
    </div>
  );
};

export default NachoResponses;
