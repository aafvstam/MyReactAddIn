import * as React from 'react';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { PrimaryButton, Label, Stack, mergeStyles } from 'office-ui-fabric-react';
import { DefaultButton } from 'office-ui-fabric-react';

initializeIcons(/* optional base url */);

const blueBackgroundClassName = mergeStyles({
    backgroundColor: 'lightblue',
    padding: 10
});

export interface UIFabricControlProps {
}

export default class UIFabricControlsTest extends React.Component<UIFabricControlProps> {

    clickCreate = async () => {
        return Word.run(async context => {
            /**
             * Insert your Word code here
             */

            // insert a paragraph at the end of the document.
            const paragraph = context.document.body.insertParagraph("Create", Word.InsertLocation.end);

            // change the paragraph color to blue.
            paragraph.font.color = "blue";

            await context.sync();
        });
    }

    clickList = async () => {
        return Word.run(async context => {
            /**
             * Insert your Word code here
             */

            // insert a paragraph at the end of the document.
            const paragraph = context.document.body.insertParagraph("List", Word.InsertLocation.end);

            // change the paragraph color to red.
            paragraph.font.color = "red";

            await context.sync();
        });
    }

    render() {
        const {
        } = this.props;

        return (
            <div>
                <Stack className={blueBackgroundClassName} gap={10} >
                    <Stack.Item><Label>Default and Primary Buttons:</Label></Stack.Item>
                    <Stack.Item><DefaultButton onClick={ this.clickCreate } >Create Content Controls</DefaultButton></Stack.Item>
                    <Stack.Item><PrimaryButton onClick={ this.clickList } >List Content Controls</PrimaryButton></Stack.Item>
                </Stack>
            </div>
        );
    }
}
