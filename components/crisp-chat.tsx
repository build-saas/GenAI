"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("6f080de7-9fbe-4141-8a4d-621acae94c91");
  }, []);

  return null;
};
