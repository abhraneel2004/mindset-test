document.getElementById('chatButton').addEventListener('click', function() {
  document.getElementById('chatWindow').style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
  document.getElementById('chatWindow').style.display = 'none';
});
const userMessage = [
  ["hi", "hey", "hello"],
  ["sure", "yes", "no"],
  ["Facing problems","Feeling mentally unwell"],
  ["i am under 18,  below 18"],
  ["18"],
  ["how are you", "how is life", "how are things", "how are you doing"],

  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you", "who is your creator"],

  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
 
  ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
  ["bad", "bored", "tired"],
  ["I can't concentrate over my work?"],
  ["ah", "ok", "okay", "nice", "welcome"],
  ["thanks", "thank you"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["corona", "covid19", "coronavirus"],
  ["you are funny"],
  ["i dont know"],
  ["boring"],
  ["im tired"],
  ["Say something about Mindset","What is Mindset","Mindset","mindset","Tell me something about mindset"],
  ["Tell me about the volunteers section","volunteers?"],
  ["What are the symptoms of mental illness ","Am I mentally fit"],
];
const botReply = [
  ["Hello!", "Hi!", "Hey!", "Hi there!"],
  ["Okay"],
  ["ok!Are you under 18?Then say below 18 else say over 18 ","if u are under 18 then say below 18"],
  ["Are you a student or are u having mild issues..if it is then type 18"],
  ["Then I will refer you to the volunteers section"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
 

  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am always young."],
  ["I am Dr.bot", "I am Dr. bot.In Mindset we basically want to be with u in your journey towards a better you.Here wehave more than  competent psychiatrists and psychotherapists,music therapist,and volunteers also some previously experiwnced personswho had gone through same kinda issues . What are you?"],
  ["Anannya Guchait"],
  ["My name is Dr.Bot"],
 
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
  ["Ok!first take a deep breath and try again with small steps,if u still find it difficult then take a short break,keep chatting with me"],
 ["Nice to hear"],
  ["You're welcome"],
  ["Try to eat ghar ka khana but if it is not possible then try out some healthy food and a seasonal fruit is must"],
  ["Dude!"],
  ["Yes?"],
  ["Please stay home"],
  ["Glad to hear it"],
  ["Say something interesting"],
  ["Sorry for that. Let's chat!"],
  ["Take some rest, Dude!"],
  ["In Mindset we basically want to be with u in your towards a better you . Here wehave more than competent psychiatrists ,  and psychotherapists , music therapist , and volunteers also some previously experienced persons who had gone through same kinda issues. Ok Let's get a clear path here , If you are below 18 and having mild issues ,my suggestion is to visit our volunteer section . Now There might be a question in your mind ,What do u want to mean by volunteers here . Look! basically they are all MBBS final year students or psychology interns and expert in their domains. Now this section will help you accordingly and at the same time they will reduce the patient pressure on the doctors . So that everyone will be treated well . So I wish You should try this once . Ok ! Have a good day. "],

  ["This section is mainly for the persons who are facing mild issues.The age group of under 18 and the students also fall in this section.Our volunteers final year psychology students,interns,MBBS final year students They will give you advice"],
  ["Examples of signs and symptoms include Feeling sad or down Confused thinking or reduced ability to concentrate Excessive fears or worries, or extreme feelings of guilt Extreme mood changes of highs and lows Withdrawal from friends and activities Significant tiredness, low energy or problems sleeping Detachment from reality (delusions), paranoia or hallucinations Inability to cope with daily problems or stress Trouble understanding and relating to situations and to people Problems with alcohol or drug use Major changes in eating habits Excessive anger, hostility or violence Suicidal thinking Sometimes symptoms of a mental health disorder appear as physical problems, such as stomach pain, back pain, headaches, or other unexplained aches and pains."],
];

const alternative = 
[["I am trying to find out your query"]
];

const synth = window.speechSynthesis;

function voiceControl(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-aus";
  u.volume = 1;
  u.rate = 1;
  u.pitch = 1;
  synth.speak(u);
}

function sendMessage() {
  const inputField = document.getElementById("input");
  let input = inputField.value.trim();
  input != "" && output(input);
  inputField.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      let input = inputField.value.trim();
      input != "" && output(input);
      inputField.value = "";
    }
  });
});
function output(input) {
  let product;

  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

  text = text
    .replace(/[\W_]/g, " ")
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .trim();

  let comparedText = compare(userMessage, botReply, text);

  product = comparedText
    ? comparedText
    : alternative[Math.floor(Math.random() * alternative.length)];
  addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == string) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  //containMessageCheck(string);
  if (item) return item;
  else return containMessageCheck(string);
}

function containMessageCheck(string) {
  let expectedReply = [
    [
      "Good Bye, dude",
      "Bye, See you!",
      "Dude, Bye. Take care of your health in this situation."
    ],
    ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
    ["Have a pleasant evening!", "Good evening too", "Evening!"],
    ["Good morning, Have a great day!", "Morning, dude!"],
    ["Facing problem", "Feeling mentally unwell", "I am not mentally fit"]
  ];
  let expectedMessage = [
    ["bye", "tc", "take care"],
    ["night", "good night"],
    ["evening", "good evening"],
    ["morning", "good morning"],
    ["ok!Are you under 18?Then say below 18 else say over 18"]
  ];
  let item;
  for (let x = 0; x < expectedMessage.length; x++) {
    if (expectedMessage[x].includes(string)) {
      items = expectedReply[x];
      item = items[Math.floor(Math.random() * items.length)];
    }
  }
  return item;
}
function addChat(input, product) {
  const mainDiv = document.getElementById("message-section");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.classList.add("message");
  userDiv.innerHTML = `<span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.classList.add("message");
  botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
  var scroll = document.getElementById("message-section");
  scroll.scrollTop = scroll.scrollHeight;
  voiceControl(product);
}
