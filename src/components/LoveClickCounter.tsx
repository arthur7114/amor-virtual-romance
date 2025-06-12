
import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const LoveClickCounter = () => {
  const [clickCount, setClickCount] = useState(0);
  const [floatingHearts, setFloatingHearts] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [message, setMessage] = useState("");

  const loveMessages = [
    "Acho que dá mais ein, momo 👀",
    "Vai momo!!",
    "Tá ficando interessante, mais amor🫡",
    "Eita como clica hehe",
    "Hmmmm, tá fraco mo",
    "Quero mais e mais e mais",
    "Ainda não, dá mais mo",
    "Taca o dedo, moça 🙂",
    "Cada clique é um beijinho que você me deve",
    "10 vezes! Aêee momo, já vai dar 10 beijinhos, mas mereço mais ein 🥰"
  ];

  const getRandomMessage = (count: number) => {
    if (count <= 10) {
      return loveMessages[count - 1];
    } else if (count <= 20) {
      return `${count} beijinhos, vou cobrar ein`;
    } else if (count <= 50) {
      return `${count} beijinhos!!! Já vamo ficar um tempinho nos beijos ein😏`;
    } else if (count <= 100) {
      return `${count} cliques! O que acontece quando passar de 100?`;
    } else {
      return `Te amo ${count}x mais, amor!!! 🥰`;
    }
  };

  const createFloatingHeart = (x: number, y: number) => {
    const heart = {
      id: Date.now() + Math.random(),
      x: x,
      y: y
    };
    setFloatingHearts(prev => [...prev, heart]);
    
    setTimeout(() => {
      setFloatingHearts(prev => prev.filter(h => h.id !== heart.id));
    }, 2000);
  };

  const handleLoveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    setMessage(getRandomMessage(newCount));
    
    // Create floating heart at click position
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    createFloatingHeart(x, y);
    
    // Save to localStorage
    localStorage.setItem('loveClickCount', newCount.toString());
  };

  const resetCounter = () => {
    setClickCount(0);
    setMessage("");
    localStorage.removeItem('loveClickCount');
  };

  useEffect(() => {
    // Load saved count from localStorage
    const savedCount = localStorage.getItem('loveClickCount');
    if (savedCount) {
      const count = parseInt(savedCount);
      setClickCount(count);
      setMessage(getRandomMessage(count));
    }
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-rose-50 to-pink-50 relative">
      {/* Floating Hearts */}
      {floatingHearts.map(heart => (
        <div
          key={heart.id}
          className="absolute z-20 pointer-events-none animate-[floatUp_2s_ease-out_forwards]"
          style={{ left: heart.x, top: heart.y }}
        >
          <Heart className="text-pink-500 w-6 h-6 fill-current" />
        </div>
      ))}

      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-purple-800 mb-8">
          Contador de Amor
        </h2>
        
        <div className="bg-white rounded-3xl p-8 shadow-2xl mb-8">
          <div className="mb-8">
            <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text mb-4">
              {clickCount}
            </div>
            <p className="text-xl text-purple-700 font-medium">
              {clickCount === 0 ? "Clique no coração para me amar!" : "Demonstrações de amor hoje! 💕"}
            </p>
          </div>
          
          <button
            onClick={handleLoveClick}
            className="relative bg-gradient-to-r from-pink-500 to-rose-500 text-white p-8 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl group mb-6"
          >
            <Heart className="w-12 h-12 fill-current group-hover:animate-pulse" />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-pulse" />
          </button>
          
          {message && (
            <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 border-4 border-yellow-400 rounded-2xl p-6 mb-6 animate-fadeIn">
              <p className="text-purple-800 font-medium text-lg">
                {message}
              </p>
            </div>
          )}
          
          {clickCount > 0 && (
            <div className="flex justify-center space-x-4">
              <button
                onClick={resetCounter}
                className="text-purple-600 hover:text-purple-800 font-medium transition-colors duration-300"
              >
                Resetar Contador
              </button>
            </div>
          )}
        </div>
        
        <div className="text-purple-600 font-medium">
          💡 Dica: Cada clique é uma demonstração de amor que fica salva no seu navegador!
        </div>
      </div>
    </section>
  );
};

export default LoveClickCounter;
