import { Layout, Menu, MenuProps, Result, Skeleton } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import React, { useCallback, useEffect, useMemo } from "react";
import { Map } from "../../components/Map";
import { RouteMenuItem } from "../../components/RouteMenuItem";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RouteStore } from "../../redux/routes";
import styles from "./styles.module.scss";

export const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector(RouteStore.Select.data);
  const isLoading = useAppSelector(RouteStore.Select.isLoading);
  const isError = useAppSelector(RouteStore.Select.isError);
  const selectedRouteId = useAppSelector(RouteStore.Select.selectedRouteId);

  const routeList = useMemo<MenuItemType[]>(
    () =>
      data.map((item) => ({
        key: item.id,
        label: <RouteMenuItem item={item} />,
      })),
    [data]
  );

  const onItemSelect = useCallback<NonNullable<MenuProps["onClick"]>>(
    (item) => dispatch(RouteStore.Actions.selectRoute(+item.key)),
    [dispatch]
  );

  useEffect(() => {
    dispatch(RouteStore.Actions.getRouteList());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {isError ? (
        <Result status={"error"}>Failed to fetch routes</Result>
      ) : (
        <Skeleton className={styles.skeleton} loading={isLoading}>
          <Menu
            items={routeList}
            onClick={onItemSelect}
            selectedKeys={selectedRouteId ? [selectedRouteId.toString()] : []}
          />
        </Skeleton>
      )}

      <Layout.Content>
        <Map />
      </Layout.Content>
    </div>
  );
};
