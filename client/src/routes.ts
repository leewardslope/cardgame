import { SignUpPage } from './modules/login/containers';
import { SignInPage } from './modules/login/containers';
import { HomePage } from './modules/home/containers';

export const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/signup',
    component: SignUpPage,
    exact: false,
  },
  {
    path: '/signin',
    component: SignInPage,
  },
];
