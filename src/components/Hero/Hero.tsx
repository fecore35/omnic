import { FunctionComponent } from "react";
import Section from "components/Section/Section";
import Title from "components/Title/Title";
import Scope from "components/Scope/Scope";
import s from "./Hero.module.scss";

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <Section className={s.hero}>
      <>
        <Title type="h2" className={s.title}>
          Вітаємо вас!
        </Title>

        <Title type="h3">Що відправлятимемо сьогодні?</Title>

        <Scope />
      </>
    </Section>
  );
};

export default Hero;
