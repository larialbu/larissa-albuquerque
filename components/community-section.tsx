import Link from "next/link"
import { Users, ExternalLink, Heart, Star, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function CommunitySection() {
  return (
    <section id="rfec" className="border-t border-neutral-200 bg-gradient-to-b from-neutral-50 to-white py-12 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-[800px] space-y-8">
          <div className="space-y-2 text-center">
            <div className="inline-block rounded-lg bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 p-1">
              <h2 className="rounded-md px-4 py-1 text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                RFEC - Minha Comunidade
              </h2>
            </div>
            <p className="text-neutral-600">Conheça a comunidade que lidero e faça parte dela</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Card Principal da RFEC */}
            <Card className="overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-violet-400 hover:shadow-lg hover:shadow-violet-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-violet-500" />
                  RFEC Community
                </CardTitle>
                <CardDescription>Rede Feminina de Estudos em Computação</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 mb-4">
                  Uma comunidade dedicada a empoderar mulheres na área de tecnologia, promovendo networking, aprendizado
                  e crescimento profissional.
                </p>
                <div className="flex items-center gap-4 text-sm text-neutral-500">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>800+ membros</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>Líder</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="https://chat.whatsapp.com/GSWOYPiW3WDIadID2E3xwd" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:bg-violet-500 hover:text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Participar
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Card de Eventos */}
            <Card className="overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-purple-500" />
                  Eventos & Workshops
                </CardTitle>
                <CardDescription>Atividades regulares da comunidade</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 mb-4">
                  Organizamos workshops, palestras, mentorias e eventos de networking para fortalecer a presença
                  feminina na tecnologia.
                </p>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium">Próximo evento:</span>
                    <span className="text-neutral-600 ml-1">No canal do whatsapp</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="https://www.sympla.com.br/produtor/rfecommunity" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:bg-purple-500 hover:text-white"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Ver agenda
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Card de Impacto */}
            <Card className="overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-fuchsia-500" />
                  Nosso Impacto
                </CardTitle>
                <CardDescription>Transformando vidas através da tecnologia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-fuchsia-600">800+</div>
                    <div className="text-xs text-neutral-600">Pessoas impactadas</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-fuchsia-600">30+</div>
                    <div className="text-xs text-neutral-600">Eventos realizados</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-fuchsia-600">Todo domingo</div>
                    <div className="text-xs text-neutral-600">Mentorias</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-fuchsia-600">1</div>
                    <div className="text-xs text-neutral-600">Ano de história</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="transition-all duration-300 hover:bg-fuchsia-500 hover:text-white"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Saiba mais
                </Button>
              </CardFooter>
            </Card>

            {/* Card de Redes Sociais da RFEC */}
            <Card className="overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-indigo-500" />
                  Siga a RFEC
                </CardTitle>
                <CardDescription>Acompanhe nossas redes sociais</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 mb-4">
                  Fique por dentro de todas as novidades, eventos e oportunidades da nossa comunidade.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link href="https://chat.whatsapp.com/GSWOYPiW3WDIadID2E3xwd" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="text-xs">
                      Whatsapp
                    </Button>
                  </Link>
                  <Link href="https://www.instagram.com/rfecommunity/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="text-xs">
                      Instagram
                    </Button>
                  </Link>
                  <Link href="linkedin.com/company/recife-front-end-community/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="text-xs">
                      LinkedIn
                    </Button>
                  </Link>
                  <Link href="https://discord.gg/TBKX9vex" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="text-xs">
                      Discord
                    </Button>
                  </Link>
                  <Link href="https://github.com/rfecommunity" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="text-xs">
                      Github da RFEC
                    </Button>
                  </Link>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="transition-all duration-300 hover:bg-indigo-500 hover:text-white"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Vem fazer parte!
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="pt-8">
            <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-center">
              <img
                src="/images/rfec.png"
                alt="Logo da RFEC"
                className="w-full max-w-[400px] md:max-w-[350px] rounded-lg shadow-md"
              />

              <div className="text-center md:text-left space-y-4 max-w-md">
                <h3 className="text-xl font-semibold text-neutral-800">Quer fazer parte da nossa comunidade?</h3>
                <p className="text-neutral-600">
                  Junte-se a centenas de mulheres que estão transformando o cenário da tecnologia. Participe de eventos,
                  workshops e conecte-se com outras profissionais da área.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600">
                      <Users className="mr-2 h-4 w-4" />
                      Participar da RFEC
                    </Button>
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
