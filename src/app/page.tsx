import type { Metadata } from "next";

import { HeroFork } from "@/components/HeroFork";
import { Stats } from "@/components/Stats";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ArScene } from "@/components/ArScene";
import { Process } from "@/components/Process";
import { FaqList } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

import { homeFaq, process, proof, servicesIntro } from "@/data/home";
import { buildMetadata, faqLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title:
    "Meridiano — Desarrollo web y e-commerce en Colombia para Latinoamérica",
  description:
    "Estudio de desarrollo web en Bogotá. Páginas web desde $900.000 COP, tiendas online desde $2.800.000 COP y menús con realidad aumentada para restaurantes desde $1.800.000 COP. Precios visibles.",
  path: "/",
  keywords: [
    "desarrollo web Colombia",
    "crear tienda online Latinoamérica",
    "menú digital para restaurantes",
    "menú con realidad aumentada",
    "desarrollo e-commerce Bogotá",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd(homeFaq)} />

      <HeroFork />

      {/* Prueba de solvencia técnica. */}
      <Section plano="pizarra">
        <Container>
          <SectionHeader kicker="Prueba" title={proof.title} />
          <div className="mt-14">
            <Stats />
          </div>
        </Container>
      </Section>

      {/* Los cuatro servicios. */}
      <Section plano="carbon" id="servicios">
        <Container>
          <SectionHeader
            kicker={servicesIntro.kicker}
            title={servicesIntro.title}
          />
          <ServiceGrid />
        </Container>
      </Section>

      {/* El diferenciador: menú con realidad aumentada. */}
      <ArScene />

      {/* Proceso de trabajo. */}
      <Section plano="carbon">
        <Container>
          <SectionHeader kicker={process.kicker} title={process.title} />
          <Process />
        </Container>
      </Section>

      {/* Preguntas frecuentes. */}
      <Section plano="pizarra" id="preguntas">
        <Container>
          <Reveal className="costura-filete max-w-3xl">
            <p className="kicker text-brasa">Preguntas frecuentes</p>
            <h2
              id="titulo-faq"
              className="mt-4 text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-5xl"
            >
              Lo que preguntan antes de contratar
            </h2>
          </Reveal>

          <div className="mt-12">
            <FaqList faqs={homeFaq} titleId="titulo-faq" />
          </div>
        </Container>
      </Section>

      <FinalCta mensaje="Hola Meridiano. Vengo del sitio y quiero contarles un proyecto." />
    </>
  );
}
