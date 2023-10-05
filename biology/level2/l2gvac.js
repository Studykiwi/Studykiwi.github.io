const sectionsData = [
    {
        id: "notes",
        title: "Notes",
        links: [
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wtg/l2-genetic-variation-guide/",
                title: "Studytime Full Notes",
                summary: "Concepts, example answers, and practice questions."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level2/pdfs/bio2_91157_LAST%20MINUTE.pdf#zoom=100",
                title: "NBTS Full Notes",
                summary: "Extensive notes for Genetic variation and change"
            },
            {
                imageSrc: "../../static/logos/passnceabio.png",
                url: "https://www.passbiology.co.nz/biology-level-2/genetic-variation-and-change",
                title: "Pass NCEA Biology Notes",
                summary: "Very detailed notes for Genetic variation and change"
            },
            {
                imageSrc: "../../static/logos/dougwalker.jpg",
                url: "https://www.youtube.com/watch?v=CTYMKzchD80",
                title: "Douglas Walker walkthrough video",
                summary: "Vid going through the full AS"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://sites.google.com/view/msgarlick/resources/ncea-level-2-biology/as-91157-genetic-variation-and-change?authuser=0",
                title: "Mrs Garlick Full GVaC website",
                summary: "Lots of lessons covering the full range of topics + checklist for info you need"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/html/senior_biology/NCEA2_biology_genetic_variation.html",
                title: "Full NBTS Genetic variation and change site",
                summary: "All NBTS resources for Genetic variation and change including notes, summaries, and flashcards"
            },
            {
                imageSrc: "../../static/logos/learncoach.png",
                url: "https://my.learncoach.com/ncea/level-2/biology/2.5",
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
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level2/pdfs/bio2_91157_flashcards.pdf#zoom=100",
                title: "Genetic variation and change Flashcards",
                summary: "Very useful for learning the definitions in the AS, HIGHLY RECOMMENDED"
            },
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/25-genetic-variation-and-change.html",
                title: "GZ Science Genetic variation and change page",
                summary: "Great range of resources and useful videos"
            }
        ]
    },
    {
        id: "pracquestions",
        title: "Practice Questions",
        links: [
            {
                imageSrc: "../../static/logos/nzqa.jfif",
                url: "https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=91157",
                title: "NZQA Practice Papers (2012-2022)",
                summary: "All available NCEA papers from previous year’s end of year exams."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level2/pdfs/bio2_91157_collated%20pop_genetics.pdf#zoom=100",
                title: "NBTS Collated Population Genetics Questions",
                summary: "Questions about Population Genetics that appeared in end of year Genetic variation and change exams from 2006 - 2017."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level2/pdfs/bio2_91157_collated_punnett_squares.pdf#zoom=100",
                title: "NBTS Collated Punnett Squares Questions",
                summary: "Questions about Punnett Squares that appeared in end of year Genetic variation and change exams from 2006 - 2017."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level2/pdfs/bio2_91157_collated_genetic_variation.pdf#zoom=100",
                title: "NBTS Collated Genetic Variation Questions",
                summary: "Questions about Genetic Variation that appeared in end of year Genetic variation and change exams from 2006 - 2017."
            }
        ]
    },
    {
        id: "checklists",
        title: "Checklists",
        links: [
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://www.youtube.com/watch?v=ZcaS8IZgZ78&width=1280&height=720",
                title: "StudyTime Concepts and Strategy Video",
                summary: "Video covering the exam topics and strategy for doing well"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level2/pdfs/bio2_91157_genetic%20variation%20glossary.pdf",
                title: "NBTS Full set of Definitions",
                summary: "List of all the definitions in the topic"
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
