const sectionsData = [
    {
        id: "notes",
        title: "Notes",
        links: [
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wtg/l2-structure-and-bonding/",
                title: "Studytime Full Notes",
                summary: "Concepts, example answers, and practice questions."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level2/pdfs/che_91164_ataglance.pdf#zoom=100",
                title: "NBTS Full Notes",
                summary: "Comprehensive notes for Bonding"
            },
            {
                imageSrc: "../../static/logos/linkplc.png",
                url: "https://sites.google.com/view/msgarlick/resources/ncea-level-2-chemistry/as-91164-structure-bonding?authuser=0",
                title: "Mrs Garlick’s site",
                summary: "Full set of lessons on the topic plus extra checklists and booklet"
            },
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/uploads/1/1/3/6/11360172/2021_c2.4_workbook__gz_.pdf",
                title: "GZ Science Notes",
                summary: "Full notes, with extra strategies for answering questions."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/html/senior_chemistry/NCEA2_chemistry_bonding.html",
                title: "Full NBTS Bonding site",
                summary: "All NBTS resources for Bonding including notes, summaries, and flashcards."
            },
            {
                imageSrc: "../../static/logos/learncoach.png",
                url: "https://my.learncoach.com/ncea/level-2/chemistry/2.4",
                title: "LearnCoach Notes",
                summary: "Range of videos on all topics in the exam. Requires an account to view and there is a limit of 20 minutes of resources access per day on the free plan."
            },
            {
                imageSrc: "../../static/logos/chemicalminds.png",
                url: "https://www.chemical-minds.com/bonding.html",
                title: "Chemical Minds Resources",
                summary: "Resources for drawing, naming, and learning other concepts for exam."
            }
        ]
    },
    {
        id: "summaries",
        title: "Summary Resources",
        links: [
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level2/pdfs/che2_Things%20to%20remember_asbenergy.pdf",
                title: "NBTS Last Minute Reminder Sheet",
                summary: "Contains all the last minute info for just before you go into your exam."
            },
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/24-bonding-and-energy.html",
                title: "GZ Science Bonding page",
                summary: "Notes, walkthrough videos, and revision sheets."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level2/pdfs/che_91164_revision%20flash%20cards.pdf#zoom=100",
                title: "NBTS Bonding Flash Cards",
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
                url: "https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=91164",
                title: "NZQA Practice Papers (2011-2022)",
                summary: "All available NCEA papers from previous year’s end of year exams."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level2/pdfs/che_91164_shape_plus_answers.pdf#zoom=100",
                title: "NBTS Collated Lewis Diagrams Questions",
                summary: "Questions about Lewis diagrams that appeared in the end of year Bonding exams from 2006 - 2022."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level2/pdfs/che_91164_polarity_plusanswers.pdf#zoom=100",
                title: "NBTS Collated Polarity Questions",
                summary: "Questions about Polarity that appeared in the end of year Bonding exams from 2006 - 2022."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level2/pdfs/che_91164_particles_properties_plusanswers.pdf#zoom=100",
                title: "NBTS Collated Bonding and Properties Questions",
                summary: "Questions about Bonding and Properties that appeared in the end of year Bonding exams from 2006 - 2022."
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level2/pdfs/che_91164_energy_plusanswers.pdf#zoom=100",
                title: "NBTS Collated Energy Questions",
                summary: "Questions about Energy that appeared in the end of year Bonding exams from 2006 - 2022."
            }
        ]
    },
    {
        id: "checklists",
        title: "Checklists",
        links: [
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level2/pdfs/che_91164_outline.pdf#zoom=100",
                title: "NBTS Topic Outline",
                summary: "List of all the topics you need to know to do well in the exam."
            },
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/level2-chemistry-strategy-guide-structure-and-bonding/",
                title: "StudyTime Concepts and Strategy Checklist",
                summary: "Notes covering the exam topics and strategy for doing well."
            },
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://www.youtube.com/watch?v=vQv-fLOdEgI&amp;width=1280&amp;height=720?width=1263?height=710",
                title: "StudyTime Concepts and Strategy Video",
                summary: "Video covering the exam topics and strategy for doing well",
                extraLinks: []
            },
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
