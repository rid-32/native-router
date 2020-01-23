import html from './index.html';
import Page from 'components/page';

class About extends Page {
  constructor(props) {
    super(props);

    this._handleItemsClick = this._handleItemsClick.bind(this);
  }

  _handleItemsClick() {
    this.props.history.push('items');
  }

  render(props) {
    const dom = new DOMParser().parseFromString(html, 'text/html');
    const itemsButton = dom.body.querySelectorAll('[data-id="items"]')[0];

    itemsButton.onclick = this._handleItemsClick;

    return super.render({ children: dom.body.firstElementChild, ...props });
  }
}

export default About;
