type HttpMethod = "POST" | "PUT" | "PATH" | "DELETE";

// Função para ser usado em qualquer local que precisar de GET sem credenciais
export async function fetchGet<OUT>(endpoint: string): Promise<OUT> {
  const response = await fetch(endpoint);
  if (response.ok) {
    const responsejson: OUT = await response.json();
    return responsejson;
  }
  throw new Error(
    `Erro ao consultar a API - status: ${response.status}, erro: ${response.statusText}`
  );
}

// Função para ser usado em qualquer local que precisar de PUT, PATH, POST, DELETE sem credenciais
export async function fetchMutation<T>(
  endpoint: string,
  method: HttpMethod,
  data?: T
): Promise<Response> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const options: RequestInit = {
    method: method,
    headers: headers,
    // credentials: "include", // Inclua as credenciais se necessário
    body: data ? JSON.stringify(data) : undefined,
  };

  const response = await fetch(endpoint, options);
  if (response.ok) {
    return response;
  }
  throw new Error(
    `Erro ao consultar a API - status: ${response.status}, erro: ${response.statusText}`
  );
}
