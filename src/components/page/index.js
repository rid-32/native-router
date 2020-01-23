import template from './index.handlebars';

class Page {
  constructor(props) {
    this.props = props;

    this._handleBackClick = this._handleBackClick.bind(this);
  }

  _handleBackClick() {
    this.props.history.goBack();
  }

  render({ children, disabled }) {
    const html = template({ disabled });
    const dom = new DOMParser().parseFromString(html, 'text/html');

    const content = dom.querySelectorAll('[data-id="content"]')[0];
    const backButton = dom.querySelectorAll('[data-id="back"]')[0];

    backButton.onclick = this._handleBackClick;
    content.appendChild(children);

    return dom.body.firstElementChild;
  }
}

export default Page;
