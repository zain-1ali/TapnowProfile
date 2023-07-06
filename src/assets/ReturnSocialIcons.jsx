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
import reddit from './socialLink/reddit.png'

import discord from './socialLink/discord.png'
import tumblr from './socialLink/tumblr.png'



// import music icons 
import spotify from './socialLink/spotify.png'

import applemusic from './socialLink/applemusic.png'
import soundcloud from './socialLink/soundcloud.png'


// import payment icons 

import cashapp from './socialLink/cash.svg'
import paypal from './socialLink/paypal.png'

// import payment icons 

import website from './socialLink/website.png'
import calendly from './socialLink/calendly.png'
import custom from './socialLink/customlink.png'


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




    {
        name:'Reddit',
        img:reddit,
        placeholder:'reddit profile Url*'
    },
    {
        name:'Discord',
        img:discord,
        placeholder:'Discord server link*'
    },
    {
        name:'Tumblr',
        img:tumblr,
        placeholder:'Telegram Number*'
    },
    ]



    export const media=[
        {
            name:'Spotify',
            img:spotify,
            placeholder:'Spotify link*'
        },
        {
            name:'Apple Music',
            img:applemusic,
            placeholder:'Link to Apple Music*'
        },
        {
            name:'SoundCloud',
            img:soundcloud,
            placeholder:'SoundCloud username*'
        },
       
        ]



        export const payment=[
            {
                name:'Cash App',
                img:cashapp,
                placeholder:'Cash App username*'
            },
            {
                name:'PayPal',
                img:paypal,
                placeholder:'paypal.me link*'
            },
            
            ]


            export const more=[
                {
                    name:'Website',
                    img:website,
                    placeholder:'Website link*'
                },
                {
                    name:'Calendly',
                    img:calendly,
                    placeholder:'Calendly link*'
                },
                {
                    name:'Custom link',
                    img:custom,
                    placeholder:'Custom link*'
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
else if (name==='Reddit') {
    return reddit
}
else if (name==='Discord') {
    return discord
}
else if (name==='Tumblr') {
    return tumblr
}
else if (name==='Spotify') {
    return spotify
}
else if (name==='Apple Music') {
    return applemusic
}
else if (name==='SoundCloud') {
    return soundcloud
}
else if (name==='Cash App') {
    return applemusic
}
else if (name==='PayPal') {
    return paypal
}
else if (name==='Calendly') {
    return calendly
}
else if (name==='Website') {
    return website
}
else if (name==='Custom') {
    return custom
}
else if (name==='CashApp') {
    return cashapp
}
else if (name==='AppleMusic') {
    return applemusic
}
    }


    export  let returnSocialUrl = (name, url) => {
        if (name === "Instagram") {
          return `https://www.instagram.com/${url}/`;
        } else if (name === "LinkedIn") {
          return url;
        } else if (name === "Email") {
          return `mailto:${url}`;
        } else if (name === "Whatsapp") {
          return `https://wa.me/${url}`;
        }
        else if (name === 'Text') {
            return `sms:${url}`
        }
        else if (name === "Call") {
          return `tel:${url}`;
        } else if (name === "Snapchat") {
          return `https://www.snapchat.com/add/${url}`;
        } else if (name === "Youtube") {
          return url;
        } else if (name === "Pinterest") {
          return `https://www.pinterest.com/${url}`
        } 
        else if (name === "CashApp") {
          return `https://cash.app/$${url}`
        } 
        else if (name === "PayPal") {
            return `https://www.paypal.com/paypalme/${url}`
          }
          else if (name === "SoundCloud") {
            return `https://soundcloud.com/${url}`
          }
          else if (name === "Reddit") {
            return `https://www.reddit.com/user/${url}`
          }

        //   else if (name === "Reddit") {
        //     return `https://www.reddit.com/user/${url}`
        //   } 
          
          
        else if (name === "Twitch") {
            return `https://www.twitch.tv/${url}`
          } 
        else if (name === "Twitter") {
          return `https://www.Twitter.com/${url}`;
        } else if (name === "TikTok") {
          return `https://tiktok.com/@${url}`;
        } else {
          if (url?.includes("https://")) {
            return url;
          } else {
            return `https://${url}`;
          }
        }
      };



