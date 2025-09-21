export default function EstudosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-emerald-300 rotate-45"></div>
          <div className="absolute bottom-40 right-32 w-24 h-24 border border-emerald-300 rotate-12"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-100 to-white rounded-full flex items-center justify-center mb-6 shadow-xl">
              <span className="text-4xl text-emerald-800">📚</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Estudos Maçônicos</h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Aprofunde-se no conhecimento esotérico e na sabedoria ancestral da Arte Real
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introdução aos Estudos */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              O Caminho do Conhecimento
            </h2>
            <div className="bg-emerald-50 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Os estudos maçônicos representam uma jornada contínua de descoberta e aperfeiçoamento. 
                Nossa loja dedica especial atenção ao estudo profundo dos símbolos, rituais e ensinamentos 
                que compõem a rica tradição da Maçonaria.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Através de uma abordagem sistemática e respeitosa, exploramos tanto os aspectos 
                exotéricos quanto esotéricos da Arte Real, sempre buscando a aplicação prática 
                dos ensinamentos em nossa vida cotidiana.
              </p>
            </div>
          </div>

          {/* Áreas de Estudo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Simbolismo Maçônico */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Simbolismo Maçônico</h3>
              <p className="text-gray-600 leading-relaxed">
                Estudo profundo dos símbolos fundamentais: Esquadro, Compasso, Nível, Prumo, 
                e sua aplicação na vida moral e espiritual do maçom.
              </p>
            </div>

            {/* Rituais e Cerimônias */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🕯️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rituais e Cerimônias</h3>
              <p className="text-gray-600 leading-relaxed">
                Compreensão do significado profundo dos rituais dos três graus simbólicos 
                e sua importância na formação maçônica.
              </p>
            </div>

            {/* História da Maçonaria */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📜</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">História da Maçonaria</h3>
              <p className="text-gray-600 leading-relaxed">
                Desde os antigos construtores até a Maçonaria moderna, exploramos a rica 
                história e evolução da Ordem através dos séculos.
              </p>
            </div>

            {/* Filosofia Esotérica */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Filosofia Esotérica</h3>
              <p className="text-gray-600 leading-relaxed">
                Estudo das correntes filosóficas que influenciaram a Maçonaria: Hermetismo, 
                Cabala, Alquimia e tradições místicas ocidentais.
              </p>
            </div>

            {/* Interpretação Bíblica */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interpretação Bíblica</h3>
              <p className="text-gray-600 leading-relaxed">
                Análise dos textos sagrados sob a perspectiva maçônica, com ênfase nos 
                ensinamentos morais e espirituais aplicáveis à vida moderna.
              </p>
            </div>

            {/* Grandes Mestres */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Grandes Mestres</h3>
              <p className="text-gray-600 leading-relaxed">
                Estudo da vida e obra dos grandes mestres maçons que contribuíram para 
                o desenvolvimento e expansão da Arte Real.
              </p>
            </div>
          </div>

          {/* Métodos de Estudo */}
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-3xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Métodos de Estudo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Pranchas de Estudos */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">📝 Pranchas de Estudos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Apresentação regular de trabalhos elaborados pelos irmãos sobre temas específicos, 
                  promovendo o debate construtivo e o aprofundamento do conhecimento.
                </p>
              </div>

              {/* Debates e Discussões */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">💬 Debates e Discussões</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sessões dedicadas ao diálogo fraternal sobre questões filosóficas, éticas 
                  e morais, sempre dentro dos princípios maçônicos.
                </p>
              </div>

              {/* Biblioteca Maçônica */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">📚 Biblioteca Maçônica</h3>
                <p className="text-gray-600 leading-relaxed">
                  Acervo especializado com obras clássicas e contemporâneas sobre Maçonaria, 
                  filosofia, esoterismo e ciências correlatas.
                </p>
              </div>

              {/* Cursos e Seminários */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">🎓 Cursos e Seminários</h3>
                <p className="text-gray-600 leading-relaxed">
                  Programas estruturados de formação maçônica, incluindo cursos básicos 
                  para novos iniciados e avançados para maçons experientes.
                </p>
              </div>
            </div>
          </div>

          {/* Orientações para Interpretação */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Orientações para Interpretação dos Símbolos
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-4">Nível Literal</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Compreensão do significado direto e histórico dos símbolos, 
                    sua origem e desenvolvimento através do tempo.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-4">Nível Alegórico</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Interpretação simbólica que revela ensinamentos morais e 
                    espirituais aplicáveis à vida do maçom.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-4">Nível Místico</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Compreensão esotérica que conecta os símbolos aos mistérios 
                    espirituais e à transformação interior.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-4">Nível Anagógico</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Interpretação que eleva a consciência para verdades universais 
                    e princípios eternos da existência.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Leituras Recomendadas */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leituras Recomendadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Obras Fundamentais */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-emerald-800 mb-4">📖 Obras Fundamentais</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• "O Livro do Aprendiz" - Wirth</li>
                  <li>• "Manual do Maçom" - Nicola Aslan</li>
                  <li>• "A Maçonaria" - José Castellani</li>
                  <li>• "Ritual do Grau de Aprendiz"</li>
                </ul>
              </div>

              {/* Filosofia e Esoterismo */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-emerald-800 mb-4">🔮 Filosofia e Esoterismo</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• "Dogma e Ritual" - Eliphas Levi</li>
                  <li>• "A Tradição Hermética" - Julius Evola</li>
                  <li>• "Os Mistérios da Cabala" - Papus</li>
                  <li>• "Corpus Hermeticum"</li>
                </ul>
              </div>

              {/* História Maçônica */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-emerald-800 mb-4">📜 História Maçônica</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• "História da Maçonaria" - Albert Mackey</li>
                  <li>• "A Maçonaria no Brasil" - A.Tenório d'Albuquerque</li>
                  <li>• "Landmarks" - Albert Mackey</li>
                  <li>• "Constituições de Anderson"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}