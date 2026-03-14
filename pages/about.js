import Image from "next/image";
import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import Header from "../components/header";

const About = () => {
  return (
    <>
      <Layout>
        <Container>
          <Header />
        </Container>
        <div className="bg-sky-50 pt-16 pb-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div>
                <Image
                  title={"ElenaP"}
                  src={"/assets/about/annie.svg"}
                  height={295}
                  width={293}
                />
              </div>
              <div className="md:pr-8 md:col-span-2">
                <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-12">
                  I build products. Focused on innovation,
                  customer satisfaction, and achieving objectives through the
                  implementation of agile methodologies, process optimization,
                  and digital transformation strategies.
                </h1>
                <p className="text-lg block text-slate-500 mb-4">
                  Entrepreneur and Master's student in Computer Science with
                  over 4 years of experience in the design, development, and
                  implementation of software solutions in multidisciplinary
                  environments requiring interaction with various stakeholders
                  within an organization and clients. Committed to
                  volunteering in STEAM areas, actively participating in
                  mentorship and training initiatives. Interested in a position
                  where I can grow professionally and leverage my skills to
                  support team objectives and positively impact the growth of
                  each team member.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    </>
    //   )
  );
};

export default About;
