import template from './index.handlebars';
import Page from 'components/page';

import { fetchItems } from 'api/items';

class Items extends Page {
  constructor(props) {
    super(props);
  }

  _getDOMWith(context) {
    const html = template(context);

    return new DOMParser().parseFromString(html, 'text/html');
  }

  update({ items }) {
    const list = Object.values(items);
    const dom = this._getDOMWith({ loading: false, list });

    this._root.innerHTML = '';
    this._root.appendChild(dom.body.firstElementChild);
  }

  render() {
    fetchItems().then(({ items }) => this.update({ items }));

    const dom = this._getDOMWith({ loading: true });

    this._root = dom.body.firstElementChild;

    return super.render({ children: this._root });
  }
}

export default Items;
