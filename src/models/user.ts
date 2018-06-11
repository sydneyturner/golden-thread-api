import { Entity, property, model } from '@loopback/repository';

@model()
export class User extends Entity {
    @property({
        type: 'number',
        id: true
    })
    user_id?: number;

    @property({
        type: 'string',
        // required: true
    })
    firstname: string;

    @property({
        type: 'string',
        // required: true
    })
    lastname: string;

    @property({
        type: 'string',
        required: true
    })
    email: string;

    @property({
        type: 'string',
        required: true
    })
    password: string;

    // @property({
    //     type: 'string',
    //     // required: true
    // })
    // dateFrom: Date;

    getId() {
        return this.id;
    }
}