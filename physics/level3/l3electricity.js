// script.js

// generate data for the sections
const sectionsData = [
    {
        id: "notes",
        title: "Notes",
        links: [
            {
                title: "Studytime full notes",
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wtg/l3-electrical-systems-guide/",
                summary: "Concepts, example answers, and practice questions.",
            },
            {
                title: "No Brain Too Small notes",
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/html/senior_physics/NCEA3_physics_electrical_systems.html",
                summary: "Comprehensive notes for Electricity",
            },
            {
                title: "Physics Realm",
                imageSrc: "../../static/logos/linkplc.png",
                url: "https://sites.google.com/view/physicsrealm/l3-ncea-phy/l3-em?authuser=0",
                summary: "Covers all concepts you need to know for the exam",
            },
            {
                title: "Mr Whibley notes video",
                imageSrc: "../../static/logos/mrwhibley.jpg",
                url: "https://www.youtube.com/watch?v=AJvJaqNKfog",
                summary: "Great video covering all the concepts and calculations for Electricity",
            },
            {
                title: "The Physics Lounge",
                imageSrc: "../../static/logos/physicslounge.png",
                url: "https://pl.samhight.com/year-13-electricity-ncea-level-3/",
                summary: "Notes for definitions, concepts, and calculations",
            },
        ]
    },
    {
        id: "summaries",
        title: "Summary Resources",
        links: [
            {
                title: "NBTS - Last Minute Reminders",
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/help/pdfs/phy3_Things%20to%20remember_electricity.pdf#zoom=100",
                summary: "Contains all the last minute info for just before you go into your exam",
            },
            {
                title: "StudyTime - Last Minute reminders",
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wp-content/uploads/2021/02/L3-Electricity-cheatsheet.pdf",
                summary: "Final things to go over before your exam",
            },
            {
                title: "NBTS - Definitions flashcards",
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_Electricity/pdfs/Phy3_91526%20_fcard_Electricity.pdf#zoom=100",
                summary: "Very helpful for remembering definitions",
            },
            {
                title: "NBTS - Equations flashcards",
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_Electricity/pdfs/phys_91526_fcard_form.pdf#zoom=100",
                summary: "Very helpful for memorising equations",
            },
        ]
    },
    {
        id: "pracquestions",
        title: "Practice Questions",
        links: [
            {
                title: "NZQA past papers (2013-2022)",
                imageSrc: "../../static/logos/nzqa.jfif",
                url: "https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=91526",
                summary: "All available NCEA papers from previous year’s end of year exams.",
            },
            {
                title: "NBTS - DC Electricity Practice Questions",
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Electricity_dc_circuits.pdf#zoom=100",
                summary: "Questions about DC Electricity that appeared in end of year Electricity exams from 2004 - 2021.",
                extraLinks: [
                    {
                        title: "Answers",
                        url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Electricity_dc_circuits_answers.pdf#zoom=100",
                    },
                ]
            },
            {
                title: "NBTS - Capacitors Practice Questions",
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Electricity_Capacitors.pdf#zoom=100",
                summary: "Questions about Capacitors that appeared in end of year Electricity exams from 2004 - 2021.",
                extraLinks: [
                    {
                        title: "Answers",
                        url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Electricity_Capacitors_answers.pdf#zoom=100",
                    },
                ]
            },
            {
                title: "NBTS - Inductors Practice Questions",
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Electricity_Inductors.pdf#zoom=100",
                summary: "Questions about Inductors that appeared in end of year Electricity exams from 2004 - 2021.",
                extraLinks: [
                    {
                        title: "Answers",
                        url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Electricity_Inductors_answers.pdf#zoom=100",
                    },
                ]
            },
            {
                title: "NBTS - Alternating Current Practice Questions",
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Electricity_ac.pdf#zoom=100",
                summary: "Questions about AC that appeared in end of year Electricity exams from 2004 - 2021.",
                extraLinks: [
                    {
                        title: "Answers",
                        url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Electricity_ac_answers.pdf#zoom=100",
                    },
                ]
            },
        ]
    },
    {
        id: "checklists",
        title: "Checklists",
        links: [
            {
                title: "StudyTime checklist",
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/level3-physics-checklist-electricity/",
                summary: "Notes covering the exam topics and strategy for doing well ",
            },
            {
                title: "StudyTime outline video",
                imageSrc: "../../static/logos/studytime.png",
                url: "https://www.youtube.com/watch?v=9cRn81YYRkk",
                summary: "Video covering the exam topics and how achieve good results in it",
            },
            {
                title: "NBTS - Topics outline",
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_Electricity/pdfs/phys_91526_checklist.pdf",
                summary: "List of all the topics you need to know to do well in the exam",
            },
            {
                title: "Formula Sheet",
                imageSrc: "../../static/logos/nzqa.jfif",
                url: "https://www.nzqa.govt.nz/nqfdocs/ncea-resource/exams/2022/91523-res-2022.pdf",
                summary: "NZQA formula sheet for the exam",
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
