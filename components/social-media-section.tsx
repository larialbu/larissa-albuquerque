import Link from "next/link"
import { Instagram, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function SocialMediaSection() {
  return (
    <section className="border-t border-neutral-200 bg-gradient-to-b from-neutral-100 to-neutral-50 py-12">
      <div className="container">
        <div className="mx-auto max-w-[800px] space-y-8">
          <div className="space-y-2 text-center">
            <div className="inline-block rounded-lg bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 p-1">
              <h2 className="rounded-md px-4 py-1 text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Redes Sociais
              </h2>
            </div>
            <p className="text-neutral-600">Me acompanhe nas redes sociais</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="https://www.instagram.com/lari.devcoding" target="_blank" rel="noopener noreferrer">
              <Card className="overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-rose-400 hover:shadow-lg hover:shadow-rose-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Instagram className="h-5 w-5 text-rose-500" />
                    Instagram
                  </CardTitle>
                  <CardDescription>@lari.devcoding</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:bg-rose-500 hover:text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Seguir
                  </Button>
                </CardFooter>
              </Card>
            </Link>
            <Link href="https://www.tiktok.com/@lari.devcoding" target="_blank" rel="noopener noreferrer">
              <Card className="overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-amber-500"
                    >
                      <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5Z" />
                      <path d="m10 15 5-5" />
                      <path d="M10 10h5v5" />
                    </svg>
                    TikTok
                  </CardTitle>
                  <CardDescription>Meu TikTok</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:bg-amber-500 hover:text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Seguir
                  </Button>
                </CardFooter>
              </Card>
            </Link>
            <Link href="https://www.linkedin.com/in/larissa-azevedo-albuquerque" target="_blank" rel="noopener noreferrer">
              <Card className="overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-sky-500" />
                    LinkedIn
                  </CardTitle>
                  <CardDescription>Perfil profissional</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:bg-sky-500 hover:text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Conectar
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
