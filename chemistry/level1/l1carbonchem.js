const sectionsData = [
    {
        id: "notes",
        title: "Notes",
        links: [
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level1/pdfs/CHEMISTRY_AS_90932_ataglance.pdf#zoom=100",
                title: "NBTS Full Notes",
                summary: "Comprehensive notes for Carbon Chemistry"
            },
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/uploads/1/1/3/6/11360172/1.3_carbon_chemistry_2013_nceal1.pptx",
                title: "GZ Science Notes",
                summary: "Full notes, with extra strategies for answering questions. (File needs to be downloaded)"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/html/Level1_chemistry/NCEA1_chemistry_carbon_chem.html",
                title: "Full NBTS Carbon Chemistry site",
                summary: "All NBTS resources for Carbon Chemistry including notes, summaries, and flashcards"
            },
            {
                imageSrc: "../../static/logos/learncoach.png",
                url: "https://my.learncoach.com/ncea/level-1/chemistry/1.3/activity/2135",
                title: "LearnCoach Notes",
                summary: "Range of videos on all topics in the exam. Requires an account to view and there is a limit of 20 minutes of resources access per day on the free plan."
            },
            {
                imageSrc: "../../static/logos/chemicalminds.png",
                url: "https://www.chemical-minds.com/carbon.html",
                title: "Chemical Minds Resources",
                summary: "Resources for drawing, naming, and learning other concepts for the exam"
            }
        ]
    },
    {
        id: "summaries",
        title: "Summary Resources",
        links: [
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level1/pdfs/CHEMISTRY_AS_90932_lastminute.pdf",
                title: "NBTS Last Minute Reminder Sheet",
                summary: "Contains all the last minute info for just before you go into your exam"
            },
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/c13-carbon-chemistry.html",
                title: "GZ Science Carbon Chemistry page",
                summary: "Notes, walkthrough videos, and revision sheets"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level1/pdfs/CHEMISTRY_AS_90932_flashcards.pdf",
                title: "NBTS Carbon Chemistry Flash Cards",
                summary: "Very good resource for learning everything you need to know in the topic. Highly recommended."
            }
        ]
    },
    {
        id: "pracquestions",
        title: "Practice Questions",
        links: [
            {
                imageSrc: "../../static/logos/nzqa.jfif",
                url: "https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=90932",
                title: "NZQA Practice Papers (2011-2022)",
                summary: "All available NCEA papers from previous year’s end of year exams."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/science/NCEA_Level1/pdfs/chemistry/AS%2090932%20Carbon%20Chemistry%20Collated%20Questions%20i.pdf#zoom=100",
                title: "NBTS Collated Carbon Chem Questions",
                summary: "Questions that appeared in the end of year Carbon Chemistry exams from 2012 - 2019."
            }
        ]
    },
    {
        id: "checklists",
        title: "Checklists",
        links: [
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level1/pdfs/CHEMISTRY_AS_90932_OVERVIEW.pdf#zoom=100",
                title: "NBTS Topic Outline",
                summary: "List of all the topics you need to know to do well in the exam"
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
