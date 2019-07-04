
export async function createContentControls() {
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

export async function listContentControls() {
  Word.run(async function(context) {

    // Clear the html page ... reset
    let htmlParagraph = document.getElementById("demo");
    htmlParagraph.innerHTML = "";

    // Create a proxy object for the content controls collection.
    var contentControls = context.document.contentControls;

    // Queue a command to load the content controls collection.
    contentControls.load("tag");

    await context.sync();

    if (contentControls.items.length === 0) {
      console.log("There isn't a content control in this document.");
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
