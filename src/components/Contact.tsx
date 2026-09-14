import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#060B1A] px-6 py-24 sm:px-10 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#3B82F6]">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#F8FAFC] sm:text-5xl">
            Let's build something together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#94A3B8]">
            Have a project, opportunity, or just want to connect? I'd love to
            hear from you. Feel free to reach out and I'll get back to you as
            soon as possible.
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-12 max-w-4xl rounded-3xl border border-blue-500/20 bg-[#0C1428] p-8 shadow-2xl shadow-blue-950/20 sm:p-10"
        >
          {/* Contact options */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Email */}
            <a
              href="mailto:miraclenwachukwu112@gmail.com"
              className="group rounded-2xl border border-white/5 bg-[#060B1A] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-[#3B82F6]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>

              <p className="text-sm text-[#64748B]">Email</p>

              <p className="mt-1 break-all font-medium text-[#F8FAFC] transition group-hover:text-[#60A5FA]">
                miraclenwachukwu112@gmail.com
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348060666999"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/5 bg-[#060B1A] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-[#3B82F6]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L4 20l1.2-4.1A8.5 8.5 0 1 1 21 11.5Z" />
                  <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.1.1-.1.3 0 .5.5.9 1.2 1.6 2.1 2.1.2.1.4.1.5 0l.6-.5c.2-.2.4-.2.6-.1l1.7.7c.2.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.4.2-1.1-.3-2.2-.9-3.1-1.8-.9-.9-1.5-2-1.8-3.1-.1-.5 0-1 .2-1.4Z" />
                </svg>
              </div>

              <p className="text-sm text-[#64748B]">WhatsApp</p>

              <p className="mt-1 font-medium text-[#F8FAFC] transition group-hover:text-[#60A5FA]">
                Chat with me
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/MiMi-Tech19"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/5 bg-[#060B1A] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-[#3B82F6]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.33-1.77-1.33-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
                </svg>
              </div>

              <p className="text-sm text-[#64748B]">GitHub</p>

              <p className="mt-1 font-medium text-[#F8FAFC] transition group-hover:text-[#60A5FA]">
                View my projects
              </p>
            </a>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <a
              href="mailto:miraclenwachukwu112@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-[#3B82F6] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2563EB] hover:shadow-xl hover:shadow-blue-500/20"
            >
              Say Hello
              <span>↗</span>
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 border-t border-white/5 pt-8 text-center"
        >
          <p className="text-sm text-[#64748B]">
            © {new Date().getFullYear()} Miracle. Built with React & TypeScript.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
