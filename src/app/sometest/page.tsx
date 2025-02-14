"use client";

export default function Home() {
  const AVATAR_LIST = [
    {
      name: "John Doe",
      img: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
      link: "https://www.linkedin.com/in/rohansavakar/",
    },
    {
      name: "Jane Smith",
      img: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      link: "https://www.linkedin.com/in/rohansavakar/",
    },
    {
      name: "Alex Brown",
      img: "https://i.pravatar.cc/150?u=a04258114e29026302d",
      link: "https://www.linkedin.com/in/rohansavakar/",
    },
    {
      name: "Chris Evan",
      img: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      link: "https://www.linkedin.com/in/rohansavakar/",
    },
    {
      name: "Emma Watson",
      img: "https://i.pravatar.cc/150?u=a04258114e29026302d",
      link: "https://www.linkedin.com/in/rohansavakar/",
    },
    {
      name: "Robert Downey",
      img: "https://i.pravatar.cc/150?u=a04258114e29026708c",
      link: "https://www.linkedin.com/in/rohansavakar/",
    },
  ];

  let Ele = AVATAR_LIST.map((member, index) => (
    <div
      key={index}
      className="w-full text-lg flex flex-col items-center justify-between p-4 "
    >
      <img
        src={member.img}
        alt={member.name}
        className="w-24 h-24 rounded-full mb-4"
      />
      <a
        href={member.link}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-black hover:text-blue-800 text-center break-words w-full"
      >
        {member.name}
      </a>
    </div>
  ));

  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* First section Introduce our title and reach out easily */}
      <section className="w-full bg-orange-100 min-h-screen items-center justify-center flex flex-col">
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
      <section className="w-full min-h-screen bg-[#024380] text-white flex flex-col items-center justify-center p-6">
        <div className="h-2/3 w-10/12 text-center">
          <h1 className="text-4xl mt-4 pt-6 pb-6 border-b-4 font-bold">
            OUR MISSION
          </h1>
          <div className="flex flex-col md:flex-row gap-6 mt-6 items-stretch">
            <div className="w-full md:w-1/3 text-xl flex flex-col items-center font-semibold">
              <p className="flex-1">
                By bringing together India’s top inventors and entrepreneurs, we
                aim to create world-leading enterprises.
              </p>
              <img
                src="/viksitbharath/Images/Innovation.png"
                alt="Innovation"
                className="mt-4 w-auto h-auto rounded-full bg-gray-200"
              />
            </div>
            <div className="w-full md:w-1/3 text-xl flex flex-col items-center font-semibold">
              <p className="flex-1">
                We are committed to systematically indigenizing the underlying
                technologies for long-term sustainability and growth.
              </p>
              <img
                src="/viksitbharath/Images/Technology.png"
                alt="Technology"
                className="mt-4 w-auto h-auto rounded-full bg-gray-400"
              />
            </div>
            <div className="w-full md:w-1/3 text-xl flex flex-col items-center font-semibold">
              <p className="flex-1">
                Our mission is to drive innovation, foster economic development,
                and make a global impact with cutting-edge advancements.
              </p>
              <img
                src="/viksitbharath/Images/Globalization.png"
                alt="Global Impact"
                className="mt-4 w-auto h-auto rounded-full bg-gray-400"
              />
            </div>
          </div>
        </div>
      </section>
      {/* The list of Panel members */}
      <section className="w-full min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-6">
        <div className="min-h-2/3 w-10/12 text-center">
          <h1 className="text-4xl mt-4 pt-6 pb-6 text-gray-900">OUR TEAM</h1>
          <p className="border-b-4 text-xl">
            Our team consists of highly motivated individuals with years of
            experience in academia, entrepreneurship, and other ventures,
            dedicated to the development of the country.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pt-6 flex-wrap">
            {Ele}
          </div>
        </div>
      </section>
      {/* A section on our goals for innovation */}
      <section className="w-full min-h-screen bg-[#005034] text-gray-900 flex items-center justify-center p-6">
        <div className="container mx-auto grid grid-cols-12 gap-6">
          <div className="col-span-12 rounded-2xl p-6 bg-white shadow-lg flex items-center justify-center md:col-span-4">
            <img
              src="/viksitbharath/Images/Mandala.jpg"
              alt="Technology"
              className="w-auto h-auto rounded-xl bg-gray-400"
            />
          </div>
          <div className="col-span-12 bg-gray-100 p-6 rounded-2xl shadow-lg md:col-span-8 grid grid-cols-2">
            <div className="col-auto">
              <h2 className="text-xl font-bold col-auto">AREAS OF FOCUS</h2>
            </div>
            <div className="col-auto">
              <p className="text-xl text-gray-700 col-auto">
                To achieve Self Reliance in these sectors
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
