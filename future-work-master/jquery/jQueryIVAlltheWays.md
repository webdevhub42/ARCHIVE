# App Academy Open

> Learn to code online with access to App Academy’s entire full-stack course for free

*   ⏱ 5 minutes
    

*   Catalog
*   Full Stack Online
*   Javascript
*   Jquery Iv All The Ways

Let's review all the ways that `$` can be used:

*   Selector-style
    *   `$("ul.cool-things")`
    *   Takes in a CSS selector.
    *   Returns a jQuery object containing all elements matching that selector.
*   HTML-style
    *   `$("<li>Racecars</li>")`
    *   Takes in a string of HTML code.
    *   Builds HTMLElements for the content, returns a jQuery object containing the top-level elements you built.
*   Wrapper-style
    *   `$(nativeDomElement)`, `$(arrayOfDomElements)`
    *   Takes in an unwrapped `HTMLElement` or array of several elements.
    *   Returns a jQuery wrapping those, giving you access to the jQuery methods.
*   Ready-style
    *   `$(someFunction)`
    *   Takes a function to run when the DOM is fully loaded; does not run it yet.
    *   Returns nothing.

Did you find this lesson helpful?


[Source](https://open.appacademy.io/learn/full-stack-online/javascript/jquery-iv--all-the-ways)