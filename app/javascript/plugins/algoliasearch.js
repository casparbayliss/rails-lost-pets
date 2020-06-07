// Replace with your own values
const searchClient = algoliasearch(
    '0JH6T1U17P',
    '4ed574f6c514e497d5485dd661a47c72' // search only API key, not admin API key
  );
  
  const search = instantsearch({
    indexName: 'users',
    searchClient,
    routing: true,
  });
  
  search.addWidgets([
    instantsearch.widgets.configure({
      hitsPerPage: 5,
    })
  ]);
  
  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: '#search-box',
      placeholder: 'Search for contacts',
    })
  ]);
  
  search.addWidgets([
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item: document.getElementById('hit-template').innerHTML,
        empty: `We didn't find any results for the search <em>"{{query}}"</em>`,
      },
    })
  ]);
  
  search.start();
  