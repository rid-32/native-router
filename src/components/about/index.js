import html from './index.html';
import Page from 'components/page';

class About extends Page {
  constructor(props) {
    super(props);
  }

  render() {
    const dom = new DOMParser().parseFromString(html, 'text/html');

    return super.render({ children: dom.body.firstElementChild });
  }
}

export default About;
