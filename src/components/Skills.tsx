import { motion } from "framer-motion";
import { Code2, Monitor, Sparkles, GitBranch } from "lucide-react";

const skills = [
  {
    name: "HTML",
    category: "CORE",
    description: "Building semantic and accessible web structures.",
    type: "Frontend Development",
    icon: Code2,
  },
  {
    name: "CSS",
    category: "CORE",
    description: "Creating responsive layouts and polished interfaces.",
    type: "Frontend Development",
    icon: Monitor,
  },
  {
    name: "JavaScript",
    category: "CORE",
    description: "Adding logic, interactivity, and dynamic functionality.",
    type: "Frontend Development",
    icon: Code2,
  },
  {
    name: "React",
    category: "FRONTEND",
    description: "Building reusable components and interactive UIs.",
    type: "Frontend Development",
    icon: Sparkles,
  },
  {
    name: "TypeScript",
    category: "FRONTEND",
    description: "Writing safer and more maintainable JavaScript code.",
    type: "Frontend Development",
    icon: Code2,
  },
  {
    name: "Git",
    category: "TOOLS",
    description: "Managing code, tracking changes, and collaborating.",
    type: "Development Tools",
    icon: GitBranch,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#060B1A] px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#3B82F6]">
              My Skills
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#F8FAFC] sm:text-5xl">
              Technologies I use to{" "}
              <span className="text-[#3B82F6]">build for the web.</span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-[#94A3B8] lg:pb-1">
            I've developed practical skills across modern frontend technologies
            and use them to create responsive, functional, and user-friendly
            experiences.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0C1428] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Subtle glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Top row */}
                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-[#3B82F6] transition duration-300 group-hover:bg-blue-500/15">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="rounded-full border border-white/5 bg-[#060B1A] px-3 py-1 text-[10px] font-medium tracking-wider text-[#64748B]">
                    {skill.category}
                  </span>
                </div>

                {/* Skill name */}
                <div className="relative mt-6">
                  <h3 className="text-xl font-semibold text-[#F8FAFC]">
                    {skill.name}
                  </h3>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-[#64748B]">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom row */}
                <div className="relative mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-xs text-[#475569]">{skill.type}</span>

                  <span className="text-[#475569] transition duration-300 group-hover:translate-x-1 group-hover:text-[#3B82F6]">
                    ↗
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-[#64748B]">
            Practical skills. Real projects. Continuous growth.
          </p>

          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#60A5FA] transition hover:text-[#3B82F6]"
          >
            See what I've built
            <span className="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
