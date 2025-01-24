"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";

import { SectionIntro } from "./SectionIntro";
import { Education } from "@/components/ui/Education";
import { EducationModel } from "@/models/EducationModel";
import { gsapLib } from "@/lib/gsap";

interface EducationSectionProps {}

const EducationSection: React.FC<EducationSectionProps> = ({}) => {
  const [educationHistory] = useState<EducationModel[]>([
    new EducationModel({
      id: 0,
      schoolName: "University of East London (Docklands Campus)",
      date: "September 2021 - May 2024",
      description:
        "I completed my education here. Although the University offered a better experience, my scholarship there was not fixed. I'm grateful for the opportunities that have been provided to me at this institution alongside earning recogition with British Computer Society. I'm excited to see what the future holds.",
      imageFileName: "cvsu_b.webp",
      imageAlt: "Image of UEL Dockland Campus",
      imageSource: "https://cvsubacoorlibrary.com/",
    }),
    new EducationModel({
      id: 1,
      schoolName: "Shannen High School (Vadodara Campus)",
      date: "June 2016 - May 2018",
      description:
        "It was fun being a student here. I met friends that I still have contact today. Also professors that were really good and helpful.",
      imageFileName: "nu_m.webp",
      imageAlt: "Image of National University Manila",
      imageSource: "https://national-u.edu.ph/nu-manila/facilities/",
    }),
    
  ]);

  useGSAP(() => {
    const education = gsapLib.utils.toArray(
      "#education > div"
    ) as HTMLElement[];

    const tl = gsapLib.timeline({
      scrollTrigger: {
        trigger: "#education",
        start: () => {
          const windowWidth = window.innerWidth;
          const educationSectionWidth = (
            document.querySelector("#education") as HTMLElement
          ).offsetWidth;

          const startOffset =
            windowWidth <= 768 ? "-120p center" : "top center";
          return startOffset;
        },
        end: () =>
          "+=" +
          (document.querySelector("#education") as HTMLElement).offsetHeight,
        scrub: 1,
        // markers: true,
      },
    });

    education.forEach((educ, i) => {
      tl.fromTo(
        educ,
        {
          y: 0,
          x: i % 2 === 0 ? 100 : -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        i * 0.2
      );
    });
  });

  return (
    <section className="min-h-screen flex flex-col">
      <SectionIntro sectionNumber="02" sectionTitle="Education" />
      <section
        id="education"
        className="flex flex-col min-h-screen mt-24 pt-24 handle-max-w"
      >
        {educationHistory.map((education) => (
          <Education key={education.id} {...education} />
        ))}
      </section>
    </section>
  );
};

export { EducationSection };
