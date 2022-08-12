import React from 'react';
import { Link } from 'react-router-dom';
import routesConfig from '../../routesConfig';
import './index.less';
const Home: React.FC = () => {
  return (
    <div className="router-wrapper">
      <div className="home-title">routers</div>
      <ul className="home-ul">
        {routesConfig.map((item) => {
          if ('/' !== item.path) {
            return (
              <li className="home-link" key={`routes_${item.path}`}>
                <Link to={item.path}>{item.path}</Link>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default Home;
