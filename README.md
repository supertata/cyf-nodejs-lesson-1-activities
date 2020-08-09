# NodeJS - Week 1 - Student activities

## Preliminary tasks

- Download and install [Postman](https://www.postman.com/)

## Exercise 1: Discuss known APIs ( 10 minutes ) 🤔

Group exercise

In your groups discuss the following questions:

1. What is an API ?

- the most important word here is interface. One one side there is a consumer and on the other there is a provider. The interface is made to make it easier to communicate between the receiver and the sender. (client /server).
- a url/link to
- a program that can give access to data and is accessible
  -through a url. The API enables us to manipulate the data through
  methods such as post, get etc.
- its an access point to give access to users

2. Why do we use APIs in software development ?

- API is like a middle man that translates between the back end and the front end.
- help the communication between the server and the client (act like a gate)
- manage/control access to the data
- one it is set up it can be accessed from anywhere

3. Give an example of some APIs you've worked with on the course and what they did

- weather app API
- tv maze
- react hotels
- Transport for London
- React Library

---

**Lesson defining APIs and why we use them Mitch**

---

**Lesson Difference between UI and API Mitch**

**BREAK**

**Introducing NodeJS, backend and servers Mitch**

---

**Lesson building a server Mitch**

---

## Exercise 2: Building your first server - part 1 ( 25 mins )

Group exercise

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

## Exercise 3: Using express documentation ( 10 minutes ) 🤔

Group exercise

Head to this [link](http://expressjs.com/en/starter/hello-world.html#hello-world-example) in order to see the documentation for Express. In your groups, examine the snippet of code and do some research in order to figure out what each line of code is doing.

Try analysing each line of code in turn and then asking the driver to do some research on Google to figure out what each part of the code is doing.

Don't worry if it isn't perfect as we'll discuss it as a whole in class but this is a good exercise in researching the docs to figure out how new libraries work.

---

**Lesson - building a server - part 2: handler functions - Mitch**

---

## Exercise 4: Building your first server - part 2 ( 25 minutes )

Group exercise

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

- Client:
  PostMan is a client that sends a request to a server.
- Server
  a program that listens for requests from clients and send responses (for example app in express)
- Front-end
  the user interface, the way the data is visualized by the browser.
- Back-end
  op3ration of retrieving data from a database. database + server = backend. system responsible for providing data that is made up of database + server. a server that interacts with a database and send a response back to the client.
- Full stack developer
  A developper that works on both front and back end together to build an interactive application.
- Request
  Method to retrieve data from the server. Made by a client.
- Response
  a method used by the server to provide data to the client.
- HTTP
  protocol that all sides agree to use to communicate between client and server.
- HTTP Response Codes
  it's part of HTTP protocal. For example is the server response is succesful, response code is 200.
- HTTP Request Methods (or Verbs)
  For example GET, POST, SEND, DELETE.

---

**Lesson - Routing , urls, endpoints, request parameters - Csaba**

---

## Exercise 5: Using request parameters (20 minutes)

Set up some more handler functions for the following endpoints:

method: `GET`, path: `/songs`,
response `Content-Type` : JSON

Response body should be a JSON sobject in the following form:

```json
{
  "msg": "Here are all the songs"
}
```

method: `GET`, path: `/songs/:song_id`,
response `Content-Type`: JSON

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

## Exercise 6: Using query parameters ( 25 minutes )

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

This would be the response if client made an API request in the following form:
`GET` `/songs?limit=3&artist=kelela`
