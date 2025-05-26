import { Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Let's <span className="text-primary">Connect</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm a recent software engineering graduate passionate about building creative digital experiences.
                    Whether you're looking to collaborate or just want to say hello, feel free to drop me a message!
                </p>

                <div className="flex flex-col items-center space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a
                                href="mailto:marvinddr25@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                marvinddr25@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium">Phone</h4>
                            <a
                                href="tel:+60189594740"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                +60 18-959 4740
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium">Location</h4>
                            <span className="text-muted-foreground">Puchong, Selangor</span>
                        </div>
                    </div>
                </div>

                <div className="pt-12 flex flex-col items-center">
                    <h4 className="font-medium mb-4 text-center">Find Me Online</h4>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.linkedin.com/in/marvind-ravindran-641523184/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
                        </a>
                        <a
                            href="https://github.com/Chaosdrag"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                        >
                            <Github className="h-6 w-6 hover:text-primary transition-colors" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};
