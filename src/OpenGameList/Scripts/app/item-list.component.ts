import {Component, Input, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Item} from "./item";
import {ItemService} from "./item.service";

@Component({
    selector: "item-list",
    template: `
    <h2>{{title}}</h2> 
    <ul class="items"> 
        <li *ngFor="let item of items"  
            [class.selected]="item === selectedItem" 
            (click)="onSelect(item)"> 
            <span>{{item.Title}}</span> 
        </li> 
    </ul>
     `,
    styles: [`
    ul.items li {  
        cursor: pointer; 
    } 
    ul.items li.selected {  
        background-color: #cccccc;  
    }`],
})
export class ItemListComponent implements OnInit {
    @Input() class: string;
    selectedItem: Item;
    title: string;
    items: Item[];
    errorMessage: string;

    constructor(private itemService: ItemService, private router: Router) { }
    
    ngOnInit() {
        console.log("ItemListComponent instantiated with the following type: " + this.class);
        var s = null;
        switch (this.class) {
            case "latest":
            default:
                this.title = "Latest items";
                s = this.itemService.getLatest();
                break;
            case "most-viewed":
                this.title = "Most viewed Items";
                s = this.itemService.getMostViewed();
                break;
            case "random":
                this.title = "Random Items";
                s = this.itemService.getRandom();
                break;
        }
        s.subscribe(
            latestItems => this.items = latestItems,
            error => this.errorMessage = <any>error
        );

    }
    onSelect(item: Item) {
        this.selectedItem = item;
        console.log("Item with Id", this.selectedItem.Id, "has been selected.");
        this.router.navigate(["item", this.selectedItem.Id]);
    }
}