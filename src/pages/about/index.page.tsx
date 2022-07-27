import type { CustomNextPage } from "next";
import { BlogLayout } from "src/component/BlogLayout";

const About: CustomNextPage = () => {
  return <h2>About</h2>;
};

About.getLayout = BlogLayout;

export default About;
