import SectionTitle from "../global/SectionTitle";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experiences from "@/data/content/experiences";

function Experiences() {
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      <div id="experience">
        <SectionTitle title="experience " />
        <img
          className="sqD top-[-15px] right-[-15px]"
          src="/static/doodles/projects/fillStar.svg"
        />
      </div>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className={experience.className}
            contentStyle={experience.contentStyle}
            contentArrowStyle={experience.contentArrowStyle}
            date={experience.date}
            iconStyle={{ ...experience.iconStyle, background: 'white' }}
            icon={
              <img 
                src={experience.icon} 
                alt={experience.icon} 
                style={{ 
                  borderRadius: '50%', 
                  border: '0',
                  padding: '0'
                }} 
                
              />
            }
            
          >
            <h3 className="text-2xl font-bold vertical-timeline-element-title">{experience.title}</h3>
            {experience.subtitle && experience.subtitle.length > 0 && experience.subtitle.map((line, index) => (
              <h4 key={index} className="text-fun-pink-light">{line}</h4>
            ))}
            {Object.entries(experience.description).map(([key, values], index) => (
              <div key={index}>
                <h4 className="mt-5 font-bold">{key}</h4>
                <ul className="list-disc ml-5">
                  {values.map((value, i) => (
                    <li key={i}>{value}</li>
                  ))}
                </ul>
              </div>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experiences;