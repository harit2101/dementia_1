import "./ExploreContainer.css";
import HomePage from "../pages/home-page/HomePage";
import Map from "../pages/google-map/GoogleMap";
import NavigationButton from "../pages/google-map/NavigationButton";
import SearchLocation from "../pages/google-map/SearchLocation";
import SavedLocations from '../pages/google-map/SavedLocation';
const ExploreContainer = ({ name }) => {
  const renderPage1 = () => {
    if (name === "home") {
      return <HomePage />;
    } else if (name === "camera") {
      return <Map />;
    } else if (name === "sos") {
      return <NavigationButton />;
    } else if (name === "Outbox") {
      return <SearchLocation />;
    } else if (name === "Archived") {
      return <SavedLocations />;
    } else {
      return (
        <div id="container">
          <strong>{name}</strong>
          <p>
            Explore{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ionicframework.com/docs/components"
            >
              UI Components
            </a>
          </p>
        </div>
      );
    }
  };

  return <>{renderPage1()}</>;
};

export default ExploreContainer;
