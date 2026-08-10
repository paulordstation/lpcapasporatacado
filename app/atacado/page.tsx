"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import BlurText from "../components/BlurText";
import FoldText from "../components/FoldText";
import SpecularButton from "../components/SpecularButton";
import Reveal from "../components/Reveal";

const benefits = [
  ["01", "Valorize seu catálogo", "Produtos premium aumentam a percepção de qualidade e ajudam a posicionar sua loja em outro patamar."],
  ["02", "Aumente o ticket médio", "Capas e acessórios de alto valor agregado criam oportunidades de complementar cada venda."],
  ["03", "Fidelize seus clientes", "Uma boa experiência com o produto aumenta a confiança, estimula a recompra e fortalece a relação com a loja."],
  ["04", "Diferencie-se da concorrência", "Design, acabamento e funcionalidades exclusivas ajudam sua loja a sair do lugar-comum."],
  ["05", "Renove sua vitrine", "Cores, lançamentos e diferentes categorias mantêm o catálogo atrativo e despertam novas compras."],
  ["06", "Conte com uma parceira de negócio", "Nosso time comercial ajuda a selecionar o mix mais adequado ao perfil, ao público e ao potencial da sua operação."],
];

const categories = [
  ["01", "Capas com certificação militar de proteção", "Proteção de alto desempenho para quem procura segurança sem abrir mão do design.", "/produto-capa-air-orange-sem-texto.webp", "Capa transparente Customic Air Orange para iPhone"],
  ["02", "Wallets que viram tripé", "Mais funcionalidade em um único produto e mais valor percebido em cada venda.", "/produto-wallet-tripe.webp", "Wallet Customic aberta como tripé para celular"],
  ["03", "Alças com acabamento superior", "Design, praticidade e materiais que elevam a experiência de uso.", "/produto-alca-premium.webp", "Alça laranja Customic presa a um celular"],
  ["04", "Películas exclusivas", "Proteção para diferentes modelos de celular e uma oportunidade de compra recorrente.", "/produto-pelicula.webp", "Película de proteção aplicada em um celular"],
];

const audiences = [
  "Lojas de capas e acessórios",
  "Revendas de telefonia",
  "Lojas de eletrônicos",
  "Redes de varejo",
  "E-commerces e marketplaces",
  "Distribuidores regionais",
];

