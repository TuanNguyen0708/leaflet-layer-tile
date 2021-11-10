import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import * as L from 'leaflet';


@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.css']
})

export class LeafletComponent implements OnInit {
  
  private map!: L.Map


  private initMap(): void {
    
    const VietMap = L.tileLayer('https://maps.vietmap.vn/tm/{z}/{x}/{y}@2x.png?apikey=95f852d9f8c38e08ceacfd456b59059d0618254a50d3854c', {
      maxZoom: 22,
      minZoom: 5,
      maxNativeZoom: 20
    });
    const satellite = L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {
      maxZoom: 22,
      minZoom: 5,
      maxNativeZoom: 20
    });
    const hybird = L.tileLayer('https://maps.vnpost.vn/api/hm/{z}/{x}/{y}@2x.png?apikey=7cb80a390b89d5fefae75fc58b01d01dd04a15bb62b3b141', {
      maxZoom: 22,
      minZoom: 5,
      maxNativeZoom: 20
    });
    const closeLayer = L.tileLayer('', {
      maxZoom: 22,
      minZoom: 5,
      maxNativeZoom: 20
    })
    this.map =  L.map('map', {
      center: [ 10.70649049256301, 106.53974533081056 ],
      zoom: 13,
    });
    VietMap.addTo(this.map)

    const circleMap =  L.circle([ 10.724284977024212, 106.5557098388672 ], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).bindPopup("hello, i'm L.circle");

    const polygonMap = L.polygon([
      [10.7121409871872, 106.57287597656251 ],
      [10.692490305822185, 106.55296325683595],
      [10.696285601021225, 106.57442092895509 ]
    ]).bindPopup("hello, i'm polygon");

    const polylineMap = L.polyline([[10.758184367073325, 106.508846282959],
      [10.747981219652846, 106.51451110839845],
      [10.726561920866134, 106.48635864257814 ],
      [10.713237339606419, 106.50558471679689 ],
      [10.703201350159523, 106.5256690979004 ],
      [10.704382072052141, 106.55030250549316 ],
    ]).bindPopup('hello, i am polyline'); 

    const iconMap = L.marker([10.758184367073325, 106.508846282959],{
      icon: L.icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    }).bindPopup('hello i am a icon local')

    const BaseMap = {
      "VietMap" : VietMap,
      "Satellite" : satellite,
      "Hybird" : hybird,
      "CloseLayer": closeLayer
    };

    const cities = {
      "Circle" : circleMap,
      "Polygon": polygonMap,
      "Poliline": polylineMap,
      "Icon": iconMap
    }
    
    L.control.layers(BaseMap,cities).addTo(this.map);
  }

  
  private onMapClick () {
    alert("You clicked the map, you are stupid");
  }


  constructor() { }


  ngOnInit(): void {
    this.initMap()


  }

}
