import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import MessageComponent from "../components/Message";
import { Box, Container, Paper } from "@mui/material";
import { Message } from "../interfaces/interfaces";
import NachoResponses from "../components/NachoResponses";

const exampleMessages = [
  {
    text: "Hola, ¿cómo estás?",
    timestamp: new Date(),
    isUser: true, 
  },
  {
    text: "¡Hola! Estoy bien, ¿y tú?",
    timestamp: new Date(),
    isUser: false, 
  },
  {
    text: "Me alegro de escucharlo.",
    timestamp: new Date(),
    isUser: true, 
  },
  {
    text: "Sí, gracias.",
    timestamp: new Date(),
    isUser: false, 
  },
];

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(exampleMessages);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    const newMessage: Message = {
      text: inputText,
      timestamp: new Date(),
      isUser: true, 
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
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Paper elevation={3} style={{ padding: "16px" }}>
        <Box display="flex" flexDirection="column" height="70vh" width="130vh">
          <div style={{ flex: 1, overflowY: "scroll" }}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                {!message.isUser ? (
                  <NachoResponses
                    message={message.text}
                    timestamp={message.timestamp.toLocaleTimeString()} // Formatea la marca de tiempo como prefieras
                  />
                ) : null}
                {message.isUser ? (
                  <>
                    <MessageComponent
                      message={message.text}
                      timestamp={message.timestamp}
                    />
                  </>
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
