import { useState, useEffect } from "react";

export const AnimatedChatBubble = () => {
  const [visibleBubbles, setVisibleBubbles] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleBubbles(prev => (prev + 1) % 5);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-2 sm:h-auto h-[160px]"> {/* Fixed height only on mobile */}
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