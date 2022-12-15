import { Section } from "src/pages/landing/components/Section";

export const Contact = () => {
  return (
    <Section title="" id="contact">
      <div className="bg-white py-20 px-5">
        <iframe
          id="contact"
          className="mx-auto w-full max-w-[700px] border-none"
          height="737px"
          src="https://www.noway-form.com/f/539fef0e-a845-4c05-a3ac-de2e619f3075/embed"
        />
      </div>
    </Section>
  );
};
