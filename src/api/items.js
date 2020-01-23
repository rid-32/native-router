import items from '__mock__/items';

export const fetchItems = () =>
  new Promise(res => {
    setTimeout(() => {
      res(items);
    }, 500);
  });
