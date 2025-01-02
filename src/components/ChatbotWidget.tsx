import React, { useState, useRef, useEffect } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { MessageCircle, X, Send } from 'lucide-react';
import axios from 'axios';
import { pixelEvent } from '../utils/pixel';

interface Message {
  text: string;
  isUser: boolean;
  createdAt: string;
}

export const ChatbotWidget: React.FC = () => {
  const [isOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "hi can ask me anything ya", isUser: false, createdAt: new Date().toISOString() }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [showWhatsAppMessage, setShowWhatsAppMessage] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [badgeCount, setBadgeCount] = useState(1);
  const [intervalDuration, setIntervalDuration] = useState(2000);
  const [shake, setShake] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsAppMessage(true);
      setShowBadge(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showBadge) {
      const interval = setInterval(() => {
        setBadgeCount(prev => prev + 1);
        setShake(true);
        setTimeout(() => setShake(false), 500); // Remove shake class after animation
        setIntervalDuration(prev => Math.max(500, prev - 100)); // Decrease interval duration
      }, intervalDuration);

      return () => clearInterval(interval);
    }
  }, [showBadge, intervalDuration]);

  const sendMessageToAssistant = async (messageText: string) => {
    const newMessage: Message = {
      text: messageText,
      isUser: true,
      createdAt: new Date().toISOString(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage("");

    try {
      const res = await axios.get(`https://mighty-dane-newly.ngrok-free.app/api/assistant-test/`, {
        params: {
          message: messageText,
          email: 'faeezree@gmail.com', // Replace with actual user email
          assistantid: 'asst_pE0gCfL3QcDMFrKzzrttxAR1' // Replace with actual assistant ID
        },
      });
      const data = res.data;

      const assistantResponse: Message = {
        text: data.answer,
        isUser: false,
        createdAt: new Date().toISOString(),
      };

      setMessages(prev => [...prev, assistantResponse]);
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;
    sendMessageToAssistant(inputMessage);
    pixelEvent('Contact', {
      content_category: 'Chat',
      content_name: 'Chatbot Interaction'
    });
  };

  return (
    <a href="https://wa.link/2w4jqi" target="_blank" rel="noopener noreferrer">
      <div className="fixed bottom-4 right-4 z-50">
        {isOpen ? (
          <Card className="w-96 h-[32rem] flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl">Juta AI Assistant</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => {}}>
                <X size={20} />
              </Button>
            </CardHeader>
            <CardContent className="flex-grow overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-3`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
              {showWhatsAppMessage && (
                <div className="mt-4 text-center text-lg text-primary">
                  WhatsApp Aiman now!
                </div>
              )}
            </CardContent>
            <CardFooter className="p-3">
              <div className="flex w-full items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button size="icon" onClick={handleSendMessage}>
                  <Send size={18} />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ) : (
          <div className="relative">
            <Button 
              onClick={() => {}}
              className="rounded-full w-16 h-16 flex items-center justify-center bg-blue-500"
            >
              <MessageCircle size={28} />
            </Button>
            {showBadge && (
              <span className={`absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs ${shake ? 'animate-shake' : ''}`}>
                {badgeCount}
              </span>
            )}
          </div>
        )}
      </div>
    </a>
  );
};
