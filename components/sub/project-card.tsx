import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  tags?: string[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  tags = [],
}: ProjectCardProps) => {
  return (
    <div className="project-card h-full w-full max-w-2xl mx-auto flex flex-col rounded-xl overflow-hidden border border-gray-800/50 bg-black/30 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-5px] hover:border-purple-500/50 hover:shadow-[0_15px_35px_-10px_rgba(139,92,246,0.3)]">
      <Link
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="block h-full"
      >
        <div className="h-80 overflow-hidden flex-shrink-0">
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-10 flex-1 flex flex-col bg-gradient-to-b from-transparent to-black/20">
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-gray-300 mb-8 leading-relaxed line-clamp-7 text-justify text-base">{description}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 min-h-[4.5rem]">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs px-3 py-1.5 bg-gray-800/80 hover:bg-gray-700/80 rounded-full text-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
