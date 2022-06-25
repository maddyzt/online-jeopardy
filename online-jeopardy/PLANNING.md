# Weather App

# Project Description

Interactive online Jeopardy game that fetches questions from the Jeopardy question API.

# User Stories

- User can view the jeopardy board with multiple categories and # of points
- User can click on a question square and the question appears on the screen with a timer
- User can type in the answer as a question (within time allotted), after which the answer will show
- User can accumulate points as questions are answered correctly

# Packages


## Frontend

- CRA
- Sass
- Axios

## Backend

- Axios ?
- Express

# Data structure

## Question

```jsx
const clue = 
{"id":12804,
"answer":"Harry Reasoner",
"question":"This late \"60 Minutes\" reporter & ABC anchorman wrote a 1946 novel titled \"Tell Me About Women\"",
"value":400,
"airdate":"1994-11-21T12:00:00.000Z",
"created_at":"2014-02-11T22:53:51.250Z",
"updated_at":"2014-02-11T22:53:51.250Z",
"category_id":442,
"game_id":null,
"invalid_count":null,
"category":{
  "id":442,
  "title":"people",
  "created_at":"2014-02-11T22:48:43.115Z",
  "updated_at":"2014-02-11T22:48:43.115Z",
  "clues_count":240
  }
}
```

# Mock Data

# HTML Structure

- body
  - header
    - h1
  - ul
   - li
   - h1 category name
   - article
    - p question
   - article
    - p answer

# Component Structure

- App
  - Header
  - CategoryHeader
  - QuestionList
    - Question
    - Answer

# Steps

- PLANNING
- Build mockups / data structures
- Fight between mockup vs ERD (data structure)
- Static version of Frontend (Spearhead one feature)
- Static version of Backend
- Dynamic version of Frontend (up to network)
- Dynamic version of Backend (up to res.json)
- Connect time!
- Make it fancy time

# APIs

- jService.io