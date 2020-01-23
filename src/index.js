import Router from 'components/router';
import Menu from 'components/menu';
import Items from 'components/items';
import About from 'components/about';

import 'bootstrap/dist/css/bootstrap.min.css';

const router = new Router({
  menu: Menu,
  items: Items,
  about: About,
});
const root = document.getElementById('root');

router.renderTo(root);
