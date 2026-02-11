import { missionData } from "./missionData";
import MissionCard from "./MissionCard";

const Mission = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Mission
          </h2>
          <p className="text-slate-600">
            We are driven by a clear purpose — improving healthcare access
            through technology and trust.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {missionData.map((item, index) => (
            <MissionCard key={index} {...item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Mission;
