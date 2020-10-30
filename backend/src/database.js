import mongoose from 'mongoose'

import config from './config'

mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err))