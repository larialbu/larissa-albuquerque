import Link from "next/link"
import { Github, ExternalLink, BookOpen, School, Code, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function LinksSection() {
  return (
    <section id="links" className="py-12 md:py-24 bg-gradient-to-b from-neutral-50 to-neutral-100">
      <div className="container">
        <div className="mx-auto max-w-[800px] space-y-8">
          <div className="space-y-2 text-center">
            <div className="inline-block rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-1">
              <h2 className="rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-1 text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Links Importantes
              </h2>
            </div>
            <p className="text-neutral-600">Confira recursos e projetos relacionados</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="h-5 w-5 text-pink-500" />
                  GitHub
                </CardTitle>
                <CardDescription>larialbu - Meu GitHub</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600">Hello world! Meu nome é Larissa Albuquerque</p>
              </CardContent>
              <CardFooter>
                <Link href="https://github.com/larialbu" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:bg-pink-500 hover:text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visitar
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-purple-500" />
                  Lattes
                </CardTitle>
                <CardDescription>Portal do Plataforma Lattes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600">Meu currículo acadêmico na Plataforma Lattes</p>
              </CardContent>
              <CardFooter>
                <Link href="http://lattes.cnpq.br/7448823611009423" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:bg-purple-500 hover:text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visitar
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-indigo-500" />
                  Alura
                </CardTitle>
                <CardDescription>Desconto na assinatura da Alura</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600">Embaixadora da Alura - Plataforma de cursos online</p>
              </CardContent>
              <CardFooter>
                <Link href="https://www.alura.com.br/indica-dev/larissaamca" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:bg-indigo-500 hover:text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Obter desconto
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <School className="h-5 w-5 text-blue-500" />
                  FIAP
                </CardTitle>
                <CardDescription>Bolsa de descontos em graduações e pós graduações</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600">
                  A melhor faculdade de tecnologia. Entre em contato no Instagram ou WhatsApp
                </p>
              </CardContent>
              <CardFooter>
                <Link href="https://www.fiap.com.br/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:bg-blue-500 hover:text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Saiba mais
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-teal-500" />
                  Casa do Código
                </CardTitle>
                <CardDescription>Livros para Devs!</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600">
                  Casa do Código é uma editora de livros de TI com o selo de didática do grupo Alura. Nossos títulos
                  englobam o universo da programação: Front-end, Mobile, Infraestrutura, Business, Design e UX.
                  CUPOM: AF-b5d2572e
                </p>
              </CardContent>
              <CardFooter>
                <Link href="http://parceiro.casadocodigo.com.br/r/k8pM" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:bg-teal-500 hover:text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visitar
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-emerald-500" />
                  Link Rápido
                </CardTitle>
                <CardDescription> Link Rápido	</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600">Confira meus projetos e trabalhos desenvolvidos</p>
              </CardContent>
              <CardFooter>
                <Link href="https://beacons.ai/lari.devcoding/sobremim" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:bg-emerald-500 hover:text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver portfólio
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
