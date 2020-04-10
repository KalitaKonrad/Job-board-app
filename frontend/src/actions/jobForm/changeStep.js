export const NEXT_STEP = 'NEXT_STEP';
export const PREV_STEP = 'PREV_STEP';

export function changeStep(stepType) {
  return {
    type: stepType,
  };
}
