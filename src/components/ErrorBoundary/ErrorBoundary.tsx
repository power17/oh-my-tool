import React from 'react';
type Props = {
	children: React.ReactNode;
};
export default function ErrorBoundary (props: Props){
  const { children } = props;
  return  <>
  <h1>出错啦</h1>
  {children}
</>
}

