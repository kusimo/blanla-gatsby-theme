---
title: "2 ways to show and hide element using HTML and CSS, I prefer the first one"
date: "2022-11-02T11:03:34+00:00"
template: "post"
isML: true
slug: "/show-hide-element-html-css/"
img: "https://blanla.com/media/69/sheldon-kennedy-1Ic85m8lz_0-unsplash-scaled.jpg"
featuredImage: "./media-link/69/sheldon-kennedy-1Ic85m8lz_0-unsplash-scaled.jpg"
category: "Web Development"
tags:
 - "Web Development"
description: Toggle (Hide and show) elements on a page using HTML and CSS only. We use details and summary HTML tags. We also use a checkbox that targets its siblings to control when an element is to be shown or hidden.
prev: "/preload-custom-fonts-in-shopify/"
---
You can show or hide elements on a page in many different ways. We are going to focus and hiding/showing element **when user interact with it (click)**. 
I will show you my preferred method of achieving this using HTML and CSS only, I will also show you another method in which this can be achieved. 

## Use the Details and Summary tags

The details and summary tags act like an accordion element, you click on an element to reveal another element, and clicking again will hide the element that was revealed.  This is an example of the details and summary tags:


```html
// Header: Details & Summary tags
<details>
    <p>This is the hidden content, will only show when the summary is clicked. </p>
    <summary>Terms and condition</summary>
</details>
```

<div class="example">
    <details>
        <p>This is the hidden content, will only show when the summary is clicked. </p>
        <summary>Terms and condition</summary>
    </details>
</div>

> Inside the details element, the summary tag is the only element that is shown by default, everything else is hidden. You can show the content inside details by adding the <code class="note">open</code> property to the details tag. 

### Change the summary tag default arrow
The summary has a default arrow (see above) which we are able to hide or change.  To hide the arrow, we need to add <code>none</code> as the value to the <code>list-style-type</code> attribute. I will also create space for the custom arrow that we are going to be adding by adding extra CSS attributes.


```css
details> summary {
    list-style-type: none; /* This removes the default arrow */
    cursor: pointer;
    position: relative;
    margin-left: 24px;
}
```

<div class="example example-2" id="example-2">
    <details>
        <p>This is the hidden content, will only show when the summary is clicked. </p>
        <summary>Terms and condition</summary>
    </details>
</div>

After we applied the CSS, you will see that the default arrow has been removed, and we have created a space to add our own custom arrow. First, I will use + and - to indicate the open and closed state, then I will use custom SVG to achieve the same result. 

### Replace the default toggle arrow with a custom element
The method for replacing the default arrow with a custom one is the same for many HTML elements, for example, select and option tags. 
```css
details> summary:before, details[open]> summary:before {
    content: '+';
    position: absolute;
    width: 16px;
    height: 16px;
    left: -21px;
    transition: .2s;
}

details[open]> summary:before {
    content: '-';
}
```

<div class="example example-3" id="example-3">
    <details>
        <p>This is the hidden content, will only show when the summary is clicked. </p>
        <summary>Terms and condition</summary>
    </details>
</div>

### Replace the arrow with SVG/Image
We can replace the summary's arrow with a custom image by adding the image URL to our CSS and removing the + sign in our content attribute as below: 
```css
details> summary:before, details[open]> summary:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    left: -21px;
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='9' viewBox='0 0 14 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L7 7.5L13 1.5' stroke='%230039A6' stroke-width='2'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center center;
    transition: .2s;
}

details[open]> summary:before {
    transform: rotate(180deg);
}
```

<div class="example example-4" id="example-4">
    <details>
        <p>This is the hidden content, will only show when the summary is clicked. </p>
        <summary>Terms and condition</summary>
    </details>
</div>

##Use the hidden checkbox input field to toggle an element
Another way to toggle elements on a page is by using the input checkbox field to control what is hidden and shown on the page. The checkbox will need to be a direct sibling of the element you want to hide or show. I will explain this with an example.

```html
<input type="checkbox" name="question">
<label for="question"><div class="heading">Click here to toggle</div></label>
<p class="answer">Answer here</p>
```
<div id="example-5" class="example">
<blockquote>Before adding CSS</blockquote>
    <input type="checkbox" id="question-example" name="question-example">
    <label for="question-example">
        <div class="heading">Click here to toggle</div>
    </label>
    <p class="answer">Answer here</p>
</div>

In the example above, we have an input, a label for the input, and a paragraph element. We need to hide the input as clicking on the label will emulate the input click. We also want to hide the paragraph and show it when the label is clicked (input state checked). This can be achieved with the following CSS.

```css
   label[for="question"] {
        cursor: pointer;
    }
    input#question {
        display:none
    }
    input#question ~ p {
        display: none;
    }
    input#question:checked ~ p {
        display: block;
    }
```

<div id="example-6" class="example">
<blockquote>After adding CSS</blockquote>
    <input type="checkbox" id="question" name="question">
    <label for="question">
        <div class="heading">Click here to toggle</div>
    </label>
    <p class="answer">Answer here</p>
</div>

##Real-life scenario using the toggle method to create a FAQ component
The above methods of hiding and showing elements on a page are very simple but they can be very useful when working as a front-end web developer,  you may need to hide and show elements on click. For example, you may be asked to create a FAQ component. The most common method of achieving this is by using the toggle method; this can be plain HTML/CSS or JavaScript.

