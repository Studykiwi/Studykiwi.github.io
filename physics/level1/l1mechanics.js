
const sectionsData = [
    {
        id: "notes",
        title: "Notes",
        links: [
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wtg/l1-mechanics-guide/",
                title: "Studytime Full Notes",
                summary: "Concepts, example answers, and practice questions.",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/science/NCEA_Level1/pdfs/90940/SCIENCE_AS_90940_survival.pdf",
                title: "NBTS Full Notes",
                summary: "Comprehensive notes for Mechanics, condensed down to just two sheets of paper.",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/uploads/1/1/3/6/11360172/pdf_notes_ncea_science_1__gz_.pdf",
                title: "GZ Science Notes",
                summary: "Full notes, with extra strategies for answering questions",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/html/Level1_science/NCEA1_science_mechanics.html",
                title: "Full NBTS Mechanics site",
                summary: "All NBTS resources for mechanics including notes, summaries, and flashcards",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/learncoach.png",
                url: "https://my.learncoach.com/ncea/level-1/science/1.1/activity/1332",
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
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/science/NCEA_Level1/pdfs/90940/SCIENCE_AS_90940_lastthings.pdf",
                title: "NBTS Last Minute Reminder Sheet",
                summary: "Contains all the last-minute info for just before you go into your exam",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/s11-mechanics-ex.html",
                title: "GZ Science Mechanics page",
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
                url: "https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=90940",
                title: "NZQA Practice Papers (2011-2022)",
                summary: "All available NCEA papers from previous year’s end of year exams",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/mrwhibley.jpg",
                url: "https://www.youtube.com/watch?v=LCUTCqnpZRo",
                title: "Mr Whibley 2022 exam walkthrough video",
                summary: "Great step-by-step run-throughs of the exams in video form",
                extraLinks: [
                    {
                        url: "https://www.youtube.com/watch?v=VNih-Kbh7hI",
                        title: "2021 walkthrough"
                    },
                    {
                        url: "https://www.youtube.com/watch?v=aBBsS41Ixdw",
                        title: "2020 walkthrough"
                    }
                ]
            },
            {
                imageSrc: "../../static/logos/dougwalker.jpg",
                url: "https://www.youtube.com/watch?v=kYfDI9yYIfI&ab_channel=DouglasWalker",
                title: "Douglas Walker 2020 exam walkthrough",
                summary: "Step by step walkthrough and explanation for 2020 exam questions",
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
                url: "https://www.nobraintoosmall.co.nz/students/science/NCEA_Level1/pdfs/90940/SCIENCE_AS_90940_OVERVIEW.pdf",
                title: "NBTS Topic Outline",
                summary: "List of all the topics you need to know to do well in the exam",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wp-content/uploads/2021/02/Level1-Science-Checklist-Mechanics.pdf",
                title: "StudyTime Concepts and Strategy Checklist",
                summary: "Notes and video covering the exam topics and strategy for doing well",
                extraLinks: [
                    {
                        url: "https://www.youtube.com/watch?v=LMO2bO7tnnc&ab_channel=studytimenz",
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
