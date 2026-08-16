import RedirectToWhatsapp from "./RedirectToWhatsapp";

export const metadata = {
  title: "Cadastro recebido | Customic Negócios",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <main>
      <RedirectToWhatsapp />
      <section className="hero-form thanks-hero thanks-minimal">
        <div className="thanks-minimal-content">
          <h1>Obrigado!</h1>
          <p>A Customic já recebeu seus dados.</p>
        </div>
      </section>
    </main>
  );
}
