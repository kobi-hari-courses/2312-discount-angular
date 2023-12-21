import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";

@Injectable()
export class AdditionService implements AdditionService {
    public id = Math.ceil(Math.random() * 10000000);

    constructor(private historyService: HistoryService) {
        console.log('Addition Service Constructed with id', this.id);        
    }

    add(a: number,  b: number) {
        this.historyService.audit(`service ${this.id}, addition of ${a} and ${b}`);

        return a + b;
    }
}