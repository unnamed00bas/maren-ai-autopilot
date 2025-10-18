import { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatModal from './ChatModal';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {/* Pulsing background effect */}
        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
        
        <Button
          onClick={() => setIsOpen(true)}
          className="relative flex items-center gap-2 h-14 px-6 rounded-full shadow-lg hover:scale-105 transition-transform animate-pulse"
        >
          <Sparkles className="h-5 w-5" />
          <span className="font-semibold whitespace-nowrap">AI-Консультант MAREN</span>
        </Button>
      </div>

      <ChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ChatButton;
