import { Component } from "@angular/core";




@Component({
    selector : "app-skills",
    templateUrl : "./skills.component.html",
    styleUrls : ["./skills.component.scss"],
})

export class SkillsComponent{
   skillsArr : Array<string>= ["HTML", "CSS", "JavaScript", "Angular", "Rube", "Node"]
}