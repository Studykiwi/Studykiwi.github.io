const sectionsData = [
    {
        id: "notes",
        title: "Notes",
        links: [
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wtg/l3-plant-and-animal-responses-guide/",
                title: "Studytime Full Notes",
                summary: "Concepts, example answers, and practice questions."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/html/senior_biology/NCEA3_biology_plants_and_animals.html",
                title: "NBTS Full Notes",
                summary: "Extensive Plant and Animal notes covering:\n- Inter / Intra Specific relationships\n- Phototropism\n- Migration\n- Timing and Orientation\n- Photoperiodism"
            },
            {
                imageSrc: "../../static/logos/passnceabio.png",
                url: "https://www.passbiology.co.nz/biology-level-3/plant-animal",
                title: "Pass NCEA Biology Notes",
                summary: "Very detailed notes for Plant and Animal"
            },
            {
                imageSrc: "../../static/logos/dougwalker.jpg",
                url: "https://www.youtube.com/watch?v=JtNIudF53oM&ab_channel=DouglasWalker",
                title: "Douglas Walker walkthrough video",
                summary: "Vid going through the full AS"
            },
            {
                imageSrc: "../../static/logos/learncoach.png",
                url: "https://my.learncoach.com/ncea/level-3/biology/3.3/activity/2545",
                title: "LearnCoach Notes",
                summary: "Range of videos on all topics in the exam. Requires an account to view and there is a limit of 20 minutes of resources access per day on the free plan."
            }
        ]
    },
    {
        id: "summaries",
        title: "Summary Resources",
        links: [
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level3/pdfs/bio3_behaviour_fcards.pdf#zoom=100",
                title: "Plant and Animal Flash cards",
                summary: "Very useful for learning the definitions in the AS, HIGHLY RECOMMENDED"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level3/pdfs/bio_91603_keywords.pdf#zoom=100",
                title: "NBTS Last Minute self test Sheet",
                summary: "Test yourself on definitions last minute"
            }
        ]
    },
    {
        id: "pracquestions",
        title: "Practice Questions",
        links: [
            {
                imageSrc: "../../static/logos/nzqa.jfif",
                url: "https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=91603",
                title: "NZQA Practice Papers (2012-2022)",
                summary: "All available NCEA papers from previous year’s end of year exams."
            },
            {
                imageSrc: "../../static/logos/dougwalker.jpg",
                url: "https://www.youtube.com/watch?v=R47syiPYRxY&ab_channel=DouglasWalker",
                title: "Douglas Walker past exam walkthrough",
                summary: "Step by step walkthrough and explanation for past exam paper."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level3/pdfs/bio_90716_Migration.pdf",
                title: "NBTS Collated Migration Questions",
                summary: "Questions about Migration that appeared in end of year Plant and Animal exams from 2006 - 2017."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level3/pdfs/bio_90716_Animal_behaviour.pdf",
                title: "NBTS Collated Animal Behaviour Questions",
                summary: "Questions about Animal Behaviour that appeared in end of year Plant and Animal exams from 2006 - 2017."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level3/pdfs/bio_91603_Plant%20responses.pdf#zoom=100",
                title: "NBTS Collated Plant Responses Questions",
                summary: "Questions about Plant Responses that appeared in end of year Plant and Animal exams from 2006 - 2017."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level3/pdfs/bio_91603_Collated%20questions_Relationships.pdf#zoom=100",
                title: "NBTS Collated Relationships Questions",
                summary: "Questions about Relationships that appeared in end of year Plant and Animal exams from 2006 - 2017."
            }
        ]
    },
    {
        id: "checklists",
        title: "Checklists",
        links: [
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level3/pdfs/bio_91603_outline.pdf#zoom=100",
                title: "NBTS Topic Outline",
                summary: "List of all the topics you need to know to do well in the exam"
            },
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/l3_biol_plants_and_animals_strategy_web_19_03/",
                title: "StudyTime Concepts and Strategy Checklist",
                summary: "Notes and video covering the exam topics and strategy for doing well"
            }
        ]
    }
];


function generateSections(sectionsData) {
    sectionsData.forEach(section => {
        const sectionElement = document.getElementById(section.id);

        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section.title;

        const linkList = document.createElement('ul');
        linkList.classList.add('link-list');

        section.links.forEach(linkData => {
            const listItem = document.createElement('li');
            const linkBox = document.createElement('div');
            linkBox.classList.add('link-box');

            const linkImage = document.createElement('img');
            linkImage.src = linkData.imageSrc;
            linkImage.classList.add(linkData.imageClass);

            const linkContent = document.createElement('div');
            linkContent.classList.add('link-content');

            const linkTitle = document.createElement('h2');
            const link = document.createElement('a');
            link.href = linkData.url;
            link.textContent = linkData.title;
            link.target = '_blank'; // Add target attribute
            linkTitle.appendChild(link);

            const linkSummary = document.createElement('p');
            linkSummary.textContent = linkData.summary;

            linkContent.appendChild(linkTitle);
            
            // Check if the main link has extra sub-links
            if (linkData.extraLinks) {
                const extraLinkList = document.createElement('ul');
                extraLinkList.classList.add('extra-link-list');

                linkData.extraLinks.forEach(extraLinkData => {
                    const extraListItem = document.createElement('li');
                    const extraLink = document.createElement('a');
                    extraLink.href = extraLinkData.url;
                    extraLink.textContent = extraLinkData.title;
                    extraListItem.appendChild(extraLink);
                    extraLinkList.appendChild(extraListItem);
                });

                linkContent.appendChild(extraLinkList);
            }

            linkContent.appendChild(linkSummary);

            linkBox.appendChild(linkImage);
            linkBox.appendChild(linkContent);
            listItem.appendChild(linkBox);
            linkList.appendChild(listItem);
            linkList.appendChild(document.createElement('br'));
        });

        sectionElement.appendChild(sectionTitle);
        sectionElement.appendChild(linkList);
    });
}    

generateSections(sectionsData);

document.addEventListener('DOMContentLoaded', function() {
const leftPanel = document.querySelector('.left-panel');
const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', function() {
    leftPanel.classList.toggle('collapsed');
});
});

