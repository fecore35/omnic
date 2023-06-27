import Section from "components/Section/Section";
import Title from "components/Title/Title";
import { FunctionComponent } from "react";

interface InstructionsProps {}

const InstructionsPage: FunctionComponent<InstructionsProps> = () => {
  return (
    <Section>
      <>
        <Title type="h3">Інструкція</Title>

        <div className="text">
          <p>
            Щоб скористатись поштоматом спочатку потрібно встановити мобільний
            додаток служби, у деяких з них це можна зробити за допомогою
            чат-ботів.
          </p>
        </div>
      </>
    </Section>
  );
};

export default InstructionsPage;
