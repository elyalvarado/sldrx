let poly = require("preact-cli/lib/lib/webpack/polyfills");

import { h } from "preact";
import habitat from "preact-habitat";

import SlideReactions from "./components/SlideReactions";

let _habitat = habitat(SlideReactions);

_habitat.render({
  selector: '[data-widget-sldrx]',
  clean: true
});
