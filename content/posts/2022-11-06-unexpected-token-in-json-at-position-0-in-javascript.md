---
title: "3 quick ways to fix Unexpected token in JSON at position 0 in JavaScript"
date: "2022-11-06T17:40:13+00:00"
template: "post"
isML: true
slug: "/unexpected-token-in-json-at-position-0-in-javascript/"
img: "https://blanla.com/media/86/jason-blackeye-R5rVLQZ8hG8-unsplash-scaled.jpg"
featuredImage: "./media-link/86/jason-blackeye-R5rVLQZ8hG8-unsplash-scaled.jpg"
category: "Javascript"
tags:
 - "Javascript"
description: The Unexpected token in JSON at position 0 syntax error occurs when the JSON data is not valid and we try to pass functions like JSON.parse or JSON.stringify to it. We can fix this error by making sure the JSON content is valid.
prev: "/show-hide-element-html-css/"
---
## Why an unexpected token in JSON Syntax Error?

A common reason why the error occurs is that somewhere in our JSON file, we have a typo issue. This causes the JSON file to be invalid (a malformed JSON). The error may occur due to other reasons but the most common are: 

- Calling a function on an invalid JSON data.
- The content contains a typo; This means you probably placed a character where they are not supposed to be.
- The Content-Type is not JSON.

### Calling a function on an invalid JSON data

>  Example of an invalid JSON. A single typo error like the one below will render a JSON file invalid. The last curly braces should be removed from the scope below.
  
  ```json{5}
// Header: image.json
{
    "type": "image",
    "extension": "png",
    "size": 1024
}}
```

> Passing empty array or empty string to the JSON.parse function. This will result in a syntax error - Unexpected end of JSON input.
```javascript
// Header: example-empty-array-or-string.js
console.log(JSON.parse([]));

console.log(JSON.parse(''));
```

  > JSON strigify function called on invalid JSON data/object will result in an error.
  
```javascript
const file = {
	"type": "image",
	"extension": "png",
	"size": 1024
}}

let result = JSON.strigify(file);
console.log(result);
```
![Uncaught SyntaxError: Unexpected token } ](./media-link/86/syntax-error-token.png "Uncaught SyntaxError: Unexpected token")
### The content contains a typo. 
> In the example below the semicolon should be removed.
  
```javascript{4}
const file = {
	"type": "image",
	"extension": "png",
	"size": 1024;
}

let result = JSON.strigify(file);
console.log(result);
```
![Uncaught SyntaxError: Unexpected token ';'](./media-link/86/syntax-error-semicolon-in-json.png "Uncaught SyntaxError: Unexpected token ';'")
#### Common typo error to look for in JSON
  
  
  - **Expected comma, got expression**: Check that you have not used a semi-colon instead of a comma to separate JSON attribute and value.
  - **Not enough brackets / Extra brackets**: To control the flow of code into code blocks, we use a subset of characters. Brackets, braces, etc are used to preserve code. Leaving any of these characters unclosed will result in an error.
  - **Remove trailing comma**: Remove a trailing comma on the last line of your JSON file if present.

### The Content-Type is not JSON. 
The correct MIME media type for JSON is <code>application/json</code>, you can check this is correct by looking in the header of the response. The file should be served with the right HTTP Content-Type.

## 3 quick ways to fix an unexpected token in JSON Syntax Error

### 1. Make sure the JSON data is formatted correctly. 
> You can do this manually by looking at every line of your JSON file for typo errors or you can use an [online JSON checker](https://jsonformatter.curiousconcept.com/ "JSON Formatter and Validator"). If you are using the visual studio code editor, you can install the a [JavaScript linter plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint "ESLint").

### 2.  Error handling through Try and catch block. 
Let's look at example below:
```javascript
const file = {
    "type": "image",
    "extension": "png",
    "size": 1024
}
try {
    let result = JSON.parse(file); // issue: The object should be stringyfy before using JSON.parse on it
    console.log(result);
} catch (err) {
    console.log('error', err);
}
console.log('done'); // This code will still execute even there is error in the code.
```

![SyntaxError: Object Object is not valid JSON at JSON.parse](./media-link/86/object-object-not-valid-json.png "SyntaxError: Object Object is not valid JSON at JSON.parse")

> To fix the issue above, we need to call the JSON.stringyfy function before JSON.parse.

```javascript
const file = {
    "type": "image",
    "extension": "png",
    "size": 1024
}

try {
    let result = JSON.stringify(file);
    result = JSON.parse(result);
    console.log(result);
} catch (err) {
    console.log('error', err);
}

console.log('done');
```
### 3. Verify that the header Content-Type is in JSON. 
This type of error is rare, most of the time you consume JSON data from server you don't have control of. It is worth checking if the Content-Type is right. 

Let's assume that we have our own server and we want to set the content type in the header. I will use PHP server for this example.
```php
// Header: index.php
$media_arr = array(
    "type" => "image",
    "extension" => "png",
    "size" => 1024
);
header('Content-Type: application/json');
echo json_encode($media_arr);
```
>In the example above, our server includes the content header type as JSON.

To check the Content-Type, open the developer tools and click the Network tab. Click on 'Fetch/XHR', then click on the Headers tab, you will see the Content-Type, under the Response Headers section.

![Inspect JSON Content-Type in the Chrome Inspector](./media-link/86/inspect-content-header-type.png "Inspect JSON Content-Type in the Chrome Inspector")

  
   
  
    