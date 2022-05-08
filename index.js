function initMap() {
    // [START maps_add_map_instantiate_map]
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
    // [END maps_add_map_instantiate_marker]
  }
  
  window.initMap = initMap;