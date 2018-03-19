import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Angular - Instagram';
  searchTag  = '';
  data = [];
  onSearch() {
    const apiUrl = `https://www.instagram.com/explore/tags/${this.searchTag}/?__a=1`;
    fetch(apiUrl).then(response => {
      response.json().then(data => {
        this.data = data.graphql.hashtag.edge_hashtag_to_media.edges;
        console.log(data.graphql.hashtag.edge_hashtag_to_media.edges);
      });
    });
  }
}
