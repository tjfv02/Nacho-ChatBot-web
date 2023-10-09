import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import MessageComponent from "../components/Message";
import { Box, Container, Paper } from "@mui/material";
import { Message } from "../interfaces/interfaces";
import NachoResponses from "../components/NachoResponses";
import axios from "axios";

const initMessage = [
  {
    text: "Hola soy Nacho!, ¿En qué puedo ayudarte?",
    timestamp: new Date(),
    isUser: false,
  },
];

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initMessage);
  const [inputText, setInputText] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessageToServer();
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      sendMessageToServer();
    }
  };

  const sendMessageToServer = async () => {
    setIsSending(true);
    if (inputText.trim() === "") return;
    const newMessage: Message = {
      text: inputText,
      timestamp: new Date(),
      isUser: true,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    // Limpia el campo de entrada
    setInputText("");

    try {
      // Envia el mensaje al servidor
      const response = await axios.post(
        "http://localhost:3000/api/openai/preguntar",
        {
          text: newMessage.text,
          timestamp: newMessage.timestamp,
          isUser: newMessage.isUser,
        }
      );

      const serverMessage = {
        text: response.data.text,
        timestamp: new Date(),
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, serverMessage]);

      // Limpia el campo de entrada
      setInputText("");
    } catch (error) {
      console.error("Error al enviar mensaje al servidor:", error);
      const newMessageError: Message = {
        text: "Hola parece que estoy teniendo problemas en procesar tu pregunta",
        timestamp: new Date(),
        isUser: false,
      };
      setMessages([...messages, newMessageError]);
    } finally {
      setIsSending(false);
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
                    timestamp={message.timestamp.toLocaleTimeString()} 
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
            {isSending && (
              <div>
                <NachoResponses
                  message={"Escribiendo..."}
                  timestamp={new Date().toLocaleTimeString()} 
                />
              </div>
            )}
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
