import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Monitor, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and well-structured code.",
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    description: "Building interfaces that work beautifully across devices.",
  },
  {
    icon: Sparkles,
    title: "Problem Solving",
    description:
      "Turning ideas into practical solutions through thoughtful development.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#3B82F6]">
            About Me
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#F8FAFC] sm:text-5xl lg:text-6xl">
            Turning ideas into{" "}
            <span className="text-[#3B82F6]">digital experiences.</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Code visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-[#3B82F6]/20 bg-[#0C1428]">
              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/10 blur-[80px]" />

              {/* Code window */}
              <div className="absolute inset-8 rounded-2xl border border-white/5 bg-[#060B1A] p-3 shadow-2xl sm:p-6">
                {" "}
                {/* Window controls */}
                <div className="mb-6 flex gap-2 sm:mb-8">
                  {" "}
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3B82F6]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#60A5FA]/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <div className="space-y-1 font-mono text-[10px] leading-4 sm:space-y-3 sm:text-sm sm:leading-6">
                  {" "}
                  <p className="text-[#475569]">// about-me.tsx</p>
                  <p>
                    <span className="text-[#60A5FA]">const</span>{" "}
                    <span className="text-[#F8FAFC]">developer</span> = {"{"}
                  </p>
                  <p className="pl-5">
                    <span className="text-[#3B82F6]">name:</span>{" "}
                    <span className="text-[#94A3B8]">"Miracle"</span>,
                  </p>
                  <p className="pl-5">
                    <span className="text-[#3B82F6]">role:</span>{" "}
                    <span className="text-[#94A3B8]">"Frontend Developer"</span>
                    ,
                  </p>
                  <p className="pl-5">
                    <span className="text-[#3B82F6]">stack:</span>{" "}
                    <span className="text-[#94A3B8]">
                      ["React", "TypeScript"]
                    </span>
                    ,
                  </p>
                  <p className="pl-5">
                    <span className="text-[#3B82F6]">passion:</span>{" "}
                    <span className="text-[#94A3B8]">
                      "Creating digital experiences"
                    </span>
                    ,
                  </p>
                  <p className="pl-5">
                    <span className="text-[#3B82F6]">skills:</span>{" "}
                    <span className="text-[#94A3B8]">
                      "HTML, CSS, JS, React, TS, Git"{" "}
                    </span>
                  </p>
                  <p>{"}"}</p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-3 top-3 rounded-2xl border border-[#3B82F6]/20 bg-[#060B1A]/95 px-3 py-2.5 shadow-xl backdrop-blur sm:right-5 sm:top-5 sm:px-5 sm:py-4"
              >
                <p className="text-lg font-bold text-[#3B82F6] sm:text-2xl">
                  01+
                </p>
                <p className="text-[10px] text-[#64748B] sm:text-xs">
                  {" "}
                  Internship Experience
                </p>{" "}
              </motion.div>
            </div>
          </motion.div>

          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-base leading-8 text-[#94A3B8] sm:text-lg">
              I'm a detail-oriented frontend developer passionate about creating
              responsive and user-friendly web experiences. I enjoy transforming
              ideas and designs into functional interfaces using modern web
              technologies.
            </p>

            <p className="mt-5 text-base leading-8 text-[#64748B] sm:text-lg">
              I have learned and developed practical skills in HTML, CSS,
              JavaScript, React, TypeScript, and Git. I apply these skills by
              building projects, solving problems, and creating responsive,
              user-friendly web experiences.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl border border-white/5 bg-[#0C1428]/60 p-5 transition-colors duration-300 hover:border-[#3B82F6]/30"
                  >
                    <Icon size={22} className="mb-4 text-[#3B82F6]" />

                    <h3 className="text-sm font-semibold text-[#F8FAFC]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#64748B]">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#60A5FA]"
            >
              Let's work together
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
