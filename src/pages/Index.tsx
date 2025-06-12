
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import InteractiveTimeline from '../components/InteractiveTimeline';
import LoveQuiz from '../components/LoveQuiz';
import LoveClickCounter from '../components/LoveClickCounter';

const Index = () => {
  const [revealedQualities, setRevealedQualities] = useState<Set<number>>(new Set());
  const [floatingHearts, setFloatingHearts] = useState<Array<{id: number, x: number, y: number}>>([]);

  const qualities = [
    { title: "Seu Sorriso", message: "💫 Seu sorriso ilumina meu dia e faz tudo parecer possível. É a primeira coisa que me faz sorrir toda manhã!", gradient: "from-pink-400 to-rose-500" },
    { title: "Sua Gentileza", message: "🌟 Sua gentileza com todos ao seu redor me mostra que escolhi a pessoa certa. Você tem um coração de ouro!", gradient: "from-rose-400 to-pink-500" },
    { title: "Sua Inteligência", message: "🧠 Conversar com você é sempre uma aventura. Sua inteligência e curiosidade me inspiram a ser melhor!", gradient: "from-pink-500 to-purple-500" },
    { title: "Seu Carinho", message: "🤗 Seus abraços são meu lugar seguro. Seu carinho me faz sentir amado de um jeito único!", gradient: "from-purple-400 to-pink-500" },
    { title: "Sua Beleza", message: "✨ Você é linda por dentro e por fora. Sua beleza vai muito além do que os olhos podem ver!", gradient: "from-pink-400 to-purple-400" },
    { title: "Nossos Momentos", message: "💝 Cada momento ao seu lado é especial. Você transforma os dias comuns em memórias inesquecíveis!", gradient: "from-rose-500 to-purple-500" }
  ];

  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const createFloatingHeart = (x?: number, y?: number) => {
    const heart = {
      id: Date.now() + Math.random(),
      x: x || Math.random() * window.innerWidth,
      y: y || window.innerHeight
    };
    setFloatingHearts(prev => [...prev, heart]);
    
    setTimeout(() => {
      setFloatingHearts(prev => prev.filter(h => h.id !== heart.id));
    }, 3000);
  };

  const revealQuality = (index: number, event: React.MouseEvent) => {
    setRevealedQualities(prev => new Set([...prev, index]));
    createFloatingHeart(event.clientX, event.clientY);
  };

  const handleMainPhotoClick = () => {
    alert("🥰 Esta é minha foto favorita nossa! Cada vez que olho, meu coração se enche de amor por você! 💕");
    createFloatingHeart();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      createFloatingHeart();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-x-hidden">
      {/* Floating Cats Animation */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute animate-[floatAcross_15s_linear_infinite] text-2xl">🐱</div>
        <div className="absolute animate-[floatAcross_20s_linear_infinite] text-2xl top-1/4" style={{animationDelay: '5s'}}>😺</div>
        <div className="absolute animate-[floatAcross_18s_linear_infinite] text-2xl top-2/3" style={{animationDelay: '10s'}}>😻</div>
      </div>

      {/* Floating Hearts */}
      {floatingHearts.map(heart => (
        <div
          key={heart.id}
          className="fixed z-20 pointer-events-none animate-[floatUp_3s_ease-out_forwards]"
          style={{ left: heart.x, top: heart.y }}
        >
          <Heart className="text-pink-500 w-6 h-6 fill-current" />
        </div>
      ))}

      {/* Header */}
      <header className="text-center py-16 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white animate-[fadeIn_1s_ease-out]">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 animate-[slideIn_1s_ease-out]">
          Para Meu Amor
        </h1>
        <p className="text-xl md:text-2xl font-light animate-[slideIn_1s_ease-out] opacity-90" style={{animationDelay: '0.5s'}}>
          Uma declaração especial no Dia dos Namorados ❤️
        </p>
      </header>

      {/* Main Photo Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-purple-800 mb-8 animate-[fadeIn_1s_ease-out]">
          Minha Foto Preferida de Nós
        </h2>
        <div className="flex justify-center">
          <div 
            className="transform -rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105 cursor-pointer bg-white p-4 shadow-2xl hover:shadow-3xl"
            onClick={handleMainPhotoClick}
          >
            <img
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=400&fit=crop"
              alt="Nossa foto favorita"
              className="w-72 h-96 object-cover rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* Love Click Counter */}
      <LoveClickCounter />

      {/* Interactive Timeline */}
      <InteractiveTimeline />

      {/* Love Quiz */}
      <LoveQuiz />

      {/* 12 Months Gallery */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-100 to-purple-100">
        <h2 className="text-3xl md:text-4xl font-serif text-purple-800 text-center mb-12">
          Nossos 12 Meses de Amor
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {months.map((month, index) => (
            <div
              key={month}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <h3 className="font-serif text-purple-700 text-lg mb-4">{month}</h3>
              <div className="relative">
                <img
                  src={`https://images.unsplash.com/photo-${1472396961693 + index}?w=120&h=120&fit=crop`}
                  alt={`Memória de ${month}`}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-pink-300 hover:border-pink-500 transition-colors duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Qualities Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-purple-800 text-center mb-12">
          O Que Mais Amo em Você
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {qualities.map((quality, index) => (
            <div key={index} className="text-center">
              <button
                onClick={(e) => revealQuality(index, e)}
                className={`w-full bg-gradient-to-r ${quality.gradient} text-white py-4 px-6 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 mb-4`}
              >
                {quality.title}
              </button>
              {revealedQualities.has(index) && (
                <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 border-4 border-yellow-400 rounded-2xl p-6 shadow-lg animate-[fadeIn_0.5s_ease-out]">
                  <p className="text-purple-800 font-medium text-base leading-relaxed">
                    {quality.message}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-serif leading-relaxed mb-8">
            Este site é só uma pequena demonstração do meu amor por você. Cada dia ao seu lado é um presente, 
            e mal posso esperar para criar ainda mais memórias juntos. Você é minha pessoa favorita, 
            minha melhor amiga, meu grande amor. ❤️
          </p>
          <p className="text-2xl md:text-3xl font-bold font-serif">
            Feliz Dia dos Namorados, meu amor! 💕
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
