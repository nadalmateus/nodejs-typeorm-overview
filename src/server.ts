import app from './app'
import 'reflect-metadata'
import './database/databaseConnection'

app.listen(3000, () => console.log('[ON] Running Server'))
