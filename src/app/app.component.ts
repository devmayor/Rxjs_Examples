import { Component, OnInit } from "@angular/core";
import { of, from } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";

  ngOnInit() {
    of(1, 2, 3, 4, 5).subscribe(console.log);

    from([1, 2, 3, 4, 5]).subscribe(
      item => console.log("data: " + item),
      err => console.log("err " + err),
      () => console.log("complete")
    );
  }
}
