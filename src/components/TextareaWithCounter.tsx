import React, { useState } from "react";

interface TextareaWithCounterProps {
  name: string;
  id: string;
  className?: string; // Added className as an optional prop
}

const TextareaWithCounter = ({
  name,
  id,
  className = "",
}: TextareaWithCounterProps) => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const maxLength = 255;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  return (
    <div className={`relative ${className}`}>
      <textarea
        name={name}
        id={id}
        placeholder="Enter a message"
        className="flex w-full resize-none p-2 rounded-md bg-transparent border-2 border-gray-300 hover:border-gray-400 focus:border-pink-500 dark:focus:border-myPrimary outline-none transition-colors duration-300"
        value={message}
        onChange={handleChange}
        rows={6}
        maxLength={255}
        required
      />
      {isTyping && (
        <div className="absolute bottom-1 right-2">
          <span
            className={`text-[0.75rem] ${
              message.length > maxLength ? "text-red-500" : "text-gray-400"
            }`}
          >
            {message.length} / {maxLength}
          </span>
        </div>
      )}
    </div>
  );
};

export default TextareaWithCounter;
