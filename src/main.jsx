import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/* import StarRating from "./StarComponent/StarRating.jsx";
 */
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

    {/*   <StarRating maxRating={5} />
    <StarRating maxRating={5} color="green" size={50} />
    <StarRating maxRating={5} color="green" size={50} className="test" ratingLabel={['Bad', 'Okay', 'Good', 'Amazing']} defaultRating = {3}/> */}
  </StrictMode>,
);
