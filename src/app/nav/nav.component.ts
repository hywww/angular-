import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  results : string[];
  constructor(private http: HttpClient) { 
    
  }

  ngOnInit():void {
    this.http.get('/__/showroom/list').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
    });
  }

}
