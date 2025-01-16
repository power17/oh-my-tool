
const PermissionType = {
    CATALOGUE: 0,
    MENU: 1,
    BUTTON: 2,
}
const BasicStatus = {
    DISABLE: 0,
    ENABLE: 1,
}

const DASHBOARD_PERMISSION = {
    id: "9100714781927703",
    parentId: "",
    label: "sys.menu.dashboard",
    name: "Dashboard",
    icon: "ic-analysis",
    type: PermissionType.CATALOGUE,
    route: "dashboard",
    order: 1,
    children: [
        {
            id: "8426999229400979",
            parentId: "9100714781927703",
            label: "sys.menu.workbench",
            name: "Workbench",
            type: PermissionType.MENU,
            route: "workbench",
            component: "/dashboard/workbench/index.tsx",
        },
        {
            id: "9710971640510357",
            parentId: "9100714781927703",
            label: "sys.menu.analysis",
            name: "Analysis",
            type: PermissionType.MENU,
            route: "analysis",
            component: "/dashboard/analysis/index.tsx",
        },
    ],
};
const MANAGEMENT_PERMISSION = {
    id: "0901673425580518",
    parentId: "",
    label: "sys.menu.management",
    name: "Management",
    icon: "ic-management",
    type: PermissionType.CATALOGUE,
    route: "management",
    order: 2,
    children: [
        {
            id: "2781684678535711",
            parentId: "0901673425580518",
            label: "sys.menu.user.index",
            name: "User",
            type: PermissionType.CATALOGUE,
            route: "user",
            children: [
                {
                    id: "4754063958766648",
                    parentId: "2781684678535711",
                    label: "sys.menu.user.profile",
                    name: "Profile",
                    type: PermissionType.MENU,
                    route: "profile",
                    component: "/management/user/profile/index.tsx",
                },
                {
                    id: "2516598794787938",
                    parentId: "2781684678535711",
                    label: "sys.menu.user.account",
                    name: "Account",
                    type: PermissionType.MENU,
                    route: "account",
                    component: "/management/user/account/index.tsx",
                },
            ],
        },
        {
            id: "0249937641030250",
            parentId: "0901673425580518",
            label: "sys.menu.system.index",
            name: "System",
            type: PermissionType.CATALOGUE,
            route: "system",
            children: [
                {
                    id: "1985890042972842",
                    parentId: "0249937641030250",
                    label: "sys.menu.system.organization",
                    name: "Organization",
                    type: PermissionType.MENU,
                    route: "organization",
                    component: "/management/system/organization/index.tsx",
                },
                {
                    id: "4359580910369984",
                    parentId: "0249937641030250",
                    label: "sys.menu.system.permission",
                    name: "Permission",
                    type: PermissionType.MENU,
                    route: "permission",
                    component: "/management/system/permission/index.tsx",
                },
                {
                    id: "1689241785490759",
                    parentId: "0249937641030250",
                    label: "sys.menu.system.role",
                    name: "Role",
                    type: PermissionType.MENU,
                    route: "role",
                    component: "/management/system/role/index.tsx",
                },
                {
                    id: "0157880245365433",
                    parentId: "0249937641030250",
                    label: "sys.menu.system.user",
                    name: "User",
                    type: PermissionType.MENU,
                    route: "user",
                    component: "/management/system/user/index.tsx",
                },
                {
                    id: "0157880245365434",
                    parentId: "0249937641030250",
                    label: "sys.menu.system.user_detail",
                    name: "User Detail",
                    type: PermissionType.MENU,
                    route: "user/:id",
                    component: "/management/system/user/detail.tsx",
                    hide: true,
                },
            ],
        },
    ],
};
export const PERMISSION_LIST = [
    DASHBOARD_PERMISSION,
    MANAGEMENT_PERMISSION,
];

const ADMIN_ROLE = {
    id: "4281707933534332",
    name: "Admin",
    label: "admin",
    status: BasicStatus.ENABLE,
    order: 1,
    desc: "Super Admin",
    permission: PERMISSION_LIST,
};
export const DEFAULT_USER = {
    id: "b34719e1-ce46-457e-9575-99505ecee828",
    username: "admin",
    avatar: "https://avatars.githubusercontent.com/u/71657562",
    email: "Izabella.Medhurst36@hotmail.com",
    createdAt: "2025-05-26T20:24:04.395Z",
    updatedAt: "2025-05-26T20:24:04.395Z",
    password: "demo1234",
    role: ADMIN_ROLE,
    permissions: ADMIN_ROLE.permission,
};

export const USER_LIST = [DEFAULT_USER];