const faqs = [
  ["Preciso ter CNPJ para comprar no atacado?", "Sim. O atendimento comercial é destinado a empresas com CNPJ e está sujeito à análise cadastral."],
  ["Existe pedido mínimo?", "Não."],
  ["A Customic atende revendas menores?", "Sim. Temos condições comerciais pensadas para operações de diferentes portes."],
  ["A Customic entrega em todo o Brasil?", "Atendemos diferentes regiões do país. Disponibilidade, prazo e condições de entrega são confirmados pelo time comercial."],
  ["Como funciona a oferta da máquina de películas?", "A disponibilidade da máquina na faixa depende das condições comerciais e da análise do perfil da revenda."],
  ["Como recebo o catálogo e a tabela comercial?", "Preencha o cadastro para que nosso time entre em contato e apresente o portfólio e as condições disponíveis."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand-logo ${inverse ? "brand-logo-inverse" : ""}`}>
      <span className="logo-crop" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/customic-logo.png" alt="" />
      </span>
      <small>negócios</small>
    </span>
  );
}

const RD_FORM_ID = "prl-formulario-capas-por-atacado-e33bc4b816af6a6e7f98";
const RD_ACCOUNT_TOKEN = "UA-28628232-1";

declare global {
  interface Window {
    RDStationForms?: new (formId: string, accountToken: string) => { createForm: () => void };
  }
}

function LeadForm() {
  const initialized = useRef(false);

  function initRdForm() {
    if (initialized.current || typeof window === "undefined" || !window.RDStationForms) return;
    initialized.current = true;
    new window.RDStationForms(RD_FORM_ID, RD_ACCOUNT_TOKEN).createForm();
  }

  useEffect(() => {
    initRdForm();
  }, []);

  return (
    <div className="lead-form lead-form-compact">
      <div className="form-head">
        <div>
          <p className="eyebrow">Quero ser parceiro</p>
          <h3>Receba o catálogo e as condições comerciais da Customic.</h3>
        </div>
      </div>
      <div role="main" id={RD_FORM_ID} className="rd-form-embed" />
      <Script
        src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
        strategy="afterInteractive"
        onReady={initRdForm}
      />
    </div>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Customic Negócios — início">
          <BrandLogo />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#beneficios">Por que ser parceiro</a>
          <a href="#portfolio">Produtos</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#faq">Dúvidas</a>
        </nav>
        <SpecularButton
          href="#cadastro"
          size="sm"
          radius={0}
          className="sb-header-cta"
          tint="#3372c0"
          tintOpacity={1}
          baseColor="#1c2b3d"
          lineColor="#ffffff"
          textColor="#ffffff"
        >
          Quero conhecer as condições comerciais <Arrow />
        </SpecularButton>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <h1 className="revenue-headline">
            <BlurText tag="span" text="Capas e acessórios" className="headline-line" delay={60} />{" "}
            <BlurText tag="em" text="premium no atacado" className="headline-line" delay={60} />{" "}
            <BlurText tag="span" text="para sua loja faturar mais" className="headline-line" delay={60} />
          </h1>
          <Reveal><p className="hero-text">Monte um catálogo exclusivo com produtos Customic que aumentam o valor percebido, ajudam a elevar o ticket médio e diferenciam sua loja da concorrência.</p></Reveal>
          <Reveal delay={100}>
            <ul className="hero-points">
              <li>Produtos premium de alto valor agregado</li><li>Condições comerciais para diferentes portes de revenda</li><li>Portfólio completo para acessórios mobile</li>
            </ul>
          </Reveal>
          <figure className="hero-product">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/customic-banner-produtos-oficiais-20260804.jpg" width="1600" height="800" alt="Produtos oficiais Customic: capas premium, wallets e alças para celular" />
            <figcaption><span>Portfólio premium</span><strong><FoldText text="Venda mais valor." splitBy="char" hinge="top" trigger="mount" duration={0.55} stagger={0.03} fontSize="inherit" fontWeight="inherit" color="inherit" /></strong></figcaption>
          </figure>
        </div>
        <aside id="cadastro" className="hero-form"><LeadForm /></aside>
      </section>

      <section className="credibility-section" aria-labelledby="credibility-title">
        <div className="credibility-intro">
          <h2 id="credibility-title"><BlurText tag="span" text="Mais de 15 anos desenvolvendo acessórios premium" /></h2>
          <Reveal><p>Parceira de grandes revendas e das maiores operadoras de telefonia do Brasil.</p></Reveal>
        </div>
        <div className="trust-strip" aria-label="Destaques de credibilidade da Customic">
          <div><strong><FoldText text="+15" splitBy="char" hinge="top" trigger="scroll" fontSize="inherit" fontWeight="inherit" color="inherit" /></strong><span>+15 anos de pioneirismo em acessórios premium</span></div>
          <div><strong>PRÓPRIO</strong><span>Ecossistema próprio de desenvolvimento de produtos</span></div>
          <div><strong>360º</strong><span>Portfólio completo para revenda</span></div>
          <div><strong>BR</strong><span>Presença nas maiores operadoras do Brasil</span></div>
          <div><strong>PME</strong><span>Condições acessíveis para revendas menores</span></div>
        </div>
      </section>

      <section className="machine-offer-section" aria-label="Oferta de máquina de películas">
        <div className="machine-callout">
          <div>
            <p className="eyebrow">Máquina de películas</p>
            <h3>Leve uma máquina de películas <em>na faixa</em> para sua loja</h3>
            <Reveal><p>Amplie seu portfólio, ofereça películas para diferentes modelos de celular e crie uma nova oportunidade de faturamento recorrente.</p></Reveal>
            <small>Oferta sujeita às condições comerciais e à análise do perfil da revenda.</small>
          </div>
          <SpecularButton
            href="#cadastro"
            size="md"
            radius={0}
            className="sb-machine-cta"
            tint="#000002"
            tintOpacity={1}
            baseColor="#000002"
            lineColor="#c7ef24"
            textColor="#ebf2f7"
          >
            Quero conhecer as condições <Arrow />
          </SpecularButton>
        </div>
      </section>

      <section className="section benefits-section" id="beneficios">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Diferenciais de negócio</p><h2><BlurText tag="span" text="Por que trabalhar com produtos premium Customic?" /></h2></div>
          <Reveal><p>Quando o seu catálogo oferece design, proteção e qualidade, sua loja deixa de competir apenas por preço e passa a vender mais valor.</p></Reveal>
        </div>
        <div className="benefit-grid">
          {benefits.map(([number, title, text], index) => (
            <Reveal as="article" key={title} delay={index * 60} className="benefit-card"><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="section-heading portfolio-heading">
          <p className="eyebrow light">Portfólio completo</p>
          <h2><BlurText tag="span" text="Aumente seu ticket médio com" /><br /><BlurText tag="span" text="produtos de alto valor agregado." delay={60} /></h2>
          <a href="#cadastro">Quero conhecer o portfólio completo <Arrow /></a>
        </div>
        <div className="category-grid">
          {categories.map(([number, title, text, image, alt], index) => (
            <Reveal as="article" delay={index * 70} className={`category-card cat-${index + 1}`} key={title}>
              <div className="category-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={alt} loading="lazy" />
                <span className="category-number">{number}</span>
              </div>
              <div className="category-copy"><h3>{title}</h3><p>{text}</p></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section partner-section">
        <div className="partner-lead">
          <p className="eyebrow">Para quem é</p>
          <h2><BlurText tag="span" text="Parceria sob medida para diferentes tipos de revenda" /></h2>
          <Reveal><p>A Customic atende desde lojas independentes até grandes operações que procuram um fornecedor de capas e acessórios para celular com portfólio premium e presença nacional.</p></Reveal>
        </div>
        <div className="audience-list">
          {audiences.map((item, index) => (
            <Reveal as="div" key={item} delay={index * 50}><span>0{index + 1}</span><strong>{item}</strong><Arrow /></Reveal>
          ))}
        </div>
      </section>

      <section className="steps-section" id="como-funciona">
        <div className="section-heading center-heading"><p className="eyebrow light">Como funciona</p><h2><BlurText tag="span" text="Comece a vender Customic" /></h2></div>
        <div className="steps-grid">
          <Reveal as="article" delay={0}><span>1</span><h3>Cadastre sua empresa</h3><p>Informe seus dados, CNPJ e o perfil da sua operação.</p></Reveal>
          <Reveal as="article" delay={70}><span>2</span><h3>Fale com nosso time comercial</h3><p>Conheça o catálogo, as condições comerciais e as oportunidades disponíveis para sua loja.</p></Reveal>
          <Reveal as="article" delay={140}><span>3</span><h3>Escolha o melhor mix</h3><p>Selecione os produtos mais adequados ao seu público e ao potencial de venda do seu negócio.</p></Reveal>
          <Reveal as="article" delay={210}><span>4</span><h3>Eleve o valor do seu catálogo</h3><p>Ofereça produtos premium, aumente suas oportunidades de venda e fortaleça a fidelização.</p></Reveal>
        </div>
        <a className="secondary-button" href="#cadastro">Quero dar o primeiro passo <Arrow /></a>
      </section>

      <section className="section faq-section" id="faq">
        <div className="faq-intro"><p className="eyebrow">Dúvidas frequentes</p><h2><BlurText tag="span" text="Tudo o que você precisa saber para começar" /></h2></div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <Reveal as="div" key={question} delay={index * 40}>
              <details open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="closing-section" id="cadastro-final">
        <div className="closing-copy"><div className="closing-brand"><BrandLogo inverse /></div><h2><BlurText tag="span" text="Leve a Customic" /><br /><BlurText tag="span" text="para sua loja" delay={60} /></h2><div className="closing-note"><span><FoldText text="+15" splitBy="char" hinge="top" trigger="scroll" fontSize="inherit" fontWeight="inherit" color="inherit" /></span><p>Anos de experiência em<br />acessórios mobile.</p></div></div>
        <div className="closing-cta-panel">
          <SpecularButton
            href="#cadastro"
            size="lg"
            radius={0}
            className="closing-cta-button"
            tint="#c7ef24"
            tintOpacity={1}
            baseColor="#000002"
            lineColor="#ffffff"
            textColor="#000002"
          >
            Quero conhecer as condições comerciais <Arrow />
          </SpecularButton>
        </div>
      </section>

      <footer><a className="brand footer-brand" href="#inicio" aria-label="Customic Negócios — início"><BrandLogo inverse /></a><p>© 2026 Customic. Todos os direitos reservados.</p><a href="https://customic.com.br" target="_blank" rel="noreferrer">Conheça a marca <Arrow /></a></footer>
      <a className="mobile-cta" href="#cadastro">Quero conhecer as condições comerciais <Arrow /></a>
    </main>
  );
}
