"use client";

import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

import { SectionIntro } from "./SectionIntro";
import { Project } from "@/components/ui/Project";
import { ProjectModel } from "@/models/ProjectModel";
import { gsapLib } from "@/lib/gsap";

interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({}) => {
  const scrollContainer = useRef(null);
  const [projects] = useState<ProjectModel[]>([
    new ProjectModel({
      id: 0,
      date: "February 2024 - December 2024",
      description: (
        <>
          My capstone project, a note-taking app that incorporates AI to suggest
          the best learning method for each note and provides users with
          progress analytics to help them see what they need to improve.
        </>
      ),
      imageAlt: "Hero image of U Do Note",
      imageFileName: "udonote.svg",
      isUnderDevelopment: false,
      projectUrl:
        "https://play.google.com/store/apps/details?id=com.cvsu_b.u_do_note&pcampaignid=web_share",
      projectGithubLink: "https://github.com/Jiseeeh/u-do-note",
      projectTags: ["Flutter", "Firebase", "OpenAI API"],
      title: "u do note",
    }),
    new ProjectModel({
      id: 1,
      date: "1 year ago",
      description: (
        <>
          Yet Another Platformer Game that{" "}
          <span className="link">
            <a href="https://pixel-art-gallery.vercel.app/">Lue</a>
          </span>{" "}
          and I created in our free time to practice using Godot. It was a fun
          and exciting experience. We used some free assets, as well as
          custom-made assets created by Lue.
        </>
      ),
      imageAlt: "Image of our platformer game",
      imageFileName: "yapg.webp",
      isUnderDevelopment: false,
      projectUrl: "https://github.com/Jiseeeh/yapg/releases/tag/v1.0.0",
      projectGithubLink: "https://github.com/Jiseeeh/yapg",
      projectTags: ["Godot", "GDScript"],
      title: "YAPG",
    }),
    new ProjectModel({
      id: 2,
      date: "1 year ago",
      description: (
        <>
          A console application that scrapes the filler episodes of your
          favorite anime series to improve your binge-watching experience.
        </>
      ),
      imageAlt: "Screenshot of the filler hunter",
      imageFileName: "fh.webp",
      isUnderDevelopment: false,
      projectGithubLink: "https://github.com/Jiseeeh/filler-hunter",
      projectTags: ["Javascript", "Inquirer.js"],
      title: "Filler Hunter",
    }),
  ]);

  useGSAP(
    () => {
      const projectSections = gsapLib.utils.toArray("#projects > section");

      gsapLib.to(projectSections, {
        xPercent: -100 * (projectSections.length - 1),
        ease: "none",
        scrollTrigger: {
          // markers: true,
          start: "100p top",
          trigger: scrollContainer.current,
          pin: true,
          scrub: 1,
          snap: 1 / (projectSections.length - 1),
          end: () =>
            "+=" +
            (scrollContainer.current as unknown as HTMLElement).offsetWidth,
        },
      });
    },
    {
      scope: scrollContainer,
    }
  );

  return (
    <>
      <SectionIntro sectionNumber="01" sectionTitle="Projects" />
      <section
        id="projects"
        ref={scrollContainer}
        // ? extra padding top to account for the start of gsap scroll
        // ? width must be based on the number of sections
        className={`h-full pt-16 xl:pt-0 w-[${
          projects.length * 100
        }vw] flex flex-nowrap`}
      >
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </section>
    </>
  );
};

export { ProjectsSection };
