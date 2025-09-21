import Layout from '@/components/Layout'
import Link from 'next/link'

export default function QuemSomos() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quem Somos
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Conheça a história e filosofia da Augusta e Respeitável Loja Simbólica Eliphas Levi
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  A <strong>Augusta e Respeitável Loja Simbólica Eliphas Levi</strong> foi fundada em 
                  <strong> 22 de novembro de 1999</strong>, nascendo como uma das jovens lojas maçônicas 
                  da região metropolitana de São Paulo.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Inicialmente conhecida como <em>ARLS Fraternidade Acadêmica Gênesis</em>, nossa loja 
                  foi fundada com o apoio fraternal da respeitável Loja Gênesis N° 2843, à qual seremos 
                  eternamente gratos pela orientação, amizade e oportunidade de crescimento.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Jurisdicionada ao <strong>Grande Oriente de São Paulo</strong> e federada ao 
                  <strong> Grande Oriente do Brasil</strong>, nossa loja desenvolve seus trabalhos 
                  no Rito Escocês Antigo e Aceito, dedicando-se especialmente aos estudos esotéricos 
                  e à filosofia hermética.
                </p>
              </div>
            </div>
            
            <div className="bg-emerald-50 rounded-lg p-8 border border-emerald-100">
              <h3 className="text-2xl font-semibold text-emerald-800 mb-6">Dados da Loja</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-600 text-xl">📅</span>
                  <div>
                    <p className="font-semibold text-gray-800">Fundação:</p>
                    <p className="text-gray-600">22 de novembro de 1999</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-600 text-xl">🏛️</span>
                  <div>
                    <p className="font-semibold text-gray-800">Jurisdição:</p>
                    <p className="text-gray-600">Grande Oriente de São Paulo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-600 text-xl">🤝</span>
                  <div>
                    <p className="font-semibold text-gray-800">Federação:</p>
                    <p className="text-gray-600">Grande Oriente do Brasil</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-600 text-xl">📜</span>
                  <div>
                    <p className="font-semibold text-gray-800">Rito:</p>
                    <p className="text-gray-600">Escocês Antigo e Aceito</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-600 text-xl">📍</span>
                  <div>
                    <p className="font-semibold text-gray-800">Localização:</p>
                    <p className="text-gray-600">Rua Guaimbé, 192<br />Mooca - São Paulo - SP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eliphas Levi */}
      <section className="py-16 lg:py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Eliphas Levi Zahed
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O grande ocultista que inspirou o nome de nossa augusta loja
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Eliphas Levi Zahed</strong> é a tradução hebraica de 
                  <strong> Alphonse Louis Constant</strong>, abade francês nascido no dia 
                  8 de fevereiro de 1810 em Paris. Considerado o maior ocultista do século XIX, 
                  era filho de um modesto sapateiro, Jean Joseph Constant, e de Jeanne-Agnès Beaupurt.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Aos dez anos de idade ingressou na comunidade do presbitério da Igreja de 
                  Saint-Louis em L'Ile, onde permaneceu até 1824. Em 1830, foi transferido para 
                  o seminário de Issy para cursar Filosofia, e dois anos mais tarde ingressou 
                  em Saint-Sulpice para estudar Teologia.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Após seu curso de Teologia, Eliphas ingressou nas ordens religiosas, onde se 
                  destacou, tornando-se posteriormente um dos maiores estudiosos do ocultismo e 
                  esoterismo de seu tempo, deixando um legado imenso através de suas obras sobre 
                  magia, cabala e filosofia hermética.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Legado Espiritual</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-600 pl-4">
                  <p className="text-gray-700 italic">
                    "Foi em Issy que escreveu seu primeiro drama bíblico, intitulado Nemrod; 
                    no grande inverno de 1832, compôs seus primeiros poemas religiosos, 
                    dotados de uma grande beleza."
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Eliphas Levi dedicou sua vida ao estudo das ciências herméticas, unindo 
                  conhecimento religioso e esotérico em uma síntese única que influenciou 
                  gerações de estudiosos do ocultismo.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Sua obra representa uma ponte entre a tradição cristã e os mistérios antigos, 
                  tema que ressoa profundamente com os estudos desenvolvidos em nossa loja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              "Conhece-te a Ti Mesmo"
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O princípio délfico que orienta todos os nossos trabalhos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Autoconhecimento</h3>
              <p className="text-gray-600">
                A busca interior que nos leva à compreensão de nossa verdadeira natureza 
                e propósito espiritual.
              </p>
            </div>
            
            <div className="text-center bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Estudo Esotérico</h3>
              <p className="text-gray-600">
                O aprofundamento nos mistérios antigos e na filosofia hermética como 
                caminho de evolução espiritual.
              </p>
            </div>
            
            <div className="text-center bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fraternidade</h3>
              <p className="text-gray-600">
                A união fraternal que fortalece o caminho individual e coletivo rumo 
                à verdade e à sabedoria.
              </p>
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
            Conheça os textos e reflexões que guiam nossos trabalhos esotéricos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/nossos-objetivos" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
              Nossos Objetivos
            </Link>
            <Link href="/estudos" className="border-2 border-emerald-300 text-emerald-100 hover:bg-emerald-700 hover:border-emerald-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
              Estudos Esotéricos
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}