import app from './app';

(function () {
    let appElement = document.createElement('div');
    document.body.appendChild(appElement);

    app.createUI(appElement);
})();
