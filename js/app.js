function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}



var definition = {smile:{title:"Smile",codes:[":)",":=)",":-)"]},"sad-smile":{title:"Sad Smile",codes:[":(",":=(",":-("]},"big-smile":{title:"Big Smile",codes:[":D",":=D",":-D",":d",":=d",":-d"]},cool:{title:"Cool",codes:["8)","8=)","8-)","B)","B=)","B-)","(cool)"]},wink:{title:"Wink",codes:[":o",":=o",":-o",":O",":=O",":-O"]},crying:{title:"Crying",codes:[";(",";-(",";=("]},sweating:{title:"Sweating",codes:["(sweat)","(:|"]},speechless:{title:"Speechless",codes:[":|",":=|",":-|"]},kiss:{title:"Kiss",codes:[":*",":=*",":-*"]},"tongue-out":{title:"Tongue Out",codes:[":P",":=P",":-P",":p",":=p",":-p"]},blush:{title:"Blush",codes:["(blush)",":$",":-$",":=$",':">']},wondering:{title:"Wondering",codes:[":^)"]},sleepy:{title:"Sleepy",codes:["|-)","I-)","I=)","(snooze)"]},dull:{title:"Dull",codes:["|(","|-(","|=("]},"in-love":{title:"In love",codes:["(inlove)"]},"evil-grin":{title:"Evil grin",codes:["]:)",">:)","(grin)"]},talking:{title:"Talking",codes:["(talk)"]},yawn:{title:"Yawn",codes:["(yawn)","|-()"]},puke:{title:"Puke",codes:["(puke)",":&",":-&",":=&"]},"doh!":{title:"Doh!",codes:["(doh)"]},angry:{title:"Angry",codes:[":@",":-@",":=@","x(","x-(","x=(","X(","X-(","X=("]},"it-wasnt-me":{title:"It wasn't me",codes:["(wasntme)"]},party:{title:"Party!!!",codes:["(party)"]},worried:{title:"Worried",codes:[":S",":-S",":=S",":s",":-s",":=s"]},mmm:{title:"Mmm...",codes:["(mm)"]},nerd:{title:"Nerd",codes:["8-|","B-|","8|","B|","8=|","B=|","(nerd)"]},"lips-sealed":{title:"Lips Sealed",codes:[":x",":-x",":X",":-X",":#",":-#",":=x",":=X",":=#"]},hi:{title:"Hi",codes:["(hi)"]},call:{title:"Call",codes:["(call)"]},devil:{title:"Devil",codes:["(devil)"]},angel:{title:"Angel",codes:["(angel)"]},envy:{title:"Envy",codes:["(envy)"]},wait:{title:"Wait",codes:["(wait)"]},bear:{title:"Bear",codes:["(bear)","(hug)"]},"make-up":{title:"Make-up",codes:["(makeup)","(kate)"]},"covered-laugh":{title:"Covered Laugh",codes:["(giggle)","(chuckle)"]},"clapping-hands":{title:"Clapping Hands",codes:["(clap)"]},thinking:{title:"Thinking",codes:["(think)",":?",":-?",":=?"]},bow:{title:"Bow",codes:["(bow)"]},rofl:{title:"Rolling on the floor laughing",codes:["(rofl)"]},whew:{title:"Whew",codes:["(whew)"]},happy:{title:"Happy",codes:["(happy)"]},smirking:{title:"Smirking",codes:["(smirk)"]},nodding:{title:"Nodding",codes:["(nod)"]},shaking:{title:"Shaking",codes:["(shake)"]},punch:{title:"Punch",codes:["(punch)"]},emo:{title:"Emo",codes:["(emo)"]},yes:{title:"Yes",codes:["(y)","(Y)","(ok)"]},no:{title:"No",codes:["(n)","(N)"]},handshake:{title:"Shaking Hands",codes:["(handshake)"]},skype:{title:"Skype",codes:["(skype)","(ss)"]},heart:{title:"Heart",codes:["(h)","<3","(H)","(l)","(L)"]},"broken-heart":{title:"Broken heart",codes:["(u)","(U)"]},mail:{title:"Mail",codes:["(e)","(m)"]},flower:{title:"Flower",codes:["(f)","(F)"]},rain:{title:"Rain",codes:["(rain)","(london)","(st)"]},sun:{title:"Sun",codes:["(sun)"]},time:{title:"Time",codes:["(o)","(O)","(time)"]},music:{title:"Music",codes:["(music)"]},movie:{title:"Movie",codes:["(~)","(film)","(movie)"]},phone:{title:"Phone",codes:["(mp)","(ph)"]},coffee:{title:"Coffee",codes:["(coffee)"]},pizza:{title:"Pizza",codes:["(pizza)","(pi)"]},cash:{title:"Cash",codes:["(cash)","(mo)","($)"]},muscle:{title:"Muscle",codes:["(muscle)","(flex)"]},cake:{title:"Cake",codes:["(^)","(cake)"]},beer:{title:"Beer",codes:["(beer)"]},drink:{title:"Drink",codes:["(d)","(D)"]},dance:{title:"Dance",codes:["(dance)","\\o/","\\:D/","\\:d/"]},ninja:{title:"Ninja",codes:["(ninja)"]},star:{title:"Star",codes:["(*)"]},mooning:{title:"Mooning",codes:["(mooning)"]},finger:{title:"Finger",codes:["(finger)"]},bandit:{title:"Bandit",codes:["(bandit)"]},drunk:{title:"Drunk",codes:["(drunk)"]},smoking:{title:"Smoking",codes:["(smoking)","(smoke)","(ci)"]},toivo:{title:"Toivo",codes:["(toivo)"]},rock:{title:"Rock",codes:["(rock)"]},headbang:{title:"Headbang",codes:["(headbang)","(banghead)"]},bug:{title:"Bug",codes:["(bug)"]},fubar:{title:"Fubar",codes:["(fubar)"]},poolparty:{title:"Poolparty",codes:["(poolparty)"]},swearing:{title:"Swearing",codes:["(swear)"]},tmi:{title:"TMI",codes:["(tmi)"]},heidy:{title:"Heidy",codes:["(heidy)"]},myspace:{title:"MySpace",codes:["(MySpace)"]},malthe:{title:"Malthe",codes:["(malthe)"]},tauri:{title:"Tauri",codes:["(tauri)"]},priidu:{title:"Priidu",codes:["(priidu)"]}};

