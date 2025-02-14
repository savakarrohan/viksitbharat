"use client";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* First section Introduce our title and reach out easily */}
      <section className="w-full bg-orange-100 h-screen items-center justify-center flex flex-col">
        <div className="max-w-6xl flex flex-col md:flex-row md:text-left p-6 shadow-large bg-white rounded-2xl">
          <div className="flex-1 p-6">
            <h1 className="text-5xl md:text-8xl font-bold text-gray-900">
              Viksit Bharat
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              Our vision for a progressive, prosperous & developed India, built
              on innovation, inclusivity, and development.
            </p>
            <div className="mt-6">
              <a
                className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdUOnsw22KWsWCbfP39sXkogqk3AqaMRyB55f-33NqjS95G8Q/viewform?usp=dialog"
              >
                Reach out to us now
              </a>
            </div>
          </div>
          <div className="flex-1 p-6">
            <img
              src="/viksitbharath/Icons/Flag_of_India.svg"
              alt="Viksit Bharat"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>
      {/*
      Second section Introduce ourselves 
      <section className="max-w-6xl w-full flex flex-col md:flex-row items-center text-center md:text-left p-6 shadow-large bg-white rounded-2xl">
        <h1> hello</h1>
      </section>*/}
      <section className="w-full h-screen bg-white">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center text-center md:text-left p-6 shadow-large bg-white rounded-2xl">
          <h1> hello</h1>
        </div>
      </section>
    </main>
  );
}
