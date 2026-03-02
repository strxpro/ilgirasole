"use client";

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

// Definizione dell'icona personalizzata per risolvere il problema delle icone mancanti in Next.js
const customIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

interface MapProps {
    center: [number, number];
    zoom: number;
    destinationUrl: string;
}

/**
 * Eventi della mappa per gestire il click e l'apertura di Google Maps
 */
function MapEvents({ destinationUrl }: { destinationUrl: string }) {
    useMapEvents({
        click: () => {
            window.open(destinationUrl, "_blank");
        },
    });
    return null;
}

export default function Map({ center, zoom, destinationUrl }: MapProps) {
    return (
        <div className="w-full h-full relative group">
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={true}
                className="w-full h-[450px] z-0"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                    position={center}
                    icon={customIcon}
                    eventHandlers={{
                        click: (e) => {
                            // Impedisce al click del marker di propagarsi al click della mappa se necessario
                            // In questo caso entrambi portano alla stessa destinazione
                            window.open(destinationUrl, "_blank");
                        },
                    }}
                >
                    <Popup>
                        <div className="text-center font-sans">
                            <p className="font-bold text-brown-deep">Il Girasole</p>
                            <p className="text-xs text-brown-medium">Via Italia, 7</p>
                        </div>
                    </Popup>
                </Marker>
                <MapEvents destinationUrl={destinationUrl} />
            </MapContainer>

            {/* Overlay informativo opzionale al passaggio (facoltativo se scroll è attivo) */}
        </div>
    );
}
