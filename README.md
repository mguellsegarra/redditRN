# redditRN
🌄  React Native sample application for browsing r/pics

![redditRN preview](https://github.com/mguellsegarra/redditRN/raw/master/preview.gif)

## Running the app

Just clone this repo and install required dependencies using npm or yarn:

```
# yarn 
```

And launch the app using:

```
# yarn run start
```

## Dependencies

Thanks to the awesome npm community, I've used several libraries in this learning project:

* [axios](https://github.com/axios/axios): HTTP client. I chose this library because it returns directly a parsed JSON object as the response.
* [react-native-elements](https://github.com/react-native-training/react-native-elements): Some extra goodies, like Lists, and other handy elements.
* [react-navigation](https://github.com/react-navigation/react-navigation): Nice library to help with navigation solution based applications.
* [javascript-time-ago](https://github.com/catamphetamine/javascript-time-ago): To help with formatting dates relatively.

## Approach

* *ES6* Javascript code
* *State management*: for keeping this basic and getting started with React Native patterns, I've coded this example using simple `setState` approach. Despite this, there's a WIP implementation in branch *develop* in order to use **Redux** approach.
* Decouple functionalities in different components
* Folder structure for screens, dumb components, and separated stylesheets in style.js files.
* Callback patterns and usage of promises
* It'll be better to separate the networking code inside the PostList component into a service, but for this, I think it will be worth to implement it properly with the Redux approach.

## TODO

- Finish Redux approach in `develop`.

- Ability to load more posts (now it loads only the last 25 posts)

- Use a side-bar to swtich different sub-reddits.

- Use an ORM, like [Realm](https://github.com/realm/realm-js) for offline connection reading.

- Android platform specific code

## Contributing

I made this project only for learning purposes, so if you have any comments or want to help me with any improvements, you'll be very welcome.
