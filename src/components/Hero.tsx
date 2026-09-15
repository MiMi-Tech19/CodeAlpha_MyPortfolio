import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 lg:px-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Available badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#3B82F6]" />
            <span className="text-xs font-medium text-[#60A5FA]">
              Available for opportunities
            </span>
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#94A3B8]">
            Hello, I'm
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-[#F8FAFC] sm:text-6xl lg:text-8xl">
            Miracle
            <br />
            <span className="text-[#3B82F6]">Nwachukwu.</span>
          </h1>

          <h2 className="mt-6 text-xl font-medium text-[#94A3B8] sm:text-2xl">
            Frontend Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#64748B] sm:text-lg">
            I build responsive, user-friendly web experiences with modern
            frontend technologies. I enjoy turning ideas and designs into clean,
            functional interfaces.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-[#3B82F6] px-6 py-3.5 text-sm font-semibold text-[#060B1A] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
            >
              View My Work
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href={`${import.meta.env.BASE_URL}Miracle_Nwachukwu_Frontend_Developer_CV.pdf`}
              download
              className="rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-[#F8FAFC] transition-all duration-300 hover:border-[#3B82F6]/50 hover:bg-white/5"
            >
              Download CV
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-5">
            <span className="text-xs uppercase tracking-widest text-[#475569]">
              Find me
            </span>

            {/* GitHub */}
            <a
              href="https://github.com/MiMi-Tech19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Miracle's GitHub profile"
              className="text-[#64748B] transition-colors hover:text-[#60A5FA]"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.08 1.54 1.07 1.54 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.25 9.25 0 0 1 5.01 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.93-2.35 4.79-4.59 5.04.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/miracle-nwachukwu-99653b2b6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Miracle's LinkedIn profile"
              className="text-[#64748B] transition-colors hover:text-[#60A5FA]"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.94 8.5H3.5V20h3.44V8.5ZM5.22 3A2.01 2.01 0 1 0 5.22 7.02 2.01 2.01 0 0 0 5.22 3ZM20.5 13.4c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.44v-5.7c0-1.5.28-2.95 2.14-2.95 1.84 0 1.87 1.72 1.87 3.05V20h3.44l.25-6.6Z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348060666999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-[#64748B] transition-colors hover:text-[#60A5FA]"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L4 20l1.2-4.1A8.5 8.5 0 1 1 21 11.5Z" />
                <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.1.1-.1.3 0 .5.5.9 1.2 1.6 2.1 2.1.2.1.4.1.5 0l.6-.5c.2-.2.4-.2.6-.1l1.7.7c.2.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.4.2-1.1-.3-2.2-.9-3.1-1.8-.9-.9-1.5-2-1.8-3.1-.1-.5 0-1 .2-1.4Z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@mimi_techgirlie"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-[#64748B] transition-colors hover:text-[#60A5FA]"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M15.5 3c.3 1.7 1.3 2.9 3 3.5.5.2 1 .3 1.5.3v3.1a8.7 8.7 0 0 1-4.5-1.4v6.2a6.1 6.1 0 1 1-5.3-6v3.2a2.9 2.9 0 1 0 2.1 2.8V3h3.2Z" />
              </svg>
            </a>
          </div>
        </motion.div>
        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex h-[420px] w-full max-w-[420px] items-center justify-center"
        >
          {/* Outer ring */}
          <div className="absolute h-[330px] w-[330px] rounded-full border border-[#3B82F6]/20" />

          <div className="absolute h-[390px] w-[390px] rounded-full border border-dashed border-[#3B82F6]/10" />

          {/* Glow */}
          <div className="absolute h-64 w-64 rounded-full bg-[#3B82F6]/15 blur-[80px]" />

          {/* Developer card */}
          <div className="relative flex h-72 w-72 rotate-3 items-center justify-center rounded-[2rem] border border-[#3B82F6]/20 bg-[#0C1428] shadow-2xl">
            <div className="-rotate-3 text-center">
              <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-3xl border border-[#3B82F6]/30 bg-[#3B82F6]/10">
                <span className="text-5xl">{"</>"}</span>
              </div>

              <p className="text-sm font-medium text-[#60A5FA]">
                Frontend Developer
              </p>

              <p className="mt-2 text-xs text-[#64748B]">
                React • TypeScript • JavaScript
              </p>
            </div>
          </div>

          {/* Floating tech badges */}
          <div className="absolute right-2 top-14 rounded-xl border border-white/10 bg-[#0C1428]/90 px-4 py-3 text-xs text-[#60A5FA] shadow-xl backdrop-blur">
            React
          </div>

          <div className="absolute bottom-14 left-0 rounded-xl border border-white/10 bg-[#0C1428]/90 px-4 py-3 text-xs text-[#60A5FA] shadow-xl backdrop-blur">
            TypeScript
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#475569] transition-colors hover:text-[#60A5FA] sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
