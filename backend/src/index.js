import { server } from './server'

import config from './config'
import './database'

server.start({ port: config.port }, ({ port }) => {
    console.log(`Server listening *:${port}`)
})