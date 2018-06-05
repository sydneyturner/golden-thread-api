import { Entity, property, model } from '@loopback/repository';

@model()
export class Charity extends Entity {
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    charityname: string;

    @property({
        type: 'string',
        // required: true
    })
    desc: string;
}