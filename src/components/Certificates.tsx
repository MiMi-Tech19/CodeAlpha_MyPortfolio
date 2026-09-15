import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";

type Certificate = {
  title: string;
  issuer: string;
  year: string;
  description: string;
  link: string;
};

const certificates: Certificate[] = [
  // Add certificates here in the future.
  // Example:
  // {
  //   title: "Certificate Name",
  //   issuer: "Issuing Organization",
  //   year: "2026",
  //   description: "Short description of the certification.",
  //   link: "/certificates/certificate-name.pdf",
  // },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-[#060B1A] px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#3B82F6]">
            Certifications
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#F8FAFC] sm:text-5xl">
            Learning and{" "}
            <span className="text-[#3B82F6]">growth.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#94A3B8]">
            Certifications and credentials that support my continuous learning
            and professional development.
          </p>
        </motion.div>

        {/* Certificate content */}
        {certificates.length > 0 ? (
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {certificates.map((certificate, index) => (
              <motion.article
                key={certificate.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-white/5 bg-[#0C1428] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/30 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-[#3B82F6]">
                    <Award size={22} />
                  </div>

                  <span className="rounded-full border border-white/5 bg-[#060B1A] px-3 py-1 text-[10px] font-medium tracking-wider text-[#64748B]">
                    {certificate.year}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-[#F8FAFC]">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#60A5FA]">
                    {certificate.issuer}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    {certificate.description}
                  </p>
                </div>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#60A5FA] transition hover:text-[#3B82F6]"
                >
                  View Certificate
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </a>
              </motion.article>
            ))}
          </div>
        ) : (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 rounded-3xl border border-white/5 bg-[#0C1428] p-8 text-center sm:p-12"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-[#3B82F6]">
              <Award size={28} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-[#F8FAFC]">
              Certifications coming soon
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#64748B]">
              I'm continuously learning and working toward new certifications
              that strengthen my skills and professional development.
            </p>

            <div className="mx-auto mt-6 h-px max-w-xs bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#475569]">
              Always learning • Always growing
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}