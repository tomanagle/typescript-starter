import { createSchema, Type, typedModel } from 'ts-mongoose'
import { types } from '@babel/core'

const genders = ['male', 'female', 'other'] as const

const UserSchema = createSchema(
    {
        name: Type.string({ required: true }),
        gender: Type.string({ required: true, enum: genders }),
        age: Type.number({ required: true }),
    },
    { timestamps: true }
)

export default typedModel('User', UserSchema)
