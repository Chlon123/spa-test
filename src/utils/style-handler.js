const loadStyles = (path, id) => {
    let linkElement = document.createElement('link');

    linkElement.setAttribute('href', path);
    linkElement.setAttribute('id', id);
    linkElement.setAttribute('rel', 'stylesheet');

    document.head.appendChild(linkElement);
};

export const handlePageStyles = (route) => {
    const styleId = `style-${route.id}`;

    if (!document.getElementById(styleId)) {
        console.log(route.styles);
        loadStyles(route.styles, styleId);
    }
};
