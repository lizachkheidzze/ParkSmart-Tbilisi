export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-slate-900">
          ParkSmart
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Find free parking spaces in Tbilisi in real time.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow">
            <h2 className="text-xl font-semibold">Available Spaces</h2>
            <p className="mt-2 text-3xl font-bold text-green-600">128</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow">
            <h2 className="text-xl font-semibold">Busy Areas</h2>
            <p className="mt-2 text-3xl font-bold text-orange-500">12</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow">
            <h2 className="text-xl font-semibold">Private Parkings</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">34</p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow">
          <div className="p-5">
            <h2 className="text-2xl font-bold text-slate-900">
              Parking Map
            </h2>
            <p className="mt-2 text-slate-600">
              This map shows central Tbilisi. In the real app, available parking spaces would be displayed here.
            </p>
          </div>

          <iframe
            title="Tbilisi Parking Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=44.7600%2C41.6800%2C44.8500%2C41.7350&layer=mapnik&marker=41.7151%2C44.8271"
            className="h-[500px] w-full border-0"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
