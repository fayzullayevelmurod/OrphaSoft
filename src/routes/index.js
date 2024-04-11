import React from "react";
const Article = React.lazy(() => import("../pages/Article"));
const Home = React.lazy(() => import("../pages/Home"));
const Treatment = React.lazy(() => import("../pages/Treatment"));
const Clinics = React.lazy(() => import("../pages/Clinics"));
const ContactInformation = React.lazy(() =>
  import("../pages/ContactInformation")
);

//
const coreRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/article",
    component: Article,
  },
  {
    path: "/treatment",
    component: Treatment,
  },
  {
    path: "/clinics",
    component: Clinics,
  },
  {
    path: "/contact-information",
    component: ContactInformation,
  },
];

const routes = [...coreRoutes];
export default routes;
