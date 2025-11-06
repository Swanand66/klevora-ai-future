import React, { useState, useRef, useEffect } from 'react';
import klerovaLogo from '@/assets/klerova-logo.png';
import { getGeminiResponse } from '@/utils/gemini';
import type { Message, FAQ } from '@/types/chat';

const KleviBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showFaqMenu, setShowFaqMenu] = useState(false);
  const [showPopImage, setShowPopImage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const faqMenuRef = useRef<HTMLDivElement>(null);

  // Close FAQ menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (showFaqMenu && faqMenuRef.current && !faqMenuRef.current.contains(event.target as Node)) {
        setShowFaqMenu(false);
      }
    }

    if (showFaqMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showFaqMenu]);

  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when chat opens or after sending a message
  useEffect(() => {
    if (isChatOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isChatOpen]);

  // show the pop image when chat opens
  useEffect(() => {
    if (isChatOpen) {
      // small delay for nicer pop animation
      const t = setTimeout(() => setShowPopImage(true), 80);
      return () => clearTimeout(t);
    }
    setShowPopImage(false);
  }, [isChatOpen]);

  // Knowledge base and FAQs
  const knowledgeBase = `
    Klevora is a cutting-edge AI solutions startup that helps businesses grow faster using artificial intelligence and automation.
    [... rest of your knowledge base ...]
  `;

  const faqs: FAQ[] = [
    { q: 'What does Klevora do?', a: 'We help businesses scale and grow at 10x speed using AI.' },
    { q: 'What services do you offer?', a: 'AI assistants, automation, analytics, and tool integrations.' },
    { q: 'How can Klevora help my business?', a: 'We automate tasks so you can focus on growth.' },
    { q: 'Is my data safe with you?', a: 'Yes, your data is private and secure.' },
    { q: 'Do you offer a free trial?', a: 'Yes, free trials are available.' },
    { q: 'What is the pricing?', a: 'Plans are flexible; contact us for details.' },
    { q: 'Do you provide 24/7 support?', a: 'Yes, our AI assistant is always available.' },
    { q: 'Can Klevora integrate with my tools?', a: 'Yes, we integrate with Google Workspace, Slack, and CRMs.' },
    { q: 'How can I schedule a meeting?', a: 'To schedule a meeting, please use the button located at the bottom of the page.' },
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => setIsChatOpen((prev) => !prev);

  const handleSendMessage = async (customInput?: string) => {
    const question = customInput !== undefined ? customInput : input;
    if (question.trim() === '') return;

    setMessages((prev) => [...prev, { sender: 'user', text: question }]);
    setLoading(true);
    setInput('');

    try {
      const faqMatch = faqs.find(faq => 
        faq.q.toLowerCase() === question.toLowerCase()
      );

      let response: string;
      if (faqMatch) {
        response = faqMatch.a;
      } else {
        response = await getGeminiResponse(question, knowledgeBase);
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: response }]);
    } catch (error) {
      console.error('Error getting response:', error);
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Sorry, something went wrong. Please try again later.' }
      ]);
    }

    setLoading(false);
    // Focus the input after sending a message
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // Theme colors
  const brandGradient = 'linear-gradient(135deg, hsl(280 85% 55%) 0%, hsl(320 95% 62%) 100%)';
  const brandColor = '#000000ff';
  const surfaceColor = '#ffffff';
  const foregroundColor = '#0A0A0A';
  const borderColor = '#C7A4FF';

  return (
    <div className="klevi-bot-container" style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
      {/* Floating button */}
      <button
        className="klevi-bot-float-btn"
        onClick={toggleChat}
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: '#ffffff',
          boxShadow: '0 4px 20px rgba(108,71,255,0.2)',
          border: `2px solid ${borderColor}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        aria-label="Open Klevi Bot"
      >
        <img src={klerovaLogo} alt="Klevora Logo" style={{ width: 32, height: 32 }} />
      </button>

      {/* Chat window */}
      {isChatOpen && (
        <div
          className="klevi-bot-chat-window"
          style={{
            position: 'fixed',
            bottom: 96,
            right: 24,
            width: 380,
            maxHeight: 520,
            background: surfaceColor,
            borderRadius: 18,
            boxShadow: '0 8px 32px rgba(199,164,255,0.18)',
            border: `1.5px solid ${borderColor}`,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 9999,
          }}
        >
          {/* Header */}
          <div style={{
            background: brandGradient,
            color: '#ffffff',
            padding: '12px 18px',
            fontWeight: 600,
            fontSize: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
          }}>
            <span>Klevi</span>
            <button
              onClick={toggleChat}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                fontSize: 22,
                cursor: 'pointer',
                fontWeight: 700,
                padding: '0 4px',
              }}
              aria-label="Close chat"
            >×</button>
          </div>

          {/* FAQ quick menu */}
          <div style={{
            padding: '8px 18px',
            borderBottom: `1px solid ${borderColor}`,
            background: surfaceColor,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            position: 'relative'
          }}>
            <button
              onClick={() => setShowFaqMenu((prev) => !prev)}
              style={{
                background: brandGradient,
                color: '#ffffff',
                border: 'none',
                borderRadius: 8,
                padding: '4px 10px',
                fontSize: 13,
                cursor: 'pointer',
                fontWeight: 500
              }}
            >FAQs</button>

            {/* FAQ Menu Dropdown */}
            {showFaqMenu && (
              <div 
                ref={faqMenuRef}
                style={{
                  position: 'absolute',
                  top: 44,
                  left: 18,
                  right: 18,
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(247, 242, 255, 0.98) 100%)',
                  backdropFilter: 'blur(12px)',
                  border: `2px solid ${borderColor}`,
                  borderRadius: 16,
                  boxShadow: '0 8px 32px rgba(199,164,255,0.25), 0 2px 8px rgba(0,0,0,0.08)',
                  zIndex: 10000,
                  maxHeight: 300,
                  overflowY: 'auto',
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(199,164,255,0.5) rgba(199,164,255,0.1)'
                } as React.CSSProperties}
              >
                <ul style={{ listStyle: 'none', margin: 0, padding: '14px' }}>
                  {faqs.map((faq, idx) => (
                    <li key={idx} style={{ marginBottom: 10 }}>
                      <button
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(247,242,255,0.8) 100%)',
                          color: '#000000',
                          border: '1.5px solid rgba(199,164,255,0.30)',
                          borderRadius: 12,
                          padding: '12px 16px',
                          width: '100%',
                          textAlign: 'left',
                          fontSize: 13.5,
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          fontWeight: 600,
                          boxShadow: '0 2px 6px rgba(199,164,255,0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = brandGradient;
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.transform = 'translateX(4px)';
                          e.currentTarget.style.boxShadow = '0 4px 16px rgba(199,164,255,0.35)';
                          e.currentTarget.style.borderColor = 'transparent';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(247,242,255,0.8) 100%)';
                          e.currentTarget.style.color = '#000000';
                          e.currentTarget.style.transform = 'translateX(0)';
                          e.currentTarget.style.boxShadow = '0 2px 6px rgba(199,164,255,0.08)';
                          e.currentTarget.style.borderColor = 'rgba(199,164,255,0.30)';
                        }}
                        onClick={() => {
                          setShowFaqMenu(false);
                          handleSendMessage(faq.q);
                        }}
                      >
                        <span style={{ fontSize: '14px', lineHeight: 1 }}>{faq.q}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '12px 18px',
            background: surfaceColor,
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(199,164,255,0.5) rgba(199,164,255,0.1)'
          }}>
            {messages.map((message, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  marginBottom: 8,
                  gap: '8px'
                }}
              >
                {/* Show girl avatar for bot messages */}
                {message.sender === 'bot' && (
                  <img 
                    src="/image-removebg-preview.png" 
                    alt="Klevi" 
                    style={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: '50%',
                      background: 'white',
                      padding: '2px',
                      border: '2px solid rgba(199,164,255,0.50)',
                      objectFit: 'cover',
                      flexShrink: 0
                    }} 
                  />
                )}
                <span style={{
                  background: message.sender === 'user' ? brandGradient : surfaceColor,
                  color: message.sender === 'user' ? '#ffffff' : brandColor,
                  padding: '8px 14px',
                  borderRadius: message.sender === 'user' ? '16px 16px 0 16px' : '16px 16px 16px 0',
                  fontSize: 15,
                  maxWidth: 220,
                  boxShadow: message.sender === 'user' ? '0 2px 8px rgba(199,164,255,0.10)' : '0 1px 3px rgba(0,0,0,0.06)',
                  border: message.sender === 'user' ? 'none' : '1px solid rgba(199,164,255,0.50)',
                  wordBreak: 'break-word',
                  fontWeight: 500,
                }}>
                  {message.text}
                </span>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 8, gap: '8px', alignItems: 'center' }}>
                <img 
                  src="/image-removebg-preview.png" 
                  alt="Klevi" 
                  style={{ 
                    width: 32, 
                    height: 32, 
                    borderRadius: '50%',
                    background: 'white',
                    padding: '2px',
                    border: '2px solid rgba(199,164,255,0.50)',
                    objectFit: 'cover',
                    flexShrink: 0
                  }} 
                />
                <span style={{
                  background: surfaceColor,
                  color: brandColor,
                  padding: '8px 14px',
                  borderRadius: '16px 16px 16px 0',
                  fontSize: 15,
                  fontWeight: 500,
                  opacity: 0.7
                }}>...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div style={{
            padding: '10px 18px',
            background: surfaceColor,
            borderTop: `1px solid ${borderColor}`,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            position: 'relative',
            overflow: 'visible'
          }}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
              placeholder="Type your message..."
              style={{
                flex: 1,
                border: `1.5px solid ${brandColor}`,
                borderRadius: 8,
                padding: '8px 12px',
                fontSize: 15,
                color: foregroundColor,
                background: surfaceColor,
                outline: 'none',
                fontWeight: 500,
              }}
              disabled={loading}
            />
            <button
              onClick={() => handleSendMessage()}
              style={{
                 background: brandGradient,
                color: '#ffffff',
                border: 'none',
                borderRadius: 8,
                padding: '8px 18px',
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(199,164,255,0.10)',
                transition: 'background 0.2s',
                opacity: loading ? 0.7 : 1,
              }}
              disabled={loading}
            >Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KleviBot;