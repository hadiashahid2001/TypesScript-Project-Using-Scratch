export default class ListItem {
    constructor(_id = '', _item = '', _checked = false) {
        Object.defineProperty(this, "_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _id
        });
        Object.defineProperty(this, "_item", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _item
        });
        Object.defineProperty(this, "_checked", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _checked
        });
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get item() {
        return this._item;
    }
    set item(item) {
        this._item = item;
    }
    get checked() {
        return this._checked;
    }
    set checked(checked) {
        this._checked = checked;
    }
}
