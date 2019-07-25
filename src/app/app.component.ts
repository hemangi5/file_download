import { Component, OnInit } from '@angular/core';
import { TestService } from "../app/test.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DemoApp';
  public url = "http://13.126.20.61:8080/files/AAPCA3085R/1%20MB%20below.jpeg";
  public pdfUrl = "http://13.126.20.61:8080/files/ADVFS5174K/3bed8bd0-2e00-4a33-a600-568471e8859d.pdf"
  constructor(private service: TestService) {

  }
  ngOnInit() {
    // $('.myClickDisabledElm').bind('dblclick', function (e) {
    //   e.preventDefault();
    // })

    //     var inp = document.getElementById('my_input');

    // inp.addEventListener('select', function() {
    //   inp.selectionStart = 0;
    // }, false);



    // document.addEventListener('dblclick', function (event) {
    //   // alert("Double-click disabled!");
    //   event.preventDefault();
    //   event.stopPropagation();
    // }, true //capturing phase!!
    // );

  }

  downloadImage() {
    this.service.getFile(this.url).subscribe(
      (res) => {
        console.log(res, "res");
        /**
         * FOR DOWNLOAD DOC
         */
        const a = document.createElement('a');
        a.href = URL.createObjectURL(res);
        a.download = 'test';
        document.body.appendChild(a);
        a.click();
        /**
         * FOR OPEN THE DOC
         */
        const b = document.createElement('a');
        b.href = URL.createObjectURL(res);
        b.target = "_blank"
        document.body.appendChild(b);
        b.click();
      });
  }


  select(event) {
    event.target.selectionStart = event.target.selectionEnd;
    console.log('event', event);

  }

}
