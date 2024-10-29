import requests
import json
import pandas as pd
from pathlib import Path
import argparse
import certifi



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

def create_umbrellas(folder_path):
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
    APITopics = json.loads(requests.get('https://primarysourcecoop.org/subjectsmanager/ext/getallfromdb/').text, verify=False)


    for topic in APITopics:
        # Adds every topic to the all_topics list
        all_topics.append(topic["topic_name"])

        # If umbrella, adds the topic to the umbrellas list
        if topic['is_umbrella'] == "1":
            all_umbrellas.append(topic['topic_name'])

    # Topics that fall under a particular umbrella
    umb_topics = []
    for umbrella in all_umbrellas:
        res = requests.get('https://www.primarysourcecoop.org/subjectsmanager/getsubtopics?topic=' + umbrella, verify=False)
        data = json.loads(res.text)

        # list of all topics under a certain umbrella
        topics_list = list(set().union(*(d.values() for d in data)))

        # keeps track of topics with an umbrella
        umb_topics.extend(topics_list)

        # Keeps track of what topics are under what umbrella
        umbrellas_dict[umbrella] = topics_list

    # Gets a set of all topics that do not fall under an umbrella
    no_umb1 = set(all_topics) - set(umb_topics)

    # Collect all CSV files from the provided folder
    folder = Path(folder_path)
    csv_files = list(folder.glob("*.csv"))
    all_subjects = set()

    for file in csv_files:
        subjects = pd.read_csv(file)["subjects"]
        all_subjects.update(subjects)

    # All the topics in the data
    no_umb2 = all_subjects - set(all_topics)

    umbrellas_dict["Uncategorized"] = list(no_umb1 | no_umb2)

    # Key: Topic, Value: [All the umbrellas it is under]
    topics_umbrellas = {}

    # For each topic under a certain umbrella-
    for umbrella in list(umbrellas_dict.keys()):

        # If it already has an entry in the dictionary, add the new umbrella
        for topic in umbrellas_dict[umbrella]:

            if topic in topics_umbrellas:
                topics_umbrellas[topic].append(umbrella)

             # If it has not yet been added, create a new entry with the umbrella
            else:
                topics_umbrellas[topic] = [umbrella]


    # Write to JSON files
    writeJSON(umbrellas_dict, "umbrellas.json")
    writeJSON(topics_umbrellas, "topiccategories.json")

def main():
    parser = argparse.ArgumentParser(description="Create umbrella topic mappings from API and CSV data.")
    parser.add_argument('folder', help='Folder containing CSV data files.')
    args = parser.parse_args()

    create_umbrellas(args.folder)

if __name__ == "__main__":
    main()
