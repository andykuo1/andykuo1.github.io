import { createRouter } from '@swan-io/chicane';
import { match } from 'ts-pattern';

import { PageAbout, PageHome, PageNotFound } from './pages';

export const Router = createRouter(
  {
    Home: '/',
    About: '/about',
  },
  {
    // NOTE: Usually it is this: `/${import.meta.env.BASE_URL}`, but this is the base repo.
    basePath: '/',
  }
);

export function Routes() {
  const route = Router.useRoute(['Home', 'About']);
  return match(route)
    .with({ name: 'Home' }, () => <PageHome />)
    .with({ name: 'About' }, () => <PageAbout />)
    .otherwise(() => <PageNotFound />);
}
