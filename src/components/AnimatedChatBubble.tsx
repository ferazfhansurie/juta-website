import { useState, useEffect } from "react";

export const AnimatedChatBubble = () => {
  const [visibleBubbles, setVisibleBubbles] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleBubbles(prev => (prev + 1) % 5);
    }, 2000); // 5 seconds interval

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute left-4 top-1/3 -translate-y-1/2 w-64 space-y-2">
      {visibleBubbles > 0 && (
        <div className="chat-bubble animate-slideIn">
          <div className="bg-gray-700 text-white p-3 rounded-lg rounded-tl-none inline-block">
            Hello
          </div>
        </div>
      )}
      {visibleBubbles > 1 && (
        <div className="chat-bubble text-right animate-slideIn">
          <div className="bg-primary text-white p-3 rounded-lg rounded-tr-none inline-block">
            Welcome to Juta! <br />
            We offer automated WhatsApp solutions!
          </div>
        </div>
      )}
    </div>
  );
};