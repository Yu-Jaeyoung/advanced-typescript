function relocate(
  this: { lat: number, lng: number },
  lat: number,
  lng: number,
) {
  this.lat = lat;
  this.lng = lng;
}

const coordinate = {
  lat: 0,
  lng: 0,

  // relocate,

  relocate(
    lat: number,
    lng: number,
  ) {
    this.lat = lat;
    this.lng = lng;
  },
};

coordinate.relocate(10, 10);