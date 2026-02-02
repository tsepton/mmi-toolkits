import Table from "./components/toolkits/toolkits";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full p-4 lg:p-8 ">
      <main className="flex min-h-screen w-full  flex-col">
        <div className="text-3xl mb-8">Development Toolkits</div>
        <div className="w-full overflow-scroll">
          <Table />
        </div>
      </main>
    </div>
  );
}
