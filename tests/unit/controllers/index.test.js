import supertest from 'supertest';
import { it } from 'vitest';
import { app } from '../../setup.js';

it('GET failed successfully', () =>
  supertest(app).get('/').query({ error: 'true' }).expect(200));

it('GET / success', () =>
  supertest(app).get('/').expect('content-type', /json/).expect(200));
