import algoliasearch from "algoliasearch";

const algoliaSearch = () => {
  const inputField = document.querySelector("#search");
  const inputDiv = document.querySelector("#user-messages-search");

  if (inputField) {
    const appId = document.querySelector("meta[name='algolia-app-id']").content;
    const searchOnlyApiKey = document.querySelector("meta[name='algolia-search-only-api-key']").content;
  
    const client = algoliasearch(appId, searchOnlyApiKey);
    const index = client.initIndex('User');
    
    inputField.addEventListener("input", () => {

      index.search(inputField.value).then((content) => {
        console.log(content.hits)
        var autoCompleteSuggestions = document.getElementsByClassName("autocomplete-suggestion");
        console.log(autoCompleteSuggestions);
        
        if (autoCompleteSuggestions.length != 0) {
          var z = 0;
          while (z < autoCompleteSuggestions.length) {
            autoCompleteSuggestions[z].remove();
            z++;
          }
        };
        

        // handle results however you like...
        if (content.hits.length != 0) {
          console.log(content.hits[0].first_name);
          var autoCompleteLimit = 5;
          var x = 0;
          while (x < content.hits.length && x < autoCompleteLimit ) {
            inputField.insertAdjacentHTML("afterend", 
            `<div class="autocomplete-suggestion"><a href="http://localhost:3000/users/${content.hits[x].first_name.toLowerCase()}-${content.hits[x].last_name.toLowerCase()}">${content.hits[x].first_name}</a></div>`);
            x++;
          }
        };
      });
    });
  }
}

export { algoliaSearch };