const sectionsData = [
    {
        id: "notes",
        title: "Notes",
        links: [
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wtg/l1-acids-and-bases-guide/",
                title: "Studytime Full Notes",
                summary: "Concepts, example answers, and practice questions."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/science/NCEA_Level1/pdfs/90944/SCIENCE_AS_90944_survivalsheet.pdf#zoom=100",
                title: "NBTS Full Notes",
                summary: "Comprehensive notes for Acids and Bases"
            },
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/uploads/1/1/3/6/11360172/2019_s1.5_workbook__gz_.pdf",
                title: "GZ Science Notes",
                summary: "Full notes, with extra strategies for answering questions"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/html/Level1_science/NCEA1_science_acids_bases.html",
                title: "Full NBTS Acids and Bases site",
                summary: "All NBTS resources for Acids and Bases including notes, summaries, and practice exams"
            },
            {
                imageSrc: "../../static/logos/learncoach.png",
                url: "https://my.learncoach.com/ncea/level-1/science/1.5/activity/1375",
                title: "LearnCoach Notes",
                summary: "Range of videos on all topics in the exam. Requires an account to view and there is a limit of 20 minutes of resources access per day on the free plan."
            },
            {
                imageSrc: "../../static/logos/chemicalminds.png",
                url: "https://www.chemical-minds.com/carbon.html",
                title: "Chemical Minds Resources",
                summary: "Resources for drawing, naming, and learning other concepts for exam"
            }
        ]
    },
    {
        id: "summaries",
        title: "Summary Resources",
        links: [
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/science/NCEA_Level1/pdfs/90944/SCIENCE_AS_90944_reallyreally_last_minute.pdf#zoom=100",
                title: "NBTS Last Minute Reminder Sheet",
                summary: "Contains all the last minute info for just before you go into your exam"
            },
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/s15-acids-and-bases-ex.html",
                title: "GZ Science Acids and Bases page",
                summary: "Notes, practice questions, and revision sheets"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level1/pdfs/90944/SCIENCE_AS_90944_flashcards.pdf",
                title: "NBTS Acids and Bases Flash Cards",
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
                url: "https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=90944",
                title: "NZQA Practice Papers (2011-2022)",
                summary: "All available NCEA papers from previous year’s end of year exams."
            },
            {
                imageSrc: "../../static/logos/dougwalker.jpg",
                url: "https://www.youtube.com/watch?v=fBQuz6E756o&ab_channel=DouglasWalker",
                title: "Douglas Walker key concepts and exam walkthrough",
                summary: "Step by step video walkthrough of key concepts to remember and explanations for past exam questions."
            },
            {
                imageSrc: "../../static/logos/alphaatoms.jpg",
                url: "https://www.youtube.com/watch?v=OJBl_iGPLms&ab_channel=AlphaAtoms",
                title: "Alpha Atoms 2020 paper walkthrough video",
                summary: "Step by step explanations of 2020 paper"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/science/NCEA_Level1/pdfs/90944/SCIENCE_AS_90944_collated_atom_questions.pdf#zoom=100",
                title: "NBTS Collated Atoms and Ions Questions",
                summary: "Questions about Atoms and Ions that appeared in end of year A&B exams from 2008 - 2020."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/science/NCEA_Level1/pdfs/90944/SCIENCE_AS_90944_collated_acids_questions.pdf#zoom=100",
                title: "NBTS Collated Acids and Bases Questions",
                summary: "Questions about Acids and Bases that appeared in end of year A&B exams from 2008 - 2020."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/science/NCEA_Level1/pdfs/90944/SCIENCE_AS_90944_collated_rates_questions.pdf#zoom=100",
                title: "NBTS Collated Rates of Reaction Questions",
                summary: "Questions about Rates of Reactions that appeared in end of year A&B exams from 2008 - 2020."
            }
        ]
    },
    {
        id: "checklists",
        title: "Checklists",
        links: [
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/science/NCEA_Level1/pdfs/90944/SCIENCE_AS_90944_OVERVIEW.pdf#zoom=100",
                title: "NBTS Topic Outline",
                summary: "List of all the topics you need to know to do well in the exam"
            },
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wp-content/uploads/2021/02/Level1-Science-Strategy-Guide-Acids-and-Bases.pdf",
                title: "StudyTime Concepts and Strategy Checklist",
                summary: "Notes covering the exam topics and strategy for doing well"
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
