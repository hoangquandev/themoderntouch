import AboutUs from "../pages/AboutUs/AboutUs";
import Careers from "../pages/Careers/Careers";
import Contact from "../pages/Contact/Contact";
import HomePage from "../pages/HomePage/HomePage";
import News from "../pages/News/News";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import DetailProject from "../pages/Projects/DetailProject";
import Projects from "../pages/Projects/Projects";
import Services from "../pages/Services/Services";

export const routes = [
  {
    path: "",
    page: HomePage,
  },
  {
    path: "about",
    page: AboutUs,
  },
  {
    path: "services",
    page: Services,
  },
  {
    path: "careers",
    page: Careers,
  },
  {
    path: "contact",
    page: Contact,
  },
  {
    path: "news",
    page: News,
  },
  {
    path: "projects",
    page: Projects,
  },
  {
    path: "projects/1",
    page: DetailProject,
    index: 0
  },
  {
    path: "projects/2",
    page: DetailProject,
    index: 1
  },
  {
    path: "projects/3",
    page: DetailProject,
    index: 2
  },
  {
    path: "projects/4",
    page: DetailProject,
    index: 3
  },
  {
    path: "projects/5",
    page: DetailProject,
    index: 4
  },
  {
    path: "projects/6",
    page: DetailProject,
    index: 5
  },
  {
    path: "projects/7",
    page: DetailProject,
    index: 6
  },
  {
    path: "projects/8",
    page: DetailProject,
    index: 7
  },
  {
    path: "projects/9",
    page: DetailProject,
    index: 8
  },

  {
    path: "*",
    page: NotFoundPage,
  },
];
