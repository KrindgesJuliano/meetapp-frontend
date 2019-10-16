import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateMeetupFailure } from './actions';

export function* updateMeetup({ payload }) {
  try {
    const { title, description, banner_id, ...rest } = payload.data;

    const meetup = { title, description, banner_id, ...rest };

    yield call(api.put, 'meetups', meetup);

    toast.success('Meetup atualizado com sucesso!');
  } catch (err) {
    toast.error('Falha ao atualiza o Meetup, verifique os dados');
    yield put(updateMeetupFailure());
  }
}

export function* createMeetup({ payload }) {
  try {
    const { title, description, date, location, banner } = payload.data;

    const meetup = {
      title,
      description,
      date,
      location,
      banner,
    };

    yield call(api.post, 'meetups', meetup);

    toast.success('Novo Meetup criado com sucesso');
  } catch (err) {
    toast.error('Falha ao criar o Meetup, verifique os dados');
    yield put(updateMeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_NEW_MEETUP', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
]);
