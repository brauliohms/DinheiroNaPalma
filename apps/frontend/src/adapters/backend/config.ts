// -------- API -------
// export const baseURL = process.env.NEXT_PUBLIC_API_BASEURL || "";
export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://api.dinheironapalma.com.br/v1"
    : "http://localhost:8000/v1";

export const ENDPOINT_REGISTROS = `${baseURL}/registros`;

// -------- PAGINA -------
export const URL_HOME = "/";
export const URL_REGISTRO = "/registro";
