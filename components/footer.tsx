import Link from "next/link"
import { Github, Linkedin, Instagram, Mail, GraduationCap } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-neutral-600">
          &copy; {new Date().getFullYear()} Larissa Albuquerque. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/larialbu" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 text-neutral-600 hover:text-neutral-900" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/larissa-azevedo-albuquerque" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 text-neutral-600 hover:text-neutral-900" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://www.instagram.com/lari.devcoding" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5 text-neutral-600 hover:text-neutral-900" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="mailto:larissaamca1@gmail.com">
            <Mail className="h-5 w-5 text-neutral-600 hover:text-neutral-900" />
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900"
          >
            <GraduationCap className="h-4 w-4" />
            <span className="text-sm">Lattes</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
