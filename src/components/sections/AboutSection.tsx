"use client";

import Image from "next/image";
import posthog from "posthog-js";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Mogra } from "next/font/google";

const mogra = Mogra({
  weight: "400",
  subsets: ["latin"],
});

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = ({}) => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row-reverse mt-24 handle-max-w"
    >
      <div
        className={`${mogra.className} flex flex-col justify-center items-center w-full space-y-2 p-4 lg:-space-y-12`}
      >
        <div className="flex flex-col items-center space-y-5">
          <h3 className="text-2xl lg:text-4xl">What&apos;s up?</h3>
          <p className="text-5xl text-center">I&apos;m Manav Patel</p>
        </div>
        <Image
          className="size-50 rounded-full lg:hidden"
          priority
          src="/images/me_bnw.webp"
          alt="Black and White image of Manav Patel"
          width={200}
          height={200}
        />
        <div className="size-11/12 group relative">
          <Image
            className="hidden h-full w-full lg:block"
            priority
            src="/images/me_no_bg.webp"
            alt="Image of Manav Patel wearing his uniform"
            width={200}
            height={200}
            quality={100}
            unoptimized
          />
          <div className="hidden lg:block absolute top-40 -right-5 p-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-light-black text-lg">
              Snapped by{" "}
              <a
                href="https://www.instagram.com/prettyboimaks/"
                target="_"
                className="link"
              >
                ofc Me
              </a>
            </span>
          </div>
        </div>
      </div>
      <section className="flex flex-col p-4 space-y-4 lg:w-11/12 lg:justify-center handle-max-w">
        <h4 className="text-xl font-black lg:text-4xl">About me</h4>
        <p className="lg:text-xl">
          I go by the name <span className="text-teal font-bold">Manav</span>{" "}
          on the internet. I am recently graduated from University of East London by completing my undergrad degree in computer science and engineering.
        </p>
        <p className="lg:text-xl">
          My interest in technology began when I saw my cousin, now a software engineer, perform seemingly magical tasks with computers. However, it wasn't until 2021, when I applied to study abroad, that I truly started diving into self-learning and exploring the endless possibilities technology offers. Being in a new environment inspired me to deepen my understanding of tech and its transformative potential. I am eager to continue expanding my knowledge and skills in the industry, with the hope of making a meaningful impact through my work one day.
        </p>
        <button className="flex px-4 py-3 font-bold text-xl bg-teal transition-colors duration-200 hover:bg-[#009199] self-start gap-3 rounded-md items-center">
          <a
            href="/CAMARA-JOHN_CARLO-N-RESUME-2025.pdf"
            target="_"
            onClick={() => {
              posthog.capture("Viewed Resume");
            }}
          >
            Resume
          </a>{" "}
          <FaExternalLinkAlt />
        </button>
      </section>
    </section>
  );
};

export { AboutSection };
