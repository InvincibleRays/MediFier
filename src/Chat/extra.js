const answers = [ 
    ["hello"],
    ["What is your name?"],
    ["What is your postcode?"],
    ["How far are you willing to travel?"],
   ["Would you be available on weekdays or weekends?"],		
   ["What time of the day will you be available?"]			
    ]
    //4
  
    
  
//   const utterances = [
//    [hi, hello ],                                                                               
//   [
    
//   ],						//1
//   [
    
//   ],						//2
//   [  ],					//3
//   [  ],	//o
//   ]
  
  const inputField = document.getElementById("input")
     inputField.addEventListener("keydown", function(e) {
         if (e.code === "Enter") {
             let input = inputField.value;
             inputField.value = "";
             output(input);
     }
   });
  
   function output()
   {
           let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
   
   }
  
   function output()
  {
       let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
        
      
      text = text
     .replace(/ a /g, " ")
     .replace(/whats/g, "what is")
     .replace(/please /g, "")
     .replace(/ please/g, "");
  }
  
  function compare(utterancesArray, answersArray, string) {
   let item;
   for (let x = 0; x < utterancesArray.length; x++) {
     for (let y = 0; y < utterancesArray[x].length; y++) {
       if (utterancesArray[x][y] === string) {
         item = answersArray[x];
         item = item[Math.floor(Math.random() * item.length)];
         }
       }
    }
   return item;
  }
  function output(input) {
   let product;
   let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
   text = text
     .replace(/ a /g, " ")
     .replace(/whats/g, "what is")
     .replace(/please /g, "")
     .replace(/ please/g, "");
  
   if (compare(utterances, answers, text)) {
     product = compare(utterances, answers, text);
   } 
   else {
     product = alternatives[Math.floor(Math.random() * alternatives.length)];
   }
  
   //update  DOM
   addChatEntry (input, product);
  }
  
  function output(input) {
   let product;
   let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
   text = text
     .replace(/ a /g, " ")
     .replace(/whats/g, "what is")
     .replace(/please /g, "")
     .replace(/ please/g, "");
  
   if (compare(utterances, answers, text)) {
     product = compare(utterances, answers, text);
   } 
   else {
     product = alternatives[Math.floor(Math.random() * alternatives.length)];
   }
  
   //update  DOM
   addChatEntry (input, product);
  }
  
  function output(input) {
   let product;
   let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
   text = text
     .replace(/ a /g, " ")
     .replace(/whats/g, "what is")
     .replace(/please /g, "")
     .replace(/ please/g, "");
  
   if (compare(utterances, answers, text)) {
     product = compare(utterances, answers, text);
   } 
   else {
     product = alternatives[Math.floor(Math.random() * alternatives.length)];
   }
  
   //update  DOM
   addChatEntry (input, product);
  }