export default function MaconsIlustresPage() {
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
              <span className="text-4xl text-emerald-800">👑</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Maçons Ilustres</h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Grandes Homens que Honraram a Arte Real através da História
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Legado de Grandes Irmãos
            </h2>
            <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ao longo da história, a Maçonaria atraiu homens extraordinários que deixaram 
                marcas indeléveis na humanidade. Seus ideais de Liberdade, Igualdade e 
                Fraternidade inspiraram revoluções, criaram nações e promoveram o progresso 
                da civilização.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Estes ilustres irmãos demonstraram que os ensinamentos maçônicos, quando 
                aplicados com dedicação e virtude, podem transformar não apenas o indivíduo, 
                mas toda a sociedade.
              </p>
            </div>
          </div>

          {/* Fundadores de Nações */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Fundadores de Nações
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* George Washington */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-100 to-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-3xl">🇺🇸</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800">George Washington</h3>
                  <p className="text-gray-600">(1732-1799)</p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Primeiro presidente dos Estados Unidos e Venerável Mestre da 
                  Loja Alexandria nº 22, na Virgínia. Seus ideais maçônicos 
                  moldaram os fundamentos da democracia americana.
                </p>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Legado:</strong> Separação de poderes, liberdade religiosa 
                    e governo republicano.
                  </p>
                </div>
              </div>

              {/* José Bonifácio */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-100 to-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-3xl">🇧🇷</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800">José Bonifácio</h3>
                  <p className="text-gray-600">(1763-1838)</p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Patriarca da Independência do Brasil, naturalista e estadista. 
                  Iniciado na Maçonaria francesa, foi fundamental na organização 
                  da Maçonaria brasileira.
                </p>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Legado:</strong> Independência do Brasil, abolicionismo 
                    e desenvolvimento científico nacional.
                  </p>
                </div>
              </div>

              {/* Simón Bolívar */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-100 to-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-3xl">🏛️</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800">Simón Bolívar</h3>
                  <p className="text-gray-600">(1783-1830)</p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Libertador da América do Sul, iniciado na Loja San Bernardo 
                  de Cádiz. Seus ideais maçônicos inspiraram a independência 
                  de seis nações sul-americanas.
                </p>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Legado:</strong> Libertação da América Latina e 
                    promoção dos ideais republicanos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Filósofos e Pensadores */}
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-3xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Filósofos e Pensadores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Voltaire */}
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">✍️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">Voltaire</h3>
                    <p className="text-gray-600">(1694-1778)</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Iniciado na Loja das Nove Irmãs em Paris aos 84 anos. 
                  Seu pensamento iluminista e defesa da tolerância religiosa 
                  refletem os valores maçônicos fundamentais.
                </p>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 italic">
                    "Posso não concordar com o que dizes, mas defenderei até 
                    a morte o teu direito de dizê-lo."
                  </p>
                </div>
              </div>

              {/* Goethe */}
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">Johann W. von Goethe</h3>
                    <p className="text-gray-600">(1749-1832)</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Iniciado na Loja Amalia em Weimar. O grande poeta alemão 
                  incorporou simbolismo maçônico em suas obras, especialmente 
                  em "A Flauta Mágica" de Mozart.
                </p>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 italic">
                    "O que não compreendemos, não possuímos."
                  </p>
                </div>
              </div>

              {/* Montesquieu */}
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">Montesquieu</h3>
                    <p className="text-gray-600">(1689-1755)</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Teórico da separação dos poderes, suas ideias influenciaram 
                  as constituições modernas. Membro da Loja Horn Lodge em 
                  Westminster.
                </p>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 italic">
                    "Para que não se possa abusar do poder, é preciso que 
                    o poder freie o poder."
                  </p>
                </div>
              </div>

              {/* Benjamin Franklin */}
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">Benjamin Franklin</h3>
                    <p className="text-gray-600">(1706-1790)</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Grão-Mestre da Pensilvânia, inventor, diplomata e um dos 
                  fundadores dos Estados Unidos. Exemplificou o ideal maçônico 
                  de progresso através do conhecimento.
                </p>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 italic">
                    "Um investimento em conhecimento paga os melhores juros."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Artistas e Músicos */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Artistas e Músicos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Mozart */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🎼</span>
                  </div>
                  <h3 className="text-lg font-bold text-emerald-800">Wolfgang A. Mozart</h3>
                  <p className="text-gray-600">(1756-1791)</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Iniciado na Loja "Zur Wohltätigkeit" em Viena. Sua ópera 
                  "A Flauta Mágica" é uma alegoria maçônica completa.
                </p>
                <div className="bg-emerald-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600">
                    <strong>Obra Maçônica:</strong> "A Flauta Mágica" contém 
                    simbolismo iniciático profundo.
                  </p>
                </div>
              </div>

              {/* Oscar Wilde */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🎭</span>
                  </div>
                  <h3 className="text-lg font-bold text-emerald-800">Oscar Wilde</h3>
                  <p className="text-gray-600">(1854-1900)</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Escritor irlandês iniciado na Apollo University Lodge 
                  em Oxford. Seus escritos refletem a busca pela beleza e verdade.
                </p>
                <div className="bg-emerald-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600">
                    <strong>Filosofia:</strong> "Podemos perdoar um homem por fazer 
                    algo útil, desde que não o admire."
                  </p>
                </div>
              </div>

              {/* Mark Twain */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">✒️</span>
                  </div>
                  <h3 className="text-lg font-bold text-emerald-800">Mark Twain</h3>
                  <p className="text-gray-600">(1835-1910)</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Samuel Clemens foi iniciado na Loja Polar Star nº 79 
                  em St. Louis. Suas obras satirizam a hipocrisia social.
                </p>
                <div className="bg-emerald-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600">
                    <strong>Sabedoria:</strong> "A coragem não é a ausência do medo, 
                    mas o domínio sobre ele."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Brasileiros Ilustres */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Maçons Brasileiros Ilustres
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Dom Pedro I */}
              <div className="bg-emerald-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">👑</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">Dom Pedro I</h3>
                    <p className="text-gray-600">(1798-1834)</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Primeiro Imperador do Brasil e Grão-Mestre do Grande Oriente 
                  do Brasil. Sua iniciação fortaleceu os laços entre a Maçonaria 
                  e a Independência brasileira.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Contribuição:</strong> Consolidação da independência 
                    e organização do Estado brasileiro.
                  </p>
                </div>
              </div>

              {/* Gonçalves Ledo */}
              <div className="bg-emerald-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">Joaquim Gonçalves Ledo</h3>
                    <p className="text-gray-600">(1781-1847)</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jornalista e político, fundador do Grande Oriente do Brasil. 
                  Desempenhou papel crucial na articulação da Independência 
                  através da Maçonaria.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Legado:</strong> Organização da Maçonaria brasileira 
                    e promoção dos ideais republicanos.
                  </p>
                </div>
              </div>

              {/* Deodoro da Fonseca */}
              <div className="bg-emerald-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🎖️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">Marechal Deodoro</h3>
                    <p className="text-gray-600">(1827-1892)</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Proclamador da República e primeiro Presidente do Brasil. 
                  Sua formação maçônica influenciou os ideais republicanos 
                  que moldaram o novo regime.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Conquista:</strong> Proclamação da República e 
                    modernização das instituições brasileiras.
                  </p>
                </div>
              </div>

              {/* Rui Barbosa */}
              <div className="bg-emerald-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">📖</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">Rui Barbosa</h3>
                    <p className="text-gray-600">(1849-1923)</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jurista, político e diplomata. Conhecido como "Águia de Haia", 
                  foi um dos principais intelectuais brasileiros e defensor 
                  dos direitos humanos.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Princípio:</strong> "A justiça atrasada não é justiça, 
                    senão injustiça qualificada e manifesta."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Valores Demonstrados */}
          <div className="bg-emerald-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Valores Maçônicos Demonstrados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Liberdade */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-emerald-200 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🕊️</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-4">Liberdade</h3>
                <p className="text-gray-700 leading-relaxed">
                  Luta pela independência das nações, liberdade de pensamento, 
                  expressão e religião. Os maçons sempre estiveram na vanguarda 
                  dos movimentos libertários.
                </p>
              </div>

              {/* Igualdade */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-emerald-200 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">⚖️</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-4">Igualdade</h3>
                <p className="text-gray-700 leading-relaxed">
                  Promoção da igualdade de direitos, abolição da escravidão 
                  e defesa da dignidade humana independente de origem, 
                  classe social ou credo.
                </p>
              </div>

              {/* Fraternidade */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-emerald-200 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-4">Fraternidade</h3>
                <p className="text-gray-700 leading-relaxed">
                  Construção de uma sociedade mais justa e fraterna, baseada 
                  no respeito mútuo, solidariedade e colaboração entre 
                  todos os povos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}