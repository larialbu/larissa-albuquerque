import Image from "next/image"
import Link from "next/link"
import { Mail, Github, Linkedin, Instagram, ExternalLink, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  function calcularIdade(): number {
    const nascimento = new Date(2005, 0, 11) // 11 de Janeiro de 2005
    const hoje = new Date()
    let idade = hoje.getFullYear() - nascimento.getFullYear()

    const aindaNaoFezAniversario =
      hoje.getMonth() < 0 || (hoje.getMonth() === 0 && hoje.getDate() < 11)

    if (aindaNaoFezAniversario) {
      idade--
    }
    return idade
  }

  return (
    <section id="inicio" className="container py-12 md:py-24 px-8 md:px-16 lg:px-24">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Larissa Albuquerque</h1>
            <p className="text-xl text-neutral-600">Dev Full MSc - Cln UFPE | SI - UNICAP | Líder da RFEC</p>
          </div>
          <p className="max-w-[600px] text-neutral-600 md:text-lg">
            Tenho {calcularIdade()} anos, sou pernambucana e apaixonada por programação. Desenvolvedora Full Stack, Mestre em Ciência
            da Computação.
          </p>

          <div className="flex gap-4">
            <Link href="https://github.com/larialbu" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/larissa-azevedo-albuquerque" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://www.instagram.com/lari.devcoding" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
            <Link href="mailto:contato@larissaalbuquerque.dev">
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Lattes
              </Button>
            </Link>
          </div>
          <div className="pt-4">
            <Link target="_blank" href="https://www.canva.com/design/DAF3imC90jE/1dvqkRqdI7Lvup0qO13Mmg/view?utm_content=DAF3imC90jE&utm_campaign=designshare&utm_medium=link&utm_source=editor">
              <Button>
                Ver meu CV
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-white shadow-lg">
            <div className="absolute inset-0 bg-neutral-200">
              <Image
                src="https://avatars.githubusercontent.com/u/105246799?v=4"
                alt="Larissa Albuquerque"
                layout="fill"
                objectFit="cover"
                className="opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
