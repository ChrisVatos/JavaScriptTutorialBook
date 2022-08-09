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

## Specifying Multiple Options for Words

→ In order to specify a range of optionsm we use the "|" character

    let text = "I love JavaScript!";
    console.log(text.match(/javascript|nodejs|react/i));

→ Here the expression matches either "javascript", "nodejs", or "react". It only matches the first encounter and then quits

→ Example 1:

    let text = "I love React and JavaScript!";
    console.log(text.match(/javascript|nodejs|react/i));

    Result:

        [
            'React',
            index: 7,
            input: 'I love React and JavaScript!',
            groups: undefined
        ]

→ If we wanted to find all matches, we could specify the global modifier, g

    → All the modifiers are behind the last slash and you can use multiple modifiers at the same time


→ Example 2:

    let text = "I love React and JavaScript!";
    console.log(text.match(/javascript|nodejs|react/gi));

    Result:

        ['React', 'JavaScript' ]

→ As soon as you specify g, the match function will just return an array of the matching words

## Character Options 

→ Example 1: Range for letters/numbers

    console.log(text.match(/[a-zA-Z0-9]/));

    → The example above specifies three possible ranges. It will match any lowercase or uppercase letter from a to z 
      and all numeric characters as well

→ Example 2: Wildcard Character

    let text = "äé!";
    console.log(text.match(/[a-zA-Z0-9]/g));

    → To address the difficulty of complex characters not matching an expression, the dot (".") functions 
      as a special wildcard character in regex that can match any character

→ Example 3: Escape Character

    let text = "Just some text.";
    console.log(text.match(/\./g));

    Result:

        ['.']

    → To find a match for special characters (ones used in regex to specify a pattern), you can escape it using a backslash

    → If we escape d, \d, it matches any digit

    → If we escape s, \s, it matches any whitespace character

    → If we escape b, \b, it matches text only when it's at the beginning of a word

## Groups

→  Whenever you want to match a group of characters, you can surround them with parentheses

→ Groups are very powerful when we know how to repeat them

→ Example 1:

    let text = "I love JavaScript!";
    console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi));

    → Here it is going to look for either "love" or "dislike", followed by a whitespace character, 
      followed by "javascript" or "spiders", and it will do so for all occurrences while ignoring whether 
      they are in uppercase or lowercase

    Result: 

        ['love JavaScript']


→ Example 2: If we only want it to be present 0 or 1 times, we can use the question mark ("?")

    let text = "You are doing great!";
    console.log(text.match(/n?g/gi));

    → This looks for a g character that may or not may be preceded by an n

    Result: 

        ['ng', 'g']


→ Example 3: Matching for a group that repeats, using the "+" character

    let text = "I love apples aand caaandy";
    console.log(text.match(/(a)+/g));         

    → Matches with any "a" repeated one or more times

    Result: 

        ['a', 'aa', 'aaa']


→ Example 4: Matching for a group that repeats, using the "*" character

    let text = "Joe's score is 123a and George's score is 123123123a";
    console.log(text.match(/(123)*a/g));     

    → Matches with any "a" preceeded by "123" zero or more times

    Result: 

        ['123a', 'a', '123123123a']


→ Example 5: Matching for a group that repeats, using {min, max}

    let text = "abcabcabc";
    console.log(text.match(/(abc){1,2}/));

    → Matches with "abc" that is repeated once or twice

    Result:

        ['abcabc', 'abc', index: 0, input: 'abcabcabc', groups: undefined]


→ Example 6: In order to specify groups, we'll have to name them

    let text = "I love JavaScript!";
    console.log(text.match(/(?<language>javascript)/i));

    Result:

        [
            'JavaScript',
            'JavaScript',
            index: 7,
            input: 'I love JavaScript!',
            groups: [Object: null prototype] { language: 'JavaScript' }
        ]





















