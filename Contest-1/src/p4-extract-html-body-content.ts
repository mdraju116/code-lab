/* 
Extract HTML Body Content
Lucas is porting his old HTML website to a new ReactJS format. He needs to extract only the content 
within the <body> and  </body> tags from various HTML files, as the rest will be automatically generated.

Your task is to write a function that takes an HTML string and returns only the content found between 
the opening <body> tag and the closing </body> tag. Everything else, including the tags themselves, 
should be ignored.

Assume the HTML is well-formed and the <body> and </body> tags will always be present. The body tags will 
appear on their own lines, potentially with leading whitespace for indentation, but with no other content on 
those lines.


Example 1
Input:
htmlString = 
"<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my new React app.</p>
  </body>
</html>"

Output:
"
    <h1>Welcome!</h1>
    <p>This is my new React app.</p>
  "
Explanation: Extracts the heading and paragraph within the body.



Example 2
Input:
htmlString = "<!DOCTYPE html>
<html>
  <body>
    <p>Hello world!</p>
    <div>
      <span>Nested content.</span>
    </div>
  </body>
</html>"


Output:
"
    <p>Hello world!</p>
    <div>
      <span>Nested content.</span>
    </div>
  "
Explanation: Extracts the paragraph and nested div content.



Constraints
The input `htmlString` will be a string.
The `<body>` and `</body>` tags will always be present in the `htmlString`.
The `<body>` and `</body>` tags will appear on their own lines, possibly with leading whitespace, but no other content.
The input string length will not exceed 10,000 characters.

*/
function extractBodyContent(htmlString: string): string {
    const start = htmlString.indexOf("<body>");
    const end = htmlString.indexOf("</body>");

    return htmlString.slice(start + 6, end);
}

const htmlString = `<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my new React app.</p>
  </body>
</html>`;

console.log(extractBodyContent(htmlString));


const htmlString2 = `<!DOCTYPE html>
<html>
  <body>
    <p>Hello world!</p>
    <div>
      <span>Nested content.</span>
    </div>
  </body>
</html>`

console.log(extractBodyContent(htmlString2));