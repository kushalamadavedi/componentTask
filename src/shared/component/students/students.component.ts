import { Component } from "@angular/core";
import { Istudent } from "src/shared/models/students";




@Component({
    selector: "app-students",
    templateUrl: "./students.component.html",
    styleUrls: ["./students.component.scss"]
})
export class StudentComponent {
    stdArr : Array<Istudent> = [
        {
            fname: "Jhon",
            lname: "Doe",
            email: "jhon@gmail.com",
            contact: 3456723498
        },
        {
            fname: "lee",
            lname: "Doeey",
            email: "lee@gmail.com",
            contact: 2349834567
        },
        {
            fname: "Key",
            lname: "Yoe",
            email: "key@gmail.com",
            contact: 3454986723
        },
    ]

    demo(){
        this.stdArr.forEach(std => {
            
        })
    }
}