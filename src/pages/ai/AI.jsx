import React, { useState } from 'react';
import './AI.css';

// SVG Icons
const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.27A7 7 0 0 1 14 21h-4a7 7 0 0 1-6.73-5H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
    <circle cx="9" cy="14" r="1"/>
    <circle cx="15" cy="14" r="1"/>
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const BotIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    <circle cx="9" cy="16" r="1"/>
    <circle cx="15" cy="16" r="1"/>
    <line x1="9" y1="19" x2="15" y2="19"/>
  </svg>
);

const AI = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hello! I'm NORM AI. How can I help you understand your health today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');
    setIsLoading(true);
    
    // TODO: Connect to AI API
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: 'I understand. Let me help you with that. (AI integration coming soon!)' 
      }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="ai-page">
      <div className="ai-header">
        <div className="ai-header-icon">
          <AIIcon />
        </div>
        <div className="ai-header-text">
          <h2>Ask NORM</h2>
          <p className="text-muted">Your health assistant</p>
        </div>
      </div>

      <div className="ai-chat">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.type}`}>
            <div className="chat-avatar">
              {msg.type === 'bot' ? <BotIcon /> : <UserIcon />}
            </div>
            <div className="chat-bubble">
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="chat-message bot">
            <div className="chat-avatar">
              <BotIcon />
            </div>
            <div className="chat-bubble typing">
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
            </div>
          </div>
        )}
      </div>

      <div className="ai-input-area">
        <input
          type="text"
          className="form-control"
          placeholder="Ask about your health..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          disabled={isLoading}
        />
        <button 
          className="btn btn-primary" 
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default AI;