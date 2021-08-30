import { Route, Switch } from "react-router-dom";
import Details from "../pages/details/Details";
import Rockets from '../pages/rockets/Rockets';

export default function Routes() {

    return (
        <Switch>
            <Route exact path="/" component={Rockets} />
            <Route path="/details/:id" component={Details} />
        </Switch>
    );
}