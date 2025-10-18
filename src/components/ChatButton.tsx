import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatModal from './ChatModal';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <ChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ChatButton;
