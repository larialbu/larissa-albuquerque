import Link from "next/link"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">Larissa Albuquerque</span>
        </div>
        <nav className="hidden md:flex md:gap-6">
          <Link href="#inicio" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
            Início
          </Link>
          <Link href="#sobre" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
            Sobre mim
          </Link>
          <Link href="#noticias" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
            Notícias
          </Link>
          <Link href="#links" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
            Links
          </Link>
          <Link href="#rfec" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
            RFEC
          </Link>
        </nav>

      </div>
    </header>
  )
}
