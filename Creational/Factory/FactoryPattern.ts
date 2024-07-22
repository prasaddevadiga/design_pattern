interface Button {
    render():void
    onClick():void
}

interface Dialog {
    createButton(): Button
    render():void
}

class WindowButton implements Button {
    render():void {
        console.log("Rendering window button");
    }
    onClick():void {
        console.log("Onclick inside window button");
    }
}

class WebButton implements Button {
    render():void {
        console.log("Rendering web button");
    }
    onClick():void {
        console.log("Onclick inside web button");
    }
}

class WindowsDialogue implements Dialog {
    
    createButton(): Button {
        return new WindowButton()
    }

    render():void {
        this.createButton().render()
    }
}

class WebDialogue implements Dialog {
    createButton(): Button {
        return new WebButton()
    }

    render():void {
        this.createButton().render()
    }
}


class DialogueFactory {
    static createDialogue(dialogueType: string): Dialog | null {
        if (dialogueType === 'windows') {
            return new WindowsDialogue();
        } else if (dialogueType === 'web') {
            return new WebDialogue();
        } else {
            return null;
        }
    }
}

const windowDialog = DialogueFactory.createDialogue("windows")
if (windowDialog) {
    const button = windowDialog.createButton()
    button.render()
    button.onClick()
}

const webDialog = DialogueFactory.createDialogue("web")
if (webDialog) {
    const webButton = webDialog.createButton()
    webButton.render()
    webButton.onClick()
}