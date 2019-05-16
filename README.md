# README

# Company Manager

A coding assignment for Buster.

**The app is deployed here: (https://buster-takehome.herokuapp.com/companies)[https://buster-takehome.herokuapp.com/companies].**

## Describe your solution and reasoning behind your choices. Include any trade-offs and what you might do differently given more time.

I created this app using Rails and the webpacker gem to integrate React. I decided to use React in order to create a more interactive UX, and I believed the requirements translated easily into React components. It was a tradeoff for time because this was my first time implementing React/Webpacker in a personal project. While I enjoyed the challenge, I realize it would have been faster to do the CRUD requirements using only Rails and drop the map in using React/Webpacker.

If given more time, I would:

1. Make the list of companies scrollable so that they don't extend so far down the page
2. Validate the edit/create forms on the server and expose the validation errors to the client
3. Add media queries so the app is responsive and improve styling in general
4. Implement end to end integration tests using Capybara
5. Use TypeScript to get the benefits of static typing
6. Use the userReducer hook in React for application state management instead of stateful components

## Local Development

Clone the repository.

```
bundle install
rake db:create
rake db:migrate
rake db:seet
rails s
```
