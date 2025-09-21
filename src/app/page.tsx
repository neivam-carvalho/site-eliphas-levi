export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-emerald-300 rotate-45"></div>
          <div className="absolute bottom-40 right-32 w-24 h-24 border border-emerald-300 rotate-12"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-emerald-300 rotate-45"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo/Símbolo Maçônico */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-emerald-100 to-white rounded-full flex items-center justify-center mb-8 shadow-2xl border-4 border-emerald-200">
              <span className="text-7xl text-emerald-800">⚖️</span>
            </div>
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide animate-fade-in-up animation-delay-200">
            Loja Maçônica
            <span className="block text-emerald-200">Eliphas Levi</span>
          </h1>
          
          {/* Subtítulo com Valores */}
          <p className="text-2xl md:text-3xl text-emerald-100 mb-8 font-light animate-fade-in-up animation-delay-400">
            Liberdade · Igualdade · Fraternidade
          </p>

          {/* Descrição */}
          <p className="text-lg md:text-xl text-emerald-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
            Uma instituição dedicada ao desenvolvimento moral, intelectual e espiritual, 
            promovendo os valores universais de fraternidade e progresso humano.
          </p>

          {/* Card da Próxima Sessão */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-800">
            
            {/* Ícone e Título da Sessão */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl">📅</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Próxima Sessão
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto rounded"></div>
            </div>
            
            {/* Informações da Data e Hora */}
            <div className="space-y-6 text-gray-700">
              <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-8 rounded-2xl">
                <p className="text-3xl md:text-4xl font-bold text-emerald-800 mb-3">
                  04 de Outubro de 2025
                </p>
                <p className="text-xl md:text-2xl text-emerald-700">
                  🕘 às <span className="font-semibold">9:00</span> da manhã
                </p>
              </div>
              
              {/* Informações Adicionais */}
              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Para mais informações, entre em contato com a secretaria da loja.
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-emerald-200 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-emerald-200 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Loja Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a Loja Maçônica Eliphas Levi
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto rounded mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fundada nos princípios eternos da Maçonaria, nossa loja é um espaço de crescimento 
              pessoal e fraternidade universal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* História */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Nossa História</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Carregamos uma rica tradição de conhecimento e sabedoria, 
                perpetuando os ensinamentos ancestrais da Arte Real.
              </p>
            </div>

            {/* Missão */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Nossa Missão</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Formar homens de bem, promovendo o desenvolvimento moral e intelectual 
                através do estudo e da prática dos valores maçônicos.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Nossos Valores</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Guiados pelos princípios fundamentais de Liberdade, Igualdade e Fraternidade, 
                buscamos a perfeição moral e espiritual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Fundamentais */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Os Três Pilares da Maçonaria
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Liberdade */}
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center mb-8 mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-5xl text-white">🕊️</span>
              </div>
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">Liberdade</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                A liberdade de pensamento, consciência e expressão, 
                respeitando sempre os direitos dos demais.
              </p>
            </div>

            {/* Igualdade */}
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center mb-8 mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-5xl text-white">⚖️</span>
              </div>
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">Igualdade</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Todos os homens são iguais em dignidade e direitos, 
                independente de sua condição social ou origem.
              </p>
            </div>

            {/* Fraternidade */}
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center mb-8 mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-5xl text-white">🤝</span>
              </div>
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">Fraternidade</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                O amor fraternal que une todos os maçons, 
                promovendo a harmonia e o bem comum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Entre em Contato
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto rounded mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interessado em conhecer mais sobre nossa loja? Entre em contato conosco.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors duration-200"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors duration-200"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Assunto</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors duration-200">
                    <option>Informações Gerais</option>
                    <option>Iniciação</option>
                    <option>Visitação</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors duration-200"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>
                <div className="md:col-span-2 text-center">
                  <button 
                    type="submit"
                    className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-emerald-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-emerald-800 to-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo e Descrição */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl text-emerald-800">⚖️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Loja Maçônica Eliphas Levi</h3>
                  <p className="text-emerald-200">Liberdade, Igualdade e Fraternidade</p>
                </div>
              </div>
              <p className="text-emerald-100 leading-relaxed mb-6">
                Uma instituição dedicada aos valores eternos da Maçonaria, 
                promovendo o desenvolvimento moral e intelectual de seus membros 
                através dos ensinamentos da Arte Real.
              </p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#inicio" className="text-emerald-200 hover:text-white transition-colors duration-200">Início</a></li>
                <li><a href="#sobre" className="text-emerald-200 hover:text-white transition-colors duration-200">Sobre Nós</a></li>
                <li><a href="#valores" className="text-emerald-200 hover:text-white transition-colors duration-200">Nossos Valores</a></li>
                <li><a href="#contato" className="text-emerald-200 hover:text-white transition-colors duration-200">Contato</a></li>
              </ul>
            </div>

            {/* Informações de Contato */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Contato</h4>
              <div className="space-y-3 text-emerald-100">
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  São Paulo - SP
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📧</span>
                  contato@eliphaslevi.org.br
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📅</span>
                  Reuniões: Quartas às 20h
                </p>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-emerald-700 pt-8 text-center">
            <p className="text-emerald-200">
              © {new Date().getFullYear()} Loja Maçônica Eliphas Levi. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}