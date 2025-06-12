
import React, { useState } from 'react';
import { Heart, Sparkles, Gift } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  surprise: string;
}

const LoveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showSurprise, setShowSurprise] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "Qual é a minha comida favorita para dividir com você?",
      options: ["Pizza", "Chocolate", "Sorvete", "Todas as opções!"],
      correctAnswer: 3,
      surprise: "🍕 Verdade! Qualquer comida fica mais gostosa quando dividimos juntos! Você torna tudo mais especial! 💕"
    },
    {
      id: 2,
      question: "O que mais me faz sorrir no meu dia?",
      options: ["Café da manhã", "Ver você", "Música", "Trabalho"],
      correctAnswer: 1,
      surprise: "😊 Exato! Seu sorriso é o que ilumina todos os meus dias! Você é minha fonte de felicidade! ✨"
    },
    {
      id: 3,
      question: "Qual é nosso lugar favorito para estar juntos?",
      options: ["Cinema", "Parque", "Em casa", "Onde você estiver"],
      correctAnswer: 3,
      surprise: "🏠 Perfeito! Qualquer lugar se torna nosso lar quando estamos juntos! Você é meu lugar favorito! 💖"
    },
    {
      id: 4,
      question: "O que eu mais amo em nosso relacionamento?",
      options: ["Risadas", "Cumplicidade", "Carinho", "Tudo isso junto!"],
      correctAnswer: 3,
      surprise: "💝 Isso mesmo! Nosso amor é feito de todos esses momentos especiais! Cada detalhe com você é perfeito! 🌟"
    },
    {
      id: 5,
      question: "Como eu me sinto quando estou com você?",
      options: ["Feliz", "Completo", "Apaixonado", "Todas as opções!"],
      correctAnswer: 3,
      surprise: "💕 Correto! Você desperta em mim todos os sentimentos mais lindos! Sou completamente seu! 👑"
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setShowSurprise(true);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowSurprise(false);
      } else {
        setQuizCompleted(true);
      }
    }, 3000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowSurprise(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <section className="py-16 px-4 bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <Gift className="w-16 h-16 text-pink-500 mx-auto mb-6" />
            <h2 className="text-3xl font-serif text-purple-800 mb-6">Quiz Completo!</h2>
            <p className="text-xl text-purple-700 mb-6">
              Você acertou {score} de {questions.length} perguntas!
            </p>
            <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl p-6 mb-6">
              <p className="text-purple-800 font-medium text-lg leading-relaxed">
                {score === questions.length 
                  ? "💖 Perfeito! Você me conhece completamente! Isso prova que nosso amor é verdadeiro e especial! Você é incrível!"
                  : score >= 3
                  ? "💕 Muito bem! Você me conhece super bem! Nosso amor é lindo e cada dia juntos nos conhecemos mais!"
                  : "💝 Que fofo! Ainda estamos nos descobrindo, e isso torna nossa jornada ainda mais especial! Te amo!"
                }
              </p>
            </div>
            <button
              onClick={resetQuiz}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Jogar Novamente 💕
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-purple-800 text-center mb-8">
          Quiz do Nosso Amor
        </h2>
        
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          {!showSurprise ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-purple-600 font-medium">
                    Pergunta {currentQuestion + 1} de {questions.length}
                  </span>
                  <div className="flex space-x-1">
                    {questions.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                          index <= currentQuestion ? 'bg-pink-400' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-serif text-purple-800 mb-6">
                  {questions[currentQuestion].question}
                </h3>
              </div>
              
              <div className="space-y-3 mb-8">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left rounded-2xl border-2 transition-all duration-300 ${
                      selectedAnswer === index
                        ? 'border-pink-400 bg-pink-50 text-pink-700'
                        : 'border-gray-200 hover:border-pink-300 hover:bg-pink-25'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedAnswer !== null
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg hover:-translate-y-1'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                {currentQuestion === questions.length - 1 ? 'Finalizar Quiz' : 'Próxima Pergunta'}
              </button>
            </>
          ) : (
            <div className="text-center animate-fadeIn">
              <Sparkles className="w-16 h-16 text-pink-500 mx-auto mb-6" />
              <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 border-4 border-yellow-400 rounded-2xl p-6">
                <p className="text-purple-800 font-medium text-lg leading-relaxed">
                  {questions[currentQuestion].surprise}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoveQuiz;
