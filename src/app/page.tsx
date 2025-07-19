import { H2 } from "@/app/components/H2";
import { List } from "@/app/components/List";
import { Experience } from "@/app/components/Experience";
import { Education } from "@/app/components/Education";
import { Skill } from "@/app/components/Skill";
import { Achievement } from "@/app/components/Achievement";
import { Language } from "@/app/components/Language";
import { experiences } from "@/utils/data/experiences";
import { educations } from "@/utils/data/educations";
import { skills } from "@/utils/data/skills";
import { achievements } from "@/utils/data/achievements";
import { languages } from "@/utils/data/languages";
import { Experience as ExperienceType } from "@/utils/types/experience";
import { Education as EducationType } from "@/utils/types/education";
import { Skill as SkillType } from "@/utils/types/skill";
import { Achievement as AchievementType } from "@/utils/types/achievement";
import { Language as LanguageType } from "@/utils/types/language";

export default function Home() {
  return (
    <main className="bg-white text-black p-8 max-w-4xl min-w-[320px] w-full mx-auto flex flex-col gap-y-6">
      <section className="text-center">
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
      </section>
      <section>
        <H2>Objective</H2>
        <p>
          I am a passionate and driven professional seeking to leverage my
          expertise in frontend development, AI, and cloud computing to
          contribute to innovative projects. My goal is to continuously expand
          my skills, embrace new challenges, and deliver high-quality solutions
          that drive impact. With a strong foundation in cutting-edge
          technologies and a commitment to lifelong learning, I aim to grow as a
          versatile and adaptable leader in the tech industry.
        </p>
      </section>
      <section>
        <H2>Experiences</H2>
        <List>
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
        </List>
      </section>
      <section>
        <H2>Academic Background</H2>
        <List>
          {educations.map(({ id, title, institution, date }: EducationType) => (
            <Education
              key={id}
              title={title}
              institution={institution}
              date={date}
            />
          ))}
        </List>
      </section>
      <section>
        <H2>Skills</H2>
        <List className="space-y-1">
          {skills.map(({ id, title, rate }: SkillType) => (
            <Skill key={id} title={title} rate={rate} />
          ))}
        </List>
      </section>
      <section>
        <H2>Projects</H2>
        <p>
          See all them on:{" "}
          <a
            href="https://projects-zol.vercel.app"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            https://projects-zol.vercel.app
          </a>
        </p>
      </section>
      <section>
        <H2>Achievements</H2>
        <List>
          {achievements.map(({ id, title }: AchievementType) => (
            <Achievement key={id} title={title} />
          ))}
        </List>
      </section>
      <section>
        <H2>Languages</H2>
        <List>
          {languages.map(({ id, title }: LanguageType) => (
            <Language key={id} title={title} />
          ))}
        </List>
      </section>
    </main>
  );
}

Home.displayName = "Home";
