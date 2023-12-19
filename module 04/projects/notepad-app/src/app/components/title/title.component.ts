import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-title', 
    templateUrl: './title.component.html', 
    styleUrl: './title.component.css', 
    standalone: true, 
    imports: [CommonModule]
})
export class TitleComponent {
    @Input()
    caption: string = 'This is the title';

    @Input()
    color: string = 'blue';

    @Output()
    tripleClicked = new EventEmitter<number>();

    clicked = 0;
    incClicked() {
        this.clicked++;
        if (this.clicked % 3 === 0) {
            this.tripleClicked.emit(this.clicked);
        }
    }

}