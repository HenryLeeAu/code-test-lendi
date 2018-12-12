import "./style.css";
import SearchResult  from "./components/SearchResult"


// Abstract search result component, we can run different behaviour in app.js

SearchResult(document.getElementById("results"))

//if user click another button we can run another component here