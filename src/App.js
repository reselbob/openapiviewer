import logo from './logo.svg';

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

function App() {
  return (
    <div className="App">
      <SwaggerUI url={process.env.REACT_APP_SOURCE_URL || "https://petstore.swagger.io/v2/swagger.json"} />
    </div>
  );
}

export default App;
