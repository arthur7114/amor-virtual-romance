eimport React, { useState, useEffect } from 'react';
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

  const monthsWithPhotos = [
    { name: "Janeiro", photo: "/lovable-uploads/b7c7dd7e-698a-4486-86ca-857352367177.png" },
    { name: "Fevereiro", photo: "/lovable-uploads/6ee75455-375b-46fb-979f-00675deb576f.png" },
    { name: "Março", photo: "/lovable-uploads/941783e3-1aa0-46b6-852c-32cc80b6058f.png" },
    { name: "Abril", photo: "/lovable-uploads/d59400cc-49fa-4f38-bce7-437331e5f2d9.png" },
    { name: "Maio", photo: "/lovable-uploads/13354631-c479-477c-91c9-a48e3abe0c84.png" },
    { name: "Junho", photo: "/lovable-uploads/e7682d4f-0f50-45bc-ae0b-051ccef43419.png" },
    { name: "Julho", photo: "/lovable-uploads/d212cb89-61c4-4ae6-8596-cc9a3b0bbbda.png" },
    { name: "Agosto", photo: "/lovable-uploads/b451f389-a9a2-4337-a018-a9950669da5c.png" },
    { name: "Setembro", photo: "/lovable-uploads/702010d9-ef29-4672-92e3-87558b4c41fc.png" },
    { name: "Outubro", photo: "/lovable-uploads/f2b14a75-1e58-486b-8890-10e066d67677.png" }
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
              src="/lovable-uploads/9557dfac-5426-498a-a0f2-3e92f48e254d.png"
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

      {/* 10 Months Gallery with Real Photos */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-100 to-purple-100">
        <h2 className="text-3xl md:text-4xl font-serif text-purple-800 text-center mb-12">
          Nossos 10 Meses de Amor
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {monthsWithPhotos.map((month, index) => (
            <div
              key={month.name}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <h3 className="font-serif text-purple-700 text-lg mb-4">{month.name}</h3>
              <div className="relative">
                <img
                  src={month.photo}
                  alt={`Memória de ${month.name}`}
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
            Esperao que eu tenha conseguido te arrancar sorrisos, passei a semana fazendo isso. Dei o sangue mesmo. Você vale todo meu esforço e te ver feliz é o que me faz ter força sempre. Te amo muito, princesa <3!
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
