import html from './index.html';
import Page from 'components/page';

class About extends Page {
  constructor(props) {
    super(props);

    this._handleMenuClick = this._handleMenuClick.bind(this);
  }

  _handleMenuClick() {
    this.props.history.push('menu');
  }

  render(props) {
    const dom = new DOMParser().parseFromString(html, 'text/html');
    const menuButton = dom.body.querySelectorAll('[data-id="menu"]')[0];

    menuButton.onclick = this._handleMenuClick;

    return super.render({ children: dom.body.firstElementChild, ...props });
  }
}

export default About;
