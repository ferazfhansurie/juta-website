// src/components/TokenCalculator.tsx
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const TokenCalculator = () => {
  const [prompt, setPrompt] = useState('');
  const [tokens, setTokens] = useState(0);
  const [cost, setCost] = useState(0);
  const [messageCount, setMessageCount] = useState(''); // Initialize as an empty string

  const calculateTokensAndCost = () => {
    const count = Number(messageCount) || 1; // Default to 1 if messageCount is empty or invalid
    const tokenCount = (prompt.length / 4) * count; // Adjusted calculation
    const costInRinggit = (tokenCount / 1000) * 0.003;
    setTokens(tokenCount);
    setCost(costInRinggit);
  };

  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            AI Message Cost 
          </span>{" "}
          Calculator
        </h2>
      </div>
      <Card className="max-w-4xl mx-auto shadow-black/10 dark:shadow-white/10">
        <CardHeader>
       
        </CardHeader>
        <CardContent>
        <p className="text-lg text-center mb-8">
          Use this calculator to see how much your AI messages will cost.<br />
          It's easy and helps you know how much money you need to spend.
        </p>
          <div className="flex justify-center">
            <div className="w-full md:w-1/2 max-w-md">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your prompt here"
                rows={5}
                className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white placeholder-gray-400"
              />
              <input
                type="number"
                value={messageCount}
                onChange={(e) => setMessageCount(e.target.value)}
                min="1"
                className="w-full p-2 mt-2 border rounded dark:bg-gray-800 dark:text-white placeholder-gray-400"
                placeholder="Enter number of messages"
              />
              <Button className="w-full mt-4" onClick={calculateTokensAndCost}>
                Calculate
              </Button>
              <div className="mt-4">
                <p>Tokens: {tokens}</p>
                <p>Cost in MYR: RM {cost.toFixed(4)}</p>
              </div>
            </div>
          </div>
    
        </CardContent>
      </Card>
    </section>
  );
};
