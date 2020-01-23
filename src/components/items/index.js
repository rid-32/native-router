import template from './index.handlebars';
import Page from 'components/page';

import { fetchItems } from 'api/items';

class Items extends Page {
  constructor(props) {
    super(props);

    this._handleAboutClick = this._handleAboutClick.bind(this);
  }

  _getDOMWith(context) {
    const html = template(context);

    return new DOMParser().parseFromString(html, 'text/html');
  }

  _handleAboutClick() {
    this.props.history.push('about');
  }

  update({ items }) {
    const list = Object.values(items);
    const dom = this._getDOMWith({ loading: false, list });
    const container = this._root.parentNode;

    const aboutButton = dom.body.querySelectorAll('[data-id="about"]')[0];

    aboutButton.onclick = this._handleAboutClick;

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
