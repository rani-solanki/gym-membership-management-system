import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../app.module';

describe('Member API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule], 
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return 201 Created for register member', async () => {
    return request(app.getHttpServer())
      .post('/members/register')
      .send({
        name: 'Rinki',
        email: 'rinki@gmail.com',
        startdate: '2025-03-27',
      })
      .expect(201);
  });

  // Assuming it's already registered
  it('should return 400 Bad Request for duplicate member', async () => {
    return request(app.getHttpServer())
      .post('/members/register')
      .send({
        name: 'Rinki',
        email: 'rinki@gmail.com', 
        startDate: '2025-03-27',
      })
      .expect(400);
  });

  it('should return 200 OK for getting all active members', async () => {
    return request(app.getHttpServer())
      .get('/members/active')
      .expect(200);
  });

  it('should return 200 OK for cancel membership', async () => {
    return request(app.getHttpServer())
      .delete('/members/cancel')
      .query({ email: 'rinki@gmail.com' })  
      .expect(200);
  });
});
