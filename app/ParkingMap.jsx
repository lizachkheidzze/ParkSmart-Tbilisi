'use client';

import { useEffect, useRef } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';

const parkingZones = [
  {
    name: 'A Zone - Rustaveli',
    type: 'City Hall Zone',
    free: 14,
    price: '₾1/hr',
    lng: 44.7981,
    lat: 41.7009,
    address: 'Rustaveli Avenue, Tbilisi'
  },
  {
    name: 'B Zone - Saburtalo',
    type: 'City Hall Zone',
    free: 4,
    price: '₾2/hr',
    lng: 44.7683,
    lat: 41.7246,
    address: 'Saburtalo, Tbilisi'
  },
  {
    name: 'East Point Mall Parking',
    type: 'Private Parking',
    free: 72,
    price: 'Free',
    lng: 44.8952,
    lat: 41.6937,
    address: 'East Point, Tbilisi'
  }
];

export default function ParkingMap() {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return;

    maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_KEY;

    mapRef.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS.DARK,
      center: [44.7833, 41.7151],
      zoom: 11.5
    });

    mapRef.current.addControl(new maptilersdk.NavigationControl(), 'top-right');
    mapRef.current.addControl(new maptilersdk.GeolocateControl());

    parkingZones.forEach((zone) => {
      const marker = document.createElement('div');
      marker.className = zone.free <= 5 ? 'realMapMarker red' : 'realMapMarker green';
      marker.innerHTML = `<span>${zone.free}</span>`;

      const navUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(zone.address)}`;

      new maptilersdk.Marker({ element: marker })
        .setLngLat([zone.lng, zone.lat])
        .setPopup(
          new maptilersdk.Popup({ offset: 25 }).setHTML(`
            <div style="font-family: Arial; color: #111827;">
              <h3>${zone.name}</h3>
              <p>${zone.type}</p>
              <p><strong>Free spaces:</strong> ${zone.free}</p>
              <p><strong>Price:</strong> ${zone.price}</p>
              <p style="font-size:12px;color:#92400e;">
                City Hall availability is estimated and may not be fully accurate.
              </p>
              <a href="${navUrl}" target="_blank"
                style="display:inline-block;background:#09090b;color:white;padding:10px 14px;border-radius:10px;text-decoration:none;font-weight:bold;">
                Navigate
              </a>
            </div>
          `)
        )
        .addTo(mapRef.current);
    });
  }, []);

  return <div ref={mapContainer} className="realMap" />;
}
