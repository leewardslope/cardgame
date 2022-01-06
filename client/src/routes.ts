import { SignUpPage } from './modules/login/containers';
import { SignInPage } from './modules/login/containers';
import { HomePage } from './modules/home/containers';
import { SocketPage } from './modules/socket/containers';

export const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/socket',
    component: SocketPage,
    exact: true
  },
  {
    path: '/signup',
    component: SignUpPage
  },
  {
    path: '/signin',
    component: SignInPage
  }
];