var chats = new Firebase("https://f7-chat.firebaseio.com/Chats");
var users = new Firebase("https://f7-chat.firebaseio.com/Users");

var username, userId, newUser, avatar = false, lastDate, messagesLoaded, usersLoaded;
var $$ = Dom7;
var chattr = new Framework7({
    modalTitle: 'Chattr Login',
    animateNavBackIcon: true,
});



users.on("value", function(snapshot) {
    $$('#userList').html("");
    var objs = snapshot.val();
    $.each(objs, function(i, obj) {
        var template = '<li><div class="item-content"><div class="item-inner"><div class="item-title">'+obj.name+'</div></div></div></li>';
        $$('#userList').append(template);
    });
    usersLoaded = true;
});
users.on('child_added', function (snapshot) {
    if (!usersLoaded) return;
    var user = snapshot.val();
    if (user.name === username) return;
    chattr.addNotification({
        title:'Hooray!',
        subtitle: 'Say hello to new friend! "' + user.name + '" just joined chat!',
        media: '<img width="44" src="img/icon-144.png">'
    });
});

// Format date
function formatDay(d) {
    var date = new Date(d);
    var weekDay = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' ')[date.getDay()];
    var day = date.getDate();
    var month = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ')[date.getMonth()];
    return weekDay + ', ' + month + ' ' + day;
}
function formatTime(d) {
    var date = new Date(d);
    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    return hours + ':' + mins;
}
function formatDate(d) {
    return formatDay(d) + ', <span>' + formatTime(d) + '</span>';
}

