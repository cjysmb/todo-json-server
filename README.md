# Simple To do application using ReactJS and json-server (mock rest API)

Before you start. Make sure you have node, npm, npx installed in your device


## What you need to do to test it?

Clone or download this project and run command: `npm install` to install all package dependencies such as:
- "antd": For styling components,
- "axios": For calling our apis,
- "json-server": For our mock REST API also our fake backend,
- "react-router-dom": For our routing,

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npx json-server -w todo.json -p 3001`

Runs the json-server and watch the todo.json in the project _(no need to worry if you don't have a copy, once you run the command, it will create a default .json)_

in `-p 3001` it will run in port 3001 you can open it [http://localhost:3001/todo](http://localhost:3001/todo)

Below is the sample json file

```json
{
  "todo": [
    {
      "title": "Sample 1 title",
      "content": "Sample content1",
      "type": "todo",
      "id": 1
    },
    {
      "title": "Sample 2 title",
      "content": "Sample content 2",
      "type": "done",
      "id": 2
    },
    {
      "title": "Sample 3 title",
      "content": "Sample content 3",
      "type": "doing",
      "id": 3
    }
  ]
}
```

## Important
Create an .env file in the root folder and add `REACT_APP_API_BASE_URL="http://localhost:3001"`

You can change the value depending on your port running in your json-server

Now you can test it. Enjoy.
