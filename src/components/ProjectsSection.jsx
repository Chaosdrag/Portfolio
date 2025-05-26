import { ArrowRight, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "SunwayTD",
        description:
            "A tower defense game that integrates educational questions to test users’ intellect and rewards correct answers with in-game currency to boost defense.",
        image: "/src/assets/sunwaytd.png",
        tags: ["Unity", "C#", "GameDev", "Education"],
        githubUrl: "https://github.com/Chaosdrag/SunwayTD",
    },
    {
        id: 2,
        title: "Ez_PianoL",
        description:
            "An automated tool that detects and logs piano notes from Synthesia-style YouTube videos, helping users learn piano without reading sheet music.",
        image: "/src/assets/ezpianoL.png",
        tags: ["Python", "Computer Vision", "YouTube API"],
        githubUrl: "https://github.com/Chaosdrag/ez_PianoL",
    },
    {
        id: 3,
        title: "AI-Enhanced Gameplay",
        description:
            "Games enhanced with Reinforcement Learning and Procedural Generation to improve AI adaptability and gameplay variety.",
        image: "/src/assets/ai.png",
        tags: ["Python", "Unity", "ML-Agents", "Reinforcement Learning"],
        githubUrl: "https://github.com/Chaosdrag/CP2",
    },
    {
        id: 4,
        title: "Football Manager Web Scraper",
        description:
            "A web scraping tool that collects Football Manager data, helping users find promising wonderkids efficiently.",
        image: "/src/assets/fm.png",
        tags: ["Python", "BeautifulSoup", "Web Scraping"],
        githubUrl: "https://github.com/Chaosdrag/Small-Projects/tree/main/FM24/FM24_WK",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        aria-label={`View GitHub repository of ${project.title}`}
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Chaosdrag"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
