"use client";

import { useEffect, useRef } from "react";

const LAT = 28.2565515;
const LNG = -81.4673419;
const ZOOM = 16;

export default function LocationMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => {
      const L = (window as unknown as Record<string, unknown>).L as {
        map: (el: HTMLElement, opts: Record<string, unknown>) => {
          setView: (latlng: [number, number], zoom: number) => unknown;
          invalidateSize: () => void;
        };
        tileLayer: (url: string, opts: Record<string, unknown>) => { addTo: (map: unknown) => void };
        divIcon: (opts: Record<string, unknown>) => unknown;
        marker: (latlng: [number, number], opts: Record<string, unknown>) => { addTo: (map: unknown) => void };
      };

      const map = L.map(containerRef.current!, {
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        dragging: false,
        doubleClickZoom: false,
        touchZoom: false,
      }).setView([LAT, LNG], ZOOM);

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 19,
      }).addTo(map);

      const pulseIcon = L.divIcon({
        className: "",
        html: `
          <div style="position:relative;width:0;height:0;">
            <div style="position:absolute;top:-7px;left:-7px;width:14px;height:14px;border-radius:50%;background:#00bcd4;box-shadow:0 0 10px rgba(0,188,212,0.6);"></div>
            <div style="position:absolute;top:-5px;left:-5px;width:10px;height:10px;border-radius:50%;background:white;"></div>
            <div style="position:absolute;top:-3.5px;left:-3.5px;width:7px;height:7px;border-radius:50%;background:#00bcd4;"></div>
            <div class="map-ping" style="position:absolute;top:-20px;left:-20px;width:40px;height:40px;border-radius:50%;border:2px solid #00bcd4;opacity:0;"></div>
          </div>
        `,
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      });

      L.marker([LAT, LNG], { icon: pulseIcon }).addTo(map);
      mapRef.current = map;
    };
    document.head.appendChild(script);

    return () => {
      link.remove();
      script.remove();
    };
  }, []);

  return (
    <div className="relative mt-6 rounded-2xl overflow-hidden border border-border shadow-sm">
      <div ref={containerRef} className="w-full h-52 md:h-60" />
      <style>{`
        @keyframes map-ping {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .map-ping { animation: map-ping 2s ease-out infinite; }
      `}</style>
    </div>
  );
}
