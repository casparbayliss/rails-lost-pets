import places from 'places.js';

console.log("app/javascript/plugins/init_autocomplete.js running");

const addressInput = document.getElementById('pet_location');

if (addressInput) {
  console.log("Address input found");
}

const initAutocomplete = () => {
  console.log("Autocomplete function is running");
  if (addressInput) {
    places({ container: addressInput });
  }
};

export { initAutocomplete };
