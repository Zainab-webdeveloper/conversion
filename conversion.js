/* Question: Define a function which going to take argument a person height in inches and also its name 
and going to return it's height in feet.

Use prompt or HTML form that's your choice this time

E.g.When you run a function Program should ask following below questions
         
What is your name?
Prompt: Nadia


What is your height in inches?

Prompt: 65 inches 


Show output:
Nadia you are 5 feet 5 inches tall */


function convertHeight(name, heightInInches) {
            
            var feet = Math.floor(heightInInches / 12);
            var remainingInches = heightInInches % 12;
            return `${name} you are ${feet} feet ${remainingInches} inches tall`;
        }

        function startHeightConversion() {
            
            var userName = prompt("What is your name?");
            var heightInput = prompt("What is your height in inches?");
            var heightInches = Number(heightInput);

            
            if (isNaN(heightInches) || heightInches <= 0 || userName === null || userName.trim() === '') {
                alert("Invalid input. Please enter a valid name and a positive number for height.");
                return;
            }
            var result = convertHeight(userName, heightInches);
            alert(result);
        
        }