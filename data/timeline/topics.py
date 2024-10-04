import requests
import json
res = requests.get('https://primarysourcecoop.org/subjectsmanager/ext/getallfromdb/')
topics = json.loads(res.text)

#  All umbrellas
umbrellas = []

# Umbrellas : [All that fall under it]
umbrellas_dict = {}

# Gets list of all umbrellas
for topic in topics:
    if topic['is_umbrella'] == "1":
        umbrellas.append(topic['topic_name'])

for umbrella in umbrellas:
    res = requests.get('https://www.primarysourcecoop.org/subjectsmanager/getsubtopics?topic='+umbrella)
    data = json.loads(res.text)

    topics_list = list(set().union(*(d.values() for d in data)))

    umbrellas_dict[umbrella] = topics_list

    topics_umbrellas = {}
# This writes the JSON file
#with open("umbrellas.json", "w") as outfile:
    #json.dump(umbrellas_dict, outfile,indent=4)

for umbrella in (list(umbrellas_dict.keys())):
    for topic in umbrellas_dict[umbrella]:

        try:
            len(topics_umbrellas[topic])

            topics_umbrellas[topic].append(umbrella)

        except:
            topics_umbrellas[topic] = [umbrella]


with open("topiccategories.json", "w") as outfile:
    json.dump(topics_umbrellas, outfile,indent=4)



