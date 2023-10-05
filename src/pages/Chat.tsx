import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import MessageComponent from "../components/Message";
import { Box, Container, Paper } from "@mui/material";
import { Message } from "../interfaces/interfaces";
import UserAvatar from "../components/UserAvatar";
import ProfilePhoto from "../assets/profile.png";


const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    const newMessage: Message = {
      text: inputText,
      timestamp: new Date(),
      isUser: true, // Change to false if the message is from the other user
    };

    setMessages([...messages, newMessage]);
    setInputText("");
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <Container style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper elevation={3}  style={{ padding: "16px" }}>
        <Box display="flex" flexDirection="column" height="70vh" width="130vh">
          <div style={{ flex: 1, overflowY: "scroll" }}>
            {messages.map((message, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                {message.isUser ? (
                  <UserAvatar imageUrl={ProfilePhoto} altText="Nombre de Usuario" />
                ) : null}
                <MessageComponent message={message.text} isUser={message.isUser} timestamp={message.timestamp}/>
                {!message.isUser ? (
                  <UserAvatar imageUrl={ProfilePhoto} altText="Nombre de Usuario" />
                ) : null}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              fullWidth
              label="Escribe un mensaje"
              variant="outlined"
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <IconButton color="primary" onClick={handleSendMessage}>
              <SendIcon />
            </IconButton>
          </div>
        </Box>
      </Paper>
    </Container>
  );
};

export default Chat;
