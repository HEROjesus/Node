import { randomUUID } from 'node:crypto';
import { sql } from './db.js';

export class DatabasePostgres {
  async list(search) {
    let videos;

    if (search) {
      videos = await sql`select * from videos where title ilike ${'%' + search + '%'}`;
    } else {
      videos = await sql`select * from videos`;
    }
    return videos;
  }

  async create(videos) {
    const videoId = randomUUID();
    const { title, description, duration } = videos;

    await sql`insert into videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration})`;
  }

  async update(id, videos) {
    const { title, description, duration } = videos;

    await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} where id = ${id}`;
  }

  async delete(id) {
    await sql`delete from videos where id = ${id}`;
  }
}