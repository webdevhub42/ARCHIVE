(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+m/Z":function(e,t,a){"use strict";var o=a("kD0k"),i=a.n(o),n=(a("ls82"),a("/S4K")),s=a("9Hrx"),r=a("q1tI"),l=a.n(r),c=a("vDqi"),p=a.n(c),u=a("Xzd7"),d=a("qKvR"),b=["//js.hsforms.net/forms/v2-legacy.js","//js.hsforms.net/forms/v2.js"],m=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleEmailChange=function(e){a.setState({submitSuccess:!1,error:"",emailAddress:e.target.value})},a.verifyEmail=function(){var e=Object(n.a)(i.a.mark((function e(t){var a,o,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://solutelabs.com/.netlify/functions/email-validator?email="+t,e.next=3,fetch(a);case 3:return o=e.sent,e.next=6,o.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSubmitSuccess=function(){a.setState({submitSuccess:!0,submitting:!1})},a.handleSubmitStart=function(){a.setState({submitSuccess:!1,submitting:!0,error:""})},a.handleSubmitError=function(e){a.setState({submitting:!1,error:e})},a.onSubmit=function(){var e=Object(n.a)(i.a.mark((function e(t){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.handleSubmitStart(),o=a.state.emailAddress,!Object(u.a)(o)){e.next=14;break}return e.next=5,a.verifyEmail(o);case 5:if("valid"===e.sent.status){e.next=10;break}a.handleSubmitError("Invalid Email"),e.next=12;break;case 10:return e.next=12,a.handleConstantContactSubmission();case 12:e.next=15;break;case 14:a.handleSubmitError("Invalid Email");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleConstantContactSubmission=Object(n.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://solutelabs.com/.netlify/functions/join-newsletter?email="+a.state.emailAddress);case 3:if(200!==e.sent.status){e.next=8;break}a.handleSubmitSuccess(),e.next=9;break;case 8:throw Error("Something went wrong. Please try again.");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),a.handleSubmitError("Something went wrong. Please try again.");case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),a.instance=l.a.createRef(),a.state={submitSuccess:!1,error:null,emailAddress:"",submitting:!1},a}Object(s.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){for(var e=0;e<b.length;++e){var t=document.createElement("script");t.src=b[e],t.type="text/javascript",t.charset="utf-8",this.instance.current.appendChild(t)}t.addEventListener("load",(function(){window.hbspt&&window.hbspt.forms.create({css:"",cssRequired:"",portalId:"5625023",formId:"63b54c12-deef-4e21-86ad-5d0969b7e180",target:"#hubspotForm"})}))},a.render=function(){var e=this.state,t=e.error,a=e.submitSuccess,o=e.submitting;return Object(d.c)("div",{className:"anchor-link-spacing-subscribe",id:"subscribeblock"},Object(d.c)("div",{className:"blog-get-stories"},Object(d.c)("div",{className:"row align-items-center"},Object(d.c)("div",{className:"col-12 col-lg-7"},Object(d.c)("h5",{className:"font-40 line-48 text-white weight-600 font-montserrat font-34-lg font-28-tab font-20-mobile"},"Get stories in your ",Object(d.c)("br",{className:"d-none d-xl-block"})," inbox twice a month."),Object(d.c)("p",{className:"font-14 text-white opacity-50 weight-400"},"we respect your email")),Object(d.c)("div",{className:"col-12 col-lg-5"},Object(d.c)("div",{className:"input-group"},!o||a||t?a?Object(d.c)("p",{className:"font-montserrat font-16 text-light-white m-auto weight-500 font-14-mobile"},"Subscribed! Watch out for our Blogs"):Object(d.c)(l.a.Fragment,null,Object(d.c)("div",{className:"get-stories-form d-flex align-items-stetch flex-wrap",ref:this.instance,id:"hubspotForm"}),t&&Object(d.c)("p",{style:{color:"red",padding:"10px 0px 0",fontSize:"14px",margin:"0"}},t),a):Object(d.c)("p",{className:"font-montserrat font-16  text-light-white m-auto weight-500 font-14-mobile saving"},"Adding you to our Blogs Subscription"," ",Object(d.c)("span",{className:"font-40"},"."),Object(d.c)("span",{className:"font-40"},"."),Object(d.c)("span",{className:"font-40"},".")))))))},t}(l.a.Component);t.a=m},"1c7f":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(a("q1tI")),i=n(a("17x9"));function n(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t=e.breakLabel,a=e.breakClassName,i=e.breakLinkClassName,n=e.onClick,s=a||"break";return o.default.createElement("li",{className:s},o.default.createElement("a",{className:i,onClick:n,role:"button",tabIndex:"0",onKeyPress:n},t))};s.propTypes={breakLabel:i.default.oneOfType([i.default.string,i.default.node]),breakClassName:i.default.string,breakLinkClassName:i.default.string,onClick:i.default.func.isRequired},t.default=s},"3LHp":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(a("q1tI")),i=n(a("17x9"));function n(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t=e.pageClassName,a=e.pageLinkClassName,i=e.onClick,n=e.href,s=e.ariaLabel||"Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),r=null;return e.selected&&(r="page",s=e.ariaLabel||"Page "+e.page+" is your current page",t=void 0!==t?t+" "+e.activeClassName:e.activeClassName,void 0!==a?void 0!==e.activeLinkClassName&&(a=a+" "+e.activeLinkClassName):a=e.activeLinkClassName),o.default.createElement("li",{className:t},o.default.createElement("a",{onClick:i,role:"button",className:a,href:n,tabIndex:"0","aria-label":s,"aria-current":r,onKeyPress:i},e.page))};s.propTypes={onClick:i.default.func.isRequired,selected:i.default.bool.isRequired,pageClassName:i.default.string,pageLinkClassName:i.default.string,activeClassName:i.default.string,activeLinkClassName:i.default.string,extraAriaContext:i.default.string,href:i.default.string,ariaLabel:i.default.string,page:i.default.number.isRequired},t.default=s},"8o2o":function(e,t,a){"use strict";function o(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}a.d(t,"a",(function(){return o}))},JwTb:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var o={home:{title:"Mobile and Web App Design and Development - SoluteLabs",description:"An experienced, high-performance team having produced Top #10 apps with Millions of users; We have launched over 100 scalable, production-ready applications.",keywords:["DevOps, Agile, RoR development company, AngularJS development company, mobile app development company India, android app development, iPhone apps development, mobile app development, web development, mobile UI design"],og:{title:"Mobile and Web App Design and Development - SoluteLabs",description:"An experienced, high-performance team having produced Top #10 apps with Millions of users; We have launched over 100 scalable, production-ready applications."}},contact:{title:"Contact Solutelabs | We help build your ideas to life",description:"Solutelabs is a product development firm with expertise in Ruby on Rails, ReactJS and React Native, and Flutter app development. Interested in working with us?",keywords:["DevOps, Agile, RoR development company, AngularJS development company, mobile app development company India, android app development, iPhone apps development, mobile app development, web development, mobile UI design"],og:{title:"Contact Solutelabs | We help build your ideas to life",description:"Solutelabs is a product development firm with expertise in Ruby on Rails, ReactJS and React Native, and Flutter app development. Interested in working with us?"},canonical:"contact"},webappdev:{title:"Custom Web App Development Services | SoluteLabs",description:"Are you in search of web app development for your business? We can provide the best website application development services to become your growth partner.",og:{title:"Custom Web App Development Services | SoluteLabs",description:"Are you in search of web app development for your business? We can provide the best website application development services to become your growth partner."},canonical:"web-app-development"},ruby:{title:"Ruby on Rails Development Services, RoR Development Company",description:"Ruby on Rails (RoR) development services company- Our Ruby on Rails developers build scalable, secure and production-ready web & mobile apps. Hire now. ",og:{title:"Ruby on Rails Development Services, RoR Development Company",description:"Ruby on Rails (RoR) development services company- Our Ruby on Rails developers build scalable, secure and production-ready web & mobile apps. Hire now. "},canonical:"ruby-on-rails-development-services"},node:{title:"NodeJS Web App Development Services | SoluteLabs",description:"Are you looking to build data-intensive, real-time applications with high concurrency? Hire NodeJS Development Experts from SoluteLabs for your product.",og:{title:"NodeJS Web App Development Services | SoluteLabs",description:"Are you looking to build data-intensive, real-time applications with high concurrency? Hire NodeJS Development Experts from SoluteLabs for your product."},canonical:"nodejs-development-services"},react:{title:"ReactJS Development Services Company | Hire React Dev - SoluteLabs",description:"ReactJS development company- we provide ReactJS development services to build modern web apps- PWA, SPA, etc. Look at apps we've built & hire developers now. ",og:{title:"ReactJS Development Services Company | Hire React Dev - SoluteLabs",description:"ReactJS development company- we provide ReactJS development services to build modern web apps- PWA, SPA, etc. Look at apps we've built & hire developers now. "},canonical:"reactjs-development-services"},angular:{title:"Angular Web App Development Services | SoluteLabs",description:"Our Angular Web Development services include developing high-performant Angular apps for enterprises, custom apps, plugins & more. Contact us today for a demo.",og:{title:"Angular Web App Development Services | SoluteLabs",description:"Our Angular Web Development services include developing high-performant Angular apps for enterprises, custom apps, plugins & more. Contact us today for a demo."},canonical:"angular-development-services"},emergingTech:{title:"Emerging Technologies | Chatbots · Alexa · Google Home",description:"Give your business leverage by using emerging technologies such as Facebook Chatbots, Alexa and Google Home Development, Blockchain and IoT.",og:{title:"Emerging Technologies | Chatbots · Alexa · Google Home",description:"Give your business leverage by using emerging technologies such as Facebook Chatbots, Alexa and Google Home Development, Blockchain and IoT."},canonical:"emerging-technologies"},mobileappdev:{title:"Mobile App Development Services · iOS · Android | SoluteLabs",description:"SoluteLabs is a product development firm focused on Mobile App Development. Our team of experts have created multiple chart-topping, stunning and sleek apps.",og:{title:"Mobile App Development Services · iOS · Android | SoluteLabs",description:"SoluteLabs is a product development firm focused on Mobile App Development. Our team of experts have created multiple chart-topping, stunning and sleek apps."},canonical:"mobile-app-development"},ios:{title:"iOS Development Company- iPhone, iPad, MacOS, WatchOS, tvOS",description:"iOS app development services company- We've built top #10 apps on the iOS App Store. Our iOS developers build apps for iPhone, iPad, MacOS, WatchOS, tvOS.",og:{title:"iOS Development Company- iPhone, iPad, MacOS, WatchOS, tvOS",description:"iOS app development services company- We've built top #10 apps on the iOS App Store. Our iOS developers build apps for iPhone, iPad, MacOS, WatchOS, tvOS."},canonical:"ios-app-development-services"},reactnative:{title:"React Native App Development Company | React Native Developers",description:"Our React Native app development company provides RN development services for native-looking Android & iOS mobile apps. Hire RN developers from SoluteLabs.",og:{title:"React Native App Development Company | React Native Developers",description:"Our React Native app development company provides RN development services for native-looking Android & iOS mobile apps. Hire RN developers from SoluteLabs."},canonical:"react-native-app-development-service"},android:{title:"Android App Development Services · Java · Kotlin · Flutter",description:"Need Android App Development Services? We're SoluteLabs, a leading Android Mobile App Development Company that has created top #10 apps on the Android PlayStore.",og:{title:"Android App Development Services · Java · Kotlin · Flutter",description:"Need Android App Development Services? We're SoluteLabs, a leading Android Mobile App Development Company that has created top #10 apps on the Android PlayStore."},canonical:"android-app-development-services"},flutter:{title:"Flutter App Development Services, Company | Hire Flutter Dev",description:"Flutter app development services company- We build beautiful, UX-rich native apps faster. Look at apps we've built and hire our Flutter developers.",og:{title:"Flutter App Development Services, Company | Hire Flutter Dev",description:"Flutter app development services company- We build beautiful, UX-rich native apps faster. Look at apps we've built and hire our Flutter developers."},canonical:"flutter-app-development-services"},serviceproduct:{title:"UI UX Product Design Services | SoluteLabs",description:"Design is at the core of the success of any application, and to impress today's user - your app needs to have UI and UX that stands out. Check out our portfolio",canonical:"ui-ux-app-design",og:{title:"UI UX Product Design Services | SoluteLabs",description:"Design is at the core of the success of any application, and to impress today's user - your app needs to have UI and UX that stands out. Check out our portfolio"}},services:{title:"Our Services | SoluteLabs",description:"We develop mobile & web apps that help you leverage digital experiences for your customers & grow your business exponentially. Let's plan your strategy.",canonical:"services",og:{title:"Our Services | SoluteLabs",description:"We develop mobile & web apps that help you leverage digital experiences for your customers & grow your business exponentially. Let's plan your strategy."}},reelo:{title:"Loyalty App Development | Restaurant Loyalty Programs - Solutelabs",description:"Loyalty app development is vital for firms who want to generate repeat customers. Checkout Reelo,an app powering 1200+ businesses and over 1.4Million customers.",canonical:"case-studies/reelo",og:{title:"Loyalty App Development | Restaurant Loyalty Programs - Solutelabs",description:"Loyalty app development is vital for firms who want to generate repeat customers. Checkout Reelo,an app powering 1200+ businesses and over 1.4Million customers."}},alldaydr:{title:"Doctor Video Consultation and Online Pharmacy App | SoluteLabs",description:"Read how SoluteLabs built alldayDr, a CQC and ISO 27001 certified Online Doctor consultation and Pharmacy app for a UK client.Reach out for a Free Consultation.",canonical:"case-studies/alldaydr",og:{title:"Doctor Video Consultation and Online Pharmacy App | SoluteLabs",description:"Read how SoluteLabs built alldayDr, a CQC and ISO 27001 certified Online Doctor consultation and Pharmacy app for a UK client.Reach out for a Free Consultation."}},stockchartx:{title:"Technical Charts | HTML5 Financial Charting Library - Solutelabs",description:"StockChartX, by Modulus®, is the Most Powerful and Flexible HTML5 Financial charting solution. Read how SoluteLabs added indicators & helped the product evolve.",canonical:"case-studies/stockchartx",og:{title:"Technical Charts | HTML5 Financial Charting Library - Solutelabs",description:"StockChartX, by Modulus®, is the Most Powerful and Flexible HTML5 Financial charting solution. Read how SoluteLabs added indicators & helped the product evolve."}},sportclubby:{title:"Develop Sports Booking Apps with Solutelabs",description:"Read about how Solutelabs built SportClubby (now funded), a robust, secure, and multi-lingual sports facilities booking system for an Italian client.",canonical:"case-studies/sportclubby",og:{title:"Develop Sports Booking Apps with Solutelabs",description:"Read about how Solutelabs built SportClubby (now funded), a robust, secure, and multi-lingual sports facilities booking system for an Italian client."}},dailymoves:{title:"Exercise and Fitness Mobile App Development | SoluteLabs",description:"Read about 7DailyMoves, an iOS and Android mobile and iWatch app with over 10M impressions and 100k downloads. Contact us to Schedule a Discovery Meeting now!",canonical:"case-studies/7dailymoves",og:{title:"Exercise and Fitness Mobile App Development | SoluteLabs",description:"Read about 7DailyMoves, an iOS and Android mobile and iWatch app with over 10M impressions and 100k downloads. Contact us to Schedule a Discovery Meeting now!"}},remedysocial:{title:"Preventive Healthcare App Development | SoluteLabs",description:"Read how SoluteLabs built a preventive healthcare app based on a clinically validated algorithm to determine the probability of developing particular diseases.",canonical:"case-studies/remedysocial",og:{title:"Preventive Healthcare App Development | SoluteLabs",description:"Read how SoluteLabs built a preventive healthcare app based on a clinically validated algorithm to determine the probability of developing particular diseases."}},plexusmd:{title:"Social Network for Doctors in India | Solutelabs",description:"PlexusMD is a social networks for Doctors. See how we built apps which ranked top #10 on both the iOS and Android app stores, improved & developed their web app.",canonical:"case-studies/plexusmd",og:{title:"Social Network for Doctors in India | Solutelabs",description:"PlexusMD is a social networks for Doctors. See how we built apps which ranked top #10 on both the iOS and Android app stores, improved & developed their web app."}},theken:{title:"A Subscription only Business News App | Solutelabs",description:"See how SoluteLabs improved user acqusition and rentention for The Ken - India’s leading Online Media House.",canonical:"case-studies/theken",og:{title:"A Subscription only Business News App | Solutelabs",description:"See how SoluteLabs improved user acqusition and rentention for The Ken - India’s leading Online Media House."}},healthcare:{title:"Build Secure and Scalable Healthcare Solutions | Solutelabs",description:"From survey apps to complex CQC certified, HIPAA compliant apps - we have extensive experience working on cutting edge healthcare solutions.",canonical:"healthcare-solutions",og:{title:"Build Secure and Scalable Healthcare Solutions | Solutelabs",description:"From survey apps to complex CQC certified, HIPAA compliant apps - we have extensive experience working on cutting edge healthcare solutions."}},sports:{title:"Sports App Development Solutions | Solutelabs",description:"Do you want to create a sports app solutions? You're in luck! We have been developing sports apps with excellent user experience for five years.",canonical:"sports-apps-solutions",og:{title:"Sports App Development Solutions | Solutelabs",description:"Do you want to create a sports app solutions? You're in luck! We have been developing sports apps with excellent user experience for five years."}},fintech:{title:"Fintech Software Solutions | Solutelabs",description:"Are you looking to develop fintech solutions? Leverage our experience working with charting libraries, fantasy games, card recommendation engines, and more.",canonical:"fintech-software-solutions",og:{title:"Fintech Software Solutions | Solutelabs",description:"Are you looking to develop fintech solutions? Leverage our experience working with charting libraries, fantasy games, card recommendation engines, and more."}},about:{title:"About Solutelabs | Product Development Company in India",description:"Product Development looks hard; it doesn't have to be. Work with us to leverage our experience of building robust mobile & web apps while you focus on business.",canonical:"aboutus",og:{title:"About Solutelabs | Product Development Company in India",description:"Product Development looks hard; it doesn't have to be. Work with us to leverage our experience of building robust mobile & web apps while you focus on business."}},team:{title:"Meet the Team | Solutelabs ",description:"Meet our team of designers, engineers, and analysts who work to bring clients' ideas to life. We aim to deliver above expectations.",canonical:"our-team",og:{title:"Meet the Team | Solutelabs ",description:"Meet our team of designers, engineers, and analysts who work to bring clients' ideas to life. We aim to deliver above expectations."}},careers:{title:"Careers | Job Opportunities at SoluteLabs",description:"We're looking for highly motivated, enthusiastic, and passionate people — we have an open culture and friendly atmosphere which is motivating, and challenging.",canonical:"careers",og:{title:"Careers | Job Opportunities at SoluteLabs",description:"We're looking for highly motivated, enthusiastic, and passionate people — we have an open culture and friendly atmosphere which is motivating, and challenging."}},casestudies:{title:"Web & Mobile App Development Case Studies | SoluteLabs",description:"Check out the case studies of the web, and mobile applications designed and developed by our experts at SoluteLabs. Let us be your partner in growth.",og:{title:"Web & Mobile App Development Case Studies | SoluteLabs",description:"Check out the case studies of the web, and mobile applications designed and developed by our experts at SoluteLabs. Let us be your partner in growth."},canonical:"case-studies"},industries:{title:"Industries we serve | SoluteLabs",description:"Learn about the industries we have impacted at SoluteLabs. We quickly gain domain knowledge into the industries we work with to create products that delight.",canonical:"industry-solution",og:{title:"Industries we serve | SoluteLabs",description:"Learn about the industries we have impacted at SoluteLabs. We quickly gain domain knowledge into the industries we work with to create products that delight."}},illustrationservices:{title:"Custom Illustration Design Services Agency - SoluteLabs",description:"Hire the top illustration design services agency, SoluteLabs, to create custom illustrations or artwork for full-fledged digital products & engaging landing pages.",canonical:"illustration-services",og:{title:"Custom Illustration Design Services Agency - SoluteLabs",description:"Hire the top illustration design services agency, SoluteLabs, to create custom illustrations or artwork for full-fledged digital products & engaging landing pages."}},uxstrategy:{title:"UX Research, Strategy, and Design Services - SoluteLabs",description:"Our UX strategy solutions offer you a complete competitive business strategy, UX research, UX design, and high-value low-cost killer digital products.",canonical:"ux-strategy",og:{title:"UX Research, Strategy, and Design Services - SoluteLabs",description:"Our UX strategy solutions offer you a complete competitive business strategy, UX research, UX design, and high-value low-cost killer digital products."}},uidesign:{title:"UI/UX Design Services for Mobile & Web Products - SoluteLabs",description:"The top UI/UX design and development services company, SoluteLabs, offers UI/UX solutions that increase user retention, engagement & loyalty with 100% ROI.",canonical:"ui-design",og:{title:"UI/UX Design Services for Mobile & Web Products - SoluteLabs",description:"The top UI/UX design and development services company, SoluteLabs, offers UI/UX solutions that increase user retention, engagement & loyalty with 100% ROI."}},termsofuse:{title:"Website Privacy Policy, Terms & Conditions of Use - SoluteLabs",description:"Learn more about the SoluteLabs website's terms and conditions of use, privacy policy, links, personal data processing, scope, data retention process, and more.",canonical:"term-of-use",og:{title:"Website Privacy Policy, Terms & Conditions of Use - SoluteLabs",description:"Learn more about the SoluteLabs website's terms and conditions of use, privacy policy, links, personal data processing, scope, data retention process, and more."}},gotanidea:{title:"For Innovative & Revolutionary Product Ideas, Talk to SoluteLabs",description:"Do you have a product idea? Share it to our product development team & we'll help you with unmatched product engineering solutions to boost customer experience.",canonical:"got-an-idea",og:{title:"For Innovative & Revolutionary Product Ideas, Talk to SoluteLabs",description:"Do you have a product idea? Share it to our product development team & we'll help you with unmatched product engineering solutions to boost customer experience."}},blog:{title:"Web & Mobile App Development Blog | SoluteLabs",description:"Web & mobile app development tutorials, how-to codes, best practices, tips, hacks- Flutter, React Native, Ruby on Rails, Node.JS, React.JS, and more.",keywords:["web development tutorial, mobile app development tutorials, how-to codes, best practices, tips, Flutter hacks, React Native, Ruby on Rails, Node.JS, React.JS, tech blog"],og:{title:"Web & Mobile App Development Blog: Learn Vs. Unlearn: SoluteLabs",description:"Web & mobile app development tutorials, how-to codes, best practices, tips, hacks- Flutter, React Native, Ruby on Rails, Node.JS, React.JS, and more."},canonical:"blog"}}},UYWk:function(e,t,a){"use strict";var o=a("q1tI"),i=a.n(o),n=a("Wbzz"),s=a("CaE3"),r=a.n(s),l=a("7Qib"),c=a("qKvR");t.a=function(e){var t=e.post,a=new Array;a[0]="January",a[1]="February",a[2]="March",a[3]="April",a[4]="May",a[5]="June",a[6]="July",a[7]="August",a[8]="September",a[9]="October",a[10]="November",a[11]="December";var o=new Date(t.publishedAt),s=o.getFullYear(),p=a[o.getMonth()],u=o.getDate()+" "+p+", "+s,d=Object(l.c)(t.mainImage.asset.id).format("webp").auto("format").width(359).fit("max").url(),b=Object(l.c)(t.mainImage.asset.id).format("pjpg").auto("format").width(359).fit("max").url(),m=Object(l.c)(t.author.image).format("webp").auto("format").width(72).fit("max").url(),v=Object(l.c)(t.author.image).format("pjpg").auto("format").width(72).fit("max").url();return Object(c.c)(i.a.Fragment,null,Object(c.c)("div",{className:"col-12 col-md-4 pb-70 pb-30-mobile"},Object(c.c)("div",{className:"blog-small-post"},Object(c.c)(n.Link,{to:"/blog/"+t.slug.current},Object(c.c)("div",{className:"pos-relative blog-landing-img mb-30"},null!==t.mainImage?Object(c.c)("picture",null,Object(c.c)("source",{srcSet:d,type:"image/webp",className:"img-fluid"}),Object(c.c)("source",{srcSet:b,type:"image/jpeg",className:"img-fluid"}),Object(c.c)("img",{src:d,alt:t.title,title:t.title,className:"img-fluid"})):null)),Object(c.c)("h5",{className:"blog-tag-name text-blue font-11 font-montserrat weight-500 mb-6"},t.tags?Object(c.c)("div",null,t.tags.map((function(e,t){return Object(c.c)(n.Link,{to:"/blog/"+e.slug.current,key:t.toString()},Object(c.c)("span",{className:"mr-13 text-blue",key:e.title},e.title))}))):null),Object(c.c)(n.Link,{to:"/blog/"+t.slug.current},t.title?Object(c.c)("h2",{className:"blog-post-title font-20 font-montserrat weight-600 mb-10 line-28 font-18-tab"},t.title):null),Object(c.c)("div",{className:"blog-landing-text font-16 weight-400 line-24 mb-25 testing11"},t.excerpt?Object(c.c)(r.a,{lines:2,dangerouslySetInnerHTML:{__html:t.excerpt}}):null),Object(c.c)("div",{className:"d-flex align-items-center blog-landing-user-block"},Object(c.c)("div",{className:"bolg-avatar pos-relative d-inline-block"},t.author?Object(c.c)(n.Link,{to:"/blog/"+t.author.slug.current},Object(c.c)("picture",null,Object(c.c)("source",{srcSet:m,type:"image/webp",className:"img-fluid"}),Object(c.c)("source",{srcSet:v,type:"image/jpeg",className:"img-fluid"}),Object(c.c)("img",{src:m,alt:t.author.name,title:t.author.name,className:"img-fluid"}))):null),Object(c.c)("div",{className:"avatar-info"},Object(c.c)("h5",{className:"font-14 font-montserrat weight-600"},t.author?Object(c.c)(n.Link,{to:"/blog/"+t.author.slug.current},Object(c.c)("div",{className:"text-dark"},t.author.name)):null),Object(c.c)("div",{className:"blog-landing-date font-12 font-montserrat weight-400"},u,Object(c.c)("span",{className:"bullet-dot pos-relative"}),t.readingTime?t.readingTime:null))))))}},kzof:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),i=a("q1tI"),n=c(i),s=c(a("17x9")),r=c(a("3LHp")),l=c(a("1c7f"));function c(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.handlePreviousPage=function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)},a.handleNextPage=function(e){var t=a.state.selected,o=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<o-1&&a.handlePageSelected(t+1,e)},a.handlePageSelected=function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))},a.handleBreakClick=function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var o=a.state.selected;a.handlePageSelected(o<e?a.getForwardJump():a.getBackwardJump(),t)},a.callCallback=function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})},a.pagination=function(){var e=[],t=a.props,o=t.pageRangeDisplayed,i=t.pageCount,s=t.marginPagesDisplayed,r=t.breakLabel,c=t.breakClassName,p=t.breakLinkClassName,u=a.state.selected;if(i<=o)for(var d=0;d<i;d++)e.push(a.getPageElement(d));else{var b=o/2,m=o-b;u>i-o/2?b=o-(m=i-u):u<o/2&&(m=o-(b=u));var v=void 0,g=void 0,h=void 0,f=function(e){return a.getPageElement(e)};for(v=0;v<i;v++)(g=v+1)<=s||g>i-s||v>=u-b&&v<=u+m?e.push(f(v)):r&&e[e.length-1]!==h&&(h=n.default.createElement(l.default,{key:v,breakLabel:r,breakClassName:c,breakLinkClassName:p,onClick:a.handleBreakClick.bind(null,v)}),e.push(h))}return e};var o=void 0;return o=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:o},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,o=e.extraAriaContext;void 0===t||a||this.callCallback(t),o&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,o=e+t.pageRangeDisplayed;return o>=a?a-1:o}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,o=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<o)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,o=a.pageClassName,i=a.pageLinkClassName,s=a.activeClassName,l=a.activeLinkClassName,c=a.extraAriaContext;return n.default.createElement(r.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:o,pageLinkClassName:i,activeClassName:s,activeLinkClassName:l,extraAriaContext:c,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.previousClassName,o=e.nextClassName,i=e.pageCount,s=e.containerClassName,r=e.previousLinkClassName,l=e.previousLabel,c=e.nextLinkClassName,p=e.nextLabel,u=this.state.selected,d=a+(0===u?" "+t:""),b=o+(u===i-1?" "+t:""),m=0===u?"true":"false",v=u===i-1?"true":"false";return n.default.createElement("ul",{className:s},n.default.createElement("li",{className:d},n.default.createElement("a",{onClick:this.handlePreviousPage,className:r,href:this.hrefBuilder(u-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":m},l)),this.pagination(),n.default.createElement("li",{className:b},n.default.createElement("a",{onClick:this.handleNextPage,className:c,href:this.hrefBuilder(u+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":v},p)))}}]),t}(i.Component);p.propTypes={pageCount:s.default.number.isRequired,pageRangeDisplayed:s.default.number.isRequired,marginPagesDisplayed:s.default.number.isRequired,previousLabel:s.default.node,nextLabel:s.default.node,breakLabel:s.default.oneOfType([s.default.string,s.default.node]),hrefBuilder:s.default.func,onPageChange:s.default.func,initialPage:s.default.number,forcePage:s.default.number,disableInitialCallback:s.default.bool,containerClassName:s.default.string,pageClassName:s.default.string,pageLinkClassName:s.default.string,activeClassName:s.default.string,activeLinkClassName:s.default.string,previousClassName:s.default.string,nextClassName:s.default.string,previousLinkClassName:s.default.string,nextLinkClassName:s.default.string,disabledClassName:s.default.string,breakClassName:s.default.string,breakLinkClassName:s.default.string,extraAriaContext:s.default.string,ariaLabelBuilder:s.default.func},p.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},t.default=p},l2w3:function(e,t,a){e.exports=a.p+"static/stories-bg-patterns-0fce9aec54ff41f5a3034b1109e7dfeb.png"},uRdJ:function(e,t,a){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return o}))},werx:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=a("kzof"),n=(o=i)&&o.__esModule?o:{default:o};t.default=n.default}}]);
//# sourceMappingURL=8db03d2aecf53270085db0adbbccdd4fc16fb06e-e3e66e1d8069fe18fcf1.js.map