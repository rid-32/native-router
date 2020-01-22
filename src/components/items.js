import Page from './page';

import { fetchItems } from 'api/items';

class Items extends Page {
  constructor(props) {
    super(props);
  }

  render() {
    const root = document.createElement('div');
    const loading = document.createTextNode('Loading...');

    fetchItems().then(({ items }) => {
      const list = document.createElement('ol');

      for (const key in items) {
        const item = items[key];
        const listItem = document.createElement('li');

        listItem.innerHTML = `${item.name}:${item.quantity}:${item.price}`;
        list.appendChild(listItem);
      }

      root.innerHTML = '';
      root.appendChild(list);
    });

    root.appendChild(loading);

    return super.render(root);
  }
}

export default Items;
