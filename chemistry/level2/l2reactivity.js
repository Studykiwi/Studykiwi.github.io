const sectionsData = [
    {
        id: "notes",
        title: "Notes",
        links: [
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wtg/l2-chemical-reactivity-guide/",
                title: "Studytime Full Notes",
                summary: "Concepts, example answers, and practice questions.",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level2/pdfs/che_91166%20Reactivity%20summary2.pdf",
                title: "NBTS Full Notes",
                summary: "Comprehensive notes for Chemical Reactivity",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/uploads/1/1/3/6/11360172/2.6_reactivity__gz__2021.pdf",
                title: "GZ Science Notes",
                summary: "Full notes, with extra strategies for answering questions.",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/learncoach.png",
                url: "https://my.learncoach.com/ncea/level-2/chemistry/2.6",
                title: "LearnCoach Notes",
                summary: "Range of videos on all topics in the exam. Requires an account to view and there is a limit of 20 minutes of resources access per day on the free plan.",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/chemicalminds.png",
                url: "https://www.chemical-minds.com/reactivity.html",
                title: "Chemical Minds Resources",
                summary: "Resources for all concepts for exam",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/html/senior_chemistry/NCEA2_chemistry_chemical_reactivity.html",
                title: "Full NBTS Chemical Reactivity site",
                summary: "All NBTS resources for Chemical Reactivity including notes, summaries, and flashcards",
                extraLinks: []
            }
        ]
    },
    {
        id: "summaries",
        title: "Summary Resources",
        links: [
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level2/pdfs/che2_Things%20to%20remember_reactivity.pdf#zoom=100",
                title: "NBTS Last Minute Reminder Sheet",
                summary: "Contains all the last minute info for just before you go into your exam",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/26-reactivity.html",
                title: "GZ Science Chemical Reactivity page",
                summary: "Notes, walkthrough videos, and revision sheets",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level2/pdfs/che_91166_revised%20flashcards.pdf#zoom=100",
                title: "NBTS Chemical Reactivity Flash Cards",
                summary: "Very good resource for learning everything you need to know in the topic. Highly recommended.",
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
                url: "https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=91166",
                title: "NZQA Practice Papers (2012-2022)",
                summary: "All available NCEA papers from previous year’s end of year exams",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level2/pdfs/che_91166_collatedrates.pdf#zoom=100",
                title: "NBTS Collated Rates of Reactions Questions",
                summary: "Questions about Rates of Reactions that appeared in the end of year Chemical Reactivity exams from 2012 - 2022",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level2/pdfs/che_91166_collated%20equilibra.pdf#zoom=100",
                title: "NBTS Collated Equilibria Questions",
                summary: "Questions about Equilibria that appeared in the end of year Chemical Reactivity exams from 2012 - 2022",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level2/pdfs/che_91166_collated_acidsbasesandpH.pdf#zoom=100",
                title: "NBTS Collated Acids, bases, pH Questions",
                summary: "Questions about Acids, bases, pH that appeared in the end of year Chemical Reactivity exams from 2012 - 2022",
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
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level2/pdfs/che_91166_reactivityoutline.pdf#zoom=100",
                title: "NBTS Topic Outline",
                summary: "List of all the topics you need to know to do well in the exam",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/level2-chemistry-strategy-guide-chemical-reactivity/",
                title: "StudyTime Concepts and Strategy Checklist",
                summary: "Notes and video covering the exam topics and strategy for doing well",
                extraLinks: [
                    {
                        url: "https://www.youtube.com/watch?v=m91_9dN1sKs&width=1280&height=720",
                        title: "Strategy Video"
                    }
                ]
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
