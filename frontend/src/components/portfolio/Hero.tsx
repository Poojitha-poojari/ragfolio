import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative py-28 px-4 bg-gradient-to-br from-black via-zinc-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        {/* Heading */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          Hi, I'm{" "}
          <span className="text-yellow-400 drop-shadow-lg">
            Poojitha V
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Passionate full-stack developer skilled in Java, Spring Boot, and modern web technologies.
          I build scalable, high-performance applications with clean and intuitive user experiences.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          
          {/* View Projects */}
          <button
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:bg-yellow-300 transition duration-300"
          >
            View Projects
          </button>

          {/* Contact Me */}
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            Contact Me
          </button>

        </div>

        {/* Glow effect */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-yellow-400 opacity-10 blur-3xl rounded-full"></div>
      </motion.div>
    </section>
  )
}