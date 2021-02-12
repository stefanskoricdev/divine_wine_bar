function initMap() {
  const divineBar = { lat: 44.7734075332035, lng: 17.194093336706285 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: divineBar,
  });
  const marker = new google.maps.Marker({
    position: divineBar,
    map: map,
  });
}
