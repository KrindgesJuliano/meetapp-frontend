import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '~/services/api';

import { updateMeetupFailure, updateMeetupSuccess } from './actions';

export function* updateMeetup({ payload }) {
  try {
    const { title, description, ...rest } = payload.data;

    const meetup = { title, description, ...rest };

    const response = yield call(api.put, 'meetups', meetup);

    toast.success('Meetup atualizado com sucesso!');

    yield put(updateMeetupSuccess(response.data));
  } catch (err) {
    toast.error('Falha ao atualiza o Meetup, verifique os dados');
    yield put(updateMeetupFailure());
  }
}

export function* addMeetup({ payload }) {
  try {
    const { title, description, date, location } = payload;

    yield call(api.post, 'meetups', {
      title,
      description,
      date,
      location,
    });
  } catch (err) {
    toast.error('Falha ao criar o Meetup, verifique os dados');
    yield put(updateMeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/ADD_MEETUP', addMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
]);
