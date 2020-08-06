# NodeJS - Week 1 - Student activities

## Preliminary tasks

- Download and install [Postman](https://www.postman.com/)

## Exercise 1: Discuss known APIs ( 5 minutes ) 🤔

Group exercise

In your groups discuss the following questions:

1. What is an API ?
2. Why do we use APIs in software development ?
3. Give an example of some APIs you've worked with on the course and what they did

---

**Lesson defining APIs and why we use them Mitch**

---

## Exercise 2: Experiment with some APIs ( 5 minutes ) 🤔

Group exercise

Pick a couple of the APIs below and experiment with them, modify the requests, report your findings. Use Postman for this task.

Think about how you could make a request that results in an error.

1. http://www.tvmaze.com/api

   **Example request: http://api.tvmaze.com/shows/82/episodes**

2. Sunrise/Sunset times: https://sunrise-sunset.org/api

   **Example request: Sunset in Bethnal Green: https://api.sunrise-sunset.org/json?lat=51.5311&lng=0.0481**

3. Google Books API: https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699

4. Star Wars API: https://swapi.co/

   **Example request: https://swapi.co/api/people/1/**

5. UK Police Data. https://data.police.uk/docs/

   **Example requests: street-level crimes, Old Street, London: https://data.police.uk/api/crimes-street/all-crime?lat=51.5268&lng=0.0866**

6. iTunes Search API: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/

   **Example request: All Beyonce's music videos: https://itunes.apple.com/search?term=beyonce&entity=musicVideo**

7. CYF resource-library https://resource-library.codeyourfuture.io/api/resources

8. (Difficult) Wikipedia API: https://en.wikipedia.org/w/api.php?

---

**Lesson Difference between UI and API Mitch**

**BREAK**

**Introducing NodeJS, backend and servers**

---

**Lesson building a server Mitch**

---

## Exercise 3: Building your first server - part 1 (25 mins)

Group exercise (20 mins)

1. Create a `package.json` by runnning the command:

```bash
npm init -y
```

🤔Before moving on make sure you discuss **why** you need the `package.json` file in your project.

2. Install your dependencies (code written by others) for the project:

```bash
npm install express
```

🤔Before moving on recap what happens when you run the command above

3. Create a file called `server.js` in the root of your project

4. Require in the express library using the code from the example in the [documentation](http://expressjs.com/en/starter/hello-world.html#hello-world-example)

5. Create an express application (our server) by invoking the express function

6. Get your server listening on a specific port by calling the `listen` method. Make sure you add a `console.log` somewhere in order to print a message like `"Listening for requests on PORT 9090. Ready to accept requests"`.

🤔 Before moving on any further try to recap why we need to use the `listen` method and what the PORT number is for ?

7. Start your server by running the command `node server.js`

Try making a request to your server using
a) the browser
b) Postman

What happens each time you make the request ?

You can stop your server listening by running the command:

```bash
Ctrl + C
```

---

## Exercise 4: Using express documentation ( 10 minutes ) 🤔

Group exercise

Head to this [link](http://expressjs.com/en/starter/hello-world.html#hello-world-example) in order to see the documentation for Express. In your groups, examine the snippet of code and do some research in order to figure out what each line of code is doing.

Try analysing each line of code in turn and then asking the driver to do some research on Google to figure out what each part of the code is doing.

Don't worry if it isn't perfect as we'll discuss it as a whole in class but this is a good exercise in researching the docs to figure out how new libraries work.

---

**Lesson - building a server - part 2: handler functions - Mitch**

---

## Exercise 5: Building your first server - part 2) ( 25 minutes )

1. Update your `package.json` to add a **start** script to your `package.json`
   Try running your npm script by running the command:

```bash
npm start
```

Your server should start up listening again on the port you specified.

2. Using the example you've just seen and the documentation try to setup a handler function that responds to a client `GET` request and serves back a string saying `"Hello from Code your future!"`.
   Remember the parameters your handler function must take.

Now make a `GET` request to the server using Postman and see if you get your response back.

🏁Checkpoint 🏁

Do you understand the following terms:
Discuss them in your group. Try to get collaboration from everyone in your group - team spirit! 💪

- Client
- Server
- Front-end
- Back-end
- Full stack developer
- Request
- Response
- HTTP
- HTTP Response Codes
- HTTP Request Methods (or Verbs)

---

**Lesson - Routing , urls, endpoints, request parameters - Csaba**

---

## Exercise 6: Using request parameters (20 minutes)

Set up some more handler functions for the following endpoints:

method: `GET`, path: `/songs`
response content-type : JSON

Response body should be a JSON sobject in the following form:

```json
{
  "msg": "Here are all the songs"
}
```

method: `GET` path: `/songs/:song_id`
response content-type: JSON

Response body should be a JSON object in the following form:

```json
{
  "msg": "The client made a request for song with the id: <client-id-here>"
}
```

For example if the client makes the following request
`GET` `/songs/10`
The server should respond with

```json
{
  "msg": "The client made a request for song with the id: 10"
}
```

---

**Lesson - Accessing query parameters - Csaba**

---

## Exercise 7: Using query parameters (3s0 minutes)

1. Use the itunes API 👉 `https://itunes.apple.com/search` to get **5 tracks** by the greatest rock band of all time (Clue: The band is called **radiohead**)
   You can use a `limit` query and a `term` query in order to filter the results from the API.
   Once you've got this working discuss in your groups what the response looks like: e.g. is it a string, an array, an object etc.
   Try filtering the results by making requests for some of your other favourite musicians.

2. Update your server so you can detect queries from the client on the `/songs` endpoint. You should be able to deal with `limit` queries and `artist` queries so the client can ask for a specific number of songs by a specific artist (similar to how the itunes API behaves)

Your response should now take the following form:

```json
{
  "msg": "Here are all the songs",
  "limit": "The client asked for 3 songs",
  "artist": "The client asked for songs by Kelela"
}
```
