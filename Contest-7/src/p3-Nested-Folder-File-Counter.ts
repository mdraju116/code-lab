/* 
Nested Folder File Counter

Given a nested folder structure containing files and subfolders, count the total number of files 
present in the entire structure, including those within any subfolders.

The folder structure is represented as an array of objects. Each object can be either a file or a folder:

A file object has type: 'file'.
A folder object has type:'folder' and a children property,which is an array of other file or folder objects.


//Examples
const structure1: FileSystemItem[] = [
  { "name": "document.txt", "type": "file" },
  { "name": "images", "type": "folder", "children": [
    { "name": "photo1.jpg", "type": "file" },
    { "name": "photo2.png", "type": "file" }
  ]},
  { "name": "report.pdf", "type": "file" }
];
countFilesInFolder(structure1);
// Expected output: 4

const structure2: FileSystemItem[] = [
  { "name": "src", "type": "folder", "children": [
    { "name": "index.js", "type": "file" },
    { "name": "components", "type": "folder", "children": [
      { "name": "Button.js", "type": "file" },
      { "name": "Header.js", "type": "file" }
    ]}
  ]},
  { "name": "package.json", "type": "file" },
  { "name": "empty_folder", "type": "folder", "children": [] }
];
countFilesInFolder(structure2);
// Expected output: 4


Example 1
Input: structure = [{"name":"document.txt","type":"file"},{"children":[{"name":"photo1.jpg","type":"file"},{"name":"photo2.png","type":"file"}],"name":"images","type":"folder"},{"name":"report.pdf","type":"file"}]
Output: 4

Example 2
Input: structure = [{"children":[{"name":"index.js","type":"file"},{"children":[{"name":"Button.js","type":"file"},{"name":"Header.js","type":"file"}],"name":"components","type":"folder"}],"name":"src","type":"folder"},{"name":"package.json","type":"file"},{"children":[],"name":"empty_folder","type":"folder"}]
Output: 4


Topics
recursion
nested objects
arrays

Hints
Hint 1. Consider how you would process each item in the array.
Hint 2. What happens if an item is a file? What if it's a folder?
Hint 3. Think about how to handle the `children` array of a folder recursively.

*/

interface File { name: string; type: 'file'; }
interface Folder { name: string; type: 'folder'; children: (File | Folder)[]; }
type FileSystemItem = File | Folder;

function countFilesInFolder(structure: FileSystemItem[]): number {

  const totalFile = structure.reduce((sum, item) => {
    if (item.type === "file") {
      return sum + 1;
    }

    if (item.type === "folder") {
      return sum + countFilesInFolder(item.children);
    }

    return sum;
  }, 0)

  return totalFile;
}


const structure1: FileSystemItem[] = [
  { "name": "document.txt", "type": "file" },
  {
    "name": "images", "type": "folder", "children": [
      { "name": "photo1.jpg", "type": "file" },
      { "name": "photo2.png", "type": "file" }
    ]
  },
  { "name": "report.pdf", "type": "file" }
];
console.log(countFilesInFolder(structure1));
// Expected output: 4

const structure2: FileSystemItem[] = [
  {
    "name": "src", "type": "folder", "children": [
      { "name": "index.js", "type": "file" },
      {
        "name": "components", "type": "folder", "children": [
          { "name": "Button.js", "type": "file" },
          { "name": "Header.js", "type": "file" }
        ]
      }
    ]
  },
  { "name": "package.json", "type": "file" },
  { "name": "empty_folder", "type": "folder", "children": [] }
];
console.log(countFilesInFolder(structure2));

// Expected output: 4