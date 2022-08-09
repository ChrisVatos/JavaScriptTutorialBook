# Regular Expressions

→ Also known as "regex"

→ They are simply ways to describe text patterns

→ There are different regex implementations

    → This means that depending on the interpreter, regex might differ a bit in the way they're written. 
    
    → However, they are somewhat standardized, so you write them (almost) the same for all versions of regex

→ They can also be used for form validation, as with regex you can specify valid patterns for field entries such as email addresses or phone numbers

→ By now you might think, so regex is amazing, but is there a catch?  Yes. At first, regex might kind of look like your neighbor's cat walked over your keyboard and just typed some random characters by accident. This regex checks for a valid email, for example:


    /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g