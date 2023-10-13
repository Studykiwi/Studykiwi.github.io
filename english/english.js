const sectionsData = [
    {
        id: "all-levels",
        title: "All Levels",
        links: [
            {
                title: "How to Get Excellence in NCEA English Video",
                url: "https://www.youtube.com/watch?v=uVu59URHZIc&ab_channel=studytimenz",
                imageSrc: "../static/logos/studytime.png",
                extraUrl: "",
                summary: "Useful studytime video",
            },
            {
                title: "How to CRAM for NCEA Exams in 90 seconds",
                url: "https://www.youtube.com/watch?v=L3cDOvcshsI&ab_channel=studytimenz",
                imageSrc: "../static/logos/studytime.png",
                extraUrl: "",
                summary: "Useful last-minute studytime video",
            },
            {
                title: "Sparknotes home",
                url: "https://www.sparknotes.com/",
                imageSrc: "../static/logos/sparknotes.png",
                summary: "Summaries and notes for any book/film you could ever need. Simply search the text you want help with.",
            },
            {
                title: "Cracking unfamiliar poetry",
                url: "https://www.youtube.com/watch?v=xxaNhqSAzqg",
                imageSrc: "../static/logos/schaumann.jpg",
                summary: "Good video covering poetry in unfamiliar exams",
            },
            {
                title: "Student Share home",
                url: "https://studentshare.org/",
                imageSrc: "../static/logos/studentshare.png",
                summary: "Largest database of English essays, look up any you want help/inspiration from",
            },
            {
                title: "Bookrags home",
                url: "http://www.bookrags.com/#gsc.tab=0",
                imageSrc: "../static/logos/bookrags.png",
                summary: "Huge array of student essays and summaries for many books. Simply search to find your book/film and it will give you all the resources you need",
            }
        ]
    },
    {
        id: "level1",
        title: "Level 1",
        links: [
            {
                title: "NZQA level 1 English hub",
                url: "https://www.nzqa.govt.nz/ncea/assessment/search.do?query=english&view=exams&level=01",
                imageSrc: "../static/logos/nzqa.jfif",
                summary: "All NZQA english past papers, and exemplars",
            },
            {
                title: "Studytime level 1 Resources",
                url: "https://www.nzqa.govt.nz/ncea/assessment/search.do?query=english&view=exams&level=01",
                imageSrc: "../static/logos/studytime.png",
                summary: "Strategy videos and exam cheat sheets for level 1: Visual Texts, Written Texts, and Unfamiliar Texts",
            }
        ]
    },
    {
        id: "level2",
        title: "Level 2",
        links: [
            {
                title: "NZQA level 2 English hub",
                url: "https://www.nzqa.govt.nz/ncea/assessment/search.do?query=english&view=achievements&level=02",
                imageSrc: "../static/logos/nzqa.jfif",
                summary: "All NZQA english past papers, and exemplars",
            },
            {
                title: "Studytime level 2 Resources",
                url: "https://studytime.co.nz/resources/level-2-english/",
                imageSrc: "../static/logos/studytime.png",
                summary: "Strategy videos and exam cheat sheets for level 2: Visual Texts, Written Texts, and Unfamiliar Texts",
            }
        ]
    },
    {
        id: "level3",
        title: "Level 3",
        links: [
            {
                title: "NZQA level 3 English hub",
                url: "https://www.nzqa.govt.nz/ncea/assessment/search.do?query=english&view=achievements&level=03",
                imageSrc: "../static/logos/nzqa.jfif",
                summary: "All NZQA english past papers, and exemplars",
            },
            {
                title: "Studytime level 3 Resources",
                url: "https://studytime.co.nz/resources/level-2-english/",
                imageSrc: "../static/logos/studytime.png",
                summary: "Strategy videos and exam cheat sheets for level 3: Visual Texts, Written Texts, and Unfamiliar Texts",
            }
        ]
    },
    {
        id: "scholarship",
        title: "Scholarship",
        links: [
            {
                title: "NZQA scholarship English hub",
                url: "https://www2.nzqa.govt.nz/ncea/subjects/scholarship-subjects/english/",
                imageSrc: "../static/logos/nzqa.jfif",
                summary: "All NZQA english past papers, and exemplars",
            },
            {
                title: "Scholarship English resources hub",
                url: "http://bhsscholenglish.weebly.com/",
                imageSrc: "../static/logos/studytime.png",
                summary: "Resources for sections A, B, C",
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
