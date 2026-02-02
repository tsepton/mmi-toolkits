import Table from "./components/toolkits/toolkits";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center">
        <div className="text-3xl my-8">Multimodal Interaction Toolkits</div>
        <Table />
      </main>
    </div>
  );
}
