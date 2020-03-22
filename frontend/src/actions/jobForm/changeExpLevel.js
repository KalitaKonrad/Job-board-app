export const CHOOSE_JUNIOR = 'CHOOSE_JUNIOR';
export const CHOOSE_MID = 'CHOOSE_MID';
export const CHOOSE_SENIOR = 'CHOOSE_SENIOR';
export const CHOOSE_INTERN = 'CHOOSE_INTERN';

export function changeExperienceLevel(level) {
	return {
		type: level
	};
}
