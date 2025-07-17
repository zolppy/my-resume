import { H2 } from "@/app/components/H2";
import { Skill } from "./components/Skill";
import { skills } from "@/utils/data/skills";

export default function Home() {
  return (
    <div className="font-sans bg-white text-black p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold">
            Gabriel Cavalcante De Jesus Oliveira
          </h1>
          <p className="text-sm">Várzea Nova, Bahia, Brazil</p>
          <p className="text-sm">
            +55 (74) 98134-3312 | gabriel.lcifba@gmail.com
          </p>
          <p className="text-sm">
            <a
              href="https://www.linkedin.com/in/zolppy"
              className="text-blue-600 hover:underline"
            >
              https://www.linkedin.com/in/zolppy
            </a>
            |
            <a
              href="https://github.com/zolppy"
              className="text-blue-600 hover:underline"
            >
              https://github.com/zolppy
            </a>
          </p>
        </header>
        <section className="mb-6">
          <H2>Objetive</H2>
          <p>
            I seek to acquire even more experience and knowledge to become an
            even better and more versatile professional.
          </p>
        </section>
        <section className="mb-6">
          <H2>Experiences</H2>
          <div className="mb-4">
            <h3 className="job-title">Desenvolvedor Frontend</h3>
            <p className="company-name">Eruda</p>
            <p className="date-range">Oct 2023 - Apr 2025</p>
            <p className="list-item list-none">
              Development and maintenance of modern, fluid, accessible, dynamic,
              performant and responsive user interfaces, using cutting-edge
              technologies and following high-fidelity models.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="job-title">
              Artificial Intelligence and Machine Learning Intern
            </h3>
            <p className="company-name">Compass UOL</p>
            <p className="date-range">Oct 2024 - Mar 2025</p>
            <p className="list-item list-none">
              Extensive learning path covering several theoretical topics
              relevant to the area of Artificial Intelligence (e.g. Natural
              Language Processing, Artificial Neural Networks, Deep Learning)
              and AWS Cloud Computing, with real and practical projects.
              Artificial Intelligence models have been implemented for various
              purposes, such as chatbots and optical character recognition.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="job-title">Technical Support and Integration</h3>
            <p className="company-name">Infotec Automação e Tecnologia</p>
            <p className="date-range">Nov 2022 - Apr 2023</p>
            <p className="list-item list-none">
              Assembly, maintenance and configuration of computers and
              peripherals and integration between systems, including network and
              database configuration.
            </p>
          </div>
          <div>
            <h3 className="job-title">
              Programa Institucional de Bolsas de Iniciação Científica
            </h3>
            <p className="company-name">
              Coordenação de Aperfeiçoamento de Pessoal de Nível Superior
            </p>
            <p className="date-range">Nov 2020 - May 2022</p>
            <p className="list-item list-none">
              Preparation of lesson plans, teaching materials, pedagogical
              resources and other activities related to teaching, in addition to
              teaching workshops in the area of Computer Science.
            </p>
          </div>
        </section>
        <section className="mb-6">
          <H2>Academic Background</H2>
          <div>
            <h3 className="job-title">Computer Science</h3>
            <p className="company-name">
              Instituto Federal de Educação, Ciência e Tecnologia da Bahia
            </p>
            <p className="date-range">2019 - Now</p>
          </div>
        </section>
        <section className="mb-6">
          <H2>Skills</H2>
          <div className="space-y-3">
            {skills.map(({ id, title, rate }) => (
              <Skill key={id} title={title} rate={rate} />
            ))}
          </div>
        </section>
        <section className="mb-6">
          <H2>Projects</H2>
          <ul className="list-disc pl-5">
            <li className="list-item">
              <a
                href="https://br-architects-zol.vercel.app"
                className="text-blue-600 hover:underline"
              >
                https://br-architects-zol.vercel.app
              </a>
            </li>
            <li className="list-item">
              <a
                href="https://fashion-blog-zol.vercel.app"
                className="text-blue-600 hover:underline"
              >
                https://fashion-blog-zol.vercel.app
              </a>
            </li>
            <li className="list-item">
              <a
                href="https://interior-design-zol.vercel.app"
                className="text-blue-600 hover:underline"
              >
                https://interior-design-zol.vercel.app
              </a>
            </li>
            <li className="list-item">
              <a
                href="https://thin-crust-pizza.vercel.app"
                className="text-blue-600 hover:underline"
              >
                https://thin-crust-pizza.vercel.app
              </a>
            </li>
            <li className="list-item">
              <a
                href="https://travel-agency-zol.vercel.app"
                className="text-blue-600 hover:underline"
              >
                https://travel-agency-zol.vercel.app
              </a>
            </li>
            <li className="list-item">
              <a
                href="https://wizard-register.vercel.app"
                className="text-blue-600 hover:underline"
              >
                https://wizard-register.vercel.app
              </a>
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <H2>Achievements</H2>
          <ul className="list-disc pl-5">
            <li className="list-item">Gen Al Technical Certified</li>
            <li className="list-item">Al-Assisted Certified Professional</li>
            <li className="list-item">
              Agile-Certified Fast Inception with Al Cockpit
            </li>
          </ul>
        </section>
        <section>
          <H2>Languages</H2>
          <ul className="list-disc pl-5">
            <li className="list-item">English (advanced)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
