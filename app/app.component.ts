import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fileUrl;
  apiResponse;
  data;
  fileURLS: any[] = [];
  constructor(private sanitizer: DomSanitizer) {  }
  ngOnInit() {
    //will be replaced by HTTP Response
    this.apiResponse = [{
      "name": "ramesh",
      "id": "12"
    }, {
      "name": "ramesh",
      "id": "12"
    },{
      "name": "ramesh",
      "id": "12"
    },{
      "name": "ramesh",
      "id": "12"
    }, {
      "name": "ramesh",
      "id": "12"
    }];
    this.data = JSON.stringify(this.apiResponse);
    this.apiResponse.forEach(e => {
      this.fileURLS.push(this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(new Blob([e], { type: 'application/json' }))))
    })
    console.log(this.fileURLS)
  }

}
