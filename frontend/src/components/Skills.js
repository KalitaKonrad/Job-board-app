import React from 'react';
import { Typography } from '@material-ui/core';

export const Skills = (props) => {
  return (
    <div>
      <ul className='flex flex-wrap '>
        {props.skills.map((skill) => {
          return (
            <li
              className='p-2 m-2 bg-green-600 rounded-lg font-bold text-white focus:outline-none hover:bg-red-700 cursor-pointer uppercase'
              key={skill}
              onClick={(e) => {
                props.deleteSkill(e.target.textContent);
              }}
            >
              <Typography>{skill}</Typography>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
