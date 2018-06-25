import {
    defineWidget,
    log,
    runCallback,
} from 'widget-base-helpers';
import template from './textToHTMLParser.template.html';

export default defineWidget('textToHTMLParser', template, {

    _obj: null,

    constructor() {
        this.log = log.bind(this);
        this.runCallback = runCallback.bind(this);
    },

    postCreate() {
        log.call(this, 'postCreate', this._WIDGET_VERSION);
    },

    update(obj, cb) {
        log.call(this, 'update', this._WIDGET_VERSION);
        this._obj = obj;

        if (this._obj) {
            log.call(this.id + '.update obj ' + this._obj.getGuid());
            this.htmlNode.innerHTML = this._obj.get(this.textString);
        }
        cb();
    },
});