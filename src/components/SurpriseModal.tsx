
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Heart } from 'lucide-react';

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SurpriseModal: React.FC<SurpriseModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md mx-auto bg-gradient-to-br from-pink-100 to-purple-100 border-4 border-pink-400 animate-modalBounce">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-serif text-purple-800 mb-4">
            🎉 Surpresa! 🎉
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-2 mb-4">
            <Heart className="text-pink-500 w-8 h-8 fill-current animate-heartbeat" />
            <Heart className="text-rose-500 w-8 h-8 fill-current animate-heartbeat" style={{animationDelay: '0.2s'}} />
            <Heart className="text-purple-500 w-8 h-8 fill-current animate-heartbeat" style={{animationDelay: '0.4s'}} />
          </div>
          
          <p className="text-purple-700 font-medium text-lg leading-relaxed">
            🌟 Você descobriu um segredo especial! 
          </p>
          
          <p className="text-purple-600 text-base">
            Cada clique seu neste site é como um beijinho no meu coração. 
            Obrigado(a) por explorar cada cantinho desta declaração de amor! 💕
          </p>
          
          <div className="mt-6">
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Continuar Explorando 💖
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SurpriseModal;
