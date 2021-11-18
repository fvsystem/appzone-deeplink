/* eslint-disable react/require-default-props */
import React from 'react';
import Helmet from 'react-helmet';

interface Props {
  item?: {
    name: string;
    image: string;
  };
}

const App: React.FC<Props> = ({ item }) => (
  <div className="App">
    {item && (
      <Helmet>
        <meta property="og:site_name" content="Appzone" />
        <meta property="og:title" content={item.name} />
        {/* <meta property="og:description" content="Programa de fiestas" /> */}
        <meta property="og:image" content={item.image} />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1440432930" />
      </Helmet>
    )}
    <header className="App-header">
      <p>This will redirect to Android page</p>
    </header>
  </div>
);

export default App;
