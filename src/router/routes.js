const routes = [
  {
    path: "/login",
    component: () => import("pages/LoginPage.vue"),
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/DashboardPage.vue") },
    ],
  },
  {
    path: "/reports",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ReportPage.vue") }],
  },
  {
    path: "/customer",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/CustomerPage.vue") }],
  },
  {
    path: "/travel",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/TravelPage.vue") }],
  },
  {
    path: "/timesheet",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/TimesheetPage.vue") },
    ],
  },
  {
    path: "/users",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/UserPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
