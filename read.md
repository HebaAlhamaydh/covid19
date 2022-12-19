## COVID-19 Full Stack Application


## Requirements:

1. You will create a simple webapp which provides the users with all the updates on Covid-19 statistics around the world that are retrieved from [COVID-19 API](https://documenter.getpostman.com/view/10808728/SzS8rjbc#27454960-ea1c-4b91-a0b6-0468bb4e6712)

1. Create two new repositories in GitHub, one for the frontend and one for the backend.

1. In **Home**, the user wants to get the World Total Statistics for COVID-19 using this [endpoint](https://api.covid19api.com/world/total) to be displayed as cards for the total confirmed, deaths and recovered cases.

1. In **Home**, the user wants to have the ability to get the Covid-19 statistics for a specific country during a specific period of time using this [endpoint](https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z). You will change the parameters data based on the user inputs in the form. Once the user fills in the form then the results should be diaplayed as cards with date and total number of confirmed cases on that date in the same page.

1. In **All Countries**, the user wants to get the COVID-19 statistics for all the countries in the world that are retrieved from this [endpoint](https://api.covid19api.com/summary). The results should be displayed as cards (each card should have these data:Country, Total Confirmed Cases, Total Deaths Cases, Total Recovered Cases, Date and add-to-my-records button). When the user clicks on the 'add-to-my-records' button then this record should be added to the database.

1. In **My Records**, the user wants to view all the records that are retrieved from the database and displayed as cards (Each card should have the Country, Date and Delete button). If there is no data in the database, then **NO AVAILABLE RECORDS** should be rendered. Once the user clicks on the 'Delete' button then the record should be deleted from the database and re-render the records again.

1. The user should have a good-looking UI design (using CSS, or any of the React toolkit UI: React-bootstrap, Material UI, Blueprint UI, or Chakara UI ).

1. Keep your code clean, also use proper naming for both variables and functions (idiomatic style) and proper indentation.

1. You should follow the attached screenshots structure for your webapp.


## Deployment Instructions:

1. Deploy your frontend app.

1. Deploy your bakend app.

1. Deploy your Database.


## Submission Instructions:

- Reply to this email with the following:
- Two links of your GitHub repos (frontend and backend).
- Two links of your deployed links (frontend and backend). 
- A short video shows your app works correctly (you can upload the video on GoogleDrive and share the link. Please make sure the video's privacy is public not private).