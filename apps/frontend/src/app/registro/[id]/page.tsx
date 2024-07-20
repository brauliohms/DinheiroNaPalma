import { FormRegistro } from "@/components";
import { ObterRegistroPorIdController } from "@/controllers";

export default async function Page({ params }: { params: { id: string } }) {
  const registro = await ObterRegistroPorIdController(params.id);
  return <FormRegistro registro={registro ?? undefined} />;
}
