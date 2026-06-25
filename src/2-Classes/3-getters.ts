export class MapPin {
  lat;
  lng;

  constructor(location?: { lat: number; lng: number }) {
    this.lat = location?.lat ?? 0;
    this.lng = location?.lng ?? 0;
  }

  get coordinates() {
    return {
      lat: this.lat,
      lng: this.lng,
    };
  }

  relocate = (
    newLat: number,
    newLng: number,
  ) => {
    this.lat = newLat;
    this.lng = newLng;
  };
}

const pin = new MapPin({ lat: 10, lng: 20 });

let sample = pin.coordinates; // { lat: number, lng: number }
let lat = pin.coordinates.lat;
let lng = pin.coordinates.lng;

pin.relocate(20, 30);