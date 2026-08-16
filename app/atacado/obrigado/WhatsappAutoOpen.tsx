"use client";

import { useEffect } from "react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=555193868919&text=Tenho+interesse+nas+condi%C3%A7%C3%B5es+especiais+das+capas+por+atacado+da+Customic%21&type=phone_number&app_absent=0";

export default function WhatsappAutoOpen() {
  useEffect(() => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  }, []);

  return null;
}
