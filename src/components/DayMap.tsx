"use client";

import { useEffect, useRef } from "react";
import type { ScheduleItem } from "./DaySchedule";

export function DayMap({ items }: { items: ScheduleItem[] }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  const locations = items.filter((item) => item.location);

  useEffect(() => {
    if (!mapRef.current || locations.length === 0) return;

    let map = mapInstanceRef.current;

    const init = async () => {
      const L = (await import("leaflet")).default;

      // Leaflet CSS
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      // Clean up previous map
      if (map) {
        map.remove();
        mapInstanceRef.current = null;
      }

      map = L.map(mapRef.current!, {
        zoomControl: true,
        scrollWheelZoom: false,
      });
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 18,
      }).addTo(map);

      const coords = locations.map(
        (item) => [item.location!.lat, item.location!.lng] as [number, number]
      );

      // Add numbered markers
      locations.forEach((item, i) => {
        const icon = L.divIcon({
          className: "day-map-marker",
          html: `<div style="
            width:28px;height:28px;border-radius:50%;
            background:#e8597a;color:#fff;
            display:flex;align-items:center;justify-content:center;
            font-size:13px;font-weight:700;
            border:2px solid #fff;
            box-shadow:0 2px 6px rgba(0,0,0,0.3);
          ">${i + 1}</div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        });

        L.marker([item.location!.lat, item.location!.lng], { icon })
          .addTo(map!)
          .bindPopup(
            `<div style="font-size:13px;line-height:1.4;min-width:120px">
              <strong>${item.emoji} ${item.text}</strong>
              ${item.time ? `<br><span style="color:#888">${item.time}</span>` : ""}
              ${item.cost ? `<br><span style="color:#b45309">${item.cost}</span>` : ""}
            </div>`,
            { closeButton: false }
          );
      });

      // Draw route line
      if (coords.length > 1) {
        L.polyline(coords, {
          color: "#e8597a",
          weight: 3,
          opacity: 0.6,
          dashArray: "8,8",
        }).addTo(map);
      }

      // Fit bounds
      const bounds = L.latLngBounds(coords);
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
    };

    init();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (locations.length === 0) return null;

  return (
    <div className="mt-3 rounded-xl overflow-hidden border border-foreground/[0.08]">
      {/* Legend */}
      <div className="px-3 py-2 bg-foreground/[0.02] border-b border-foreground/[0.06] flex flex-wrap gap-x-3 gap-y-1">
        {locations.map((item, i) => (
          <span key={i} className="text-[11px] text-foreground/60 whitespace-nowrap">
            <span
              className="inline-flex items-center justify-center w-4 h-4 rounded-full text-white text-[9px] font-bold mr-0.5"
              style={{ background: "#e8597a" }}
            >
              {i + 1}
            </span>{" "}
            {item.text.length > 15 ? item.text.slice(0, 15) + "…" : item.text}
          </span>
        ))}
      </div>
      {/* Map */}
      <div ref={mapRef} style={{ height: 280 }} />
    </div>
  );
}
