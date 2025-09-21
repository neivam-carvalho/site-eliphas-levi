export default function FilosofiaRosacruzPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-32 left-16 w-40 h-40 border border-emerald-300 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-emerald-300 rotate-45"></div>
          <div className="absolute top-40 right-40 w-16 h-16 border border-emerald-300 rotate-12"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-100 to-white rounded-full flex items-center justify-center mb-6 shadow-xl">
              <span className="text-4xl text-emerald-800">🌹</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Filosofia Rosacruz</h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            A Sabedoria Hermética e os Mistérios da Rosa e da Cruz
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              A Tradição Rosa-Cruz
            </h2>
            <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A filosofia Rosacruz representa uma das mais profundas correntes esotéricas do Ocidente, 
                entrelaçando os ensinamentos herméticos, alquímicos e cristãos em uma síntese única de 
                sabedoria espiritual. Esta tradição mística tem exercido profunda influência sobre o 
                desenvolvimento da Maçonaria moderna.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nossa loja, honrando o nome de Eliphas Levi, reconhece a importância desta tradição 
                para a compreensão integral dos mistérios maçônicos e dedica especial atenção ao 
                estudo de seus ensinamentos fundamentais.
              </p>
            </div>
          </div>

          {/* Christian Rosenkreuz */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Christian Rosenkreuz</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Segundo a tradição, Christian Rosenkreuz (1378-1484) foi o mítico fundador 
                    da Fraternidade Rosa-Cruz. Nascido em uma família nobre alemã, dedicou sua 
                    vida ao estudo das ciências ocultas e à busca da Verdade Universal.
                  </p>
                  <p className="leading-relaxed">
                    Suas viagens pelo Oriente Médio o colocaram em contato com os sábios árabes, 
                    dos quais aprendeu os segredos da alquimia, astrologia e medicina hermética. 
                    Ao retornar à Europa, fundou a Fraternidade R+C com o objetivo de reformar 
                    o conhecimento humano e promover a regeneração espiritual da humanidade.
                  </p>
                  <p className="leading-relaxed">
                    O túmulo de Christian Rosenkreuz, descoberto 120 anos após sua morte, 
                    revelou símbolos e ensinamentos que continuam a inspirar buscadores 
                    da Verdade até os dias atuais.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-5xl">⚱️</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-4">O Vault Secreto</h3>
                  <p className="text-gray-600 leading-relaxed">
                    O descobrimento do sepulcro de C.R.C. revelou uma câmara heptagonal 
                    iluminada por um sol artificial, contendo o corpo incorrupto do 
                    Fundador e preciosos manuscritos com os segredos da Arte.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Manifesto Rosacruz */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Os Manifestos Rosacruzes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Fama Fraternitatis */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-100 to-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-2xl">📜</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-4">Fama Fraternitatis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Publicado em 1614, este primeiro manifesto narra a vida de Christian Rosenkreuz 
                  e convoca os sábios da Europa a se unirem na Grande Obra de regeneração universal.
                </p>
              </div>

              {/* Confessio Fraternitatis */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-100 to-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-2xl">🔖</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-4">Confessio Fraternitatis</h3>
                <p className="text-gray-600 leading-relaxed">
                  O segundo manifesto (1615) aprofunda os ensinamentos rosacruzes e 
                  estabelece os princípios fundamentais da Fraternidade R+C.
                </p>
              </div>

              {/* Núpcias Químicas */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-100 to-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-2xl">💒</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-4">Núpcias Químicas</h3>
                <p className="text-gray-600 leading-relaxed">
                  Obra alegórica de Johann Valentin Andreae (1616) que descreve simbolicamente 
                  o processo de iniciação e transformação espiritual.
                </p>
              </div>
            </div>
          </div>

          {/* Ensinamentos Fundamentais */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Ensinamentos Fundamentais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Hermetismo */}
              <div className="bg-emerald-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🔺</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800">Hermetismo</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Os ensinamentos de Hermes Trismegisto formam a base filosófica da tradição 
                  Rosacruz, especialmente os princípios da correspondência, polaridade e vibração.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 italic">
                    "O que está em cima é como o que está embaixo, e o que está embaixo 
                    é como o que está em cima."
                  </p>
                </div>
              </div>

              {/* Alquimia Espiritual */}
              <div className="bg-emerald-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">⚗️</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800">Alquimia Espiritual</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A Grande Obra alquímica é compreendida como processo de transmutação interior, 
                  transformando o chumbo da ignorância no ouro da sabedoria.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 italic">
                    "Solve et Coagula" - Dissolve e Coagula
                  </p>
                </div>
              </div>

              {/* Misticismo Cristão */}
              <div className="bg-emerald-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">✝️</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800">Misticismo Cristão</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A Cruz representa o sacrifício e a redenção, enquanto a Rosa simboliza 
                  o desabrochar da consciência divina na alma humana.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 italic">
                    A união da Rosa e da Cruz revela os mistérios da regeneração espiritual.
                  </p>
                </div>
              </div>

              {/* Cabala Cristã */}
              <div className="bg-emerald-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🌳</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800">Cabala Cristã</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A Árvore da Vida cabalística é reinterpretada à luz do cristianismo esotérico, 
                  revelando os caminhos de ascensão espiritual.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 italic">
                    As dez Sephiroth representam os aspectos da manifestação divina.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conexões com a Maçonaria */}
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-3xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Conexões com a Maçonaria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Simbolismo Compartilhado */}
              <div className="bg-white rounded-xl p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔯</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-3">Simbolismo Compartilhado</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Muitos símbolos rosacruzes foram incorporados aos rituais maçônicos: 
                  a Rosa, a Cruz, o Pelicano, a Águia e os elementos alquímicos.
                </p>
              </div>

              {/* Graus Filosóficos */}
              <div className="bg-white rounded-xl p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-3">Graus Filosóficos</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  O 18º grau do Rito Escocês (Cavaleiro Rosa-Cruz) incorpora diretamente 
                  os ensinamentos e símbolos da tradição rosacruz.
                </p>
              </div>

              {/* Busca da Verdade */}
              <div className="bg-white rounded-xl p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-3">Busca da Verdade</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ambas as tradições enfatizam a busca constante da Verdade, 
                  a transformação moral e o aperfeiçoamento espiritual do indivíduo.
                </p>
              </div>
            </div>
          </div>

          {/* Eliphas Levi e a Tradição */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Eliphas Levi e a Tradição Rosacruz</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Alphonse Louis Constant, conhecido como Eliphas Levi (1810-1875), foi um dos 
                  maiores estudiosos do ocultismo no século XIX. Sua obra "Dogma e Ritual da 
                  Alta Magia" sintetiza magistralmente os ensinamentos rosacruzes, herméticos 
                  e cabalísticos.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Levi demonstrou como os símbolos maçônicos preservam a sabedoria antiga dos 
                  Rosa-Cruz, sendo um elo vital entre as tradições esotéricas do passado e 
                  os buscadores da verdade do mundo moderno.
                </p>
                <div className="bg-emerald-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-emerald-800 mb-3">Contribuições Principais:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sistematização da Cabala Prática</li>
                    <li>• Interpretação dos Tarôs</li>
                    <li>• Síntese da Tradição Hermética</li>
                    <li>• Conexão entre Magia e Maçonaria</li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-emerald-100 to-white rounded-full flex items-center justify-center mb-6 shadow-xl">
                  <span className="text-6xl">🎩</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-4">O Mago do Século XIX</h3>
                <p className="text-gray-600 leading-relaxed">
                  "Nossa loja honra sua memória e dedica-se ao estudo profundo de sua obra, 
                  perpetuando os ensinamentos da Tradição Hermética."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}