const container = document.querySelector(".card-wrapper");
const chp1Topics = [
    "কোষ প্রাচীর",
    "প্রোটোপ্লাজম",
    "প্লাজমামেমব্রেন",
    "রাইবোসোম",
    "গলগি বডি",
    "লাইসোজোম",
    "এন্ডোপ্লাজমিক রেটিকুলাম",
    "মাইটোকন্ড্রিয়া",
    "ক্লোরোপ্লাস্ট",
    'সেন্ট্রিওল',
    'নিউক্লিয়াস',
    'ক্রোমোসোম',
    'DNA ও RNA'
]

const banglaMotivationalQuotes = [
  { quote: "``শিক্ষা এমন এক অস্ত্র, যা দিয়ে তুমি পৃথিবীকে পরিবর্তন করতে পারো।", author: "নেলসন ম্যান্ডেলা" },
  { quote: "``পরিশ্রম প্রতিভাকে হার মানায়, যদি প্রতিভা পরিশ্রম না করে।", author: "টিম নটকে" },
  { quote: "``জ্ঞানই শক্তি।", author: "ফ্রান্সিস বেকন" },
  { quote: "``যে কখনো হাল ছাড়ে না, তাকেই পরাজিত করা যায় না।", author: "নেপোলিয়ন হিল" },
  { quote: "``যদি তুমি স্বপ্ন দেখতে পারো, তবে তা পূরণও করতে পারবে।", author: "ওয়াল্ট ডিজনি" },
  { quote: "``সাফল্য হলো ছোট ছোট প্রচেষ্টার যোগফল, যা প্রতিদিন পুনরাবৃত্তি হয়।", author: "রবার্ট কলিয়ার" },
  { quote: "``তুমি যতই জানো না কেন, শেখার শেষ নেই।", author: "সক্রেটিস" },
  { quote: "``অধ্যবসায় ছাড়া কখনোই মহৎ কিছু অর্জন করা যায় না।", author: "স্যামুয়েল জনসন" },
  { quote: "``ভয় পেয়ো না, চেষ্টা করো। চেষ্টা করতে থাকলে ব্যর্থতাও তোমাকে শিক্ষা দেবে।", author: "অজ্ঞাত" },
  { quote: "``যে নিজেকে বিশ্বাস করে, তার জন্য অসম্ভব কিছুই নেই।", author: "মুহাম্মদ আলী" },
  { quote: "``আজকের কষ্টই আগামীকালের শক্তি।", author: "অজ্ঞাত" },
  { quote: "``শেখা কখনো থেমে থাকে না, এটা জীবনভর চলতে থাকে।", author: "হেনরি ফোর্ড" },
  { quote: "``সাহস হলো ভয়ের অনুপস্থিতি নয়, বরং ভয়কে জয় করা।", author: "নেলসন ম্যান্ডেলা" },
  { quote: "``ব্যর্থতা হলো সাফল্যের প্রথম ধাপ।", author: "থমাস এডিসন" },
  { quote: "``সময়কে কাজে লাগাতে শিখো, সময়ই সবচেয়ে বড় সম্পদ।", author: "বেনজামিন ফ্র্যাঙ্কলিন" },
  { quote: "``তুমি যা হতে চাও, আজ থেকেই সেই পথে হাঁটা শুরু করো।", author: "অজ্ঞাত" },
  { quote: "``সাফল্য আসে তাদের কাছেই যারা সুযোগকে কাজে লাগায়।", author: "অজ্ঞাত" },
  { quote: "``জ্ঞান অর্জনের শুরু হয় কৌতূহল থেকে।", author: "অ্যালবার্ট আইনস্টাইন" },
  { quote: "``তুমি চেষ্টা করতে থাকো, হাল ছেড়ো না— একদিন গন্তব্যে পৌঁছবেই।", author: "অজ্ঞাত" },
  { quote: "``নিজেকে বদলাও, পৃথিবী বদলাতে শুরু করবে।", author: "মহাত্মা গান্ধী" },
  { quote: "``মানুষ সবকিছু অর্জন করতে পারে। তাদের শুধু মানসিকতা প্রয়োজন।", author: "তানজিম" }
];

