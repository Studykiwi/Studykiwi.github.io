const sectionsData = [
    {
        id: "notes",
        title: "Notes",
        links: [
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level1/pdfs/PHYSICS_AS_90937_ataglance.pdf#zoom=100",
                title: "NBTS Full Notes",
                summary: "Comprehensive notes for E&M.",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/uploads/1/1/3/6/11360172/physics_1.3_electromagnetism_2013.pptx",
                title: "GZ Science Notes",
                summary: "Full notes, with extra strategies for answering questions",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/html/Level1_physics/NCEA1_physics_electricity.html",
                title: "Full NBTS Electricity and Magnetism site",
                summary: "All NBTS resources for E&M including notes, summaries, and flashcards",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/learncoach.png",
                url: "https://my.learncoach.com/ncea/level-1/physics/1.3/activity/2083",
                title: "LearnCoach Notes",
                summary: "Range of videos on all topics in the exam. Requires an account to view and there is a limit of 20 minutes of resources access per day on the free plan.",
                extraLinks: []
            }
        ]
    },
    {
        id: "summaries",
        title: "Summary Resources",
        links: [
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/p13-electromagnetism.html",
                title: "GZ Science E&M page",
                summary: "Notes, practice questions, and revision sheets",
                extraLinks: []
            }
        ]
    },
    {
        id: "pracquestions",
        title: "Practice Questions",
        links: [
            {
                imageSrc: "../../static/logos/nzqa.jfif",
                url: "https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=90937",
                title: "NZQA Practice Papers (2011-2022)",
                summary: "All available NCEA papers from previous year’s end of year exams",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/mrwhibley.jpg",
                url: "https://www.youtube.com/watch?v=6UbpE-UZNnQ&ab_channel=MrWhibley",
                title: "Mr Whibley 2021 exam walkthrough video",
                summary: "Great step by step run throughs of the exam in video form.",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level1/pdfs/AS%2090937%20-%20Collated%20electrostatics%20questions.pdf",
                title: "NBTS Collated Electrostatics Questions",
                summary: "Questions about Electrostatics that appeared in end of year E&M exams from 2017 - 2020.",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level1/pdfs/AS%2090937%20-%20Collated%20circuit%20questions.pdf",
                title: "NBTS Collated Circuits Questions",
                summary: "Questions about circuits that appeared in end of year mechanics exams from 2017 - 2020.",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level1/pdfs/AS%2090937%20-%20Collated%20electromagnetism%20questions.pdf",
                title: "NBTS Collated Electromagnets Questions",
                summary: "Questions about electromagnets that appeared in end of year mechanics exams from 2017 - 2020.",
                extraLinks: []
            }
        ]
    },
    {
        id: "checklists",
        title: "Checklists",
        links: [
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level1/pdfs/PHYSICS_AS_90937_OVERVIEW.pdf#zoom=100",
                title: "NBTS Topic Outline",
                summary: "List of all the topics you need to know to do well in the exam",
                extraLinks: []
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
