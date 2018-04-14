import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { print } from 'util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  url = "https://yesno.wtf/api";

  rs : any;
  answer : string;
  image : string;
  question : string;
  @ViewChild("textInput") textInput : ElementRef;
  
  constructor(private http: HttpClient) {

  }

  getAnswer() {
    this.http.get(this.url).subscribe(data => {
      this.rs = data;
      this.answer = this.rs.answer;
      this.image = this.rs.image;
    });
    this.question = this.textInput.nativeElement.value;
  }




}


