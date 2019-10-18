import produce from 'immer';

const INITIAL_STATE = {
  event: '',
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/CREATE_NEW_MEETUP': {
        draft.event = null;
        break;
      }
      case '@meetup/OPEN_MEETUP_DETAILS': {
        draft.event = action.payload.meetup;
        break;
      }
      case '@meetup/UPDATE_MEETUP_SUCCESS': {
        draft.event = action.payload.meetup;
        break;
      }
      default:
    }
  });
}
