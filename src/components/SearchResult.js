import { API_URL } from "../apis";
import filterList from "../tools/filterList";
import sortList from "../tools/sortList";
import mapToContainer from "../tools/mapToContainer";
import clearContainer from "../tools/clearContainer";
import loadingScreen from "../tools/loadingScreen";

const SearchResult = container => {
  loadingScreen(container);
  fetch(API_URL)
    .then(response => {
      clearContainer(container);
      return response.json();
    })
    .then(json => json.data)
    .then(({ products }) => {
      mapToContainer(container, sortList(filterList(products, "Fixed")));
 
    });
};

export default SearchResult;
