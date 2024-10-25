import requests
import json
import pandas as pd
from pathlib import Path

master_folder = Path(__file__).parent.parent.parent.parent

def writeJSON(input_dict, output_filepath):
    """
    Writes a python dictionary to a specified JSON filepath
    Args:
        input_dict: the dictionary to convert to JSON
        output_filepath: the name of the file that will hold the json (include.json)

    Returns:

    """
    # This writes the JSON file that is topic: all umbrellas it falls under
    with open(output_filepath, "w") as outfile:
        print("Succesfully wrote to " + output_filepath)
        json.dump(input_dict, outfile, indent=4)




def create_umbrellas(datafile):
    # Get the current directory of the script

    """

    Args:
        datafile: the data to make the timeline chart

    Returns:

    """
    all_topics = []
    all_umbrellas = []

    umbrellas_dict = {}

    # Gets all topics in the API data
    APITopics = json.loads(requests.get('https://primarysourcecoop.org/subjectsmanager/ext/getallfromdb/').text)


    for topic in APITopics:
        # Adds every topic to the all_topics list
        all_topics.append(topic["topic_name"])

        # If umbrella, adds the topic to the umbrellas list
        if topic['is_umbrella'] == "1":
            all_umbrellas.append(topic['topic_name'])

    # Topics that fall under a particular umbrella
    umb_topics = []
    for umbrella in all_umbrellas:
        res = requests.get('https://www.primarysourcecoop.org/subjectsmanager/getsubtopics?topic=' + umbrella)
        data = json.loads(res.text)

        # list of all topics under a certain umbrella
        topics_list = list(set().union(*(d.values() for d in data)))

        print(topics_list)
        # keeps track of topics with an umbrella
        umb_topics.extend(topics_list)

        # Keeps track of what topics are under what umbrella
        umbrellas_dict[umbrella] = topics_list

    # Gets a set of all topics that do not fall under an umbrella
    no_umb1 = set(all_topics) - set(umb_topics)

    if len(datafile) == 1:
        no_umb2 = set(pd.read_csv(master_folder / "data" / "timeline" / "Raw Data" / datafile[0])["subjects"]) - set(
            all_topics)
    elif len(datafile) > 1:
        all_subjects = set()

        for i in range(len(datafile)):
            subjects = pd.read_csv(master_folder / "data" / "timeline" / "Raw Data" / datafile[i])["subjects"]
            all_subjects.update(subjects)

        no_umb2 = all_subjects - set(all_topics)

    umbrellas_dict["Uncategorized"] = list(no_umb1 | no_umb2)

    # Key: Topic, Value: [All the umbrellas it is under]
    topics_umbrellas = {}

    # For each topic under a certain umbrella-
    for umbrella in (list(umbrellas_dict.keys())):

        for topic in umbrellas_dict[umbrella]:

            # If it already has an entry in the dictionary, add the new umbrella
            try:
                len(topics_umbrellas[topic])

                topics_umbrellas[topic].append(umbrella)

            # If it has not yet been added, create a new entry with the umbrella
            except:
                topics_umbrellas[topic] = [umbrella]


    # Write to JSON files
    writeJSON(umbrellas_dict, "umbrellas.json")
    writeJSON(topics_umbrellas, "topiccategories.json")



create_umbrellas(['1779_1848.csv', 'cmsol_subjects.csv', 'rbt_subjects.csv'])
