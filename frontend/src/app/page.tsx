export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Logo/Símbolo Maçônico */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-xl">
            <span className="text-6xl text-emerald-800">⚖️</span>
          </div>
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wide">
          Loja Maçônica Eliphas Levi
        </h1>
        
        {/* Subtítulo com Valores */}
        <p className="text-xl md:text-2xl text-emerald-100 mb-12 font-light">
          Liberdade, Igualdade e Fraternidade
        </p>

        {/* Card Principal com Informações da Sessão */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
          
          {/* Ícone e Título da Sessão */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">📅</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Próxima Sessão
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto rounded"></div>
          </div>
          
          {/* Informações da Data e Hora */}
          <div className="space-y-6 text-gray-700">
            <div className="bg-emerald-50 p-6 rounded-xl">
              <p className="text-2xl md:text-3xl font-bold text-emerald-800 mb-2">
                20 de Setembro de 2025
              </p>
              <p className="text-xl md:text-2xl text-emerald-700">
                🕘 às <span className="font-semibold">9:00</span> da manhã
              </p>
            </div>
            
            {/* Informações Adicionais */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Para mais informações, entre em contato com a secretaria da loja.
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé com Copyright */}
        <div className="mt-12 text-emerald-200 text-sm">
          <p>© 2025 Loja Maçônica Eliphas Levi - São Paulo</p>
        </div>
        
      </div>
    </div>
  );
}