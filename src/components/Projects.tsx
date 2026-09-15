import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#060B1A] px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#3B82F6]">
            Featured Project
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#F8FAFC] sm:text-5xl">
            Something I’ve built.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#94A3B8]">
            A selection of projects that showcase my frontend development
            skills, problem-solving, and attention to detail.
          </p>
        </motion.div>

        {/* Huddle project */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group overflow-hidden rounded-3xl border border-[#1E3A6E] bg-[#0C1428] shadow-2xl shadow-blue-950/20"
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Project image */}
            <div className="relative overflow-hidden bg-[#060B1A] p-4 sm:p-6">
              <div className="absolute left-8 top-8 z-10 rounded-full border border-blue-400/30 bg-[#060B1A]/90 px-4 py-2 text-xs font-semibold text-[#60A5FA] backdrop-blur">
                Featured
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={`${import.meta.env.BASE_URL}huddle.png`}
                  alt="Huddle team messaging application workspace showing channels and conversations"
                  loading="lazy"
                  className="h-full min-h-[280px] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Project information */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="mb-3 text-sm font-medium text-[#3B82F6]">
                Web Application
              </p>

              <h3 className="text-3xl font-bold text-[#F8FAFC] sm:text-4xl">
                Huddle
              </h3>

              <p className="mt-5 leading-7 text-[#94A3B8]">
                A modern team messaging application designed for seamless
                communication. Huddle provides a structured workspace for
                channels, direct messages, and everyday team conversations.
              </p>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap gap-2">
                {["React", "TypeScript", "JavaScript", "CSS"].map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-[#60A5FA]"
                    >
                      {technology}
                    </span>
                  ),
                )}
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                {/* View Live */}
                <a
                  href="https://huddle-group1-frontend.onrender.com/channels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#3B82F6] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
                >
                  View Live
                  <span>↗</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/uluchukwu/huddle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-[#F8FAFC] transition hover:border-blue-500/30 hover:bg-blue-500/10"
                >
                  {/* GitHub icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Future projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-[#64748B]">More projects coming soon...</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
