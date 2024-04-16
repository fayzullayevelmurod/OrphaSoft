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
const PersonalArea = React.lazy(() => import("../pages/PersonalArea"));
const ArticleOld = React.lazy(() => import("../pages/ArticleOld"));
const Products = React.lazy(() => import("../pages/Products"));
const Favorites = React.lazy(() => import("../pages/Favorites"));
const Basket = React.lazy(() => import("../pages/Basket"));
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
  {
    path: "/personal-area",
    component: PersonalArea,
  },
  {
    path: "/article-old",
    component: ArticleOld,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/favorites",
    component: Favorites,
  },
  {
    path: "/basket",
    component: Basket,
  },
  //
];

const routes = [...coreRoutes];
export default routes;
