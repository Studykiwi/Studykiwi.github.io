const sectionsData = [
    {
        id: "notes",
        title: "Notes",
        links: [
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wtg/l2-gene-expression-guide/",
                title: "Studytime Full Notes",
                summary: "Concepts, example answers, and practice questions."
            },
            {
                imageSrc: "../../static/logos/passnceabio.png",
                url: "https://www.passbiology.co.nz/biology-level-2/gene-expression",
                title: "Pass NCEA Biology Notes",
                summary: "Very detailed notes for Gene Expression"
            },
            {
                imageSrc: "../../static/logos/dougwalker.jpg",
                url: "https://www.youtube.com/watch?v=53hbB4KT2bA",
                title: "Douglas Walker walkthrough video",
                summary: "Vid going through the full AS"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/html/senior_biology/NCEA2_biology_gene_expression.html",
                title: "Full NBTS Gene Expression site",
                summary: "All NBTS resources for Gene Expression including notes, summaries, and flashcards"
            },
            {
                imageSrc: "../../static/logos/learncoach.png",
                url: "https://my.learncoach.com/ncea/level-2/biology/2.7/activity/1577",
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
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level2/pdfs/bio2_Things%20to%20remember_geneexp.pdf#zoom=100",
                title: "NBTS Last Minute Reminder Sheet",
                summary: "Contains all the last minute info for just before you go into your exam"
            },
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/27-gene-expression.html",
                title: "Gene Expression Flash cards",
                summary: "Very useful for learning the definitions in the AS, HIGHLY RECOMMENDED (However, missing some concepts)"
            },
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/27-gene-expression.html",
                title: "GZ Science Gene Expression page",
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
                url: "https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=91159",
                title: "NZQA Practice Papers (2012-2022)",
                summary: "All available NCEA papers from previous year’s end of year exams."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level2/pdfs/bio2_91159_collated_protein.pdf#zoom=100",
                title: "NBTS Collated Protein Synthesis Questions",
                summary: "Questions about Protein Synthesis that appeared in end of year Gene Expression exams from 2006 - 2017."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level2/pdfs/bio2_91159%20Collated%20Questions%20Effect%20of%20environment%20on%20Gene%20Expression.pdf#zoom=100",
                title: "NBTS Collated Environmental effects on Gene Expression Questions",
                summary: "Questions about Environmental effects on Gene Expression that appeared in end of year Gene Expression exams from 2006 - 2017."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level2/pdfs/bio2_91159%20Collated%20Questions%20Mutations%20and%20Metabolic%20Pathways.pdf#zoom=100",
                title: "NBTS Collated Mutations and Metabolic Pathways Questions",
                summary: "Questions about Mutations and Metabolic Pathways that appeared in end of year Gene Expression exams from 2006 - 2017."
            }
        ]
    },
    {
        id: "checklists",
        title: "Checklists",
        links: [
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/biology/NCEA_Level2/pdfs/bio2_91159_geneexpression_outline.pdf#zoom=100",
                title: "NBTS Topic Outline",
                summary: "List of all the topics you need to know to do well in the exam"
            },
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wp-content/uploads/2021/02/L2-Gene-cheatsheet.pdf",
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

