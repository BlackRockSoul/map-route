import "leaflet/dist/leaflet.css";
import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { PolylineStore } from "../../redux/polyline";
import { RouteStore } from "../../redux/routes";
import { MapAutoCenter } from "./AutoCenter";
import { MapRoute } from "./Route";
import styles from "./styles.module.scss";

export const Map: React.FC = () => {
  const dispatch = useAppDispatch();

  const selectedRoute = useAppSelector(RouteStore.Select.selectedRoute);
  const polyline = useAppSelector(PolylineStore.Select.data);

  useEffect(() => {
    dispatch(PolylineStore.Actions.getPolyline(selectedRoute?.path ?? null));
  }, [dispatch, selectedRoute]);

  return (
    <MapContainer
      className={styles.map}
      center={[59.9386, 30.3141]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapAutoCenter path={selectedRoute?.path ?? null} />

      <MapRoute path={selectedRoute?.path} polyline={polyline} />
    </MapContainer>
  );
};
