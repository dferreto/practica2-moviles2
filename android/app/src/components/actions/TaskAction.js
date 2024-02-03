
import { TOGGLE_COURSE } from './TaskActionTypes';

export const toggleCourse = courseId => ({
  type: TOGGLE_COURSE,
  payload: courseId,
});
