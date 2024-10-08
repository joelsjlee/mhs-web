**MHS-Web** 

_Purpose_
The purpose of the Primary Source Cooperative the Massachusetts Historical Society (the Cooperative, MHS) is to provide a platform, designed and governed by consensus, to assist the digital publication of documentary editions led by scholars who study the American long 19th century (1789–1914) and who would not otherwise have a portal for online publishing that is affordable and supportive. In that form it can serve the needs of people who are preparing the content of relevant archival materials for distribution, and it can enrich the work of scholars and other users who are seeking to understand more about this critical period in American history, when revolution and reform were causing fundamental changes in social and political culture. More broadly, however, the creation of this cooperative is meant to be reproducible, making available a model of publication that runs on human and organizational collaboration that can be adapted to varying circumstances. Working toward the goal of a federated network of cooperatives, we see our cohort as one in a landscape with a rich diversity of overlapping systems, each with its own topical parameters, administrative arrangements, tools and infrastructure, and financial models, and of all sizes. At this point, we envision that the Cooperative would, once implemented, demonstrate the functionality and value of a system that foregrounds robust communication and support among the editors and the host institution, achieved in part by maintaining a modest size.

_To Run_

```
python3 -m http.server
```
The command will run the web server on your default port, likely meaning you will be able to access it by navigating to [http://localhost:8000](http://localhost:8000). 


_Editing The Timeline (Gannt) Chart_

The timeline code requires itself to be "built" before working. In this repo, the most udated build is included, but if you were to make any changes you will need to rebuild to see them. You can do that by.. 

Navigating to the Jsscripts/gtime directory in terminal and running the following: 

````
npm run build 
````


_Editing The Timeline (Gannt) Chart Data_

There is a required python script that morphs the data from the csv output into a way for it to be interpreted by the timeline data. It is timelineUtil.py. If you want to change the data (currently called 1779_1848.csv) follow these steps. 

1. **Place the data in the folder** - If you name it something other than 1779_1848.csv you will need to go into the following two files and change the filename **in the function calls**. 

1. **Run topics.py** - This pulls the "umbrellas" of categories from the primary source co-op API. While this is unrelated to the data file, it is good practice to also run this, just in case anything changes. Also, if there are any topics in the new csv file that for some reason are not showing up in the API, failure to run this again will cause this to break. (Missing topics are counted as "uncategorized". This will return two JSON files needed for the following python script. 

2.  **Run timelineUtil.py** - This  inputs one of the previous JSON files and returns three csv files for the three differnt graph views. 


**Organization**

The site is organized two ways, into Tools and projects. 
- Tools is meant to include every figure's viz through a spceific methodology 
- Projects is meant to include every viz metholodgy for a specific figure.

This is done so that the site is useful both to those interested most in the metholdogies we use, and also people who are more interested in the history can browse in a way that facilitates that. 


Every attempt is made to match wording and assets from the [https://www.primarysourcecoop.org](https://www.primarysourcecoop.org) website. 

The Jsscripts folder should contain all the viz scripts, and every effort should be made to keep this scripts as general as possible, as to allow them to make charts for each of the figured included in the data (right now: JQA, RBT, CMSOL) and possibly others in the future. 
