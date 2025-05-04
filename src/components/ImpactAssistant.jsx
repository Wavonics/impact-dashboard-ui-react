import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChatIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImpactAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  // Scroll to latest message
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.text })
      });
      const data = await response.json();
      const botMsg = { sender: 'assistant', text: data.reply };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error('Assistant error:', error);
      setMessages(prev => [...prev, { sender: 'assistant', text: 'Sorry, something went wrong.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <Card className="flex-1 overflow-auto">
        <CardContent className="space-y-4">
          <AnimatePresence initial={false}>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`flex ${msg.sender === 'assistant' ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`p-3 rounded-2xl max-w-xs whitespace-pre-wrap ${msg.sender === 'assistant' ? 'bg-gray-100' : 'bg-blue-500 text-white'}`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={bottomRef} />
        </CardContent>
      </Card>
      <div className="mt-2 flex items-center">
        <Input
          as="textarea"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask IMPACT Assistant..."
          className="flex-1 resize-none h-12"
          disabled={loading}
        />
        <Button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="ml-2 flex items-center"
        >
          <ChatIcon className="mr-2 h-5 w-5" /> Send
        </Button>
      </div>
    </div>
  );
}
