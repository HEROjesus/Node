import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #videos = new Map();


    list() {
        return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id,
                ...data,
            }
        })
    }

    create(videos) {
        const videoId = randomUUID()

        this.#videos.set(videoId, videos)
    }

    update(id, videos) {
        this.#videos.set(id, videos)
    }

    delete(id) {
        this.#videos.delete(id)
    }

}