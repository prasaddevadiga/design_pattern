var WindowButton = /** @class */ (function () {
    function WindowButton() {
    }
    WindowButton.prototype.render = function () {
        console.log("Rendering window button");
    };
    WindowButton.prototype.onClick = function () {
        console.log("Onclick inside window button");
    };
    return WindowButton;
}());
var WebButton = /** @class */ (function () {
    function WebButton() {
    }
    WebButton.prototype.render = function () {
        console.log("Rendering web button");
    };
    WebButton.prototype.onClick = function () {
        console.log("Onclick inside web button");
    };
    return WebButton;
}());
var WindowsDialogue = /** @class */ (function () {
    function WindowsDialogue() {
    }
    WindowsDialogue.prototype.createButton = function () {
        return new WindowButton();
    };
    WindowsDialogue.prototype.render = function () {
        this.createButton().render();
    };
    return WindowsDialogue;
}());
var WebDialogue = /** @class */ (function () {
    function WebDialogue() {
    }
    WebDialogue.prototype.createButton = function () {
        return new WebButton();
    };
    WebDialogue.prototype.render = function () {
        this.createButton().render();
    };
    return WebDialogue;
}());
var DialogueFactory = /** @class */ (function () {
    function DialogueFactory() {
    }
    DialogueFactory.createDialogue = function (dialogueType) {
        if (dialogueType === 'windows') {
            return new WindowsDialogue();
        }
        else if (dialogueType === 'web') {
            return new WebDialogue();
        }
        else {
            return null;
        }
    };
    return DialogueFactory;
}());
var windowDialog = DialogueFactory.createDialogue("windows");
if (windowDialog) {
    var button = windowDialog.createButton();
    button.render();
    button.onClick();
}
var webDialog = DialogueFactory.createDialogue("web");
if (webDialog) {
    var webButton = webDialog.createButton();
    webButton.render();
    webButton.onClick();
}
