/**
 * Created by denko on 1/25/2016.
 */
export class Todo{

    name:String;
    description:String;
    finished:Boolean;
    constructor(name, description, finished){
        this.name = name;
        this.description = description;
        this.finished = finished;
    }

    finish(){
        this.finished = !this.finished;
    }
}

