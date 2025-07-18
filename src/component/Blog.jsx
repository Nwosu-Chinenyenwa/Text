import React, {useRef} from "react";
import ChromaGrid from "./ChromaGrid";
import "../ui/ChromaGrid.css";
import { useInView, motion } from "framer-motion";

function Blog() {
  const items = [
    {
      image: "https://i.pravatar.cc/300?img=1",
      title: "Alex Rivera",
      subtitle: "UI/UX Designer",
      handle: "@alexdesigns",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://dribbble.com/alexdesigns",
    },
    {
      image:
        "https://github.com/Nwosu-Chinenyenwa/Updated-portfolio/blob/main/src/assets/user-02.jpg?raw=true",
      title: "Leah Okoro",
      subtitle: "DevOps Engineer",
      handle: "@leahOps",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/leahokoro",
    },
    {
      image:
        "https://github.com/Nwosu-Chinenyenwa/Updated-portfolio/blob/main/src/assets/user-03.jpg?raw=true",
      title: "Tomi Adeyemi",
      subtitle: "Cloud Solutions Architect",
      handle: "@tomiClouds",
      borderColor: "#6366F1",
      gradient: "linear-gradient(180deg, #6366F1, #000)",
      url: "https://linkedin.com/in/tomiadeyemi",
    },
    {
      image: "https://portfolio-rho-ten-41.vercel.app/assets/me-Dyvdn6FD.jpg",
      title: "NcManus",
      subtitle: "Front-End Developer",
      handle: "@ncmanus",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(180deg, #F59E0B, #000)",
      url: "https://github.com/chisomAI",
    },
    {
      image: "https://i.pravatar.cc/300?img=60",
      title: "David Mensah",
      subtitle: "Mobile App Developer",
      handle: "@davcodez",
      borderColor: "#EF4444",
      gradient: "linear-gradient(180deg, #EF4444, #000)",
      url: "https://linkedin.com/in/davcodez",
    },
    {
      image: "https://i.pravatar.cc/300?img=16",
      title: "Zainab Bakare",
      subtitle: "Data Scientist",
      handle: "@zainabData",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(180deg, #8B5CF6, #000)",
      url: "https://kaggle.com/zainabdata",
    },
  ];
  const ref = useRef(null);
  const review = useInView(ref, { once: true });
  return (
    <>
      <section id="blog">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={review ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="Accordion-Item"
        >
          <div className="bloggrid">
            <ChromaGrid
              items={items}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
export default Blog;
