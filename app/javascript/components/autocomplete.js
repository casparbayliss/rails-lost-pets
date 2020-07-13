import 'js-autocomplete/auto-complete.css';
import autocomplete from 'js-autocomplete';

// const renderItem = function (user) {
//   return `<div class="autocomplete-suggestion">${user[0]} ${user[1]}</span></div>`
//   // return `<div class="autocomplete-suggestion"><%= raw (link_to "${user[0]} ${user[1]}", conversation_messages_path(conversation), remote: true) %></div>`
// };

// const autocompleteSearch = function() {
//   const users = JSON.parse(document.getElementById('search-data').dataset.users)
//   const searchInput = document.getElementById('q');

//   if (users && searchInput) {
//     new autocomplete({
//       selector: searchInput,
//       minChars: 1,
//       source: function(term, suggest){
//           term = term.toLowerCase();
//           const choices = users;
//           console.log(choices[0]);
//           const matches = [];
//           for (let i = 0; i < choices.length; i++)
//               if ((~choices[i][0].toLowerCase().indexOf(term)) || (~choices[i][1].toLowerCase().indexOf(term)) ) matches.push(choices[i]);
//           suggest(matches);
//           console.log(matches)
//       },
//       renderItem: renderItem,
//     });
//   };
// };

// const autocompleteSearch = function() {
//   var pets = new Bloodhound({
//     datumTokenizer: Bloodhound.tokenizers.whitespace,
//     queryTokenizer: Bloodhound.tokenizers.whitespace,
//     remote: {
//       url: '/pets/autocomplete?query=%QUERY',
//       wildcard: '%QUERY'
//     }
//   });
//   $('#navbar-search').typeahead(null, {
//     source: pets
//   });
// }



export { autocompleteSearch };