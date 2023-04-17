## Project Brief

You have been asked to build a web application for a news website.

<!-- NEXT.JS ? HTML/CSS -->

When coming to the site there should be a way to view the latest articles and the user should be able to select an article and read the contents.

<!-- TITLE/UL/LI LINKS -->

The application should allow users to browse articles by category

<!-- CATAGORIES IN THE API DATA?. IF YES, DROPDOWN MENU. IF NOT ¯\_(ツ)_/¯ LATER ME PROBLEM -->

and search for articles by keywords also.

<!-- SEARCH BAR. CAN THE API RETURN FILTERED DATA? IF YES API CALL, IF NOT, FILTER STATE ? -->

Users should be able to filter articles by date, category, and popularity.

<!--
SAME APPROACH AS ABOVE IS POSSIBLE.
DATE PICKER: SHNAZZY DATE PICKER
CATEGORY: DROPDOWN MENU
POPULARITY: DROPDOWN MENU? TOGGLE?

CAN I PUT ALL THESE OPTIONS IN A EXTRA SHNAZZY DROPDOWN MENU THAT HAS CHECKBOXES?
WHICH OF THESE FILTER OPTIONS OF EXCLUSIVE: DATE AND POPULARITY? CATEGORY SHOULD NOT BE AFFECTED
-->

The website should be responsive and have a modern, clean design.

<!-- TRYING TO IMPRESS. STICK WITH WHAT YOU KNOW HERE. MUI ALLOWS FOR ALL OF THESE EASY PEASY LEMON SQUEEZY. -->

## Requirements

- Use ReactJS and any other libraries or frameworks of your choice.
<!-- NEXT.JS PLAYS WELL WITH REACT AND MUI. WILL TRY TO USE VANILLA FETCH CALLS ASSUME DATA PULLS ARE EASY. IF THE DATA FETCH STARTS GETTING MORE INTRICATE WE WILL GO THROUGH THE TROUBLE OF SETTING UP REACT QUERY. -->
- Use a REST API to fetch articles data. You can use any public API of your choice.
<!-- RUH ROH. NEED TO RESEARCH THIS. WOULD LOVE AN API WITH MANY METADATAS TO MAKE FILTERING EASY -->
- Implement pagination for the articles list.
<!-- IN MUI WE TRUST. LET'S SET UP REACT QUERY FROM THE GET GO. AVOID THE HEADACHE OF HAVING TO HANDLE API STATE MYSELF -->
- Implement a search bar that allows users to search for articles by keywords.
<!-- MUI CONTROLLED FORM/API CALLS - IF WE WANT TO GET FANCY/IF THE API ALLOWS REAL TIME SEARCH -->
- Implement filters for date, category, and popularity.
<!-- DEPENDS ON THE API: TBD -->
- The website should be responsive and look good on desktop and mobile devices.
<!-- WE WILL DESIGN WITH BREAKPOINTS IN MIND -->
- Write clean and well-organized code, following industry best practices.
<!-- NOTE TO SELF: CLEAN UP YOUR STUPID COMMITS -->
- Provide documentation on how to run the application and any other instructions necessary to evaluate your work.
<!-- FLESH OUT THE SOLUTIONS.MD BEFORE SUBMITTING THIS -->
- Provide a `SOLUTIONS.md` file that explains your design decisions, the libraries/frameworks you used, and any other information you consider relevant.
<!-- ALL OVER IT -->

## Evaluation Criteria

- Code quality and organization.
- Design patterns and best practices.
- User experience and design.
- Functionality and features.
- Responsiveness and compatibility with different devices.
- Clarity of documentation and instructions.

## MM NOTES

Initial Project Notes:

- Add unit tests for components - Jest and React Testing Library
- Use a linter - Does Next add one? - Confirmed it does
- Need to find a good free API for this. Research is needed
- Create a list of tasks to keep myself organized
- Current stack:
  - Next.js - For simplicity and speed
  - MUI - For speed and simplicity creating a modern and responsive design
  - React Query - For handling API state
  - Jest - Unit testing
  - React Testing Library - Unit testing

Next.js

- Opted to do manual creation of the Next.js to avoid any bloated dependencies
- Decided to Jest for unit testing due to familiarity
- Decided to use React Testing Library to support unit testing due to familiarity
- Added first unit test to ensure Jest and React Testing Library are working
- Fixed PR template not showing up in PRs

MUI

- I realized my babel config was causing me more issues than it was worth. I decided to remove it and use the default Next.js babel config when I learned about the Jest support in Next.js.
- I added the MUI boiler plate set up to the project.
- The main reason I wanted to get MUI set up early was to take advantage of their component library. It is accessible and responsive out of the box. I also wanted to get the theme set up early so I could use it to style the app.
- I added a linter to the project to keep my code clean and consistent. I chose ESLint because it is the most popular linter and it is supported by Next.js.
- I added a basic layout component to the project. As well as some basic styling to the layout component.

## Tasks

- [x] Create a new repo with PR template
- [x] Initialize a Next.js app
- [x] Install Jest
- [x] Install React Testing Library
- [x] Install MUI
- [ ] Install React Query
- [ ] Research APIs
- [ ] Diagram app flow
- [ ] Create a list of components
- [ ] Create a list of pages
- [ ] Create a list of API calls
- [ ] Create a list of API filters and sort options (if applicable)
- [ ] Create a list of API parameters
- [ ] Error handling
- [ ] Unit testing
- [ ] Solution.md
- [ ] REACH GOAL: Deployment
