
import React, { useState } from 'react';
import { Heart, Calendar, Star } from 'lucide-react';

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
}

const InteractiveTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const events: TimelineEvent[] = [
    {
      id: 1,
      date: "Primeiro Encontro",
      title: "O Dia que Tudo Começou",
      description: "Nossos olhares se cruzaram e eu soube que você seria especial na minha vida. Cada segundo daquele dia está guardado no meu coração! 💕",
      emoji: "✨",
      color: "from-pink-400 to-rose-500"
    },
    {
      id: 2,
      date: "Primeiro Beijo",
      title: "Nosso Primeiro Beijo",
      description: "O mundo parou naquele momento. Seu beijo foi a confirmação de que eu havia encontrado minha pessoa especial! 💋",
      emoji: "💋",
      color: "from-rose-400 to-pink-500"
    },
    {
      id: 3,
      date: "Primeiro 'Eu Te Amo'",
      title: "As Palavras Mais Doces",
      description: "Quando você disse 'eu te amo' pela primeira vez, meu coração quase saiu pela boca! Foi o momento mais feliz da minha vida! 💖",
      emoji: "💖",
      color: "from-pink-500 to-purple-500"
    },
    {
      id: 4,
      date: "Nossa Primeira Viagem",
      title: "Aventura Juntos",
      description: "Descobrir o mundo ao seu lado é ainda mais mágico! Cada lugar que visitamos fica especial porque você estava lá! ✈️",
      emoji: "✈️",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 5,
      date: "Hoje",
      title: "Nosso Amor Hoje",
      description: "E aqui estamos, mais apaixonados que nunca! Cada dia ao seu lado é uma nova página da nossa história de amor! 🌟",
      emoji: "🌟",
      color: "from-pink-400 to-purple-400"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <h2 className="text-3xl md:text-4xl font-serif text-purple-800 text-center mb-12">
        Nossa Linha do Tempo do Amor
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 to-purple-300"></div>
          
          {events.map((event, index) => (
            <div key={event.id} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Timeline Dot */}
              <div 
                className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center text-white text-xl cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg z-10`}
                onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
              >
                {event.emoji}
              </div>
              
              {/* Event Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div 
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${selectedEvent === event.id ? 'ring-4 ring-pink-300' : ''}`}
                  onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                >
                  <h3 className="font-serif text-purple-700 text-xl mb-2">{event.title}</h3>
                  <p className="text-pink-600 font-medium mb-3">{event.date}</p>
                  
                  {selectedEvent === event.id && (
                    <div className="animate-fadeIn">
                      <p className="text-gray-700 leading-relaxed">{event.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;
