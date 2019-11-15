import mongoose from 'mongoose'
const connect = () => {
    return mongoose
        .connect('mongodb://localhost:27017/myapp', {
            useNewUrlParser: true,
        })
        .then(() => {
            console.log('Connected to database')
        })
        .catch((error: Error) => {
            throw error
        })
}

try {
    connect()
} catch (error) {
    throw error
}
