Resources to make things Faster
1)ES7 Code snippts (rfce command is very important)



---------Step 1    Required Set up--------
I create a Folder of AirBNB clone in my system
Then I opened Vs Code and open this folder
Then through comment "npx create-react-app appname"  I created folder.First npm downloaded required modules in node module folder.And make required enteries in package.json.().When other person download our code then npx command install require module on system as node-module folder is in git ignore.
To check every thing is working fine i went into app folder with "cd foldername" command and ran command "npm start". It opened app on localhost:3000


----------Step 2    FireBase Set up-----------
It is required for data and Hosting our Website Online
Login with google on FireBase and Select "Go to Console"
Click  add a project and give it a name, and for next one to two steps select continue.This will give message your app is ready.Click continue again.
It will by default open your app.Click on logo that sys Web it logo is like <>.
Give you app a name
Skip step of firebase sdk
Install firebase tool     (-g stand for global).
As this is global tool so when next person install it again on computer ,so it will not avaible in package json.


----------Step 3    Remove unnessary Files of Inital Set up-----------
Remove test files
Remove data in app.css
Rempove dafult content and image in app.js
Set default margin to 0 in index.css


--------Step 4     We decided What page componets and what smaller components will be made-----------------
Decide what page  components and components inside them will be needed. 
Added comment to mention in app.js like {/*   */}
Make folder of  component make js and css file link them together and import js file in app.js

-------Step 5 Mateiral UI------------------------------
Install Mateiral UI  icons library or packages in following order
npm install @material-ui/core
npm install @material-ui/icons


---Step 6 Setting up header---------------------------
Make your header with display flex so section can come in horizontal line and align items center so that vertical the section can align
and justify content space between for parent so header section are a good distance
Set position sticky top 0 and background for header parent so header remain stick to top enen on scrll
For each Individual section also use display flex and align item center
The division you want to give maximum space give it flex 1
For div that cotain search bar esessary define width fit content and height:30px
For left and right division give them margin from their respective side



