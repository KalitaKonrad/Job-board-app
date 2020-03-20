export const CHOOSE_JUNIOR = 'CHOOSE_JUNIOR';
export const CHOOSE_MID = 'CHOOSE_MID';
export const CHOOSE_SENIOR = 'CHOOSE_SENIOR';

export function changeExperienceLevel(level) {
  return {
    type: level
  };
}
