import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appTitle = 'Angular - Instagram';
  searchTag  = '';
  hasSpinner = false;
  data = [];
  ngOnInit() {}
  onSearch() {
    this.hasSpinner = true;
    const apiUrl = `https://www.instagram.com/explore/tags/${this.searchTag}/?__a=1`;
    fetch(apiUrl).then(response => {
      response.json().then(data => {
        this.data = data.graphql.hashtag.edge_hashtag_to_media.edges;
        this.hasSpinner = false;
      });
    });
  }
}
