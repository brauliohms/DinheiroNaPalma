import { useState } from "react";

export default function useToggle(valor?: boolean) {
  const [estado, setEstado] = useState(valor ?? false);

  const toggle = () => setEstado(!estado);

  const rEstado: [boolean, () => void] = [estado, toggle];

  return rEstado;
}
