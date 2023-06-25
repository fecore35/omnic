import Hero from "components/Hero/Hero";
import { FunctionComponent } from "react";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return <Hero />;
};

export default HomePage;