// Initial load
function stripMessage(messageText) {
    messageText = $.emoticons.replace(messageText);
    if (!(messageText.indexOf('<img') === 0 && messageText.split('<').length === 2 || messageText.indexOf('<span class="emoticon') >= 0)) {
        messageText = messageText.replace(/>/g, '&gt;').replace(/</g, '&lt;');
    }
    messageText.replace(/script/g, 'scr\bipt');
    return messageText;
}
function loadMessages(snapshot) {
    var messages = snapshot.val();
    var html = '', messageId, message;
    for (messageId in messages) {
        message = messages[messageId];
        if (message.date && lastDate) {
            if (message.date - lastDate > 1000 * 60 * 5) {
                html += '<div class="messages-date">' + formatDate(message.date) + '</div>';
            }
        }
        var messageText = stripMessage(message.message);
        html += '<div class="message message-received"><div class="message-name">' + message.name + '</div><div class="message-text">' + messageText + '</div>' + (message.avatar ? '<div class="message-avatar" style="background-image:url(' + (message.avatar) + ')"></div>' : '') + '</div>';
        if(message.date) lastDate = message.date;
    }
    $('.messages-content .messages').html(html);
    chattr.initMessages('.page[data-page="messages"]');
}
chats.on("value", function(snapshot) {
    if (messagesLoaded) return;
    loadMessages(snapshot);
    messagesLoaded = true;
});

// Receive message
function receiveMessage(snapshot) {
    var message = snapshot.val();
    if (message.name === username) return;
    var date = new Date();
        var offset = date.getTimezoneOffset() * 60 * 1000;
        date = date.getTime() + offset;

    var day, time;
    
    if (!lastDate || (lastDate && date - lastDate  > 1000 * 60 * 5)) {
        day = formatDay(date);
        time = formatTime(date);
        lastDate = date;
    }
    chattr.addMessage({
        text: stripMessage(message.message),
        type: 'received',
        name: message.name,
        avatar: message.avatar,
        day: day,
        time: time
    });
}
chats.on("child_added", function(snapshot) {
    if (!messagesLoaded) return;
    receiveMessage(snapshot);
});


// Send message
$$('.messagebar a.link').on('click', function () {
    var textarea = $$('.messagebar textarea');
    var messageText = textarea.val();
    if (messageText.length === 0) return;
    textarea.val('').trigger('change');
    var date = new Date();
    var offset = date.getTimezoneOffset() * 60 * 1000;
    date = date.getTime() + offset;
    var day, time;
    if (!lastDate || (lastDate && date - lastDate > 1000 * 60 * 5)) {
        day = formatDay(date);
        time = formatTime(date);
        lastDate = date;
    }
    chats.push({name: username, message: messageText, avatar: avatar, date: date});

    // Add Message
    chattr.addMessage({
        text: stripMessage(messageText),
        type: 'sent',
        name: username,
        avatar: avatar,
        day: day,
        time: time
    });
    
});

$$('#sendPhoto').on('click', function () {
    chattr.prompt('Enter your image URL', function (data) {
        var messageText = '<img src="'+data+'">';
        var date = new Date();
        var offset = date.getTimezoneOffset() * 60 * 1000;
        date = date.getTime() + offset;
        var day, time;
        if (!lastDate || (lastDate && date - lastDate > 1000 * 60 * 5)) {
            day = formatDay(date);
            time = formatTime(date);
            lastDate = date;
        }
        chats.push({name: username, message: messageText, avatar: avatar, date: date});
        chattr.addMessage({
            text: messageText,
            type: 'sent',
            name: username,
            avatar: avatar,
            day: day,
            time: time
        });
        lastDate = date;
    });
});

// Login
function login() {
    chattr.prompt('What is your name (or gravatar email)?', function (data) {
        username = data || 'Anon';
        chattr.alert('Ok, you are now logged in as ' + username + ' ;)');
        newUser = users.push({name: username});
        userId = newUser.name();
        if(validateEmail(username)) {
            username = username.toLowerCase();
            avatar = 'http://www.gravatar.com/avatar/' + md5(username);
        }
    }, login);    
}
login();
