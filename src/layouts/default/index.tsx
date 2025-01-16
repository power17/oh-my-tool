import { Layout } from 'antd';
import { type CSSProperties, Suspense } from 'react';
import Header from './header';
import Main from './main';
import Nav from './nav';
import { NAV_WIDTH } from '../config';
function DefaultLayouts() {
  const secondLayoutStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    paddingLeft: 0,
  };
  return (
    <Layout
      style={{ paddingLeft: NAV_WIDTH }}
      className="flex h-screen overflow-hidden flex-col"
    >
      <Suspense fallback="加载中">
        <Layout style={secondLayoutStyle}>
          <Header />
          <Nav />
          <Main />
        </Layout>
      </Suspense>
    </Layout>
  );
}
export default DefaultLayouts;
