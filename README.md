# random-password-generator

## Purpose
Create a random password generator that will create strong password that meets certain criteria to provide greater security.

## Requirements
* GIVEN I need a new, secure password
* WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
* WHEN prompted for password criteria
THEN I select which criteria to include in the password
* WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
* WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
* WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
* WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
* WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Built With
* HTML
* CSS
*Javascript code

## Personal description
* while creating the code , once we run the password generator. It would meet all the criteria. But if we clicked on the generate password again without refreshing the webpage, and we chose false for one of teh criteria and true for all the others. the False option will also appear on the password generator. I fixed this undesire statement by adding everyCharacter = ""; exactly after the function generatePassword(), so it could reset the section automatically.
* Nowadays people use mobile a lot. Copy it from the show section might be a little bit challengging. I added a copy to clipboard Button to copy the password once generated.
* I had a Bug " Uncaught (in promise) DOMException: Document is not focused." Everytime that the alert would run.
* By going through some research online I used the document.execCommand("copyPassword"); method to copy the password. But after going through couple of more document online. I believe that execCommand is no longer supported.
* I fixed both issues by adding : navigator.clipboard.writeText(copyText.value).then(function () .
and it worked.

## Website

https://randolphrichard.github.io/random-password-generator/

![](/assets/images/1.png)
![](/assets/images/2.png)
![](/assets/images/3.png)
![](/assets/images/4.png)
![](/assets/images/5.png)
![](/assets/images/6.png)
![](/assets/images/7.png)
![](/assets/images/8.png)

# Contribution
Made with ❤️ by Randolph Richard
### © 2021 Randolph 
