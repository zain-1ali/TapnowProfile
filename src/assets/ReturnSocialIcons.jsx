// import contact icons 

import call from './socialLink/phone.png'
import text from './socialLink/text.png'
import whatsapp from './socialLink/whatsapp.png'
import email from './socialLink/email.png'


// import social icons 

import instagram from './socialLink/instagram.png'
import facebook from './socialLink/facebook.png'
import tiktok from './socialLink/tiktok.png'
import twitter from './socialLink/twitter.png'

import linkedin from './socialLink/linkedin.png'
import twitch from './socialLink/twitch.png'
import pinterest from './socialLink/pinterest.png'
import youtube from './socialLink/youtube.png'

import snapchat from './socialLink/snapchat.png'
import telegram from './socialLink/telegram.png'
// import pinterest from './socialLink/pinterest.png'
// import youtube from './socialLink/twitter.png'



export const contactIcons=[
{
    name:'Call',
    img:call,
    placeholder:'Phone Number*'
},
{
    name:'Text',
    img:text,
    placeholder:'Phone Number*'
},
{
    name:'Whatsapp',
    img:whatsapp,
    placeholder:'Phone Number*'
},
{
    name:'Email',
    img:email,
    placeholder:'Email*'
},
]



export const socialIcons=[
    {
        name:'Instagram',
        img:instagram,
        placeholder:'Instagram Username*'
    },
    {
        name:'Facebook',
        img:facebook,
        placeholder:'Facebook Profile Link*'
    },
    {
        name:'Tiktok',
        img:tiktok,
        placeholder:'Tiktok Username*'
    },
    {
        name:'Twitter',
        img:twitter,
        placeholder:'Twitter Username*'
    },




    {
        name:'Linkedin',
        img:linkedin,
        placeholder:'Linkedin Profile Link*'
    },
    {
        name:'Twitch',
        img:twitch,
        placeholder:'Twitch Username*'
    },
    {
        name:'Pinterest',
        img:pinterest,
        placeholder:'Pinterest Username*'
    },
    
    {
        name:'Youtube',
        img:youtube,
        placeholder:'Youtube Chanel Url*'
    },
    {
        name:'Snapchat',
        img:snapchat,
        placeholder:'Snapchat Username*'
    },
    {
        name:'Telegram',
        img:telegram,
        placeholder:'Telegram Number*'
    },
    ]


    export let returnIcons=(name)=>{
if (name==='Call') {
    return call
}
else if (name==='Text') {
    return text
}
else if (name==='Whatsapp') {
    return whatsapp
}
else if (name==='Email') {
    return email
}
else if (name==='Snapchat') {
    return snapchat
}
else if (name==='Facebook') {
    return facebook
}
else if (name==='Instagram') {
    return instagram
}
else if (name==='Twitter') {
    return twitter
}
else if (name==='Twitch') {
    return twitch
}
else if (name==='Youtube') {
    return youtube
}
else if (name==='Telegram') {
    return telegram
}
else if (name==='Pinterest') {
    return pinterest
}
else if (name==='Tiktok') {
    return tiktok
}
else if (name==='Linkedin') {
    return linkedin
}
    }



    //   return url

   export let returnSocialUrl = (name, url) => {
    if (name === "Instagram") {
      return `https://www.instagram.com/${url}/`;
    } else if (name === "LinkedIn") {
      return url;
    } else if (name === "Email") {
      return `mailto:${url}`;
    } else if (name === "Whatsapp") {
      return `https://wa.me/${url}`;
    }
    // else if (name === 'Website') {
    //     return url
    // }
    else if (name === "Phone") {
      return `tel:${url}`;
    } else if (name === "Snapchat") {
      return `https://www.snapchat.com/add/${url}`;
    } else if (name === "Youtube") {
      return url;
    } else if (name === "Pinterest") {
      return url;
    } 
    else if (name === "Facebook") {
      return url;
    } 
    else if (name === "Twitter") {
      return `https://www.Twitter.com/${url}`;
    } else if (name === "TikTok") {
      return `https://tiktok.com/@${url}`;
    } else {
      if (name?.includes("https://")) {
        return url;
      } else {
        return `https://${url}`;
      }
    }
  };



