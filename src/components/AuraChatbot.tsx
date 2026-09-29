import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, RefreshCw, ChevronDown, Bot, User, Utensils } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

const WEBHOOK_URL = 'https://amruthalakkoju.app.n8n.cloud/webhook/478c22a2-3968-427d-9d66-4ee8db5e6da3/chat';

const QUICK_PROMPTS = [
  "What is the Chef's Table experience?",
  "Recommend signature biryanis & kebabs",
  "What are your vegetarian options?",
  "Location & hours in Visakhapatnam",
];

export const AuraChatbot: React.FC<{ onOpenReservation?: () => void }> = ({ onOpenReservation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    return [
      {
        id: 'welcome-1',
        sender: 'bot',
        text: 'Namaste and welcome to **AURA Indian Fine Dining**.\n\nI am your digital concierge. I can assist you with our menu, Chef’s Table bookings, dietary accommodations, wine pairings, or restaurant details.\n\nHow may I make your evening memorable?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize unique session ID
  useEffect(() => {
    let savedSession = localStorage.getItem('aura_chat_session_id');
    if (!savedSession) {
      savedSession = 'aura-session-' + Math.random().toString(36).substring(2, 10) + '-' + Date.now();
      localStorage.setItem('aura_chat_session_id', savedSession);
    }
    setSessionId(savedSession);
  }, []);

  // Auto-scroll on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || inputMessage).trim();
    if (!messageContent || isLoading) return;

    const userMsg: ChatMessage = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatInput: messageContent,
          sessionId: sessionId || 'aura-guest-default',
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const botReplyText =
        data.output ||
        data.text ||
        data.message ||
        (typeof data === 'string' ? data : 'Thank you for your inquiry. Our guest concierge will assist you further.');

      const botMsg: ChatMessage = {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: botReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error('Error contacting AURA chat webhook:', error);
      const errorMsg: ChatMessage = {
        id: 'err-' + Date.now(),
        sender: 'bot',
        text: 'Apologies, our concierge connection momentarily paused. Please feel free to call our direct reservation desk at **+91 90000 12345** or try sending your message again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    const newSession = 'aura-session-' + Math.random().toString(36).substring(2, 10) + '-' + Date.now();
    localStorage.setItem('aura_chat_session_id', newSession);
    setSessionId(newSession);
    setMessages([
      {
        id: 'welcome-' + Date.now(),
        sender: 'bot',
        text: 'Namaste! Conversation refreshed. How may I assist your dining plans at AURA today?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  // Helper to render markdown (bold, lists, linebreaks)
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');

    return (
      <div className="space-y-1.5 leading-relaxed text-xs sm:text-sm">
        {lines.map((line, idx) => {
          if (!line.trim()) {
            return <div key={idx} className="h-1" />;
          }

          const isBullet = line.trim().startsWith('* ') || line.trim().startsWith('- ');
          const lineClean = isBullet ? line.trim().substring(2) : line;

          // Parse **bold** parts
          const parts = lineClean.split(/(\*\*.*?\*\*)/g);
          const parsedParts = parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className="font-semibold text-[#f6f3eb]">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          });

          if (isBullet) {
            return (
              <div key={idx} className="flex items-start gap-1.5 pl-2 text-[#ded8c8]">
                <span className="text-[#d4af37] text-xs leading-4">•</span>
                <span>{parsedParts}</span>
              </div>
            );
          }

          return (
            <p key={idx} className="text-[#ded8c8]">
              {parsedParts}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {/* Floating Concierge Trigger Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#161622]/95 hover:bg-[#202030] text-[#f6f3eb] border border-[#d4af37]/50 hover:border-[#d4af37] rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 transform hover:scale-105 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          aria-label={isOpen ? 'Close Concierge Chat' : 'Open AURA Concierge Chatbot'}
        >
          {/* Subtle pulse gold halo */}
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#d4af37]/40 to-[#e0a96d]/40 blur-sm opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#d4af37] text-[#0c0c0f]">
            <MessageSquare className="w-4 h-4 fill-[#0c0c0f]" />
          </div>

          <div className="relative hidden sm:flex flex-col text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ebdca7] flex items-center gap-1.5">
              <span>AURA Concierge</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <span className="text-[10px] text-[#9d9aa7] tracking-normal">AI Dining Assistant</span>
          </div>

          {/* Unread badge */}
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#d4af37] border-2 border-[#0c0c0f]" />
            </span>
          )}
        </button>
      </div>

      {/* Floating Chat Modal / Drawer */}
      {isOpen && (
        <div
          className="fixed bottom-22 left-4 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[82vh] h-[580px] bg-[#12121a]/98 backdrop-blur-xl border border-[#d4af37]/40 rounded-sm shadow-2xl flex flex-col overflow-hidden animate-fadeIn"
          role="dialog"
          aria-label="AURA Concierge Chatbot"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#171724] via-[#1a1826] to-[#12121a] border-b border-[#d4af37]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#0c0c0f] border border-[#d4af37]/40 flex items-center justify-center">
                <Bot className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-base font-semibold text-[#f6f3eb] tracking-wide">
                    AURA Concierge
                  </h3>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-medium tracking-wide uppercase bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                </div>
                <p className="text-[10px] text-[#a9a5b3] tracking-wide">
                  Fine Dining & Reservation Assistant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Restart Conversation"
                className="p-1.5 text-[#a9a5b3] hover:text-[#d4af37] hover:bg-[#1f1f2e] rounded-sm transition-colors cursor-pointer"
                aria-label="Restart conversation"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-[#a9a5b3] hover:text-[#f6f3eb] hover:bg-[#1f1f2e] rounded-sm transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-[#1e1c29] border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3 text-[#d4af37]" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-sm p-3 shadow-md ${
                    msg.sender === 'user'
                      ? 'bg-[#d4af37] text-[#0c0c0f] font-medium ml-4'
                      : 'bg-[#181824] border border-[#d4af37]/20 text-[#ded8c8]'
                  }`}
                >
                  {msg.sender === 'bot' ? (
                    renderFormattedText(msg.text)
                  ) : (
                    <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
                      {msg.text}
                    </p>
                  )}
                  <span
                    className={`block text-[9px] mt-1.5 font-mono ${
                      msg.sender === 'user' ? 'text-[#0c0c0f]/70 text-right' : 'text-[#8b8796]'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3 h-3 text-[#d4af37]" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing / Loading indicator */}
            {isLoading && (
              <div className="flex items-center gap-2.5 text-[#a9a5b3] text-xs">
                <div className="w-6 h-6 rounded-full bg-[#1e1c29] border border-[#d4af37]/30 flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-[#d4af37] animate-spin" />
                </div>
                <div className="bg-[#181824] border border-[#d4af37]/20 px-3 py-2 rounded-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="ml-1 text-[11px] text-[#ebdca7]">AURA Concierge is thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-[#0e0e14] border-t border-white/5 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            <span className="text-[10px] uppercase tracking-wider text-[#7e7b8c] shrink-0 mr-1">
              Ask:
            </span>
            {QUICK_PROMPTS.map((prompt, pIdx) => (
              <button
                key={pIdx}
                disabled={isLoading}
                onClick={() => handleSendMessage(prompt)}
                className="text-[11px] text-[#ebdca7] hover:text-[#0c0c0f] hover:bg-[#d4af37] bg-[#1a1a26] border border-[#d4af37]/25 px-2.5 py-1 rounded-sm whitespace-nowrap transition-colors cursor-pointer shrink-0 disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-[#14141e] border-t border-[#d4af37]/20 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              disabled={isLoading}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Ask about dishes, reservations, timings..."
              className="flex-1 px-3.5 py-2 text-xs bg-[#0c0c10] border border-white/10 rounded-sm text-[#f6f3eb] placeholder-[#767383] focus:outline-none focus:border-[#d4af37] transition-colors"
            />

            <button
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputMessage.trim()}
              className="p-2.5 bg-[#d4af37] hover:bg-[#e2c275] active:bg-[#b8860b] text-[#0c0c0f] rounded-sm transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              aria-label="Send Message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Table Reserve Link in Chat Footer */}
          {onOpenReservation && (
            <div className="bg-[#0c0c0f] px-4 py-2 border-t border-white/5 flex items-center justify-between text-[11px]">
              <span className="text-[#a9a5b3]">Ready to join us in Visakhapatnam?</span>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenReservation();
                }}
                className="text-[#d4af37] hover:text-[#ebdca7] font-medium underline uppercase tracking-wider text-[10px] cursor-pointer"
              >
                Reserve Table Now
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
