export default function LinksPage() {
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
              <span className="text-4xl text-emerald-800">🔗</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Links Úteis</h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Recursos e Conexões para o Estudo Maçônico
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introdução */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Recursos para Aprofundamento
            </h2>
            <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Uma seleção cuidadosa de recursos digitais, organizações maçônicas e fontes 
                de estudo para auxiliar na jornada de conhecimento e aperfeiçoamento dos 
                irmãos da Arte Real.
              </p>
            </div>
          </div>

          {/* Organizações Maçônicas Oficiais */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Organizações Maçônicas Oficiais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Grande Loja de São Paulo */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">Grande Loja de São Paulo</h3>
                    <p className="text-gray-600">GLESP</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Organização mãe à qual nossa loja está filiada. Portal oficial com 
                  informações sobre atividades, eventos e regulamentações.
                </p>
                <a 
                  href="https://www.glesp.org.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium"
                >
                  Visitar Site
                  <span className="ml-2">↗</span>
                </a>
              </div>

              {/* Grande Oriente do Brasil */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🇧🇷</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">Grande Oriente do Brasil</h3>
                    <p className="text-gray-600">GOB</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Principal organização maçônica brasileira, com informações históricas 
                  e documentos fundamentais da Maçonaria no Brasil.
                </p>
                <a 
                  href="https://www.gob.org.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium"
                >
                  Visitar Site
                  <span className="ml-2">↗</span>
                </a>
              </div>

              {/* United Grand Lodge of England */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🇬🇧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">United Grand Lodge of England</h3>
                    <p className="text-gray-600">UGLE</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Grande Loja Mãe da Maçonaria mundial, berço da Maçonaria moderna 
                  com vasta documentação histórica e recursos educacionais.
                </p>
                <a 
                  href="https://www.ugle.org.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium"
                >
                  Visitar Site
                  <span className="ml-2">↗</span>
                </a>
              </div>

              {/* Grand Lodge of Scotland */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">Grand Lodge of Scotland</h3>
                    <p className="text-gray-600">Maçonaria Escocesa</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Uma das mais antigas organizações maçônicas do mundo, rica em 
                  tradições e documentação histórica fundamental.
                </p>
                <a 
                  href="https://www.grandlodgescotland.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium"
                >
                  Visitar Site
                  <span className="ml-2">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bibliotecas e Recursos Digitais */}
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-3xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Bibliotecas e Recursos Digitais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Biblioteca Maçônica */}
              <div className="bg-white rounded-xl p-6">
                <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-3">Biblioteca José Bonifácio</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Acervo especializado em literatura maçônica, esotérica e histórica 
                  mantido pelo Grande Oriente do Brasil.
                </p>
                <a 
                  href="https://www.gob.org.br/biblioteca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-800 text-sm font-medium"
                >
                  Acessar Biblioteca ↗
                </a>
              </div>

              {/* Archive.org */}
              <div className="bg-white rounded-xl p-6">
                <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-3">Internet Archive</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Vasta coleção de livros maçônicos históricos digitalizados, 
                  incluindo obras raras e manuscritos antigos.
                </p>
                <a 
                  href="https://archive.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-800 text-sm font-medium"
                >
                  Explorar Acervo ↗
                </a>
              </div>

              {/* Phoenix Masonry */}
              <div className="bg-white rounded-xl p-6">
                <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-3">Phoenix Masonry</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Extenso arquivo digital com rituais, documentos históricos e 
                  literatura maçônica de diversos ritos e jurisdições.
                </p>
                <a 
                  href="https://www.phoenixmasonry.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-800 text-sm font-medium"
                >
                  Visitar Arquivo ↗
                </a>
              </div>

              {/* Sacred Texts */}
              <div className="bg-white rounded-xl p-6">
                <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📜</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-3">Sacred Texts Archive</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Coleção de textos sagrados, incluindo obras herméticas, alquímicas 
                  e esotéricas fundamentais para o estudo maçônico.
                </p>
                <a 
                  href="https://www.sacred-texts.com/mas/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-800 text-sm font-medium"
                >
                  Acessar Textos ↗
                </a>
              </div>

              {/* Gutenberg Project */}
              <div className="bg-white rounded-xl p-6">
                <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📖</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-3">Project Gutenberg</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Livros de domínio público incluindo clássicos da literatura 
                  maçônica e esotérica em formato digital gratuito.
                </p>
                <a 
                  href="https://www.gutenberg.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-800 text-sm font-medium"
                >
                  Explorar Catálogo ↗
                </a>
              </div>

              {/* Hermetic Library */}
              <div className="bg-white rounded-xl p-6">
                <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔮</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-3">Hermetic Library</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Especializada em textos herméticos, alquímicos e ocultistas, 
                  incluindo obras de Eliphas Levi e outros grandes mestres.
                </p>
                <a 
                  href="https://hermetic.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-800 text-sm font-medium"
                >
                  Visitar Biblioteca ↗
                </a>
              </div>
            </div>
          </div>

          {/* Museus e Centros de Pesquisa */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Museus e Centros de Pesquisa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Museu da Maçonaria - Londres */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">Museu da Maçonaria</h3>
                    <p className="text-gray-600">Londres, Inglaterra</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O principal museu maçônico do mundo, localizado em Freemasons' Hall, 
                  com exposições permanentes e temporárias sobre a história da Maçonaria.
                </p>
                <a 
                  href="https://museumfreemasonry.org.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium"
                >
                  Tour Virtual
                  <span className="ml-2">↗</span>
                </a>
              </div>

              {/* Biblioteca Kloss */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">Biblioteca Kloss</h3>
                    <p className="text-gray-600">Haia, Holanda</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Uma das mais importantes bibliotecas maçônicas do mundo, com 
                  manuscritos raros e documentos históricos únicos.
                </p>
                <a 
                  href="https://www.klossbibliotheek.nl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium"
                >
                  Catálogo Digital
                  <span className="ml-2">↗</span>
                </a>
              </div>

              {/* Centro de Memória da Maçonaria */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🇧🇷</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">Centro de Memória</h3>
                    <p className="text-gray-600">São Paulo, Brasil</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Centro de preservação da memória maçônica brasileira, com arquivo 
                  histórico e exposições sobre a Maçonaria no Brasil.
                </p>
                <a 
                  href="https://www.gob.org.br/centro-memoria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium"
                >
                  Conhecer Acervo
                  <span className="ml-2">↗</span>
                </a>
              </div>

              {/* Scottish Rite Library */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🦅</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">Scottish Rite Library</h3>
                    <p className="text-gray-600">Washington, EUA</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Biblioteca especializada do Rito Escocês com vasto acervo sobre 
                  filosofia maçônica e tradições esotéricas.
                </p>
                <a 
                  href="https://scottishrite.org/about/van-gorden-library/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium"
                >
                  Recursos Online
                  <span className="ml-2">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Publicações Especializadas */}
          <div className="bg-emerald-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Publicações Especializadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Revistas Acadêmicas */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-emerald-800 mb-4">📰 Revistas Acadêmicas</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <div>
                      <strong>Ars Quatuor Coronatorum</strong>
                      <p className="text-sm">Revista de pesquisa maçônica da Quatuor Coronati Lodge</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <div>
                      <strong>The Scottish Rite Journal</strong>
                      <p className="text-sm">Publicação oficial do Rito Escocês</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <div>
                      <strong>Revista Maçônica</strong>
                      <p className="text-sm">Publicação brasileira especializada</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Editoras */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-emerald-800 mb-4">📚 Editoras</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <div>
                      <strong>Madras Editora</strong>
                      <p className="text-sm">Especializada em ocultismo e esoterismo</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <div>
                      <strong>A Trolha</strong>
                      <p className="text-sm">Literatura maçônica brasileira</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <div>
                      <strong>Landmark Editions</strong>
                      <p className="text-sm">Clássicos da literatura maçônica</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Portais Online */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-emerald-800 mb-4">🌐 Portais Online</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <div>
                      <strong>Freemason Information</strong>
                      <p className="text-sm">Portal global de notícias maçônicas</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <div>
                      <strong>Masonic World</strong>
                      <p className="text-sm">Comunidade internacional online</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <div>
                      <strong>No Esquadro</strong>
                      <p className="text-sm">Portal brasileiro de estudos maçônicos</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}