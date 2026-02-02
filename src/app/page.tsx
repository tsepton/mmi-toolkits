import ToolkitsTable from "./components/toolkits";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between">
        <h1 className="text-3xl">Multimodal Interaction Toolkits</h1>
        <ToolkitsTable />
      </main>
    </div>
  );
}
