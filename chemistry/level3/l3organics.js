const sectionsData = [
    {
        id: "notes",
        title: "Notes",
        links: [
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wtg/l3-organic-compounds-guide/",
                title: "Studytime",
                summary: "Concepts, example answers, and practice questions.",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/uploads/1/1/3/6/11360172/2021_c3.5_organic_chemistry.pdf",
                title: "Organics PowerPoint",
                summary: "Covers the key ideas and concepts within the organics external",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/gzscience.png",
                url: "http://gzscienceclassonline.weebly.com/uploads/1/1/3/6/11360172/2021_c3.5_workbook__gz_.pdf",
                title: "Organics Worksheet",
                summary: "Covers the key ideas and concepts within the organics external",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391_distinguish.pdf#zoom=100",
                title: "Organics Distinguishing Tests Notes",
                summary: "Goes over key distinguishing reactions you need to know in the external.",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391_flowchart%20conversions.pdf#zoom",
                title: "Reaction Scheme Flowchart",
                summary: "A template for the key reactions you need to know",
                extraLinks: [
                    {
                        url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391_flowchart%20conversions-answers.pdf#zoom",
                        title: "Answers"
                    }
                ]
            }
        ]
    },
    {
        id: "summaries",
        title: "Summary Resources",
        links: [
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_90698_isomerism.pdf",
                title: "Isomerism Summary",
                summary: "A sheet which covers all the basics for each type of isomerism.",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391_summary%202023.pdf",
                title: "Organics Summary Sheet",
                summary: "A sheet which covers all the key topics for Organic chemistry",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391_functionalgroups.pdf",
                title: "Organic Functional Group Summary",
                summary: "A sheet for identifying and learning all functional groups",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391_Things%20to%20remember.pdf#zoom=100",
                title: "Last Minute Help Sheet",
                summary: "A sheet to help for last-minute study and nailing down basic areas.",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391%20exam%20survey.pdf#zoom=100",
                title: "Question Audit",
                summary: "A list of types of questions that have shown up in past exams.",
                extraLinks: []
            }
        ]
    },
    {
        id: "pracquestions",
        title: "Practice Questions",
        links: [
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391%20practice%20paper%201.pdf#zoom=100",
                title: "NBTS Practice Exam 1",
                summary: "NBTS practice exam as an alternative to NZQA exams",
                extraLinks: [
                    {
                        url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391%20practice%20paper%201%20answers.pdf",
                        title: "Answers"
                    }
                ]
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391%20practice%20paper%202.pdf#zoom=100",
                title: "NBTS Practice Exam 2",
                summary: "NBTS practice exam as an alternative to NZQA exams",
                extraLinks: [
                    {
                        url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391%20practice%20paper%202%20answers.pdf",
                        title: "Answers"
                    }
                ]
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391%20practice%20paper%203.pdf#zoom=100",
                title: "NBTS Practice Exam 3",
                summary: "NBTS practice exam as an alternative to NZQA exams",
                extraLinks: [
                    {
                        url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391%20practice%20paper%203%20answers.pdf",
                        title: "Answers"
                    }
                ]
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391%20practice%20paper%204.pdf",
                title: "NBTS Practice Exam 4",
                summary: "NBTS practice exam as an alternative to NZQA exams",
                extraLinks: [
                    {
                        url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391%20practice%20paper%204%20answers.pdf",
                        title: "Answers"
                    }
                ]
            },
            {
                imageSrc: "../../static/logos/nzqa.jfif",
                url: "https://nsn.nz/standard/91391",
                title: "NZQA Past Exams 2013-2022",
                summary: "NZQA past organic chemistry papers with answers too",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391_collatedreactionschemes.pdf#zoom=100",
                title: "NZQA Reaction Scheme Collated Questions",
                summary: "Collated questions for organic chemistry reaction schemes (and answers)",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391_collatedpolymers.pdf#zoom=100",
                title: "NZQA Polymer Collated Questions",
                summary: "Collated questions for organic chemistry polymers",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391_collatedname%20anddraw.pdf#zoom=100",
                title: "NZQA Drawing and Naming Organic Molecules",
                summary: "Collated questions for organic chemistry drawings and naming molecules",
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
                url: "https://www.nobraintoosmall.co.nz/students/chemistry/NCEA_Level3/pdfs/che_91391%20organic%20checklist.pdf#zoom=100",
                title: "Organics Checklist (NBTS)",
                summary: "A checklist to tick off what you know and what else needs to be revised",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://www.youtube.com/watch?v=Df2GsoU9xuw&amp;width=1280&amp;height=720?width=1263?height=710",
                title: "StudyTime outline video",
                summary: "Video covering the exam topics and how achieve good results in it",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wp-content/uploads/2021/02/Level3-Chemistry-Checklist-Organic-Compounds.pdf",
                title: "Organics Checklist - Part 2 (Studytime)",
                summary: "A checklist to tick off what you know and what else needs to be revised",
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
