require("channels")
import "bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { initLostMapbox } from '../plugins/init_mapbox';
import { initFoundMapbox } from '../plugins/init_mapbox';
import { hiddenInboxBoolean } from '../components/inboxButton.js';
import { clickRadioButtons } from '../components/radioButtons.js';
import { initAutocomplete } from '../plugins/init_autocomplete.js';
import { modalButtons } from '../components/inboxModal.js';
import { algoliaSearch } from '../plugins/algoliasearch.js';

console.log("Hello world from Webpacker");
console.log("app/javascript/packs/applications.js running");

initAutocomplete();
hiddenInboxBoolean();
modalButtons();
clickRadioButtons();
algoliaSearch();
initLostMapbox();
initFoundMapbox();
