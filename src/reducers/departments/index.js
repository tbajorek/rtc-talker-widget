import { Map } from 'immutable';

import { LOAD_CONFIG } from '../../actions/config';
import getFromComplexObject from '../../utilities/getFromComplexObject';

const departments = (state = Map(), action) => {
  switch (action.type) {
    case LOAD_CONFIG:
      let newState = state;
      const departments = getFromComplexObject(action.payload, ['config', 'departments']);
      if (departments !== null) {
        newState = Map(departments);
      }
      return newState;
    default:
      return state;
  }
};

export default departments;

export const getDepartments = state => state.departments;
