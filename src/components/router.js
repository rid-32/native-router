import { createHashHistory, createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory({
  keyLength: 3,
});
const hashHistory = createHashHistory({
  hashType: 'noslash',
});

class Router {
  constructor(config) {
    this._node = null;
    this._config = config;

    browserHistory.listen(location => {
      this._renderBy(location);
    });
  }

  _renderBy(location) {
    const hashRoute = location.hash.slice(1);

    if (hashRoute && this._config[hashRoute]) {
      const component = new this._config[hashRoute]({
        browserHistory,
        hashHistory,
      });

      this._node.innerHTML = '';
      this._node.appendChild(component.render());
    } else {
      const mainRoute = Object.keys(this._config)[0];

      hashHistory.push(mainRoute);
    }
  }

  renderTo(node) {
    if (!node) {
      console.error(
        'HTML node element wasn`t passed to the renderTo() method!',
      );

      return;
    }

    this._node = node;
    this._renderBy(browserHistory.location);
  }
}

export default Router;
