import Router from 'components/router';
import Menu from 'components/menu';
import Items from 'components/items';
import About from 'components/about';

const router = new Router({
  menu: Menu,
  items: Items,
  about: About,
});
const root = document.getElementById('root');

router.renderTo(root);
