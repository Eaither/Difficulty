import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, ConfigProvider } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { history } from 'umi';
import zhCN from 'antd/lib/locale/zh_CN';
import styles from './index.less';

const { Header, Sider, Content } = Layout;

const LayoutConent: React.FC = (props) => {
  console.log(props.children)
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggle = () => setCollapsed(!collapsed);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />} onClick={() => {
            history.push('/CategoryManagement')
          }}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className={styles.siteLayout}>
        <Header className={styles.siteLayoutBackground} style={{ padding: 0 }}>
          <div className={styles.trigger} onClick={toggle}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        </Header>
        <Content
          className={styles.siteLayoutBackground}
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default () => (
  <ConfigProvider locale={zhCN}>
    <LayoutConent />
  </ConfigProvider>
)

