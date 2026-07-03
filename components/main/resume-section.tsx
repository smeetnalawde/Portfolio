'use client';

import { resumeData } from "@/constants/resume-data";

export default function ResumeSection() {
  const { title, subtitle, summary, education, skills, experience, projects, interests } =
    resumeData;

  return (
    <section id="resume" className="py-20 lg:py-28 bg-[#030014] text-white">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-12 text-center">
          <h2 className="text-xs font-semibold tracking-[0.3em] text-purple-400 uppercase">
            {title}
          </h2>
          <p className="mt-3 text-2xl md:text-3xl font-bold text-white">
            {subtitle}
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-gray-300">
            {summary}
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          {/* Left: Experience + Projects */}
          <div className="space-y-10">
            <SectionHeading label="Experience" />
            <div className="space-y-6">
              {experience.map((job, index) => (
                <ResumeCard
                  key={index}
                  title={job.role}
                  subtitle={job.company}
                  meta={`${job.location} · ${job.date}`}
                  bullets={job.bullets}
                />
              ))}
            </div>

            <SectionHeading label="Projects" className="mt-8" />
            <div className="space-y-6">
              {projects.map((project, index) => (
                <ResumeCard
                  key={index}
                  title={project.name}
                  subtitle={project.stack}
                  bullets={project.bullets}
                />
              ))}
            </div>
          </div>

          {/* Right: Education + Skills */}
          <div className="space-y-10">
            <SectionHeading label="Education" />
            <div className="space-y-6">
              {education.map((ed, index) => (
                <ResumeCard
                  key={index}
                  title={ed.degree}
                  subtitle={ed.school}
                  meta={`${ed.location} · ${ed.date}`}
                  bullets={ed.highlights}
                />
              ))}
            </div>

            <SectionHeading label="Skills" className="mt-8" />
            {skills.map((skill) => (
              <SkillBlock
                key={skill.label}
                label={skill.label}
                value={skill.items.join(", ")}
              />
            ))}

            <SectionHeading label="Interests" className="mt-8" />
            {interests.map((interest) => (
              <SkillBlock
                key={interest.label}
                label={interest.label}
                value={interest.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <h3
      className={`text-xs font-semibold tracking-[0.25em] text-purple-400 uppercase ${className}`}
    >
      {label}
    </h3>
  );
}

function ResumeCard({
  title,
  subtitle,
  meta,
  bullets,
}: {
  title: string;
  subtitle?: string;
  meta?: string;
  bullets?: string[];
}) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 shadow-sm hover:border-purple-500/70 transition">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      {subtitle && (
        <p className="mt-1 text-sm font-medium text-gray-300">{subtitle}</p>
      )}
      {meta && <p className="mt-1 text-xs text-gray-400">{meta}</p>}
      {bullets && bullets.length > 0 && (
        <ul className="mt-3 space-y-2 text-sm text-gray-300">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SkillBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 hover:border-purple-500/70 transition">
      <p className="text-sm font-semibold text-white">{label}</p>
      <p className="mt-2 text-sm text-gray-300">{value}</p>
    </div>
  );
}
