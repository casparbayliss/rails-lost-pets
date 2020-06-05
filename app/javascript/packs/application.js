
require("channels")
import "bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { initLostMapbox } from '../plugins/init_mapbox';
import { initFoundMapbox } from '../plugins/init_mapbox';
import { clickInboxCross } from '../components/inboxButton.js';
import { clickInboxTitle } from '../components/inboxButton.js';
import { hiddenInboxBoolean } from '../components/inboxButton.js';
import { removeGoogle } from '../components/inboxButton.js';
import { clickRadioButtons } from '../components/radioButtons.js';
import { initAutocomplete } from '../plugins/init_autocomplete.js';




console.log("Hello world from Webpacker");
console.log("app/javascript/packs/applications.js running");

// hiddenInboxBoolean();
clickRadioButtons();
initLostMapbox();
initFoundMapbox();
initAutocomplete();