The example below used HTML and CSS only to achieve a toggle on FAQ. 
<div id="example-7" class="feature-faq">
        <h2 class="section-header__title_text blue-title">
            <span class="heading-title-text">
                Example Toggle FAQ
            </span>
        </h2>
        <div class="faq-element">
            <faq-tab class="faq-wrapper">
                <input id="faq-title-3" type="checkbox" name="tabs">
                <label for="faq-title-3" class="h4 accordion__title"><span>What is General sibling combinator (<code>~</code>)?</span></label>
                <div class="faq-content">
                    <p>Please check <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator" rel="noopener">MDN Tutorial</a></p>
                </div>
            </faq-tab>
        </div>
        <div class="faq-element">
            <faq-tab class="faq-wrapper">
                <input id="faq-title-4" type="checkbox" name="tabs">
                <label for="faq-title-4" class="h4 accordion__title"><span>Is Details disclosure element?</span></label>
                <div class="faq-content">
                    <p>The details HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. 
                        <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details" rel="noopener"> Check MDN for more.</a></p>
                </div>
            </faq-tab>
        </div>
        <div class="faq-element">
            <faq-tab class="faq-wrapper">
                <input id="faq-title-5" type="checkbox" name="tabs">
                <label for="faq-title-5" class="h4 accordion__title"><span>Can I use JavaScript to toggle element?</span></label>
                <div class="faq-content">
                    <p>Yes.</p>
                </div>
            </faq-tab>
        </div>
</div>

```html
// Header: faq.html
  <div class="feature-faq">
        <h2 class="section-header__title_text blue-title">
            <span class="heading-title-text">
                Frequently Asked Question
            </span>
        </h2>
        <div class="faq-element">
            <faq-tab class="faq-wrapper">
                <input id="faq-title-3" type="checkbox" name="tabs">
                <label for="faq-title-3" class="h4 accordion__title"><span>What is General sibling combinator (<code>~</code>)?</span></label>
                <div class="faq-content">
                    <p>Please check <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator">MDN Tutorial</a></p>
                </div>
            </faq-tab>
        </div>
        <div class="faq-element">
            <faq-tab class="faq-wrapper">
                <input id="faq-title-4" type="checkbox" name="tabs">
                <label for="faq-title-4" class="h4 accordion__title"><span>Is Details disclosure element?</span></label>
                <div class="faq-content">
                    <p>The details HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. 
                        <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details"> Check MDN for more.</a></p>
                </div>
            </faq-tab>
        </div>
        <div class="faq-element">
            <faq-tab class="faq-wrapper">
                <input id="faq-title-5" type="checkbox" name="tabs">
                <label for="faq-title-5" class="h4 accordion__title"><span>Can I use JavaScript to toggle element?</span></label>
                <div class="faq-content">
                    <p>Yes.</p>
                </div>
            </faq-tab>
        </div>
    </div>
```
Let's style up the FAQ by adding some CSS.

```css
// Header: faq.css
     .faq-wrapper input {
            position: absolute;
            opacity: 0;
            z-index: -1;
        }

        .faq-wrapper label {
            position: relative;
            display: block;
            padding: 20px;
            margin-bottom: 5px;
            line-height: normal;
            cursor: pointer;
            border-top: 1px solid #ececec;
            color: #000000;
        }

        .accordion__title span,
        .faq-content p {
            margin-left: 32px;
        }

        .faq-wrapper label::before {
            position: absolute;
            content: "+";
            color: #F6AE2D;
            top: 50%;
            transform: translateY(-50%);
            font-size: 28px;
            transition: all .5s;
            padding: 0 5px;
        }

        .faq-wrapper input:checked~label::before {
            content: "-";
        }

        .faq-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height .35s;
        }

        .faq-wrapper input:checked~.faq-content {
            max-height: none;
        }
```
<br/>

<style>
    .example {
        padding: 2rem 0;
    }
    #example-2 details> summary, #example-3 details> summary, #example-4 details> summary {
        list-style-type: none;
        cursor: pointer;
        position: relative;
        margin-left: 24px;
    }


     #example-3 details> summary:before,  #example-3 details[open]> summary:before {
        content: '+';
        position: absolute;
        width: 16px;
        height: 16px;
        left: -21px;
        transition: .2s;
    }

    #example-3 details[open]> summary:before {
        content: '-';
    }

    #example-4 details> summary:before,  #example-4 details[open]> summary:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    left: -21px;
    top: 5px;
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='9' viewBox='0 0 14 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L7 7.5L13 1.5' stroke='%230039A6' stroke-width='2'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center center;
    transition: .2s;
    }

    #example-4 details[open]> summary:before {
        transform: rotate(180deg);
    }

    /* CSS for input checkbox */
    #example-6 label[for="question"] {
        cursor: pointer;
    }
    #example-6 input#question {
        display:none
    }
    #example-6 input#question ~ p {
        display: none;
    }
    #example-6 input#question:checked ~ p {
        display: block;
    }

    /* CSS for FAQ */
    #example-7 { padding-bottom: 2rem;}
    #example-7 input {
            position: absolute;
            opacity: 0;
            z-index: -1;
        }

    #example-7 label {
            position: relative;
            display: flex;
            padding: 15px;
            margin-bottom: 5px;
            line-height: normal;
            cursor: pointer;
            border-top: 1px solid #ececec;
        }

    #example-7 .accordion__title span,
    #example-7 .faq-content p {
            margin-left: 32px;
        }

     #example-7 label::before {
            position: absolute;
            content: "+";
            color: #F6AE2D;
            top: 45%;
            transform: translateY(-50%);
            font-size: 28px;
            transition: all .5s;
            padding: 0 5px;
        }

     #example-7 input:checked~label::before {
            content: "-";
        }

        .faq-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height .35s;
        }

        #example-7 input:checked~.faq-content {
            max-height: none;
        }
</style>