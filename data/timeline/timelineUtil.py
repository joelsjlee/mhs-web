import pandas as pd
import csv
import json

# Gets a dict of topic : umbrella
with open('topiccategories.json', 'r') as file:
    data = json.load(file)

# Right now, just taking the first umbrella for a certain topic
Category_list = {key: value[0] for key, value in data.items()}


def createTimelineData(type, filepath, output, sorted=False):
    """

    Args:
        type: (str) Cat or Full to represent the type of timeline
        filepath: (str) csv file of data
        output: (str) csv filename to output

    Returns:

    """
    # Subject : Year Ranges
    sub_dict = {}

    df = pd.read_csv(filepath, sep=",")

    # Iterates through each subject..
    for subject in df.subjects.unique():
        year_ranges = []

        # All of the years a particular subject is mentioned
        filtered_years = df['year'][df['subjects'] == subject].tolist()

        # If there is only oen year, it is set as the start and end date
        if len(filtered_years) == 1:
            year_ranges.append([filtered_years[0], filtered_years[0]])

        # If there is more than one..
        else:
            current_range = [filtered_years[0]]

            for i in range(1, len(filtered_years)):
                # If the current year is consecutive to the previous year, extend the range
                if filtered_years[i] == filtered_years[i - 1] + 1:
                    current_range.append(filtered_years[i])
                else:
                    # If there is only oen year, it is set as the start and end date
                    if len(current_range) == 1:
                        current_range.append(current_range[0])
                    # Otherwise, close the current range and start a new one
                    year_ranges.append(current_range)
                    current_range = [filtered_years[i]]

            # If there is only oen year, it is set as the start and end date
            if len(current_range) == 1:
                current_range.append(current_range[0])

            # Add the last range to the list
            if current_range:
                year_ranges.append(current_range)

        sub_dict[subject] = year_ranges

    # The headers for the timeline
    csv_lines = [["Role", "Name", "Start", "End"]]

    for subject in sub_dict:

        # Creates a new line in the csv for each time range entry
        for year_range in sub_dict[subject]:
            new_line = []

            # If one umbrella should be on a line, this makes that happen, otherwise each topic is on its own line
            if type == "Cats":
                new_line.append(Category_list[subject])
            elif type == "Full":
                new_line.append(subject)
            else:
                print("ERROR: TYPE MUST BE EITHER 'Cats' or 'Full'")
                return

            new_line.append(subject)
            # Right now just does by full years. These dates are slightly off due to JS converting time weirdly
            new_line.append(str(min(year_range)) + "-01-02")
            new_line.append(str(max(year_range)) + "-12-31")

            csv_lines.append(new_line)

    # This is for a chart tht is sorted by umbrella, but each topic is on its own line
    if sorted == True:
        # Removes headers and gets list of categories
        csv_lines.pop(0)
        categories = list(set(list(Category_list.values())))
        newlines = [["Role", "Name", "Start", "End"]]

        # Adds a header row for each category, followed by the relevant topics
        for cat in categories:
            incat = [["------" + cat + "------"]]

            for line in range(len(csv_lines)):

                if Category_list[csv_lines[line][1]] == cat:
                    incat.append(csv_lines[line])

            # A len of one means this is a umbrella with no entries (other than the header column) 
            if len(incat) > 1:
                newlines += incat

        with open(output, 'w', newline='') as file:
            print('Succesfuly wrote to: ' + output)
            writer = csv.writer(file)
            writer.writerows(newlines)

    else:
        with open(output, 'w', newline='') as file:
            print('Succesfuly wrote to: ' + output)
            writer = csv.writer(file)
            writer.writerows(csv_lines)


createTimelineData("Cats", "1779_1848.csv", "groupedtimeline.csv")
createTimelineData("Full", "1779_1848.csv", "timeline.csv")
createTimelineData("Full", "1779_1848.csv", "sortedtimeline.csv", True)
