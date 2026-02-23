import { useState } from "react";
import { TextField, PrimaryButton, Stack } from "@fluentui/react";
import { Persona, PersonaSize } from "@fluentui/react/lib/Persona";

const ChatBotDemo = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newUserMessage = { text: input, sender: "user" };
    setMessages([...messages, newUserMessage]);
    setInput("");

    // Fake AI Response
    setTimeout(() => {
      const botMessage = { text: "I'm here to help!", sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <Stack tokens={{ childrenGap: 10 }} styles={{ root: { maxWidth: 500, margin: "auto", padding: 20 } }}>
      <Stack
        tokens={{ childrenGap: 10 }}
        styles={{ root: { height: 400, overflowY: "auto", padding: 10, border: "1px solid #ccc", borderRadius: 5 } }}
      >
        {messages.map((msg, index) => (
          <Stack
            key={index}
            horizontal
            horizontalAlign={msg.sender === "user" ? "end" : "start"}
            tokens={{ childrenGap: 10 }}
          >
            {msg.sender === "bot" && (
              <Persona text="Bot" size={PersonaSize.size32} imageAlt="Bot Avatar" />
            )}
            <div
              style={{
                padding: "10px",
                borderRadius: "8px",
                backgroundColor: msg.sender === "user" ? "#0078D4" : "#F3F2F1",
                color: msg.sender === "user" ? "white" : "black",
                maxWidth: "75%",
              }}
            >
              {msg.text}
            </div>
            {msg.sender === "user" && (
              <Persona text="You" size={PersonaSize.size32} imageAlt="User Avatar" />
            )}
          </Stack>
        ))}
      </Stack>

      <Stack horizontal tokens={{ childrenGap: 10 }}>
        <TextField value={input} onChange={(e, newValue) => setInput(newValue || "")} placeholder="Type a message..." />
        <PrimaryButton text="Send" onClick={sendMessage} />
      </Stack>
    </Stack>
  );
};

export default ChatBotDemo;

