import { Link } from '@swan-io/chicane';
import { Router } from '../Router';

export function PageHome() {
  return <>
  <h2>HOME</h2>
  <nav>
    <Link to={Router.Home()}>HOME</Link>
    <Link to={Router.About()}>ABOUT</Link>
  </nav>
  </>;
}
