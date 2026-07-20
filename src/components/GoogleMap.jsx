import React, { useState } from 'react';
import { GoogleMap as GoogleMapReact, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { FaExternalLinkAlt } from 'react-icons/fa';

const center = {
  lat: 24.7136,
  lng: 46.7256,
};

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: true,
  mapTypeControl: false,
  fullscreenControl: false,
  styles: [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
    },
  ],
};

const GoogleMapComponent = () => {
  const [showInfoWindow, setShowInfoWindow] = useState(true);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const mapsUrl = "https://maps.app.goo.gl/6esV6tzR6TXkTHoR6";

  if (loadError || !apiKey || apiKey === 'YOUR_API_KEY') {
    // Elegant fallback UI when API key is missing or load fails
    return (
      <div className="relative w-full h-[300px] md:h-[400px] bg-gray-900 rounded-[20px] shadow-2xl flex flex-col items-center justify-center p-6 text-center border border-gray-800">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent text-3xl mb-4">
          🗺️
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Abu Usman Movers Location</h3>
        <p className="text-gray-400 max-w-md text-sm mb-6">
          We operate all over Saudi Arabia, including Riyadh, Jeddah, Dammam, and other cities.
        </p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-accent/20"
        >
          <FaExternalLinkAlt className="text-xs" />
          Open in Google Maps
        </a>
      </div>
    );
  }

  return isLoaded ? (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-[20px] shadow-2xl overflow-hidden border border-gray-800">
      {/* Absolute Open in Google Maps Button */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-gray-900/90 hover:bg-gray-900 text-white font-semibold text-xs py-2.5 px-4 rounded-lg shadow-lg border border-gray-800 transition-all backdrop-blur-sm"
      >
        <FaExternalLinkAlt className="text-[10px]" />
        Open in Google Maps
      </a>

      <GoogleMapReact
        mapContainerClassName="w-full h-full"
        center={center}
        zoom={12}
        options={mapOptions}
      >
        <Marker
          position={center}
          onClick={() => setShowInfoWindow(true)}
        >
          {showInfoWindow && (
            <InfoWindow onCloseClick={() => setShowInfoWindow(false)}>
              <div className="p-2 text-gray-900 max-w-[200px]">
                <h4 className="font-bold text-sm mb-0.5">Abu Usman Movers</h4>
                <p className="text-xs text-gray-500 mb-1">Heavy Transport</p>
                <p className="text-xs text-gray-700">Saudi Arabia</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMapReact>
    </div>
  ) : (
    <div className="w-full h-[300px] md:h-[400px] bg-gray-900 rounded-[20px] shadow-2xl flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default React.memo(GoogleMapComponent);
