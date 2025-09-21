export default function OQueEMaconariaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-emerald-300 rotate-45"></div>
          <div className="absolute bottom-32 right-16 w-40 h-40 border border-emerald-300 rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-emerald-300 rotate-12"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-100 to-white rounded-full flex items-center justify-center mb-6 shadow-xl">
              <span className="text-4xl text-emerald-800">🏛️</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">O que é Maçonaria</h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Compreendendo os Fundamentos da Arte Real
          </p>
        </div>
      </section>

      {/* Definição Principal */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Uma Instituição Iniciática Universal
            </h2>
            <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A Maçonaria é uma instituição iniciática, filosófica, educativa, 
                filantrópica e progressista. Sua missão é promover o aperfeiçoamento 
                do homem e da humanidade através de um sistema gradual de desenvolvimento 
                moral, intelectual e espiritual.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Fundada nos princípios de Liberdade, Igualdade e Fraternidade, 
                a Maçonaria busca formar homens livres e de bons costumes, capazes 
                de contribuir para uma sociedade mais justa e esclarecida.
              </p>
            </div>
          </div>

          {/* Princípios Fundamentais */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Princípios Fundamentais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Liberdade */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-100 to-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl">🕊️</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-4 text-center">Liberdade</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Liberdade de consciência, pensamento e expressão. O maçom deve ser 
                  um homem livre, capaz de pensar por si mesmo e agir de acordo com 
                  sua consciência esclarecida.
                </p>
              </div>

              {/* Igualdade */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-100 to-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl">⚖️</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-4 text-center">Igualdade</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Todos os homens são iguais em dignidade e direitos. Na Loja Maçônica, 
                  não há distinção de classe social, raça, nacionalidade ou credo religioso.
                </p>
              </div>

              {/* Fraternidade */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-100 to-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-4 text-center">Fraternidade</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Amor fraternal entre todos os irmãos, solidariedade e auxílio mútuo. 
                  A fraternidade maçônica transcende fronteiras e diferenças culturais.
                </p>
              </div>
            </div>
          </div>

          {/* Objetivos da Maçonaria */}
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-3xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Objetivos da Maçonaria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Aperfeiçoamento Individual */}
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🧘</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800">Aperfeiçoamento Individual</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Promover o desenvolvimento moral, intelectual e espiritual do indivíduo 
                  através do estudo, da reflexão e da prática das virtudes maçônicas.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cultivo das virtudes cardeais</li>
                  <li>• Domínio das paixões</li>
                  <li>• Busca constante da sabedoria</li>
                  <li>• Prática da tolerância</li>
                </ul>
              </div>

              {/* Beneficência e Filantropia */}
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800">Beneficência e Filantropia</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Exercer a caridade e a solidariedade, auxiliando os necessitados 
                  e promovendo o bem-estar social da comunidade.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Auxílio aos irmãos necessitados</li>
                  <li>• Obras sociais e educativas</li>
                  <li>• Promoção da educação</li>
                  <li>• Combate à ignorância e superstição</li>
                </ul>
              </div>

              {/* Progresso da Humanidade */}
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800">Progresso da Humanidade</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Contribuir para o progresso moral e material da humanidade, 
                  promovendo a paz, a justiça e a compreensão entre os povos.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Defesa dos direitos humanos</li>
                  <li>• Promoção da democracia</li>
                  <li>• Luta contra o fanatismo</li>
                  <li>• Construção da paz mundial</li>
                </ul>
              </div>

              {/* Preservação da Tradição */}
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">📜</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800">Preservação da Tradição</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Manter viva a sabedoria ancestral e os ensinamentos tradicionais, 
                  adaptando-os às necessidades do mundo moderno.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Conservação dos rituais</li>
                  <li>• Estudo dos símbolos</li>
                  <li>• Transmissão dos mistérios</li>
                  <li>• Continuidade iniciática</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Estrutura e Organização */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Estrutura e Organização
            </h2>
            
            {/* Graus Simbólicos */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <h3 className="text-2xl font-bold text-emerald-800 mb-8 text-center">
                Os Três Graus Simbólicos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Aprendiz */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">🔨</span>
                  </div>
                  <h4 className="text-xl font-bold text-emerald-800 mb-4">1º Grau - Aprendiz</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    O primeiro grau representa o nascimento para a vida maçônica. 
                    O Aprendiz aprende a desbastar a pedra bruta de sua personalidade.
                  </p>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Símbolo:</strong> Régua de 24 polegadas e Martelo
                    </p>
                  </div>
                </div>

                {/* Companheiro */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">📏</span>
                  </div>
                  <h4 className="text-xl font-bold text-emerald-800 mb-4">2º Grau - Companheiro</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    O Companheiro aprofunda seus conhecimentos, desenvolvendo 
                    suas capacidades intelectuais e morais através do estudo.
                  </p>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Símbolo:</strong> Esquadro, Nível e Prumo
                    </p>
                  </div>
                </div>

                {/* Mestre */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">📐</span>
                  </div>
                  <h4 className="text-xl font-bold text-emerald-800 mb-4">3º Grau - Mestre</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    O Mestre Maçom atinge a plenitude iniciática simbólica, 
                    capacitando-se a dirigir os trabalhos e transmitir conhecimentos.
                  </p>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Símbolo:</strong> Compasso e Esquadro entrelaçados
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hierarquia da Loja */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Oficiais Principais */}
              <div className="bg-emerald-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-emerald-800 mb-6">Oficiais Principais</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-lg">👑</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Venerável Mestre</h4>
                      <p className="text-sm text-gray-600">Dirige os trabalhos da Loja</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-lg">🔨</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Primeiro Vigilante</h4>
                      <p className="text-sm text-gray-600">Instrui os Companheiros</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-lg">🔧</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Segundo Vigilante</h4>
                      <p className="text-sm text-gray-600">Instrui os Aprendizes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outros Oficiais */}
              <div className="bg-emerald-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-emerald-800 mb-6">Outros Oficiais</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-lg">📖</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Orador</h4>
                      <p className="text-sm text-gray-600">Guardião da Lei Maçônica</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-lg">✍️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Secretário</h4>
                      <p className="text-sm text-gray-600">Registra os trabalhos</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-lg">💰</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Tesoureiro</h4>
                      <p className="text-sm text-gray-600">Administra os recursos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Valores e Virtudes */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Valores e Virtudes Maçônicas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Prudência */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🦉</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-2">Prudência</h3>
                <p className="text-gray-600 text-sm">
                  Sabedoria para tomar decisões corretas e agir com discernimento.
                </p>
              </div>

              {/* Temperança */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-2">Temperança</h3>
                <p className="text-gray-600 text-sm">
                  Moderação em todas as coisas, equilíbrio entre os extremos.
                </p>
              </div>

              {/* Fortaleza */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-2">Fortaleza</h3>
                <p className="text-gray-600 text-sm">
                  Coragem moral para enfrentar adversidades e defender a verdade.
                </p>
              </div>

              {/* Justiça */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-2">Justiça</h3>
                <p className="text-gray-600 text-sm">
                  Retidão de caráter e respeito aos direitos de todos.
                </p>
              </div>
            </div>
          </div>

          {/* Como Ingressar */}
          <div className="bg-emerald-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Como Ingressar na Maçonaria
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                
                {/* Requisitos */}
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-xl font-bold text-emerald-800 mb-4">Requisitos Básicos</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      Ser homem livre e de bons costumes
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      Ter mais de 21 anos de idade
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      Crer na existência de um Ser Supremo
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      Ter reputação ilibada na sociedade
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      Possuir meios de subsistência
                    </li>
                  </ul>
                </div>

                {/* Processo */}
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-xl font-bold text-emerald-800 mb-4">Processo de Admissão</h3>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2 font-bold">1.</span>
                      Apresentação por dois maçons
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2 font-bold">2.</span>
                      Petição formal à Loja
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2 font-bold">3.</span>
                      Investigação pelos irmãos
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2 font-bold">4.</span>
                      Votação secreta na Loja
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2 font-bold">5.</span>
                      Cerimônia de Iniciação
                    </li>
                  </ol>
                </div>
              </div>
              
              <div className="text-center bg-white rounded-xl p-8">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">
                  Interesse em Conhecer Mais?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  A Maçonaria não faz convites nem proselitismo. O candidato deve manifestar 
                  espontaneamente seu interesse em ingressar na Ordem. Se você se identifica 
                  com nossos valores e princípios, procure um maçom de sua confiança.
                </p>
                <div className="bg-emerald-50 rounded-lg p-6">
                  <p className="text-emerald-800 font-medium">
                    "Batei e a porta vos será aberta; pedi e recebereis; buscai e achareis."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}