export function SideBar() {
  // TODO: verificar a fonte do $
  return (
    <aside className="w-24 bg-zinc-900 text-white sm:flex flex-col justify-between hidden">
      <div className="w-full rounded-r-2xl bg-purple-600 p-6 text-center font-bold text-4xl italic">
        $
      </div>
      <div className="h-24 w-24 border-t-2 border-zinc-400 flex justify-center items-center">
        <div className="rounded-full bg-purple-300 size-12"></div>
      </div>
    </aside>
  );
}
