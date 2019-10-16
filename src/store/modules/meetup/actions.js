export function createNewMeetup(data) {
  return {
    type: '@meetup/CREATE_NEW_MEETUP',
    payload: { data },
  };
}

export function openMeetupDetails(meetup) {
  return {
    type: '@meetup/OPEN_MEETUP_DETAILS',
    payload: { meetup },
  };
}

export function updateMeetupRequest(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function updateMeetupFailure() {
  return {
    type: '@meetup/UPDATE_MEETUP_FAILURE',
  };
}
