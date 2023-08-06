import { Tooltip, Typography } from "antd";
import React from "react";
import { IApiRoute } from "../../types/api/route";
import styles from "./styles.module.scss";

interface IRouteListItemProps {
  item: IApiRoute;
}

export const RouteMenuItem: React.FC<IRouteListItemProps> = (props) => {
  const { item } = props;

  return (
    <Tooltip
      overlay={
        <div className={styles.container}>
          {item.path.map((c) => (
            <Typography.Text key={c.join("-")} className={styles.text}>
              {c.join(", ")}
            </Typography.Text>
          ))}
        </div>
      }
      placement={"right"}
    >
      <div>
        <Typography.Text>{item.name}</Typography.Text>
      </div>
    </Tooltip>
  );
};
