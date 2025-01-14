import { Layout } from "antd";
import {type CSSProperties, Suspense } from "react";
import Header from "./header";
import Main from "./main";
import Nav from "./nav";
function DefaultLayouts() {

	const secondLayoutStyle: CSSProperties = {
		display: "flex",
		flexDirection: "column",
		transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
		paddingLeft: 0,
	};
    return (
		<Layout className="flex h-screen overflow-hidden flex-col">
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