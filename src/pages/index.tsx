import { ConfigProvider, Layout, Typography, theme } from "antd";
import React, { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

export const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <ConfigProvider
    theme={{
      algorithm: theme.defaultAlgorithm,
    }}
  >
    <Layout className={styles.container}>
      <Layout.Header>
        <Typography.Text className={styles.headerTitle}>
          Route-Map
        </Typography.Text>
      </Layout.Header>

      <Layout.Content>{children}</Layout.Content>
    </Layout>
  </ConfigProvider>
);
