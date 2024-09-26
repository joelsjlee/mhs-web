import pandas as pd
import csv

Category_list = {
    "American Revolution": "American History",
    "European Alliances": "Diplomacy",
    "Health and Illness": "Health and Medicine",
    "International": "International Relations",
    "Privateering": "Military and Naval History",
    "Recreation": "Leisure and Society",
    "Religion": "Religion and Society",
    "Travel and Touring": "Travel and Exploration",
    "Commerce": "Trade and Commerce",
    "African Americans": "Race and Ethnicity",
    "Barbary Wars": "Military and Naval History",
    "Continental Congress": "American Politics",
    "Family Relations (Adams Family)": "Adams Family",
    "Family Residences (Adams Family)": "Adams Family",
    "Loyalists": "Political Factions",
    "Slavery and Enslaved Persons": "Slavery",
    "Dueling": "Social Customs",
    "Native Americans": "Indigenous Peoples",
    "Shays's Rebellion": "Rebellions",
    "US Constitution": "American Politics",
    "Anti-Federalists": "Political Factions",
    "Slave Trade": "Trade and Commerce",
    "Bank of the United States": "Finance",
    "French Revolution": "European History",
    "Haitian Revolution": "Rebellions",
    "Jay Treaty": "Treaties",
    "Federalist Party": "Political Factions",
    "Pinckney's Treaty": "Treaties",
    "Women's Rights": "Social Movements",
    "Courtship and Marriage of JQA and LCA": "Adams Family",
    "Court Life and Society": "Social Life and Customs",
    "Diplomacy": "Diplomacy",
    "Elections": "American Elections",
    "European": "European History",
    "Industrialization": "Industrialization",
    "Presidential 1796": "American Elections",
    "Steam Power": "Science and Technology",
    "Territorial Expansion": "Territorial Expansion",
    "Foreign Relations": "International Relations",
    "Quasi-War": "Military and Naval History",
    "XYZ Affair": "Diplomacy",
    "Prussian-American Treaty of Amity and Commerce": "Treaties",
    "Convention of 1800": "Treaties",
    "Textile Industry": "Industrialization",
    "Family Finances (Adams Family)": "Adams Family",
    "Presidential 1800": "American Elections",
    "Democratic-Republican Party": "Political Factions",
    "Louisiana Purchase": "Territorial Expansion",
    "Science and Technology": "Science and Technology",
    "Supreme Court": "Judiciary",
    "Impressment": "Military and Naval History",
    "Articles of Confederation": "American Politics",
    "Internal Improvements": "Infrastructure",
    "Boylston Professor of Rhetoric and Oratory": "Education",
    "Napoleonic Wars": "European History",
    "Reform Movements": "Social Movements",
    "Chesapeake Affair": "Diplomatic Conflicts",
    "Continental System": "Economics",
    "Embargo": "Trade and Commerce",
    "Presidential 1808": "American Elections",
    "Caucus System": "Political Systems",
    "Essex Junto": "Political Factions",
    "Orders in Council": "Diplomatic Conflicts",
    "Press": "Media",
    "Blockades": "Military Strategy",
    "Latin American Wars of Independence": "Latin American History",
    "War of 1812": "American Military History",
    "Canals": "Infrastructure",
    "Presidential 1812": "American Elections",
    "Anglo-American Definitive Peace Treaty": "Treaties",
    "Hartford Convention": "Political Factions",
    "Sectionalism": "Political Conflicts",
    "Treaty of Ghent": "Treaties",
    "Presidential 1816": "American Elections",
    "Unitarianism": "Religion and Society",
    "Adams-Onis Treaty": "Treaties",
    "Colonization Movements": "Social Movements",
    "Immigration": "Migration",
    "Mexican War of Independence": "Latin American History",
    "Oregon Country": "Territorial Expansion",
    "Seminole Wars": "American Military History",
    "Utopian Communities": "Social Movements",
    "West": "Territorial Expansion",
    "Asylum Movement": "Social Movements",
    "Convention of 1818": "Treaties",
    "Florida Annexation": "Territorial Expansion",
    "Panic of 1819": "Economic Crises",
    "Presidential 1820": "American Elections",
    "Roads": "Infrastructure",
    "States Rights": "Political Conflicts",
    "Anti-Slavery Movements": "Social Movements",
    "Emancipation": "Social Movements",
    "Missouri Compromise": "Political Conflicts",
    "Presidential 1824": "American Elections",
    "Slave Rebellions": "Rebellions",
    "South": "Regional Histories",
    "Suffrage": "Social Movements",
    "Fugitive Slave Laws": "American Law",
    "Nullification": "Political Conflicts",
    "Pro-Slavery Movements": "Social Movements",
    "Texas Annexation": "Territorial Expansion",
    "Second Great Awakening": "Religious Movements",
    "Era of Good Feelings": "Political Eras",
    "Monroe Doctrine": "Diplomacy",
    "Corrupt Bargain": "Political Conflicts",
    "Railroads": "Infrastructure",
    "Telegraph": "Science and Technology",
    "Anti-Masonic Party": "Political Factions",
    "Presidential 1828": "American Elections",
    "Temperance Movement": "Social Movements",
    "Presidential 1832": "American Elections",
    "Spoils System": "Political Systems",
    "Democratic Party": "Political Factions",
    "National Republican Party": "Political Factions",
    "Tariff of 1828": "Economics",
    "American System": "Economics",
    "Anti-Slavery Petitions": "Social Movements",
    "National Nominating Conventions": "Political Systems",
    "Northwest Ordinance": "Territorial Expansion",
    "Tariff of 1816": "Economics",
    "Alien and Sedition Acts": "American Law",
    "Presidential 1836": "American Elections",
    "Indian Removal": "Indigenous Peoples",
    "Whig Party": "Political Factions",
    "Smithsonian Institution": "Education",
    "Federalist Papers": "American Politics",
    "Gag Rule": "American Law",
    "Texas Revolution and Independence": "Military Conflicts",
    "Panic of 1837": "Economic Crises",
    "Presidential 1840": "American Elections",
    "Amistad": "Legal Conflicts",
    "Transcendentalism": "Philosophical Movements",
    "Webster-Ashburton Treaty": "Treaties",
    "Presidential 1844": "American Elections",
    "Church of Jesus Christ of Latter-day Saints": "Religion and Society",
    "American Party": "Political Factions",
    "Mexican War": "American Military History",
    "Wilmot Proviso": "Political Conflicts",
    "Presidential 1848": "American Elections"
}




sub_dict = {}

filepath = "1779_1848.csv"

df = pd.read_csv(filepath, sep =",")

# Iterates through each subject..
for subject in df.subjects.unique():
    year_ranges = []

    # All of the years a particular subject is mentioned
    filtered_years = df['year'][df['subjects'] == subject].tolist()

    # If there is only oen year, it is set as the start and end date
    if len(filtered_years) == 1:
        year_ranges.append([filtered_years[0],filtered_years[0]])

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

csv_lines = [["Role","Name","Start","End"]]


for subject in sub_dict:
    print(subject)
    for year_range in sub_dict[subject]:
        new_line = []
        new_line.append(subject)
        new_line.append(subject)
        new_line.append(str(min(year_range))+"-01-01")
        new_line.append(str(max(year_range))+"-12-30")

        csv_lines.append(new_line)



with open('timeline.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(csv_lines)












