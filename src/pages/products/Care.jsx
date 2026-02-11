import MedynexCareHero from "../../components/MedynexCare/MedynexCareHero";
import MedynexCareOverview from "../../components/MedynexCare/MedynexCareOverview.jsx";
import HowItWorks from "../../components/MedynexCare/HowItWorks";
import WhyChooseMedynexCare from "../../components/MedynexCare/WhyChoosecare.jsx";
import PatientTestimonials from "../../components/MedynexCare/PatientTestimonials";
import MedynexCareFAQ from "../../components/MedynexCare/FAQs.jsx";
import MedynexCareCTA from "../../components/MedynexCare/CTA";

const MedynexCarePage = () => {
  return (
    <div>
      <MedynexCareHero />
       <MedynexCareOverview />

<HowItWorks />
<WhyChooseMedynexCare />
<PatientTestimonials />
<MedynexCareFAQ />
<MedynexCareCTA />

    </div>
  );
};

export default MedynexCarePage;