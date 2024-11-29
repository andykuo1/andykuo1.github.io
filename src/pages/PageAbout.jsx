import { Router } from '../Router';
import { Link } from '@swan-io/chicane';

export function PageAbout() {
  return <>
  <h2>ABOUT</h2>
  <nav>
    <Link to={Router.Home()}>HOME</Link>
    <Link to={Router.About()}>ABOUT</Link>
  </nav>
  </>;
}
