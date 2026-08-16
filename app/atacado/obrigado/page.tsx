import { Arrow, BrandLogo } from "../../components/Brand";
import SpecularButton from "../../components/SpecularButton";

export const metadata = {
  title: "Cadastro recebido | Customic Negócios",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/atacado" aria-label="Customic Negócios — início">
          <BrandLogo />
        </a>
      </header>

      <section className="hero-form thanks-hero">
        <div className="lead-form lead-form-compact thanks-card">
          <span className="success-mark" aria-hidden="true">✓</span>
          <p className="eyebrow">Cadastro recebido</p>
          <h1>Prontinho! Seus dados já estão com a gente.</h1>
          <p>Um especialista do nosso time comercial vai analisar seu cadastro e entrar em contato em breve, pelo WhatsApp ou e-mail informado, para apresentar o catálogo completo e as condições comerciais da Customic.</p>
          <SpecularButton
            href="https://www.customic.com.br/"
            target="_blank"
            rel="noreferrer"
            size="md"
            radius={0}
            className="sb-thanks-cta"
            tint="#3372c0"
            tintOpacity={1}
            baseColor="#1c2b3d"
            lineColor="#ffffff"
            textColor="#ffffff"
          >
            Conheça a Customic <Arrow />
          </SpecularButton>
        </div>
      </section>

      <footer><a className="brand footer-brand" href="/atacado" aria-label="Customic Negócios — início"><BrandLogo inverse /></a><p>© 2026 Customic. Todos os direitos reservados.</p><a href="https://customic.com.br" target="_blank" rel="noreferrer">Conheça a marca <Arrow /></a></footer>
    </main>
  );
}
