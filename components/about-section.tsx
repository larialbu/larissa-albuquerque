"use client"

import { useState, useEffect } from "react"
import { BookOpen, School, Code } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("formacao")
  const tabs = ["formacao", "experiencia", "habilidades"]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab)
        const nextIndex = (currentIndex + 1) % tabs.length
        return tabs[nextIndex]
      })
    }, 15000) // 15 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="sobre" className="border-t border-neutral-200 bg-neutral-100 py-12 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-[800px] space-y-8">
          <div className="space-y-2 text-center">
            <div className="inline-block rounded-lg bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 p-1">
              <h2 className="rounded-md px-4 py-1 text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Sobre Mim
              </h2>
            </div>
            <p className="text-neutral-600">Conheça um pouco mais sobre minha trajetória</p>
          </div>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full transition-all duration-500 ease-in-out"
          >
            <TabsList className="grid w-full grid-cols-3 transition-all duration-300 ease-in-out">
              <TabsTrigger value="formacao">Formação</TabsTrigger>
              <TabsTrigger value="experiencia">Experiência</TabsTrigger>
              <TabsTrigger value="habilidades">Habilidades</TabsTrigger>
            </TabsList>
            <TabsContent
              value="formacao"
              className="space-y-4 pt-4 transition-all duration-500 ease-in-out animate-in fade-in-0 slide-in-from-bottom-2"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-neutral-200 p-2">
                    <School className="h-5 w-5 text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Mestrado em Ciência da Computação</h3>
                    <p className="text-sm text-neutral-600">(CIn) Centro de Informática - (UFPE) Universidade Federal de Pernambuco</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-neutral-200 p-2">
                    <School className="h-5 w-5 text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sistemas de Informação</h3>
                    <p className="text-sm text-neutral-600">(UNICAP) Universidade Católica de Pernambuco - Embarque digital</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="experiencia"
              className="pt-4 transition-all duration-500 ease-in-out animate-in fade-in-0 slide-in-from-bottom-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-neutral-200 p-2">
                      <Code className="h-5 w-5 text-neutral-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Associate Software Engineer</h3>
                      <p className="text-sm text-neutral-600">FCx Labs (Ferreira Costa) - Dez de 2024 - Atual</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-neutral-200 p-2">
                      <Code className="h-5 w-5 text-neutral-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Desenvolvedora Full Stack</h3>
                      <p className="text-sm text-neutral-600">BSA Tech - Ago de 2023 - Dez de 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-neutral-200 p-2">
                      <Code className="h-5 w-5 text-neutral-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Desenvolvedora Full Stack</h3>
                      <p className="text-sm text-neutral-600">CMTech - Jan de 2023 - Ago de 2023</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-neutral-200 p-2">
                      <BookOpen className="h-5 w-5 text-neutral-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Líder da RFEC</h3>
                      <p className="text-sm text-neutral-600">Liderança em comunidade de tecnologia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-neutral-200 p-2">
                      <BookOpen className="h-5 w-5 text-neutral-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Embaixadora da Alura</h3>
                      <p className="text-sm text-neutral-600">Representante da plataforma de ensino Alura</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="habilidades"
              className="space-y-4 pt-4 transition-all duration-500 ease-in-out animate-in fade-in-0 slide-in-from-bottom-2"
            >
              <div className="grid gap-4 md:grid-cols-2">
                {/* Front-end */}
                <div className="space-y-2">
                  <h3 className="font-semibold">Desenvolvimento Front-end</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">HTML</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">CSS</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">JavaScript</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">TypeScript</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">React</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Next.js</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Angular</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Microfrontends</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Monorepo</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Design System</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Storybook</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Styled Components</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Jest</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">React Testing Library</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">REST APIs</span>
                  </div>
                </div>

                {/* Back-end */}
                <div className="space-y-2">
                  <h3 className="font-semibold">Desenvolvimento Back-end</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">JavaScript</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">TypeScript</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Node.js</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">NestJS</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Python</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Django</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">SQL</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">NoSQL</span>
                  </div>
                </div>

                {/* Gestão de Projetos */}
                <div className="space-y-2">
                  <h3 className="font-semibold">Gestão de Projetos</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Scrum</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Kanban</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Liderança Técnica</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Planejamento Ágil</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Gestão de Equipes</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Comunicação</span>
                  </div>
                </div>

                {/* Outras Habilidades */}
                <div className="space-y-2">
                  <h3 className="font-semibold">Outras Habilidades</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Git</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">GitHub</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">GitLab</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Docker</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">UX/UI</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Jira</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Rancher</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Grafana</span>
                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">Isomnia</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
