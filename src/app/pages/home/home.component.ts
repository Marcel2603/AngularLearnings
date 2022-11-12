import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    console.log("some test")
  }

  testButton() {
    this.http.get("http://localhost:9000/link/file", {
      params: {
        key: "test3.xml"
      },
    }).toPromise()
      .then(link => {
        console.log(link)
        window.open(link as string, '_blank')

      });
  }

}
