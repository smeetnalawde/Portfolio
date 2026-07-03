'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

export const AIChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (e: React.FormEvent | React.KeyboardEvent) => {
    e.preventDefault();
    
    const target = e.target as HTMLFormElement;
    const form = target.tagName === 'FORM' ? target : target.closest('form');
    if (form) {
      e.stopPropagation();
    }
    
    const messageToSend = inputValue.trim();
    if (!messageToSend || isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: messageToSend,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      // Call the chat API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      
      // Add bot response
      const botMessage: Message = {
        id: Date.now() + 1,
        text: data.message,
        sender: 'bot',
      };
      
      setMessages((prev) => [...prev, botMessage]);
      
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "I'm having trouble processing your request. Please try again later.",
        sender: 'bot',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // No need to load resume data here as it's handled by the API

  // Auto-scroll to the latest message whenever the conversation grows or a
  // response is being awaited, so the newest message is always in view.
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isLoading]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-4xl mx-auto overflow-anchor-none"
    >
      {/* Modern header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          AI-Powered Assistant
        </h2>
        <div className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      </div>
      
      {/* Chat messages */}
      <div className="h-[500px] overflow-y-auto p-6 space-y-6 overflow-anchor-none bg-transparent rounded-2xl">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-8">
            <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
              <Bot className="w-8 h-8 text-cyan-300" />
            </div>
            <h3 className="text-xl font-semibold text-cyan-100 mb-2">How can I help you today?</h3>
            <p className="text-gray-400 max-w-md">Ask me anything about my skills, experience, or projects. I&apos;m here to assist you!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <motion.div 
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl p-4 backdrop-blur-sm ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/20 text-white' 
                      : 'bg-white/5 border border-white/10 text-gray-200'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    {message.sender === 'bot' ? (
                      <Bot className="w-5 h-5 text-cyan-300" />
                    ) : (
                      <User className="w-5 h-5 text-purple-300" />
                    )}
                  </div>
                  <div className="markdown-content">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-cyan-100 mb-4 mt-2" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-xl font-semibold text-cyan-100 mb-3 mt-4" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-lg font-semibold text-cyan-100 mb-2 mt-3" {...props} />,
                        p: ({node, ...props}) => <p className="text-gray-100 leading-relaxed mb-3 last:mb-0" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2 text-gray-100 my-2 pl-5" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal list-inside space-y-2 text-gray-100 my-2 pl-5" {...props} />,
                        li: ({node, ...props}) => <li className="text-gray-100 mb-1 pl-1" {...props} />,
                        strong: ({node, ...props}) => <strong className="font-semibold text-cyan-200" {...props} />,
                        em: ({node, ...props}) => <em className="italic text-gray-300" {...props} />,
                        code: ({node, inline, ...props}: any) => inline 
                          ? <code className="bg-white/10 px-1.5 py-0.5 rounded text-cyan-200 text-sm" {...props} />
                          : <pre className="block bg-black/40 border border-white/10 p-3 rounded text-cyan-200 overflow-x-auto my-3"><code {...props} className="text-sm" /></pre>,
                        a: ({node, ...props}) => <a className="text-cyan-300 hover:text-cyan-200 underline" target="_blank" rel="noreferrer noopener" {...props} />,
                        br: () => <div className="h-3" />,
                      }}
                    >
                      {message.text}
                    </ReactMarkdown>
                  </div>
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      {/* Chat input */}
      <form 
        onSubmit={handleSendMessage} 
        className="mt-6"
      >
        <div className="flex items-center bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(e)}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-0 border-0"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="h-full px-5 py-4 bg-gradient-to-r from-cyan-600/80 to-purple-600/80 text-white hover:from-cyan-500/80 hover:to-purple-500/80 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};
