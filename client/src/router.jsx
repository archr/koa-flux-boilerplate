import { create, HistoryLocation } from 'react-router';
import routes from './routes.jsx';

export default create({
  routes: routes,
  location: HistoryLocation
});
