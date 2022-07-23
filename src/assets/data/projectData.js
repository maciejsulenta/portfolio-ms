import Person1 from "../../assets/images/Person1.png";
import Person2 from "../../assets/images/Person13.png";
import Person3 from "../../assets/images/Person9.png";
import b281 from "../../assets/images/b28-1.avif";
import b282 from "../../assets/images/b28-2.avif";
import b283 from "../../assets/images/b28-3.avif";
import b284 from "../../assets/images/b28-4.avif";
import b285 from "../../assets/images/b28-5.avif";
import b286 from "../../assets/images/b28-6.avif";
import naprawa1 from "../../assets/images/naprawa-1.avif";
import naprawa2 from "../../assets/images/naprawa-2.avif";
import naprawa3 from "../../assets/images/naprawa-3.avif";
import naprawa4 from "../../assets/images/naprawa-4.avif";
import naprawa5 from "../../assets/images/naprawa-5.avif";
import naprawa6 from "../../assets/images/naprawa-6.avif";

import sps1 from "../../assets/images/sps-1.png";
import sps2 from "../../assets/images/sps-2.png";
import sps3 from "../../assets/images/sps-3.png";
import sps4 from "../../assets/images/sps-4.png";
import sps5 from "../../assets/images/sps-5.png";
import sps6 from "../../assets/images/sps-6.png";

export const projectData = [
  {
    id: 1,
    cardTitle: "pralki",
    title: "Naprawa pralek",
    img: Person1,
    about: "Web business card website of small local family business.",
    tech: "CSS<br/>JavaScript<br/>Next.js<br/>Figma<br/>styled-components<br/>Framer Motion<br/>React Scroll",
    mockups: [naprawa1, naprawa2, naprawa3, naprawa4, naprawa5, naprawa6],
    side: "true",
  },
  {
    id: 2,
    cardTitle: "B28",
    title: "B28 studio",
    img: Person2,
    about:
      "Example of web business card website for Projekt B28 Studio Tatuażu created as a One Page Website.",
    tech: "CSS<br/>JavaScript<br/>React<br/>Figma<br/>styled-components<br/>GSAP<br/>Framer Motion<br/>React Scroll<br/>Material Icons",
    mockups: [b281, b282, b283, b284, b285, b286],
  },
  {
    id: 3,
    cardTitle: "SPS",
    title: "SPS dent",
    img: Person3,
    about:
      "Dental Clinic Management System <br/>Main functionality of the designed application is the dental visit booking system<br/>It has a login and registration system<br/>System distinguish users with three types of permissions (patient, doctor, administrator)",
    tech: "CSS<br/>JavaScript<br/>React.js<br/>Node.js<br/>MongoDB<br/>Express<br/>Framer Motion<br/>styled-components<br/>Figma",
    mockups: [sps1, sps2, sps3, sps4, sps5, sps6],
    side: "true",
  },
];
