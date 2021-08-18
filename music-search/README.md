# StriveM7D8
Music Search Engine!

Implement a nice main page with an input field for the search and re-use the same page to show the search results.

 

Clicking on any result should bring the user on a detail page, which will fetch the data for that particular track. Show on this detail page information you consider relevant about the song (i.e. title, album, duration ecc.)

 

API INFO:

For the main search use

https://striveschool-api.herokuapp.com/api/deezer/search?q=whatever

to get the results.

 

Use the id property of any resulting track to fetch detail information with

https://striveschool-api.herokuapp.com/api/deezer/track/:id

 

HINTS:

- As usual split your application in many reusable components

- Implement props & state interfaces for each one of them

- Skip the Redux approach and fetch data directly in your components and store them in local states (we didn't had the chance to talk about Redux typings)