import Page from './page';

class Items extends Page {
  constructor(props) {
    super(props);
  }

  render() {
    const root = document.createElement('div');

    root.innerHTML = 'Hello, Items!';

    return super.render(root);
  }
}

export default Items;
