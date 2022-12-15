import { Center } from "src/lp/components/Center";
import { Section } from "src/lp/components/Section";

export const Contact = () => {
  return (
    <Section title="" id="contact">
      <div className="bg-white py-20 px-5">
        <iframe
          id="contact"
          className="border-none w-full mx-auto max-w-[700px]"
          height="737px"
          src="https://www.noway-form.com/f/539fef0e-a845-4c05-a3ac-de2e619f3075/embed"
        />
      </div>
    </Section>
  );
};
