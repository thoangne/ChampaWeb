import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Sửa lỗi hiển thị icon ghim mặc định của Leaflet trong React/Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

export default function MapView() {
  // Tọa độ mặc định (Ví dụ: TP. Hồ Chí Minh)
  const position = [10.8231, 106.6297];

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        {/* Nguồn bản đồ mở miễn phí từ OpenStreetMap */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Ghim vị trí */}
        <Marker position={position}>
          <Popup>
            Vị trí của bạn đang ở đây! <br /> TP. Hồ Chí Minh.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}