"use client";

import { useEffect } from "react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=555193868919&text=Tenho+interesse+nas+condi%C3%A7%C3%B5es+especiais+das+capas+por+atacado+da+Customic%21&type=phone_number&app_absent=0";

export default function RedirectToWhatsapp() {
  useEffect(() => {
    // Pequeno atraso para garantir que a tag de conversão do Google Ads
    // (baseada no carregamento desta página) tenha tempo de disparar
    // antes do navegador sair para o WhatsApp.
    const timer = setTimeout(() => {
      window.location.href = WHATSAPP_URL;
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
