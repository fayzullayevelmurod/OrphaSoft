import React from "react";
const Article = React.lazy(() => import("../pages/Article"));
const Home = React.lazy(() => import("../pages/Home"));
const Treatment = React.lazy(() => import("../pages/Treatment"));
const Clinics = React.lazy(() => import("../pages/Clinics"));
const ContactInformation = React.lazy(() =>
  import("../pages/ContactInformation")
);
const Doctors = React.lazy(() => import("../pages/Doctors"));
const Profile = React.lazy(() => import("../pages/Profile"));
const CreatingArticle = React.lazy(() => import("../pages/CreatingArticle"));
const CreationNews = React.lazy(() => import("../pages/CreationNews"));
const ArticlesOnApproval = React.lazy(() =>
  import("../pages/ArticlesOnApproval")
);
const Forums = React.lazy(() => import("../pages/Forums"));
const ForumsTwo = React.lazy(() => import("../pages/ForumsTwo"));
const ArticleApproval = React.lazy(() => import("../pages/ArticleApproval"));
const ProfileSettings = React.lazy(() => import("../pages/ProfileSettings"));
const UserManagement = React.lazy(() => import("../pages/UserManagement"));
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
  {
    path: "/doctors",
    component: Doctors,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/creating-article",
    component: CreatingArticle,
  },
  {
    path: "/creation-news",
    component: CreationNews,
  },
  {
    path: "/forums",
    component: Forums,
  },
  {
    path: "/forums-two",
    component: ForumsTwo,
  },
  {
    path: "/articles-on-approval",
    component: ArticlesOnApproval,
  },
  {
    path: "/article-approval",
    component: ArticleApproval,
  },
  {
    path: "/profile-settings",
    component: ProfileSettings,
  },
  {
    path: "/user-management",
    component: UserManagement,
  },
];

const routes = [...coreRoutes];
export default routes;
