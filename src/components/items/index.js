import template from './index.handlebars';
import Page from 'components/page';

import { fetchItems } from 'api/items';

class Items extends Page {
  constructor(props) {
    super(props);

    this._handleMenuClick = this._handleMenuClick.bind(this);
  }

  _getDOMWith(context) {
    const html = template(context);

    return new DOMParser().parseFromString(html, 'text/html');
  }

  _handleMenuClick() {
    this.props.history.push('menu');
  }

  update({ items }) {
    const list = Object.values(items);
    const dom = this._getDOMWith({ loading: false, list });
    const container = this._root.parentNode;

    const menuButton = dom.body.querySelectorAll('[data-id="menu"]')[0];

    menuButton.onclick = this._handleMenuClick;

    container.innerHTML = '';
    container.appendChild(dom.body.firstElementChild);
  }

  render(props) {
    fetchItems().then(({ items }) => this.update({ items }));

    const dom = this._getDOMWith({ loading: true });

    this._root = dom.body.firstElementChild;

    return super.render({ children: this._root, ...props });
  }
}

export default Items;
