import { Code, GithubLogo, Globe } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface ProjectInfo {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  status?: "development" | "completed";
}

const SpringModal = ({
  isOpen,
  setIsOpen,
  projectInfo,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  projectInfo: ProjectInfo;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/50 backdrop-blur-md p-4 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-0 rounded-2xl w-full max-w-2xl shadow-2xl cursor-default relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <Code
                weight="bold"
                className="text-white rotate-12 text-[350px] absolute -top-32 -left-32"
              />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-20 -mr-32 -mb-32"></div>
            </div>

            {projectInfo.status === "development" && (
              <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg z-20 border border-orange-300 flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
                EM DESENVOLVIMENTO
              </div>
            )}

            <div className="relative z-10">
              <div className="h-32 p-8 flex items-center justify-center relative overflow-hidden bg-cover bg-center">
                <div className="absolute inset-0 bg-indigo-900/60 backdrop-blur-sm m-4 rounded-2xl"></div>
                <h3 className="text-4xl font-bold text-center relative z-10">
                  {projectInfo.title}
                </h3>
              </div>

              <div className="p-8">
                <p className="mb-6 font-medium leading-relaxed text-white/90">
                  {projectInfo.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Code className="mr-2" weight="bold" size={20} />
                    Tecnologias
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projectInfo.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 hover:bg-white/20 transition-colors border border-white/20 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-row flex-col gap-3">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-transparent hover:bg-white/10 transition-all text-white font-medium py-3 px-6 rounded-lg border border-white/20 flex-1 hover:border-white/50"
                  >
                    Fechar
                  </button>

                  <a
                    href={projectInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-gray-900 transition-all text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center flex-1 group"
                  >
                    <GithubLogo
                      size={20}
                      weight="fill"
                      className="mr-2 group-hover:scale-110 transition-transform"
                    />
                    GitHub
                  </a>

                  {projectInfo.liveUrl && (
                    <a
                      href={projectInfo.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center flex-1 group"
                    >
                      <Globe
                        size={20}
                        weight="fill"
                        className="mr-2 group-hover:scale-110 transition-transform"
                      />
                      Ver Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
