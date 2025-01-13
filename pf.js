import { autocomplete } from '@algolia/autocomplete-js';
import {
  meilisearchAutocompleteClient,
  getMeilisearchResults,
} from '@meilisearch/autocomplete-client';
import '@algolia/autocomplete-theme-classic';

const searchClient = meilisearchAutocompleteClient({
  url: 'https://edge.meilisearch.com',
  apiKey: '85a8215bb2f86b7ce57dc674cc918431e24479ec9c7383f40c029705181f17eb'
})

autocomplete({
  container: "#autocomplete",
  openOnFocus: false,
  detachedMediaQuery: 'none',
  getSources({ query }) {
    return [
      {
        sourceId: 'programs',
        getItems() {
          return getMeilisearchResults({
            searchClient,
            queries: [
              {
                indexName: 'programs',
                query
              },
            ],
          })
        },
        templates: {
          item({ item, components, html }) {
            let hit = item;
            let programID = hit.programID;
            let title = hit.title;
            let image = hit.image;
            let level = hit.level;
                level = level.charAt(0).toUpperCase() + level.slice(1);
            let format = ( hit.format.length == 1 ) ? hit.format[0].toLowerCase() : "hybrid";
            let interests = hit.interest;
            switch ( format ) {
              case "in-person":
                var icon = "building";
                var iconClass = "on-campus";
                break;
              case "online":
                var icon = "computer";
                var iconClass = "remote";
                break;
              default:
                var icon = "hybrid";
                var iconClass = "hybrid";
            }
            let type = ( hit.degree.length > 0 ? hit.degree : hit.type );
                type = type.join(", ");
                type = type.replace("Certificate", `${level} Certificate`);
            let url = "https://programs.umkc.edu"+hit.url;
                url = url+"?queryparams";

            return html`<div class="result result--ac" id="${programID}">
              <a href="${url}">
                <svg class="icon icon--${format}"><use href="#${icon}"></use></svg>
                <div class="result__content">
                  <p class="result__type">${type}</p>
                  <h3 class="result__title">${title}</h3>
                </div>
              </a>
            </div>`;
          },
        },
      },
    ]
  },
});
