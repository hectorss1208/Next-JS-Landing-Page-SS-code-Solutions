import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Services"
    description="At SSCode Solutions, we offer a diverse suite of services to drive your software development journey. From compelling Product Design to expert Software Development, rigorous QA and Software Testing, insightful Data Analytics, strategic IT Consulting, and scalable Cloud Services—we are your one-stop solution for comprehensive and tailored software solutions. Explore the power of our services, where innovation meets precision, and let us propel your projects to new heights"
  >
    <VerticalFeatureRow
      title="Product Design"
      description="Our Product Design service transforms your ideas into captivating, user-centric solutions. Our creative team blends innovation with functionality, crafting visually stunning and intuitively designed products. Elevate your project with our service, where every detail is meticulously considered for a seamless and engaging user experience."
      image="/assets/images/undraw_usability_testing_re_uu1g.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Software Developer"
      description="Our Software Developer service transforms concepts into high-quality software. Our skilled team brings your vision to life through expert coding and innovative solutions, delivering excellence at every stage. Choose us for software development that blends technical expertise with a commitment to realizing your digital ambitions."
      image="/assets/images/undraw_programming_re_kg9v.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="QA and Software testing"
      description="our QA and Software Testing service ensures the reliability and quality of your software solutions. Our dedicated team meticulously tests and refines every aspect, guaranteeing a seamless user experience. From functionality to performance, we focus on precision to identify and eliminate potential issues. Choose [Your Startup Name] for comprehensive QA and Software Testing, where excellence is non-negotiable, ensuring your software meets the highest standards of reliability"
      image="/assets/images/undraw_code_review_re_woeb.svg"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Data Analytics"
      description="Our Data Analytics service transforms raw data into actionable insights for informed decision-making. Our expert team navigates and analyzes vast datasets, providing the strategic intelligence your business needs. Choose us for streamlined data solutions that drive smarter and more informed choices."
      image="/assets/images/undraw_all_the_data_re_hh4w.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="IT Consulting"
      description="Our IT Consulting service is your strategic partner for navigating and optimizing technology. We provide expert guidance to align your IT infrastructure with business goals, offering scalable solutions that propel your business forward in the digital landscape."
      image="/assets/images/undraw_visionary_technology_re_jfp7.svg"
      imageAlt="Second feature alt text"
    />
    <VerticalFeatureRow
      title="Cloud Services"
      description="Our Cloud Services drive business efficiency and scalability. Our expert team ensures seamless integration and optimal performance for your cloud solutions. From enhancing flexibility to optimizing costs, choose us to empower your business and maximize the potential of your digital endeavors in the cloud."
      image="/assets/images/undraw_cloud_hosting_7xb1.svg"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
