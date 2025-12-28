// 📐 Charger terrains
fetch(`${API_URL}/terrains`)
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      style: {
        color: "blue",
        weight: 2,
        fillOpacity: 0.3
      },
      onEachFeature: (feature, layer) => {
        layer.bindPopup("Terrain : " + feature.properties.nom);
      }
    }).addTo(map);
  });
