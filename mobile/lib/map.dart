import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong.dart';
import 'package:flutter_map_tile_caching/flutter_map_tile_caching.dart';

class MapPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    FMTC.instance('sigCache').manage.create();
    return Scaffold(
      appBar: AppBar(title: const Text("Carte SIG – Db Services Immobiliers")),
      body: FlutterMap(
        options: MapOptions(initialCenter: LatLng(6.85, -7.35), initialZoom: 15),
        children: [
          TileLayer(
            urlTemplate: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            tileProvider: FMTC.instance('sigCache').getTileProvider(),
            subdomains: const ['a','b','c'],
          ),
          MarkerLayer(
            markers: [
              Marker(point: LatLng(6.85, -7.35), width: 40, height: 40, child: const Icon(Icons.location_pin, color: Colors.red)),
            ],
          )
        ],
      ),
    );
  }
}
