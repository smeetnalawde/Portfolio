import fs from "fs";
import path from "path";
import { resumeData } from "../constants/resume-data";

function formatEducation(edu: (typeof resumeData.education)[number]): string {
  const gpaPart = "gpa" in edu && edu.gpa ? `, GPA ${edu.gpa}` : "";
  const lines = [
    `${edu.school}, ${edu.location}`,
    `${edu.degree}${gpaPart}, ${edu.date}`,
  ];
  if (edu.highlights?.length) {
    lines.push(...edu.highlights.map((h) => `• ${h}`));
  }
  return lines.join("\n");
}

function formatExperience(job: (typeof resumeData.experience)[number]): string {
  const lines = [`${job.role} | ${job.company} | ${job.location} | ${job.date}`];
  lines.push(...job.bullets.map((b) => `• ${b}`));
  return lines.join("\n");
}

function formatProject(project: (typeof resumeData.projects)[number]): string {
  const lines = [`${project.name} (${project.stack})`];
  lines.push(...project.bullets.map((b) => `• ${b}`));
  return lines.join("\n");
}

function generate(): string {
  const { name, contact, summary, education, skills, experience, projects, interests } = resumeData;

  const sections = [
    name,
    `${contact.phone} | ${contact.email} | ${contact.github} | ${contact.linkedin}`,
    summary,
    "EDUCATION",
    education.map(formatEducation).join("\n\n"),
    "SKILLS",
    skills.map((s) => `${s.label}: ${s.items.join(", ")}`).join("\n"),
    "EXPERIENCE",
    experience.map(formatExperience).join("\n\n"),
    "PROJECTS",
    projects.map(formatProject).join("\n\n"),
    "INTERESTS",
    interests.map((i) => `${i.label}: ${i.text}`).join("\n"),
  ];

  return sections.join("\n\n") + "\n";
}

const outPath = path.join(__dirname, "..", "public", "resume-data.txt");
fs.writeFileSync(outPath, generate(), "utf-8");
console.log(`Generated ${outPath}`);
