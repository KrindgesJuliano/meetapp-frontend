import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MdLoyalty, MdHighlightOff } from 'react-icons/md';
import { Container, Event } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      const response = await api.get('organizing');

      const data = response.data.map(meetup => ({
        ...meetup,
      }));

      setEvent(data);
    }

    loadEvents();
  }, []);

  console.tron.log(event);

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Link to="/edit">
          <button type="button">
            <MdLoyalty size={20} color="#fff" />
            Novo meetup
          </button>
        </Link>
      </header>

      <ul>
        {event.map(meetup => (
          <Event key={meetup.id}>
            <strong>{meetup.title}</strong>
            <aside>
              <span>24 de Junho, as 20h</span>
              <button type="button">
                <MdHighlightOff size={24} color="#fff" />
              </button>
            </aside>
          </Event>
        ))}
      </ul>
    </Container>
  );
}
