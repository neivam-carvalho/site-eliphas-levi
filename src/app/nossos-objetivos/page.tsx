import Layout from '@/components/Layout'
import Link from 'next/link'

export default function NossosObjetivos() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Objetivos
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              "Conhece-te a Ti Mesmo" - O princípio fundamental que orienta nossa busca espiritual
            </p>
          </div>
        </div>
      </section>

      {/* Oráculo de Delfos */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O Oráculo de Delfos
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>"Conhece-te a ti mesmo"</strong> (γνῶθι σεαυτόν) - esta célebre inscrição 
                  do Templo de Apolo em Delfos constitui o fundamento de toda sabedoria autêntica 
                  e representa o objetivo primordial de nossa augusta loja.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O Oráculo de Delfos, através desta máxima imortal, nos ensina que o verdadeiro 
                  conhecimento começa com a compreensão de nossa própria natureza. Somente quem 
                  conhece a si mesmo pode aspirar ao conhecimento do universo e dos princípios 
                  divinos que o governam.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Esta busca interior não é apenas um exercício filosófico, mas um caminho prático 
                  de transformação que nos conduz da ignorância à sabedoria, das trevas à luz, 
                  da morte simbólica ao renascimento espiritual.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">A Máxima Délfica</h3>
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🏛️</div>
                <blockquote className="text-2xl font-bold italic mb-4">
                  "γνῶθι σεαυτόν"
                </blockquote>
                <p className="text-emerald-100 text-lg">
                  Conhece-te a ti mesmo
                </p>
              </div>
              <div className="border-t border-emerald-500 pt-6">
                <p className="text-emerald-100">
                  Esta inscrição no Templo de Apolo em Delfos representa o início de toda 
                  jornada espiritual autêntica e o objetivo fundamental de nossos estudos 
                  e trabalhos maçônicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos Específicos */}
      <section className="py-16 lg:py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossos Objetivos Específicos
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Desenvolvimento Espiritual */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🕯️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Desenvolvimento Espiritual
              </h3>
              <p className="text-gray-600 text-center">
                Promover o crescimento espiritual através do estudo dos mistérios antigos 
                e da filosofia hermética, conduzindo cada irmão à iluminação interior.
              </p>
            </div>

            {/* Autoconhecimento */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Autoconhecimento
              </h3>
              <p className="text-gray-600 text-center">
                Facilitar a jornada interior de descoberta da verdadeira natureza do ser, 
                seguindo o preceito délfico "Conhece-te a ti mesmo".
              </p>
            </div>

            {/* Estudo Esotérico */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Estudo Esotérico
              </h3>
              <p className="text-gray-600 text-center">
                Aprofundar o conhecimento nas tradições esotéricas, simbolismo sagrado 
                e interpretação hermética dos textos antigos.
              </p>
            </div>

            {/* Fraternidade Universal */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Fraternidade Universal
              </h3>
              <p className="text-gray-600 text-center">
                Cultivar a fraternidade universal através do reconhecimento da 
                unidade essencial de todos os seres humanos.
              </p>
            </div>

            {/* Transmissão do Conhecimento */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Transmissão do Conhecimento
              </h3>
              <p className="text-gray-600 text-center">
                Preservar e transmitir os ensinamentos tradicionais da Maçonaria 
                e das ciências herméticas para as futuras gerações.
              </p>
            </div>

            {/* Desenvolvimento Moral */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Desenvolvimento Moral
              </h3>
              <p className="text-gray-600 text-center">
                Promover o aperfeiçoamento moral através da prática das virtudes 
                e do cultivo dos mais nobres sentimentos humanos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Método de Trabalho */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nosso Método de Trabalho
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Como aplicamos os princípios élficos em nossa jornada de autoconhecimento
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Princípios Fundamentais</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Estudo Sistemático</h4>
                    <p className="text-gray-600">
                      Desenvolvemos estudos regulares dos textos sagrados, filosofia hermética 
                      e simbolismo tradicional, sempre orientados pelo método analógico.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Reflexão Pessoal</h4>
                    <p className="text-gray-600">
                      Incentivamos a meditação e reflexão pessoal sobre os ensinamentos 
                      recebidos, promovendo a introspecção necessária ao autoconhecimento.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Prática Fraternal</h4>
                    <p className="text-gray-600">
                      Aplicamos os princípios aprendidos nas relações fraternas, 
                      transformando o conhecimento teórico em sabedoria vivida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-50 rounded-lg p-8 border border-emerald-100">
              <h3 className="text-2xl font-semibold text-emerald-800 mb-6">O Caminho da Sabedoria</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="text-gray-700 italic mb-2">
                    "Conhece-te a ti mesmo e conhecerás o universo e os deuses"
                  </p>
                  <p className="text-emerald-600 font-medium">— Oráculo de Delfos</p>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Este é o caminho que percorremos: partindo do conhecimento de nossa 
                  própria natureza, expandimos nossa consciência até abranger a 
                  compreensão dos mistérios universais.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Cada sessão, cada estudo, cada momento de reflexão nos aproxima 
                  desta meta sublime: tornar-nos verdadeiros conhecedores de nós mesmos 
                  e, por consequência, sábios servidores da humanidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Explore Nossos Estudos
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Descubra como aplicamos estes objetivos em nossos trabalhos práticos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/estudos" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
              Estudos Esotéricos
            </Link>
            <Link href="/filosofia-rosacruz" className="border-2 border-emerald-300 text-emerald-100 hover:bg-emerald-700 hover:border-emerald-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
              Filosofia Rosacruz
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}