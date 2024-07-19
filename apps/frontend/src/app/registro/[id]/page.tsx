export default function Page({ params }: { params: { id: string } }) {
  return <div className="text-white">Meu ID: {params.id}</div>;
}
