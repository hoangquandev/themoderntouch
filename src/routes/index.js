import AboutUs from "../pages/AboutUs/AboutUs";
import Careers from "../pages/Careers/Careers";
import Contact from "../pages/Contact/Contact";
import HomePage from "../pages/HomePage/HomePage";
import News from "../pages/News/News";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Projects from "../pages/Projects/Projects";
import Services from "../pages/Services/Services";

export const routes = [
  {
    path: "/",
    page: HomePage,
  },
  {
    path: "/about",
    page: AboutUs,
  },
  {
    path: "/services",
    page: Services,
  },
  {
    path: "/careers",
    page: Careers,
  },
  {
    path: "/contact",
    page: Contact,
  },
  {
    path: "/news",
    page: News,
  },
  {
    path: "/projects",
    page: Projects,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
