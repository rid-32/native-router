import { HISTORY_LENGTH } from 'config/history';

class Router {
  constructor(config) {
    this._node = null;
    this._config = config;
    this._routes = [];
    this._currentRouteIndex = -1;

    this.push = this.push.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  _renderBy(route) {
    const component = new this._config[route]({
      history: {
        push: this.push,
        goBack: this.goBack,
      },
    });

    this._node.innerHTML = '';
    this._node.appendChild(
      component.render({ disabled: !this._currentRouteIndex }),
    );

    console.log({ routes: this._routes });
    console.log({ currentRouteIndex: this._currentRouteIndex });
  }

  _addRoute(route) {
    if (this._currentRouteIndex !== this._routes.length - 1) {
      this._routes = [
        ...this._routes.slice(0, this._currentRouteIndex + 1),
        route,
      ];
    } else {
      this._routes = [...this._routes, route].slice(-HISTORY_LENGTH);
    }
  }

  push(route) {
    if (route in this._config) {
      this._addRoute(route);

      if (this._currentRouteIndex < HISTORY_LENGTH - 1) {
        this._currentRouteIndex++;
      }

      this._renderBy(route);
    }
  }

  get _prevRouteIndex() {
    const prevRouteIndex = this._currentRouteIndex
      ? this._currentRouteIndex - 1
      : 0;

    return this._routes[prevRouteIndex];
  }

  goBack() {
    const prevRouteIndex = this._prevRouteIndex;

    if (this._currentRouteIndex > 0) {
      this._currentRouteIndex--;
    }

    this._renderBy(prevRouteIndex);
  }

  renderTo(node) {
    const rootRoute = Object.keys(this._config)[0];

    this._node = node;
    this.push(rootRoute);
  }
}

export default Router;
