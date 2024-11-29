import { createRouter } from '@swan-io/chicane';
import { match } from 'ts-pattern';

import { PageAbout, PageHome, PageNotFound } from './pages';

export const Router = createRouter(
  {
    Home: '/',
    About: '/about',
  },
  {
    basePath: `/${import.meta.env.BASE_URL}`,
  }
);

export function Routes() {
  const route = Router.useRoute(['Home', 'About']);
  return match(route)
    .with({ name: 'Home' }, () => <PageHome />)
    .with({ name: 'About' }, () => <PageAbout />)
    .otherwise(() => <PageNotFound />);
}
