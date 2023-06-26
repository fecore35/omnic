import Section from "components/Section/Section";
import Title from "components/Title/Title";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface ShopProps {}

const ShopPage: FunctionComponent<ShopProps> = () => {
  return (
    <>
      <Section>
        <>
          <Title type="h3">Виберіть зі списку зручний вам Ваш Поштомат</Title>
          <Link to="/?device_uid=34670a76-6022-4df5-ac1d-68f88589c904">
            #0017
          </Link>
        </>
      </Section>
    </>
  );
};

export default ShopPage;
