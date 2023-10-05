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
                url: "https://studytime.co.nz/wtg/l3-wave-systems-guide/",
                summary: "Concepts, example answers, and practice questions.",
            },
            {
                title: "No Brain Too Small notes",
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_Waves/pdfs/phys_91523_summaries.pdf#zoom=100#zoom=100",
                summary: "Comprehensive notes for Waves",
            },
            {
                title: "Physics Realm",
                imageSrc: "../../static/logos/linkplc.png",
                url: "https://sites.google.com/view/physicsrealm/l3-ncea-phy/l3-waves?authuser=0",
                summary: "Site that covers all concepts you need to know for the exam",
            },
            {
                title: "Mr Whibley notes video",
                imageSrc: "../../static/logos/mrwhibley.jpg",
                url: "https://www.youtube.com/watch?v=aa9LUoqusDM&ab_channel=MrWhibley",
                summary: "Great video covering all the concepts and calculations for the Waves exam",
            },
            {
                title: "The Physics Lounge",
                imageSrc: "../../static/logos/physicslounge.png",
                url: "https://pl.samhight.com/year-13-waves-ncea-level-3/",
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
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/help/pdfs/phy3_Things%20to%20remember_waves.pdf#zoom=100#zoom=100",
                summary: "Contains all the last minute info for just before you go into your exam",
            },
            {
                title: "StudyTime - Last Minute reminders",
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wp-content/uploads/2021/02/L3-Waves-cheatsheet.pdf",
                summary: "Final things to go over before heading into your exam",
            },
            {
                title: "NBTS - Definitions flashcards",
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_Waves/pdfs/Phy3_91523_fcard_Waves.pdf",
                summary: "Very helpful for remembering definitions",
            },
            {
                title: "NBTS - Equations flashcards",
                imageSrc: "../../static/logos/nbts.png",
                url: "https://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_Waves/pdfs/phys_91523_fcard_form.pdf",
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
                url: "https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=91523",
                summary: "All available NCEA papers from previous year’s end of year exams.",
            },
            {
                title: "NBTS - Standing Waves Practice Questions",
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Waves_Standing_Waves.pdf#zoom=100#zoom=100",
                summary: "Questions about Standing Waves that appeared in end of year Waves exams from 2004 - 2021.",
                extraLinks: [
                    {
                        url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Waves_Standing_Waves_answers.pdf#zoom=100#zoom=100",
                        title: "Answers",
                    },
                ]
            },
            {
                title: "NBTS - Beats and Doppler Effect Practice Questions",
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Waves_Doppler_effect.pdf#zoom=100#zoom=100",
                summary: "Questions about Beats and the Doppler Effect that appeared in end of year Waves exams from 2004 - 2021.",
                extraLinks: [
                    {
                        url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Waves_Doppler_effect_answers.pdf#zoom=100#zoom=100",
                        title: "Answers",
                    },
                ]
            },
            {
                title: "NBTS - Diffraction and Interference Practice Questions",
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Waves_Wave_behaviour_questions.pdf#zoom=100#zoom=100",
                summary: "Questions about Diffraction and Interference that appeared in end of year Waves exams from 2004 - 2021.",
                extraLinks: [
                    {
                        url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Waves_Wave_behaviour_answers.pdf#zoom=100#zoom=100",
                        title: "Answers",
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
                url: "https://studytime.co.nz/level3-physics-checklist-waves/",
                summary: "Notes covering the exam topics and strategy for doing well ",
            },
            {
                title: "StudyTime outline video",
                imageSrc: "../../static/logos/studytime.png",
                url: "https://www.youtube.com/watch?v=Se6L4OhzKdM",
                summary: "Video covering the exam topics and how achieve good results in it",
            },
            {
                title: "NBTS - Topics outline",
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_Waves/pdfs/phys_91523_checklist.pdf",
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
