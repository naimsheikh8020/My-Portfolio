import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full container mx-auto">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
