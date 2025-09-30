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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Knowledge base as a string for context
  const knowledgeBase = `
  Klevora is a cutting-edge AI solutions startup that helps businesses grow faster using artificial intelligence and automation.
  
  Hi?Hey its your klevora
  What does Klevora do? Klevora helps businesses scale and grow using AI and automation.
  What services do you offer? We offer AI assistants, automation, analytics, and integrations.
  How can Klevora help my business? We automate tasks so you can focus on growth.
  Is my data safe with you? Yes, your data is private and secure.
  Do you offer a free trial? Yes, free trials are available.
  What industries do you serve? We support startups, SMEs, e-commerce, and consulting.
  How fast can I get started? You can start within minutes.
  What is the pricing? Plans are flexible; contact us for details.
  What payment methods do you accept? We accept cards, bank transfers, and digital wallets.
  Do you provide 24/7 support? Yes, our AI assistant is always available.
  Can I customize the AI assistant? Yes, Klevi can be customized to your needs.
  Can Klevora integrate with my tools? Yes, we integrate with Google Workspace, Slack, and CRMs.
  What happens if I exceed my plan limits? You can upgrade to a higher plan.
  Do you support multiple team members? Yes, teams can work under one account.
  Can I cancel anytime? Yes, you can cancel or pause anytime.
  Will I lose data if I cancel? No, you can export your data before canceling.
  Do you keep improving your AI? Yes, we update and improve regularly.
  How do I contact support? You can email klevora.connect@gmail.com or message us on LinkedIn.
  what is your linkedin?https://www.linkedin.com/company/klevora-in
  Do you offer enterprise solutions? Yes, we provide custom enterprise plans.
  Why should I choose Klevora? We combine AI power with strong data privacy.
  What types of agents do you offer? We offer specialized agents including HR, Finance, Customer Service, Sales, and Operational agents.
  How can I schedule a meeting? To schedule a meeting, please use the button located at the bottom of the page.
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

    // Add user message
    setMessages((prev) => [...prev, { sender: 'user', text: question }]);
    setLoading(true);
    setInput('');

    try {
      // First check FAQs for exact matches
      const faqMatch = faqs.find(faq => 
        faq.q.toLowerCase() === question.toLowerCase()
      );

      let response: string;
      if (faqMatch) {
        response = faqMatch.a;
      } else {
        // Use Gemini API with knowledge base context
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
  };

  // Theme colors
  const brandColor = '#C7A4FF';
  const accentColor = '#18181B';
  const borderColor = '#C7A4FF';

  return (
    <div className="klevi-bot-container" style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 9999 }}>
      {/* Floating button */}
      <button
        className="klevi-bot-float-btn"
        onClick={toggleChat}
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: brandColor,
          boxShadow: '0 4px 16px rgba(108,71,255,0.15)',
          border: `2px solid ${borderColor}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'box-shadow 0.2s',
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
            bottom: 88,
            right: 16,
            width: 340,
            maxHeight: 420,
            background: accentColor,
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
            background: brandColor,
            color: accentColor,
            padding: '12px 18px',
            fontWeight: 600,
            fontSize: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
          }}>
            <span>Klevora AI Assistant</span>
            <button
              onClick={toggleChat}
              style={{
                background: 'transparent',
                border: 'none',
                color: accentColor,
                fontSize: 22,
                cursor: 'pointer',
                fontWeight: 700
              }}
              aria-label="Close chat"
            >×</button>
          </div>

          {/* FAQ quick menu */}
          <div style={{
            padding: '8px 18px',
            borderBottom: `1px solid ${borderColor}`,
            background: accentColor,
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
            <button
              onClick={() => setShowFaqMenu((prev) => !prev)}
              style={{
                background: brandColor,
                color: accentColor,
                border: 'none',
                borderRadius: 8,
                padding: '4px 10px',
                fontSize: 13,
                cursor: 'pointer',
                fontWeight: 500
              }}
            >FAQs</button>
            {showFaqMenu && (
              <div style={{
                position: 'absolute',
                top: 60,
                right: 24,
                background: accentColor,
                border: `1px solid ${borderColor}`,
                borderRadius: 10,
                boxShadow: '0 2px 8px rgba(199,164,255,0.10)',
                zIndex: 10000,
                width: 260
              }}>
                <ul style={{ listStyle: 'none', margin: 0, padding: 10 }}>
                  {faqs.map((faq, idx) => (
                    <li key={idx} style={{ marginBottom: 8 }}>
                      <button
                        style={{
                          background: brandColor,
                          color: accentColor,
                          border: 'none',
                          borderRadius: 6,
                          padding: '6px 10px',
                          width: '100%',
                          textAlign: 'left',
                          fontSize: 13,
                          cursor: 'pointer'
                        }}
                        onClick={() => {
                          setShowFaqMenu(false);
                          handleSendMessage(faq.q);
                        }}
                      >{faq.q}</button>
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
            background: accentColor
          }}>
            {messages.map((message, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  marginBottom: 8
                }}
              >
                <span style={{
                  background: message.sender === 'user' ? brandColor : accentColor,
                  color: message.sender === 'user' ? accentColor : brandColor,
                  padding: '8px 14px',
                  borderRadius: message.sender === 'user' ? '16px 16px 0 16px' : '16px 16px 16px 0',
                  fontSize: 15,
                  maxWidth: 220,
                  boxShadow: message.sender === 'user' ? '0 2px 8px rgba(199,164,255,0.10)' : 'none',
                  wordBreak: 'break-word',
                  fontWeight: 500,
                }}>
                  {message.text}
                </span>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 8 }}>
                <span style={{
                  background: accentColor,
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
            background: accentColor,
            borderTop: `1px solid ${borderColor}`,
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
            <input
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
                color: brandColor,
                background: accentColor,
                outline: 'none',
                fontWeight: 500,
              }}
              disabled={loading}
            />
            <button
              onClick={() => handleSendMessage()}
              style={{
                background: brandColor,
                color: accentColor,
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
