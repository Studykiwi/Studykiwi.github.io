const sectionsData = [
    {
        id: "notes",
        title: "Notes",
        links: [
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wtg/l3-speciation-guide/",
                title: "Studytime Full Notes",
                summary: "Concepts, example answers, and practice questions."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level3/pdfs/bio_91605_speciation_notes.pdf#zoom=100",
                title: "NBTS Full Notes",
                summary: "Extensive notes for Speciation"
            },
            {
                imageSrc: "../../static/logos/passnceabio.png",
                url: "https://www.passbiology.co.nz/biology-level-3/evolution",
                title: "Pass NCEA Biology Notes",
                summary: "Very detailed notes for Speciation"
            },
            {
                imageSrc: "../../static/logos/dougwalker.jpg",
                url: "https://www.youtube.com/watch?v=6KrT50m1Tos",
                title: "Douglas Walker walkthrough video",
                summary: "Vid going through the full AS"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/html/senior_biology/NCEA3_biology_speciation.html",
                title: "Full NBTS Speciation site",
                summary: "All NBTS resources for Speciation including notes, summaries, and flashcards"
            },
            {
                imageSrc: "../../static/logos/learncoach.png",
                url: "https://my.learncoach.com/ncea/level-3/biology/3.5",
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
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level3/pdfs/bio_91605%20Speciation%20Last%20minute%20checklist.pdf#zoom=100",
                title: "NBTS Last Minute Reminder Sheet",
                summary: "Contains all the last minute info for just before you go into your exam"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level3/pdfs/bio_91605_SpeciationFlashcards.pdf#zoom=100",
                title: "Speciation flashcards",
                summary: "Very useful for learning the definitions in the AS, HIGHLY RECOMMENDED"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level3/pdfs/bio_91605_moreflashcards.pdf#zoom=100",
                title: "More Flashcards",
                summary: ""
            },
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/35-evolutionary-processes.html",
                title: "GZ Science Speciation page",
                summary: "Notes, working to excellence guides, and practice questions"
            }
        ]
    },
    {
        id: "pracquestions",
        title: "Practice Questions",
        links: [
            {
                imageSrc: "../../static/logos/nzqa.jfif",
                url: "https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=91605",
                title: "NZQA Practice Papers (2013-2022)",
                summary: "All available NCEA papers from previous year’s end of year exams."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level3/pdfs/bio_91605%20Evolutionary%20Patterns%20Collated%20questions.pdf#zoom=100",
                title: "NBTS Collated Evolutionary Patterns Questions",
                summary: "Questions about Evolutionary Patterns that appeared in end of year Speciation exams from 2006 - 2017."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level3/pdfs/bio_91605%20Gradualism%20and%20Punctuated%20equilibrium%20%20Collated%20Questions.pdf#zoom=100",
                title: "NBTS Collated Gradualism and Punctuated Equilibrium Questions",
                summary: "Questions about Gradualism and Punctuated Equilibrium that appeared in end of year Speciation exams from 2006 - 2017."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level3/pdfs/bio_91605%20Polyploidy%20Collated%20Questions.pdf#zoom=100",
                title: "NBTS Collated Polyploidy Questions",
                summary: "Questions about Polyploidy that appeared in end of year Speciation exams from 2006 - 2017."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level3/pdfs/bio_91605%20Speciation%20and%20Reproduction%20Isolation%20Mechanisms%20Collated%20Questions.pdf#zoom=100",
                title: "NBTS Collated Speciation and RIM’s Questions",
                summary: "Questions about Speciation and RIM’s that appeared in end of year Speciation exams from 2006 - 2017."
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
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level3/pdfs/bio_91605_speciation_outline.pdf",
                title: "NBTS Topic Outline",
                summary: "List of all the topics you need to know to do well in the exam"
            },
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/l3_biol_speciation_strategy_web_19_03/",
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
