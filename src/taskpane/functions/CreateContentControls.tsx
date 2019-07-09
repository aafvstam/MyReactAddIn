import * as React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/components/Button/PrimaryButton/PrimaryButton';

const CreateContentControlButton = props => {

    async function createContentControls(e) {

        Word.run(async function(context) {

            let wordParagraphs = context.document.body.paragraphs;
            wordParagraphs.load("$none"); // Don't need any properties; just wrap each paragraph with a content control.
            
            await context.sync();

            for (let i = 0; i < wordParagraphs.items.length; i++) {
                let contentControl = wordParagraphs.items[i].insertContentControl();
                // For even, tag "even".
                contentControl.tag = "Tag" + (i + 1).toString();
            }
            
            let htmlParagraph = document.getElementById("demo");
            htmlParagraph.innerHTML = "";
            
            await context.sync();
        });
    }

    return (
        <PrimaryButton
            data-automation-id="createButton"
            text="Create Content Controls"
            onClick={createContentControls}
            allowDisabledFocus={true}
        />
    );
}

export default CreateContentControlButton; 