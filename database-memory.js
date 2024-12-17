import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #videos = new Map()

    
    list() {
      return this.#videos.values()
    }

    create(videos) {
        const videoId = randomUUID()


        this.#videos.set(videoId ,videos)
    }

    update(id, videos) {
        this.#videos.push(id, videos)
    }

    delete(id) {
        this.#videos.push(id)
    }

}