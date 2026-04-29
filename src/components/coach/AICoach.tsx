import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Bot, Send, User, Loader2, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function AICoach() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: "Hello! I'm your Forge AI Coach. Tell me about your fitness goals, your current stats (weight, level), and I'll help you pick a season and plan." }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            role: 'user',
            parts: [{ text: `You are a professional fitness coach at Forge Fitness. 
            The gym has three seasons: Bulking, Cutting, and Recomp (Maintenance).
            Based on the following user input, recommend a season and provide 3 actionable tips for their training/nutrition.
            Keep it technical, encouraging, and concise. Use a "Forge" branding tone (strong, industrial).
            
            User Input: ${userMessage}` }]
          }
        ],
        config: {
          systemInstruction: "You are a professional fitness coach. You provide advice on gym seasoning (bulking, cutting, maintenance). You are concise, bold, and scientific.",
        }
      });

      const aiResponse = response.text || "I'm sorry, I couldn't process that. Let's try again.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Gemini Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Connection lost to the Forge. Please check your connectivity and try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-brand-primary text-black rounded-full shadow-lg shadow-brand-primary/20 cursor-pointer"
      >
        <Sparkles size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[400px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-150px)] glass-card rounded-2xl flex flex-col z-50 overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-brand-muted">
              <div className="flex items-center gap-2">
                <Bot className="text-brand-primary" size={20} />
                <span className="font-display font-medium text-sm">FORGE AI COACH</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white cursor-pointer">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex gap-3", m.role === 'user' ? "flex-row-reverse" : "flex-row")}>
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", m.role === 'user' ? "bg-white/10" : "bg-brand-primary/20")}>
                    {m.role === 'user' ? <User size={16} /> : <Bot size={16} className="text-brand-primary" />}
                  </div>
                  <div className={cn(
                    "p-3 rounded-2xl text-sm leading-relaxed",
                    m.role === 'user' ? "bg-brand-primary text-black" : "bg-brand-muted text-white/90"
                  )}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <Loader2 size={16} className="text-brand-primary animate-spin" />
                  </div>
                  <div className="p-3 rounded-2xl bg-brand-muted text-white/50 text-sm">
                    Consulting the Forge...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-brand-muted">
              <form 
                onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask your coach..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary transition-colors"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="p-2 bg-brand-primary text-black rounded-xl hover:opacity-90 disabled:opacity-50 transition-all cursor-pointer"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
