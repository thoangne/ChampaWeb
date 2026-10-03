import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Station {
  id: number;
  name: string;
  lat: number;
  lng: number;
  district: string;
  desc: string;
}

const STATIONS: Station[] = [
  {
    id: 1,
    name: "Tháp Po Klong Garai",
    lat: 11.5833,
    lng: 108.9667,
    district: "Đô Vinh",
    desc: "Cụm tháp Kalan gạch nung sừng sững trên Đồi Trầu.",
  },
  {
    id: 2,
    name: "Làng Gốm Bàu Trúc",
    lat: 11.5333,
    lng: 108.9167,
    district: "Phước Dân",
    desc: "Nơi đất sét kết hợp cát mịn, nung lộ thiên không men.",
  },
  {
    id: 3,
    name: "Làng Dệt Mỹ Nghiệp",
    lat: 11.5167,
    lng: 108.9333,
    district: "Ninh Phước",
    desc: "Gìn giữ kỹ nghệ dệt thủ công hoa văn kỷ hà.",
  },
  {
    id: 4,
    name: "Tháp Thiêng Po Rome",
    lat: 11.4667,
    lng: 108.9833,
    district: "Hậu Sanh",
    desc: "Tháp cuối cùng của vương triều Champa độc lập.",
  },
  {
    id: 5,
    name: "Bảo tàng Văn hóa Chăm",
    lat: 11.5667,
    lng: 108.9833,
    district: "Phan Rang",
    desc: "Trưng bày hơn 1.000 hiện vật khảo cổ học quý giá.",
  },
];

function MapFlyTo({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 13, { duration: 1.5 });
  }, [center, map]);
  return null;
}

interface HeritageMapProps {
  activeStation: number;
  onSelectStation: (id: number) => void;
}

export default function HeritageMap({
  activeStation,
  onSelectStation,
}: HeritageMapProps) {
  const currentStation =
    STATIONS.find((s) => s.id === activeStation) || STATIONS[0];
  const centerPosition: [number, number] = [
    currentStation.lat,
    currentStation.lng,
  ];

  return (
    <div className="relative w-full h-[450px] lg:h-[580px] rounded-xl overflow-hidden shadow-xl z-10">
      <MapContainer
        center={centerPosition}
        zoom={12}
        scrollWheelZoom={false}
        className="w-full h-full z-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapFlyTo center={centerPosition} />

        {STATIONS.map((station) => (
          <Marker
            key={station.id}
            position={[station.lat, station.lng]}
            eventHandlers={{
              click: () => onSelectStation(station.id),
            }}
          >
            <Popup>
              <div className="p-1">
                <span className="text-[10px] uppercase font-bold text-primary">
                  Trạm 0{station.id} • {station.district}
                </span>
                <h5 className="font-bold text-sm">{station.name}</h5>
                <p className="text-xs text-gray-600 mt-1">{station.desc}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
