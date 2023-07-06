# Creating Perfection

## Description

In this project, my cohorts and I were attempting to expand on the classwork regarding server-side API's by having a fun and interactive website delving into sports, which kind of expands on the friendly rivalry aspect of fantasy sports. In this case, we decided to focus on the NBA, particularly for the rosters of the most recent All Star Game held in Salt Lake City, Utah.

The rosters were composed of the players used for both team captains, LeBron James and Giannis Antetokounmpo. To make selections more personal, we made all players part of a general player pool and allowed the user to be able to play the role of Giannis and LeBron, to be their own team captain. As team captain, the user would be able to make decisions on a 5-player squad using the stats given via API call to formulate the best possible team.

The purpose was to provide the user a more exciting way to be a part of the All Star experience while providing a more personal touch to the involvement as well. Using RapidAPI and Twitter API, the enjoyment of using the website expands locally to globally, thus drawing more users and exposure to the site.

The player entries are stored in localStorage and can only be deleted via access to the DevTools "Application" settings. This is available upon selecting the "Inspect" option, which can be reached when right-clicking.

What we have learned from this exercise is that there are quite a few steps to be used when trying to extract data values from server API's in order to form numerical arrays. Weaving jQuery into JavaScript code can be difficult due to questions of compatibility; however, the end result proved quite satisfying. We used a Superkube framework in order to plan out and build this site. Using Twitter proved a bit difficult for beginners like us, but RapidAPI was fairly developer friendly. We hope the assignment provides a great experience for the user as it was for us in developing it.

## Installation

RapidAPI was used to call the statistical data for each player listed. The populated information would then be determined by the end user as satisfactory or mediocre in order to formulate their team.

Twitter was called at the end as a fun and interactive way for the end user to voice out their bragging rights for followers and strangers alike.

Modified index.html and style.css files in VS Code and included requisite comments.

Added all modified and untracked files in the entire repository using git.

Finally pushed all finished work to GitHub.

GitPages supplied deployed changes to launch project website.

## Usage

The end user should be able to traverse the website using the buttons provided to construct a superteam using the roster from the most recent All Star Game.  The message "Your Team" near the top of the screen should be hidden when no player is selected and revealed when a team has at least one player chosen. At the end, the user can click the "Tweet Your Team!" button, which will open a new page to post the team to the Twitterverse. Once posted, the link to the deployed site will be accessible and the end user can try again. 

## Links

Repository: https://github.com/reflexson/dream-team-NBA

Deployed Site: https://reflexson.github.io/dream-team-NBA/

## Screenshots

![Deployed page on startup hovered over player name to be clicked.](./assets/imgs/Screenshot%20Start%20Page.jpg)

![Selected player along with respective statistics.](./assets/imgs/Screenshot%20Bio.jpg)

![Tweet button expanded when hovered.](./assets/imgs/Screenshot%20Tweet%20Hover.jpg)

![Tweet box activated by button and ready for created tweet.](./assets/imgs/Screenshot%20Tweet%20Box.jpg)

![Posted tweet.](./assets/imgs/Screenshot%20Tweet%20Post.jpg)

## Credits/Sources

NBA Player Individual Stats API (from RapidAPI)

Twitter and website documents

Classmates/Instructors/AskBCS TA's who have helped

Dennis Itua, tutor at Calendly