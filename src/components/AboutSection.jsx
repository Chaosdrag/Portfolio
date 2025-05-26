import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Full-Stack Developer & Creative Problem Solver
                        </h3>

                        <p className="text-muted-foreground">
                            I'm a software engineering graduate with a passion for building
                            full-stack applications, productivity tools, and small games that
                            make life a little easier—or more fun.
                        </p>

                        <p className="text-muted-foreground">
                            Whether it’s crafting clean user interfaces or architecting backend
                            solutions, I love turning ideas into real, working products. I'm
                            always learning and experimenting with new technologies to level up
                            my skills and deliver better results.
                        </p>

                        <div className="pt-4 flex justify-center">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#contact" className="cosmic-button">
                                    Get In Touch
                                </a>

                                <a
                                    href="\Resume_.pdf"
                                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                                    <p className="text-muted-foreground">
                                        Building scalable applications using modern web technologies—
                                        from frontend interfaces to backend APIs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Thinking</h4>
                                    <p className="text-muted-foreground">
                                        Designing smooth and intuitive user experiences that balance
                                        functionality and aesthetics.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Personal Projects</h4>
                                    <p className="text-muted-foreground">
                                        From productivity tools to indie games, I love bringing ideas to life and
                                        exploring how tech can solve real problems—or just entertain.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
