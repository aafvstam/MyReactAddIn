import * as React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/components/Button/PrimaryButton/PrimaryButton';

const ListContentControlButton = props => {

    async function listContentControls() {

        Word.run(async function(context) {

          // Create a proxy object for the content controls collection.
          var contentControls = context.document.contentControls;
      
          // Queue a command to load the content controls collection.
          contentControls.load("tag");
      
          await context.sync();
      
          if (contentControls.items.length === 0) {
            let htmlParagraph = document.getElementById("demo");
            htmlParagraph.innerHTML = "There isn't a content control in this document.";
          } else {
            // List Content Controls
            contentControls.items.forEach(myFunction);
          }
      
          await context.sync();
        });
      }

      function myFunction(item, index) {
        let htmlParagraph = document.getElementById("demo");
        htmlParagraph.innerHTML = htmlParagraph.innerHTML + "index[" + (index + 1) + "]: " + item.tag + "<br>";
      }
      
    return (
        <PrimaryButton
            data-automation-id="test"
            text="List Content Controls"
            onClick={listContentControls}
            allowDisabledFocus={true}
        />
    );
}

export default ListContentControlButton; 