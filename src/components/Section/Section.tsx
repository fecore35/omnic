import { FunctionComponent, ReactElement } from "react";
import s from "./Sections.module.scss";

interface SectionProps {
  children: ReactElement;
  className?: string;
}

const Section: FunctionComponent<SectionProps> = ({ children, className }) => {
  return (
    <section className={`${className} ${s.section}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
