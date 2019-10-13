import produce from 'immer';

const INITIAL_STATE = {
  meetup: null,
  loading: false,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/ADD_MEETUP': {
        draft.loading = true;
        break;
      }
      case '@meetup/UPDATE_MEETUP_SUCCESS': {
        draft.meetup = action.payload.meetup;
        draft.loading = false;
        break;
      }
      case '@meetup/UPDATE_MEETUP_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
