import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { SKILL_DATA } from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 relative py-24 overflow-anchor-none"
    >
      <SkillText />

      {(() => {
        const rowSizes = [12, 9, 5, 1];
        const rows: typeof SKILL_DATA[] = [] as any;
        let start = 0;
        for (const size of rowSizes) {
          rows.push(SKILL_DATA.slice(start, start + size) as any);
          start += size;
        }

        return rows.map((row, rowIndex) => (
          <div
            key={`skill-row-${rowIndex}`}
            className="flex flex-row justify-center mt-4 gap-5 items-center flex-wrap"
          >
            {row.map((skill, i) => (
              <SkillDataProvider
                key={`${rowIndex}-${skill.skill_name}`}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>
        ));
      })()}

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
