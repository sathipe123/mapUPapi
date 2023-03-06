import React, { useEffect } from "react";
import { DomUtil, map, Browser, tileLayer, marker} from "leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

export default function Map() {
    const coordinates = useSelector(state => state.coordinates);
    useEffect(() => {
        const container = DomUtil.get("map");
         
        if (container != null) {
            container._leaflet_id = null;
        }
        const mapRef = map("map").setView(coordinates, 5);
        const isRetina = Browser.retina;
        const baseUrl = `https://maps.geoapify.com/v1/tile/carto/{z}/{x}/{y}.png?&apiKey=e83f146ce5e140738b53a32ba96ad412`;
        const retinaUrl = `https://maps.geoapify.com/v1/tile/carto/{z}/{x}/{y}.png?&apiKey=e83f146ce5e140738b53a32ba96ad412`;
    
        tileLayer(isRetina ? retinaUrl : baseUrl, {
          attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" rel="nofollow" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" rel="nofollow" target="_blank">© OpenStreetMap</a> contributors',
          maxZoom: 20,
          id: 'osm-bright',
        }).addTo(mapRef);
        const markerRef = marker(coordinates).addTo(mapRef);
        markerRef.dragging.enable()
    }, [coordinates]);
    return <div id="map" style={{ height: '110ch' }}></div>;
}