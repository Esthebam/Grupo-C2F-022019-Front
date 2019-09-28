import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {  
  @ViewChild('gmap', {static: true}) gmapElement: any;

  map;
  markerA;
  markerB;

  ngOnInit() {

      this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {
              lat: -34.607939,
              lng: -58.364911
          }
      });

      this.markerA = new google.maps.Marker({
          position: {
              lat: -34.780073,
              lng: -58.262414
          },
          map: this.map,
          icon: {
              url: 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png'
          },
          title: "Marker A"
      });

      this.markerB = new google.maps.Marker({
          position: {
              lat: -34.730565, 
              lng: -58.296442
          },
          map: this.map,
          icon: {
              url: 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png'
          },
          title: "Marker B"
      });
  }

}