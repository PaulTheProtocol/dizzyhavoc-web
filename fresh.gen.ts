// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $about from "./routes/about.tsx";
import * as $index from "./routes/index.tsx";
import * as $roadmap from "./routes/roadmap.tsx";
import * as $stats from "./routes/stats.tsx";
import * as $bridge_Web3Input from "./islands/bridge/Web3Input.tsx";
import * as $common_Button from "./islands/common/Button.tsx";
import * as $common_menuButton from "./islands/common/menuButton.tsx";
import * as $common_navbar from "./islands/common/navbar.tsx";
import * as $stats_MarketBar from "./islands/stats/MarketBar.tsx";
import * as $stats_MarketData from "./islands/stats/MarketData.tsx";
import * as $stats_tokendata from "./islands/stats/tokendata.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/about.tsx": $about,
    "./routes/index.tsx": $index,
    "./routes/roadmap.tsx": $roadmap,
    "./routes/stats.tsx": $stats,
  },
  islands: {
    "./islands/bridge/Web3Input.tsx": $bridge_Web3Input,
    "./islands/common/Button.tsx": $common_Button,
    "./islands/common/menuButton.tsx": $common_menuButton,
    "./islands/common/navbar.tsx": $common_navbar,
    "./islands/stats/MarketBar.tsx": $stats_MarketBar,
    "./islands/stats/MarketData.tsx": $stats_MarketData,
    "./islands/stats/tokendata.tsx": $stats_tokendata,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
