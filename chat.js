console.log("hello");
var reply;
var a = document.getElementsByName('ask')[0].value;
var question = (a);
var num;
function askYoda(){
if (question == "hello" || question == "hi" || question == "Hello" || question == "Hi" || question == "Hey" || question == "hey" || question == "Howdy" || question == "howdy" || question == "Salutations" || question == "salutations")
{
    reply = "Hello, young Padawan."
}
else
{
    if (question == "Who are you?"||question == "Who are you"||question == "who are you?"||question == "Who are you"||question == "who's this"||question == "who is this")
    {
        reply = "Yoda, am I."
    } 
    else
    {
        if (question == "What is the force?"||question == "what is the force"||question == "What is the Force"||question == "what is the Force")
        {
            reply = "Together, it binds us. Alive, it is."
        }
        else
        {
            if (question == "who are the jedi"||question == "Who are the jedi?"||question == "Who are the Jedi"||question == "who are the Jedi")
            {
                reply = "Masters of the force, are they"
            }
                else
                {
                    if (question == "who are the sith"||question == "Who are the sith?"||question == "Who are the Sith"||question == "who are the Sith")
                    {
                        reply = "Those who give into the dark side, are they."
                    }
                        else
                        {
                            num = Math.round(Math.random()*5);
                            if(num == 0){
                                reply = "Understand you, I do not";
                            }
                            if(num == 1){
                                reply = "Confuse me, you do";
                            }
                            if(num == 2){
                                reply = "A mystery, it is";
                            }
                            if(num == 3){
                            reply = "Confused by the Dark Side, you are";
                            }
                            if(num == 4){
                                reply = "Speak of nonsense, you do";
                            }
                            if(num == 5){
                                reply = "Speak more clearly, you must";
                            }  
                        }
                }
        }
    }
}
document.getElementsByName('answer')[0].value= reply;
}

