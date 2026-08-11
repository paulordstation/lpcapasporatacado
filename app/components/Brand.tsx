export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function BrandLogo({ inverse = false }: { inverse?: boolean }) {
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
