import { routesConfig, ROUTES } from '../constants/routing';
import { handlePageScripts } from './script-handler';
import { handlePageStyles } from './style-handler';

document.addEventListener('click', (e) => {
    const { target } = e;

    if (!target.matches('nav a')) {
        return;
    }

    e.preventDefault();
    urlRoute();
});

const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, '', event.target.href);
    urlLocationHandler();
};

const urlLocationHandler = async () => {
    let location = window.location.pathname;

    if (location.length == 0) {
        location = ROUTES.Homepage;
    }

    const route = routesConfig[location] || routesConfig[ROUTES.NotFound];
    const html = await fetch(route.page).then((response) => response.text());

    document.getElementById('content').innerHTML = html;
    document.title = route.title;

    document
        .querySelector('meta[name="description"]')
        .setAttribute('content', route.description);

    handlePageScripts(route);
    handlePageStyles(route);
};

window.onpopstate = urlLocationHandler;
window.route = urlRoute;

urlLocationHandler();
