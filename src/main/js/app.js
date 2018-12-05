import ko from 'knockout';

import discuss_investigate_form_html from '../html/discuss-investigate-form.html';
import student_staff_form_html from '../html/student-staff-form.html';

let api = {};
let self = {};
let templateIndex = 0;
let templates = [
    student_staff_form_html,
    discuss_investigate_form_html
];

self.nextButtonClick = function () {
    if (templateIndex + 1 < templates.length) {
        ko.cleanNode(self.rootElement.firstElementChild);
        templateIndex++;
        self.render();
    }
};

self.previousButtonClick = function () {
    if (templateIndex > 0) {
        ko.cleanNode(self.rootElement.firstElementChild);
        templateIndex--;
        self.render();
    }
};

self.render = function () {
    self.rootElement.innerHTML = templates[templateIndex];
    ko.applyBindings(self, self.rootElement.firstElementChild);
    window.scrollTo(0, 0);
};

api.createUI = function (rootElement) {
    self.rootElement = rootElement;
    self.render();
};

export default api;
