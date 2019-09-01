
# Real Time Game Leader Board

A real time hall of fame/leader board for a gaming competition.

The leaderboard have 3 types of entities – students, classes and schools.

Student leaderboard have Name (First Name and Surname presented with Title Case), School Name, Class Name, Score & Rank.

Class leaderboard have Class Name, Teacher Name (First Name and Surname presented with Title Case), School Name, Score & Rank.

School leaderboard have School Name, Admin Name (First Name and Surname presented with Title Case), School Address, Score & Rank.

Each leaderboards have details like Name, Score & Rank which is the most important information which will be displayed in all resolutions. 

The leaderboards will be fluid design and some columns gets hidden for smaller resolutions.

## 

Mock json data for all 3 types of leaderboard. json data can hold 100’s of users but the leaderboard will display top 10 in each leaderboard.

The scores in the leaderboard random every 15 minutes and rank will be dynamically calculated by highest score.

The leaderboard will be sorted by rank in ascending order by default.

## 

All leaderboard will refresh every 15 minutes with new generated data scores.

The score columns will be sortable columns in all 3 leaderboard.

Even if you refresh the page, it will be cached within the 15 minutes cycle since the last generated time. 

Have used local storage for caching purposes.


## How to

get the repo

npm install

npm start

change REACT_APP_REFRESH_RATE value in .env to increase or dicrease JSON data caching duration

## Used tools
https://www.json-generator.com

axios

react-bootstrap

react-data-table-component

## 

Service > service.js
    Used to fecth JSON data as per the scores request (Student, Class, School) 
    Get the top 10 scores and sort

Component > ClassList.js, SchoolList.js, StudentList.js
    Used to create each dashboard

Component > LeaderBoard.js
    Used to display all three Leaderboards


