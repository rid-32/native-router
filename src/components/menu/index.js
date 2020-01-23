import html from './index.html';
import Page from 'components/page';

class Menu extends Page {
  constructor(props) {
    super(props);

    this._handleItemsClick = this._handleItemsClick.bind(this);
    this._handleAboutClick = this._handleAboutClick.bind(this);
  }

  _handleItemsClick() {
    this.props.history.push('items');
  }

  _handleAboutClick() {
    this.props.history.push('about');
  }

  _addHandlerByDataId(node) {
    const handlers = {
      items: this._handleItemsClick,
      about: this._handleAboutClick,
    };

    node.onclick = handlers[node.dataset.id];
  }

  render(props) {
    const dom = new DOMParser().parseFromString(html, 'text/html');
    const fragment = document.createDocumentFragment();

    dom.querySelectorAll('[data-id]').forEach(node => {
      this._addHandlerByDataId(node);

      fragment.appendChild(node);
    });

    return super.render({ children: fragment, ...props });
  }
}

export default Menu;
