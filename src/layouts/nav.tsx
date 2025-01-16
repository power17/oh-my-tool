import { NavLink, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { NAV_WIDTH } from './config';
import { Icon } from '@iconify/react';
import type { MenuProps } from 'antd';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const { Sider } = Layout;
function Nav() {
  const navigate = useNavigate();

  const menuList: MenuItem[] = [
    {
      key: '/',
      label: '首页',
      icon: <MailOutlined />,
      children: [
        { key: '/home', label: '工作台' },
        { key: '/home/analysis', label: '分析' },
      ],
    },
    {
      key: '/management',
      label: '管理',
      icon: <AppstoreOutlined />,
      children: [
        { key: '/management/user', label: '用户' },
        { key: '/management/system', label: '系统' },
      ],
    },
  ];

  const menuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
  };
  return (
    <Sider
      theme="light"
      trigger={null}
      width={NAV_WIDTH}
      className="!fixed left-0 top-0 h-screen border-r border-dashed border-border"
    >
      <div className="flex h-full flex-col">
        <div className="flex justify-center items-center">
          <NavLink to="/">
            <Icon
              className="text-primary"
              icon="solar:basketball-bold"
              fontSize="50"
            />
          </NavLink>
          <span className="ml-2 text-xl font-bold text-primary">
            Power Admin
          </span>
        </div>

        <Menu
          mode="inline"
          items={menuList}
          className="!border-none"
          onClick={menuClick}
        />
      </div>
    </Sider>
  );
}

export default Nav;
