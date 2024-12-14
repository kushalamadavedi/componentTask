import { Component } from "@angular/core";

@Component({
    selector: "app-product",
    templateUrl: "./product.component.html"
})


export class ProductComponent {
    productName: string = "IPhone 14promax";
    productId: number = 1234;

}