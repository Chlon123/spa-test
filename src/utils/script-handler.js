const loadScript = (path, id) => {
    let scriptElement = document.createElement('script');

    scriptElement.setAttribute('src', path);
    scriptElement.setAttribute('type', 'module');
    scriptElement.setAttribute('async', true);
    scriptElement.setAttribute('id', id);

    document.body.appendChild(scriptElement);
};

export const handlePageScripts = (route) => {
    if (!document.getElementById(route.id)) {
        loadScript(route.script, route.id);
    }
};