const descriptions = [
  'কোষ প্রাচীর এর অবস্থান, রাসায়নিক গঠন ও কাজ সম্পর্কে জানতে পারবে',
  'কোষের অভ্যন্তরে অর্ধস্বচ্ছ, আঠালো এবং জেলির ন্যায় অর্ধতরল, কলয়ডালধর্মী সজীব পদার্থকে প্রোটোপ্লাজম বলে।',
  `প্লাজমামেমব্রেন এর অবস্থান, রাসায়নিক গঠন ও কাজ সম্পর্কে জানতে পারবে`,
  'রাইবোসোম -এর অবস্থান, গঠন ও কাজ সম্পর্কে জানতে পারবে।',
  'গলগি বডি -এর অবস্থান, গঠন ও কাজ সম্পর্কে জানতে পারবে।',
  'লাইসোসোম -এর অবস্থান, গঠন ও কাজ সম্পর্কে জানতে পারবে।',
  'গঠন ও কাজের ভিত্তিতে মসৃণ ও অমসৃণ এন্ডোপ্লাজমিক রেটিকুলাম সম্পর্কে জানতে পারবে।',
  'মাইটোকন্ড্রিয়নের বহিঃগঠন ও অন্তঃগঠনের সাথে এর কাজের আন্তঃসম্পর্ক সম্পর্কে জানতে পারবে।',
  'ক্লোরোপ্লাস্টের বহিঃগঠন ও অন্তঃগঠনের সাথে এর কাজের আন্তঃসম্পর্ক সম্পর্কে জানতে পারবে।',
  'সেন্ট্রিয়োল -এর অবস্থান, গঠন ও কাজ সম্পর্কে জানতে পারবে।',
  'নিউক্লিয়াসের গঠন ও কাজ ব্যাখ্যা করতে পারবে। নিউক্লিয়োপ্লাজম ও সাইটোপ্লাজমের রাসায়নিক গঠনের সম্পর্কে জানতে পারবে।',
  'ক্রোমোসোমের গঠন ও এর রাসায়নিক উপাদান সম্পর্কে জানতে পারবে। কোষ বিভাজনে ক্রোমোসোমের ভূমিকা সম্পর্কে জানতে পারবে।',
  'ডিএনএ ও আরএনএ গঠন ও কাজ সম্পর্কে জানতে পারবে। ট্রান্সক্রিপশনের কৌশল সম্পর্কে জানতে পারবে। ট্রান্সলেশন সম্পর্কে জানতে পারবে।'
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * banglaMotivationalQuotes.length);
  return banglaMotivationalQuotes[randomIndex];
}
const number = ['১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '১০', '১১', '১২', '১৩', '১৪', '১৫']

for(let i=1; i<=chp1Topics.length; i++){
    const cardBox = document.createElement('div');
    const cardInner = document.createElement('div');
    const cardBack = document.createElement('div');
    const topic = document.createElement('div');
    const image = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('div');
    const button = document.createElement('button');

    container.append(cardBox);
    cardBox.setAttribute("class", "card-box");

    cardBox.append(cardInner);
    cardBox.append(cardBack);
    cardInner.setAttribute("class", "card-inner");
    cardBack.setAttribute("class", "card-back");

    cardInner.append(topic, image, name);
    img.src = `./chp1 image/topic${i}.webp`;
    img.alt = 'topic image';
    image.append(img);

    topic.setAttribute('id', "topic");
    name.setAttribute('id', "name");
    image.setAttribute('id', 'image');

    topic.innerHTML = `<p>টপিক ${number[i-1]}</p>`;
    name.innerHTML = `<p class='topic-name'>${chp1Topics[i-1]}</p> 
                      <p  id="description">${descriptions[i-1]}</p>`;

    let motivation = getRandomQuote();
    cardBack.innerHTML = `<p class="motivation">${motivation.quote}"</p><p class="speaker">-${motivation.author}</p>`;
    button.innerText = "Start Learning"
    button.setAttribute('class', "read");
    cardBack.append(button);
}

const buttons = document.querySelectorAll('.read');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const cardBox = event.target.closest('.card-box');
        const name = cardBox.querySelector('.topic-name').textContent.trim();
        
        let index;
        for (let i = 0; i < chp1Topics.length; i++) {
            if (name === chp1Topics[i]) {
                index = i + 1;
                break;
            }
        }

        // Only allow 1, 2, 3 to work
        if (index === 1 || index === 2 || index === 3) {
            topic(index);
        } else {
            redirect();
        }
    });
});


function topic(topicNumber){
    window.location.href = `../sanjir-s-sir/chp1topic/topic${topicNumber}.html`;
}
function redirect() {
    window.location.href = "no-content.html";
}   
