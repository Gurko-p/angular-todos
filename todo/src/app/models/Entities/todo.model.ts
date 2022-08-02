export class Todo{
    constructor(
        public id?: number,
        public date?: Date,
        public description?: string,
        public done: boolean = false
    ){}
}