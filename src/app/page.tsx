import { H2 } from "@/app/components/H2";
import { Experience } from "@/app/components/Experience";
import { Skill } from "@/app/components/Skill";
import { Project } from "@/app/components/Project";
import { experiences } from "@/utils/data/experiences";
import { skills } from "@/utils/data/skills";
import { projects } from "@/utils/data/projects";
import { Experience as ExperienceType } from "@/utils/types/experience";
import { Skill as SkillType } from "@/utils/types/skill";
import { Project as ProjectType } from "@/utils/types/project";

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
              linkedin.com/in/zolppy
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/zolppy"
              className="text-blue-600 hover:underline"
            >
              github.com/zolppy
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
          {experiences.map(
            ({ id, title, company, date, description }: ExperienceType) => (
              <Experience
                key={id}
                title={title}
                company={company}
                date={date}
                description={description}
              />
            )
          )}
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
            {skills.map(({ id, title, rate }: SkillType) => (
              <Skill key={id} title={title} rate={rate} />
            ))}
          </div>
        </section>
        <section className="mb-6">
          <H2>Projects</H2>
          <ul className="list-disc pl-5">
            {projects.map(({ id, href, title }: ProjectType) => (
              <Project key={id} href={href} title={title} />
            ))}
          </ul>
        </section>
        <section className="mb-6">
          <H2>Achievements</H2>
          <ul className="list-disc pl-5">
            <li className="mb-1">Gen Al Technical Certified</li>
            <li className="mb-1">Al-Assisted Certified Professional</li>
            <li className="mb-1">
              Agile-Certified Fast Inception with Al Cockpit
            </li>
          </ul>
        </section>
        <section>
          <H2>Languages</H2>
          <ul className="list-disc pl-5">
            <li className="mb-1">English (advanced)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
