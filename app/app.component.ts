import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChild
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { AComponent } from "./a/a.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  fileUrl;
  apiResponse;
  data;
  fileURLS: any[] = [];
  @ViewChild("getJSON", { read: ViewContainerRef }) getJSON: ViewContainerRef;
  constructor(
    private sanitizer: DomSanitizer,
    private component: ComponentFactoryResolver
  ) {}
  ngOnInit() {
    //will be replaced by HTTP Response
    this.apiResponse = [
      {
        lan: "en",
        moduleName: "logFrame",
        name: "ramesh",
        id: "11"
      },
      {
        lan: "fr",
        moduleName: "logFrame",
        name: "ramesh",
        id: "12"
      },
      {
        lan: "th",
        moduleName: "logFrame",
        name: "ramesh",
        id: "13"
      },
      {
        lan: "sp",
        moduleName: "logFrame",
        name: "ramesh",
        id: "14"
      }
    ];
  }

  download() {
    this.apiResponse.forEach((e, index) => {
      let data = JSON.stringify(e);
      let factory = this.component.resolveComponentFactory(AComponent);
      let componentRef = this.getJSON.createComponent(factory);
      componentRef.instance.link = this.sanitizer.bypassSecurityTrustResourceUrl(
        window.URL.createObjectURL(
          new Blob([data], { type: "application/json" })
        )
      );
      componentRef.instance.name = `file_${e.moduleName}.${e.lan}.json`;
      setTimeout(() => {
        componentRef.instance.click();
      }, 200);
    });
  }
}
