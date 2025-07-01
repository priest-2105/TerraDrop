import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-sky text-soil">
      <div className="w-full max-w-3xl px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-header font-bold text-earth mb-6 drop-shadow-lg">
          TerraDrop
        </h1>
        <p className="text-xl md:text-2xl font-body text-soil mb-8">
          Reforesting the Earth with drone-powered seeding.<br />
          A fusion of ecology and innovation.
        </p>
        <button className="mt-4 px-8 py-3 rounded-full bg-earth text-white font-header text-lg shadow-lg hover:bg-soil transition-colors">
          Learn More
        </button>
      </div>
    </main>
  );
}
