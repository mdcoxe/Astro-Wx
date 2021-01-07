# Astro Wx

### Live link: https://astro-wx.herokuapp.com/

Astro Wx is a full stack app that will provide the user with local and space weather to tell you local weather as well as provide indicators to possible space related events.  Currently the app is sourcing local weather through Open Weather Map API and pulling Space weather products from NOAA's Space Weather Prediction Center(https://www.swpc.noaa.gov/content/data-access). 

Initial Wire Frame:
https://wireframepro.mockflow.com/view/Mac91b3bf745e9e0540af45fcd77b77841605462970417#/page/Dcef186cf2b25638c69e479d69cde5a4a

Color-Palette:
https://www.color-hex.com/color-palette/54458

### Tech used:

MongoDb, Express, React, Node

Axios, Mongoose, Cors, DotENV

## Issues:
CRUD
- It's built and works in postman.  Its to build in the meteor shower database manually, I can add, delete update and view...in postman.  I'm having a little trouble rendering properly, I know it's something silly and will have it figured out asap, just leaving this here as a reminder to myself to fix.  Still working through the kinks.

API frontend vs backend
- Initially built with API on frontend, realized bad idea as my API key would be accessable by anyone looking at my code.  So, midway through project moved to backend.

Styling issues: 
- Attempted to use Sass, installed node-sass only to have version issues.  Checked and followed directions from stackoverflow posts to no avail.  Ended up removing node-sass and using mix of css and bootstrap.  


## Future plans:
- Add in local and UTC time...UTC is used for most wx and space wx related information
- Make adding wx events work...integral part of saying this is a crud app.
- Continue working on the styling.  It's an area I need to improve upon.  
-- Change background colors based on the time of day
-- Add in some images and icons
- I have the data to develop my own Planetary K-index chart I just haven't figured out the best way to render on the app.  Once complete I will be removing the NOAA space weather overview graphs and replacing with one built from scratch instead of ready made product.


Why local weather and space weather?

This is an app that I customized to my personal interests in earth science/meteorology/astonomy.  Using current technology, accessing my local weather at a moments notice is already a marvel that many take for granted, being able to access it on something you've built is even divine.  On top of that, in building this app it allows me to have a quick view (instead of accessing multiple sites) to verify if theres a chance to view the aurora borealis, meteor showers, the international space station or any other space events that can be seen with the naked eye. 
