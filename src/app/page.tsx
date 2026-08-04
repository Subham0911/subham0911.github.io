import Image from "next/image";

export default function Home() {
  const basePath = "/subhamdutta.github.io";
  return (
    <main className="min-h-screen bg-slate-950 text-white">
<nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
    <h1 className="font-bold">Subham Dutta</h1>

    <div className="space-x-6">
      <a href="#about">About</a>
      <a href="#research">Research</a>
      <a href="#publications">Publications</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        
        <Image
          src={`${basePath}/images/hero.JPEG`}
          alt="Himalayan fieldwork"
          fill
          className="object-cover opacity-50"
          priority
        />

        <div className="relative z-10 max-w-5xl px-6 text-center">
          
          <Image
            src={`${basePath}/images/profile.jpg`}
            alt="Subham Dutta"
            width={220}
            height={220}
            className="mx-auto mb-8 rounded-full border-4 border-white shadow-2xl"
          />

          <h1 className="text-6xl font-bold mb-4">
            Subham Dutta
          </h1>

          <p className="text-2xl text-slate-300 mb-3">
            PhD Candidate
          </p>

          <p className="text-lg text-slate-400 mb-8">
            Department of Earth Sciences
            <br />
            Indian Institute of Technology Kanpur
            <br />
            India
          </p>

          <p className="max-w-4xl mx-auto text-lg leading-relaxed text-slate-200">
            Exploring carbon cycling, stable isotope geochemistry,
            and soil organic matter dynamics in Himalayan alpine ecosystems.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="https://scholar.google.co.in/citations?user=36itv-MAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 text-black font-semibold hover:scale-105 transition"
            >
              Google Scholar
            </a>

            <a
              href="https://orcid.org/0000-0002-4559-9059"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white px-5 py-3 hover:bg-white hover:text-black transition"
            >
              ORCID
            </a>

            <a
              href="https://www.researchgate.net/profile/Subham-Dutta-4"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white px-5 py-3 hover:bg-white hover:text-black transition"
            >
              ResearchGate
            </a>

            <a
              href="https://www.linkedin.com/in/subham-dutta-287828102/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white px-5 py-3 hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Subham0911"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white px-5 py-3 hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about"
  className="bg-slate-900 py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold mb-10">
            About Me
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            I am a PhD candidate in the Department of Earth Sciences at the
            Indian Institute of Technology Kanpur. My research focuses on
            low-temperature and environmental geochemistry, with emphasis on
            carbon cycling, stable isotope geochemistry, soil organic matter
            dynamics, and environmental change in Himalayan alpine ecosystems.
          </p>

        </div>
      </section>

      {/* Research Themes */}
      <section id="research"
  className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            Research Themes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="rounded-2xl bg-slate-900 p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Soil Carbon Dynamics
              </h3>

              <p className="text-slate-300">
                Understanding carbon storage, turnover, and preservation in
                Himalayan alpine soils.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Stable Isotope Geochemistry
              </h3>

              <p className="text-slate-300">
                Applying δ13C and δ2H isotopes to reconstruct environmental
                processes and carbon cycling.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Organic Geochemistry
              </h3>

              <p className="text-slate-300">
                Biomarkers, leaf waxes, and geochemical proxies as archives of
                environmental change.
              </p>
            </div>

          </div>
        </div>
      </section>
      <section className="bg-slate-950 py-24 px-6">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold mb-12">
      Publications
    </h2>

    <div className="space-y-6">

      <div className="bg-slate-900 p-6 rounded-2xl">
        <h3 className="font-semibold text-xl mb-2">
          State and fate of soil organic matter in alpine ecosystems of the Indian Himalayas
        </h3>

        <p className="text-slate-400">
          Goldschmidt Conference 2026 • Montréal, Canada
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl">
        <h3 className="font-semibold text-xl mb-2">
          Additional journal publications coming soon
        </h3>

        <p className="text-slate-400">
          Manuscripts currently in preparation.
        </p>
      </div>

    </div>

  </div>

</section>
<section className="bg-slate-900 py-20 text-center">

  <h2 className="text-4xl font-bold mb-8">
    Curriculum Vitae
  </h2>

  <a
    href="/Subham_Dutta_CV.pdf"
    target="_blank"
    className="rounded-lg border border-white px-5 py-3 hover:bg-white hover:text-black transition"
  >
    Download CV
  </a>

</section>
<section
  id="contact"
  className="py-20 px-6 text-center"
>
  <h2 className="text-4xl font-bold mb-8">
    Contact
  </h2>

  <p className="text-slate-300">
    Department of Earth Sciences
  </p>

  <p className="text-slate-300">
    Indian Institute of Technology Kanpur
  </p>

  <p className="text-slate-300">
    Kanpur, India
  </p>

  <p className="mt-4">
    <a
      href="mailto:YOUR_EMAIL"
      className="text-blue-400"
    >
      subham21@iitk.ac.in
    </a>
  </p>
</section>

    </main>
  );
}