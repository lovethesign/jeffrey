import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.md"))
  },
  {
    title: 'Elements',
    pages: [
      {
        path: '/grid',
        title: 'Grid',
        content: pageLoader(() => import("./Elements/GRID.md"))
      },
      {
        path: '/filter-mobile',
        title: 'Filter Mobile',
        content: pageLoader(() => import("./Elements/FILTER_MOBILE.md"))
      }
    ]
  },
  {
    title: 'Components',
    pages: [
      {
        path: '/card',
        title: 'Card',
        content: pageLoader(() => import("./Components/CARD.md"))
      },
      {
        path: '/loader',
        title: 'Loader',
        content: pageLoader(() => import("./Components/LOADER.md"))
      },
      {
        path: '/icons',
        title: 'Icons',
        content: pageLoader(() => import("./Components/ICONS.md"))
      }
    ]
  },
];

const responsiveSizes = [
  {name: 'xs', width: 320, height: 568},
  {name: 'sm', width: 600, height: 568},
  {name: 'md', width: 700, height: 568},
  {name: 'lg', width: 960, height: 1080},
  {name: 'xl', width: 1200, height: 1080}
];

ReactDOM.render(
  <Catalog title="jeffrey" pages={pages} responsiveSizes={responsiveSizes} />,
  document.getElementById("jeffrey")
);
