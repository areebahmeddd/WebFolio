export default function AboutPage() {
  return (
    <div className="prose prose-invert max-w-none text-gray-300">
      <h1 className="my-6 text-4xl font-semibold">Hey, I'm Areeb 👋🏼</h1>

      <p>
        I see programming differently. You don't need to be exceptionally smart
        to be great at it (I know I'm certainly not). If you have a strong
        desire to build something meaningful and create an impact, then you're
        great too.
      </p>

      <p>
        That's why I prefer working with startups over big companies. Large
        companies often lose sight of their original mission, while startups,
        especially in India, are EXTREMELY dynamic. Being in an environment
        where you're building something from the ground up and knowing it
        actually helps people is a crazy experience.
      </p>

      <p>
        I'm particularly interested in building backend systems with Python or
        Go, and in automating the CI/CD pipeline for deploying large-scale
        applications using Kubernetes, Terraform, Grafana, and more.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Experience</h2>

      <p>
        I'm currently a student at Dayananda Sagar College of Engineering,
        pursuing Computer Science and Engineering, while also working as a{" "}
        <strong>
          DevOps Engineer at{" "}
          <a
            href="https://ohc.network"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Open Healthcare Network
          </a>
        </strong>
        .
      </p>

      <p>
        Feel free to{" "}
        <a
          href="mailto:hi@areeb.dev"
          className="text-blue-400 underline hover:text-blue-300"
        >
          reach out
        </a>{" "}
        if you'd like to collaborate or just have a chat 🙂
      </p>
    </div>
  );
}
