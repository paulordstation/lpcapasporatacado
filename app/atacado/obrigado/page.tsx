import Link from "next/link";

export const metadata = {
  title: "Cadastro recebido | Customic Negócios",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "#ebf2f7" }}>
      <section style={{ maxWidth: 720, padding: "56px 42px", background: "#fff" }}>
        <p style={{ color: "#3372c0", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>Cadastro recebido</p>
        <h1 style={{ margin: "12px 0 20px", fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 1 }}>Obrigado pelo interesse em vender Customic.</h1>
        <p style={{ fontSize: 18, lineHeight: 1.6 }}>Nosso time comercial recebeu seus dados e entrará em contato para apresentar o catálogo e as condições disponíveis.</p>
        <Link href="/atacado" style={{ display: "inline-block", marginTop: 24, color: "#3372c0", fontWeight: 700 }}>Voltar para a página</Link>
      </section>
    </main>
  );
}
