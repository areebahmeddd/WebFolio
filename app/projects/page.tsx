import Link from "next/link";
import { getProjects } from "@/lib/project-data";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">Projects</h1>
      <p className="mb-12 text-xl text-gray-400">
        This is what I built. Check out my{" "}
        <Link
          href="https://github.com/areebahmeddd"
          className="text-blue-400 hover:underline"
        >
          GitHub{" "}
        </Link>
        to see my latest work.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <div key={project.id} className="post-card">
            <div className="mb-2 flex items-center">
              <Link
                href={project.link}
                className="text-2xl font-semibold hover:text-blue-400"
              >
                {project.emoji + " " + project.title}
              </Link>
            </div>
            <div className="mb-2 text-gray-400">
              {project.date} • {project.category}
            </div>
            <p className="text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
