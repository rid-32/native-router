import Page from './page';

class Menu extends Page {
  constructor(props) {
    super(props);
  }

  render() {
    const content = document.createElement('div');
    const itemsController = document.createElement('button');
    const aboutController = document.createElement('button');

    itemsController.innerText = 'Items';
    aboutController.innerText = 'About';

    itemsController.addEventListener('click', () => {
      this.props.hashHistory.push('items');
    });

    aboutController.addEventListener('click', () => {
      this.props.hashHistory.push('about');
    });

    content.appendChild(itemsController);
    content.appendChild(aboutController);

    return super.render(content);
  }
}

export default Menu;
