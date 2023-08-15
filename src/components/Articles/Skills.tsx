import { allSkills } from '@content';
import React from 'react';
import { Heading } from '../Heading/Heading';
import Prose from '../Prose/Prose';
import { SectionHeading } from '../SectionHeading/SectionHeading';

const Skills: React.FC = () => {
  return (
    <article>
      <SectionHeading text="Skills &amp; Expertise" />

      <div className="mt-2">
        {allSkills.map((skill) => (
          <div key={skill._id}>
            <Heading level={5}>{skill.title}</Heading>
            <Prose className="text-neutral-11" html={skill.body.html} />
          </div>
        ))}
      </div>
    </article>
  );
};

export default Skills;
