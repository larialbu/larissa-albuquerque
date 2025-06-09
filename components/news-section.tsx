import Link from "next/link"
import { ExternalLink, Calendar } from "lucide-react"

export function NewsSection() {
  return (
    <section className="border-t border-neutral-200 bg-white py-12 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-[800px] space-y-8">
          <div className="space-y-2 text-center">
            <div className="inline-block rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
              <h2 className="rounded-md px-4 py-1 text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Notícias & Aparições
              </h2>
            </div>
            <p className="text-neutral-600">Confira minhas aparições na mídia e projetos em destaque</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Coluna 1 - Aparições na Mídia */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-neutral-800 border-b border-neutral-200 pb-2">
                Aparições na Mídia
              </h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-neutral-900">
                    Larissa vence DOIS hackathons em 1º lugar na mesma semana Hackathon Prefeitura do Recife - 1º Lugar, Hackathon Banco do Brasil - 1º Lugar
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <Calendar className="h-4 w-4" />
                    <span>21 de Novembro, 2024</span>
                  </div>
                  <Link
                    href="https://www.instagram.com/p/DColyWKRWJs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Ler notícia completa
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-neutral-900">Destaque no Jornal Digital Recife, Mestrado aos 19 anos</h4>
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <Calendar className="h-4 w-4" />
                    <span>19 de Agosto, 2024</span>
                  </div>
                  <Link
                    href="https://jornaldigital.recife.br/2024/08/19/conquista-define-estudante-do-embarque-digital-ingressa-em-mestrado-na-ufpe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Ler notícia completa
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-neutral-900">
                    Conheça Larissa Albuquerque, nova aluna do mestrado em Computação
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <Calendar className="h-4 w-4" />
                    <span>19 de Agosto, 2024</span>
                  </div>
                  <Link
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7233850696817639424/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Ler notícia completa
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-neutral-900">Blog do Google - Histórias de quem estudou com o app Grasshopper</h4>
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <Calendar className="h-4 w-4" />
                    <span>29 Maio, 2023</span>
                  </div>
                  <Link
                    href="https://blog.google/intl/pt-br/produtos/conheca-historias-de-quem-estudou-com-o-app-grasshopper-e-veja-opcoes-para-aprender-programacao-online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Ler notícia completa
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Coluna 2 - Palestras e Eventos */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-neutral-800 border-b border-neutral-200 pb-2">
                Palestras & Eventos
              </h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-neutral-900">Palestra de Design UI/UX na UNICAP</h4>
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <Calendar className="h-4 w-4" />
                    <span>10 de Abril, 2023</span>
                  </div>
                  <Link
                    href="https://example.com/palestra-unicap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Ver detalhes do evento
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-neutral-900">Oficina sobre Design UI/UX no IFPE Campus Recife</h4>
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <Calendar className="h-4 w-4" />
                    <span>20 de Janeiro, 2023</span>
                  </div>
                  <Link
                    href="https://example.com/oficina-ifpe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Ver detalhes do evento
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-neutral-900">Palestra Recn Play</h4>
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <Calendar className="h-4 w-4" />
                    <span>-</span>
                  </div>
                  <Link
                    href="https://example.com/hackathon-bb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Ver mais
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-neutral-900">Palestra Embarque digital</h4>
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <Calendar className="h-4 w-4" />
                    <span>-</span>
                  </div>
                  <Link
                    href="https://example.com/hackathon-recife"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Ver mais
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
