export const JUNIOR = 'JUNIOR';
export const MID = 'MID';
export const SENIOR = 'SENIOR';
export const INTERN = 'INTERN';

export function changeExperienceLevel(level) {
  return {
    type: level,
  };
}
