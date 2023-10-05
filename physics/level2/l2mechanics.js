const sectionsData = [
    {
        id: "notes",
        title: "Notes",
        links: [
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wtg/l2-mechanics-guide/",
                title: "Studytime Full Notes",
                summary: "Concepts, example answers, and practice questions.",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level2/L2_Mechanics/pdfs/phy_91171_mechanicshelp.pdf#zoom=100",
                title: "NBTS Full Notes",
                summary: "Comprehensive notes for Mechanics",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/html/senior_physics/NCEA2_physics_mechanics.html",
                title: "Full NBTS Mechanics site",
                summary: "All NBTS resources for Mechanics including notes, summaries, and flashcards",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/physicslounge.png",
                url: "https://pl.samhight.com/year-12-mechanics-ncea-level-2/",
                title: "The Physics Lounge Mechanics Notes",
                summary: "Notes for definitions, concepts, and calculations",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/learncoach.png",
                url: "https://my.learncoach.com/ncea/level-2/physics/2.4/activity/1676",
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
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level2/L2_Exam_Help/help/pdfs/phy2_Things%20to%20remember_mechanics.pdf#zoom=100",
                title: "NBTS Last Minute Reminder Sheet",
                summary: "Contains all the last minute info for just before you go into your exam",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/mrwhibley.jpg",
                url: "https://www.youtube.com/watch?v=rsqgVzOGmio",
                title: "Mr Whibley notes video",
                summary: "Youtube run through of the whole mechanics topic",
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
                url: "https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=91171",
                title: "NZQA Practice Papers (2012-2022)",
                summary: "All available NCEA papers from previous year’s end of year exams",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/mrwhibley.jpg",
                url: "https://www.youtube.com/watch?v=gf-EYdfd9s0",
                title: "Mr Whibley 2022 exam walkthrough video",
                summary: "Great step by step run throughs of the exams in video form",
                extraLinks: [
                    {
                        url: "https://www.youtube.com/watch?v=F9nGzBgmesw",
                        title: "2021 walkthrough"
                    },
                    {
                        url: "https://www.youtube.com/watch?v=6KPMa825uck",
                        title: "2020 walkthrough"
                    }
                ]
            },
            {
                imageSrc: "../../static/logos/dougwalker.jpg",
                url: "https://www.youtube.com/watch?v=ywPc-Cs9mFc&ab_channel=DouglasWalker",
                title: "Douglas Walker past exam walkthrough",
                summary: "Step by step walkthrough and explanation for past exam questions.",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level2/L2_Exam_Help/L2_collated_questions/pdfs/Mechanics_Motion.pdf#zoom=100",
                title: "NBTS Collated Motion and Energy Questions",
                summary: "Questions about Motion and Energy that appeared in end of year Mechanics exams from 2004 - 2021.",
                extraLinks: [
                    {
                        url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level2/L2_Exam_Help/L2_collated_questions/pdfs/Mechanics_motion_answers.pdf#zoom=100",
                        title: "Answers"
                    }
                ]
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level2/L2_Exam_Help/L2_collated_questions/pdfs/Mechanics_Newtons_Laws.pdf#zoom=100",
                title: "NBTS Collated Newton's Laws Questions",
                summary: "Questions about Newton's laws that appeared in end of year Mechanics exams from 2004 - 2021.",
                extraLinks: [
                    {
                        url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level2/L2_Exam_Help/L2_collated_questions/pdfs/Mechanics_Newtons_Laws_answers.pdf#zoom=100",
                        title: "Answers"
                    }
                ]
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level2/L2_Exam_Help/L2_collated_questions/pdfs/Mechanics_Vectors.pdf#zoom=100",
                title: "NBTS Collated Vectors Questions",
                summary: "Questions about Vectors that appeared in end of year Mechanics exams from 2004 - 2021.",
                extraLinks: [
                    {
                        url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level2/L2_Exam_Help/L2_collated_questions/pdfs/Mechanics_Vectors_answers.pdf#zoom=100",
                        title: "Answers"
                    }
                ]
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level2/L2_Exam_Help/L2_collated_questions/pdfs/Mechanics_Equilibrium.pdf#zoom=100",
                title: "NBTS Collated Equilibrium Questions",
                summary: "Questions about Equilibrium that appeared in end of year Mechanics exams from 2004 - 2021.",
                extraLinks: [
                    {
                        url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level2/L2_Exam_Help/L2_collated_questions/pdfs/Mechanics_Equilibrium_answers.pdf#zoom=100",
                        title: "Answers"
                    }
                ]
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level2/L2_Exam_Help/L2_collated_questions/pdfs/Mechanics_Hookes_law.pdf#zoom=100",
                title: "NBTS Collated Hooke’s Law Questions",
                summary: "Questions about Hooke’s Law that appeared in end of year Mechanics exams from 2004 - 2021.",
                extraLinks: [
                    {
                        url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level2/L2_Exam_Help/L2_collated_questions/pdfs/Mechanics_Hookes_law_answers.pdf#zoom=100",
                        title: "Answers"
                    }
                ]
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level2/L2_Exam_Help/L2_collated_questions/pdfs/Mechanics_Circular_Motion.pdf#zoom=100",
                title: "NBTS Collated Circular Motion Questions",
                summary: "Questions about Circular Motion that appeared in end of year Mechanics exams from 2004 - 2021.",
                extraLinks: [
                    {
                        url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level2/L2_Exam_Help/L2_collated_questions/pdfs/Mechanics_Circular_Motion_answers.pdf",
                        title: "Answers"
                    }
                ]
            }
        ]
    },
    {
        id: "checklists",
        title: "Checklists",
        links: [
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level2/L2_Mechanics/pdfs/phys_91171_checklist.pdf#zoom=100",
                title: "NBTS Topic Outline",
                summary: "List of all the topics you need to know to do well in the exam",
                extraLinks: []
            },
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wp-content/uploads/2021/02/Level1-Science-Strategy-Guide-Mechanics.pdf",
                title: "StudyTime Concepts and Strategy Checklist",
                summary: "Notes and video covering the exam topics and strategy for doing well",
                extraLinks: [
                    {
                        url: "https://www.youtube.com/watch?v=LMO2bO7tnnc&width=1280&height=720",
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
