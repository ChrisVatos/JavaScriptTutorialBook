# Regular Expressions

→ Also known as "regex"

→ They are simply ways to describe text patterns

→ There are different regex implementations

    → This means that depending on the interpreter, regex might differ a bit in the way they're written. 
    
    → However, they are somewhat standardized, so you write them (almost) the same for all versions of regex

→ They can also be used for form validation, as with regex you can specify valid patterns for field entries such as email addresses or phone numbers

→ By now you might think, so regex is amazing, but is there a catch?  Yes. At first, regex might kind of look like your neighbor's cat walked over your keyboard and just typed some random characters by accident. This regex checks for a valid email, for example:


    /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g

## Deciphering Regex 

→ The regex pattern is specified between two slashes. 

→ Below is a valid regex expression and will match if a given string contains the word JavaScript. When it matches, this means the result is positive. 

    /JavaScript/
    
→ We can use the JavaScript built-in match() function for this. This function returns the regex match on the result (if there is one) in the form of the substring that matched the starting position of this string and the input string

→ Example: This logs null because regex is case sensitive

  
    let text = "I love JavaScript!";
    console.log(text.match(/javascript/));


→ If you want it to be case-insensitive, you can specify this using an i after the slash:

  
    let text = "I love JavaScript!";
    console.log(text.match(/javascript/i));
  

→ The result is an object, containing the found match and the index it started on, as well as the input that was looked through. The groups are undefined. You can create groups with round parentheses, as you'll see when we get to the section on groups

    [
    'JavaScript',
    index: 7,
    input: 'I love JavaScript!',
    groups: undefined
    ]




