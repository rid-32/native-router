import Page from './page';

class About extends Page {
  constructor(props) {
    super(props);
  }

  render() {
    const root = document.createTextNode('Hello, About!');

    return super.render(root);
  }
}

export default About;
