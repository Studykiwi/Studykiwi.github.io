// script.js

// generate data for the sections
const sectionsData = [
    {
        id: "notes",
        title: "Notes",
        links: [
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wtg/l3-mechanical-systems-guide/",
                title: "StudyTime full notes",
                summary: "Summary",
                extraLinks: [
                    {
                        url: "https://example.com/studytime-extra1",
                        title: "Extra Link 1",
                    },
                    {
                        url: "https://example.com/studytime-extra2",
                        title: "Extra Link 2",
                    }
                ]
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_Mechanics/pdfs/91524_Mechanics_summaries.pdf",
                title: "No Brain Too Small notes",
                summary: "Summary"
            },
            {
                imageSrc: "../../static/logos/linkplc.png",
                url: "https://sites.google.com/view/physicsrealm/l3-ncea-phy/l3-mechanics?authuser=0",
                title: "Physics Realm",
                summary: "Summary"
            },
            {
                imageSrc: "../../static/logos/mrwhibley.jpg",
                url: "https://www.youtube.com/watch?v=BYjNjme4LtQ&ab_channel=MrWhibley",
                title: "Mr Whibley youtube full mechanics walkthrough video",
                summary: "Summary"
            },
            {
                imageSrc: "../../static/logos/physicslounge.png",
                url: "https://pl.samhight.com/year-13-mechanics-ncea-level-3/",
                title: "The Physics Lounge",
                summary: "Summary"
            }
        ]
    },
    {
        id: "summaries",
        title: "Summary Resources",
        links: [
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/help/pdfs/phy3_Things%20to%20remember_mechanics.pdf",
                title: "NBTS - Last Minute Reminders",
                summary: "Summary"
            },
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wp-content/uploads/2021/02/L3-Mechanics-cheatsheet.pdf",
                title: "StudyTime - Last Minute reminders",
                summary: "Summary"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_Mechanics/pdfs/Phy3_91524_fcard_Mechanics.pdf",
                title: "NBTS - Definitions flashcards",
                summary: "Summary"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_Mechanics/pdfs/phys_91524_fcard_form.pdf",
                title: "NBTS - Equations flashcards",
                summary: "Summary"
            }
        ]
    },
    {
        id: "pracquestions",
        title: "Practice Questions",
        links: [
            {
                imageSrc: "../../static/logos/nzqa.jfif",
                url: "https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=91524",
                title: "NZQA Past Papers (2013-2022)",
                summary: "Summary"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/html/senior_physics/NCEA3_physics_mech_eqs.html",
                title: "No Brain Too Small - Mechanics Equations practice",
                summary: "Summary"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Mechanics_Linear_Mechanics.pdf#zoom=100",
                title: "NBTS - Collated Linear Mechanics Questions (2007-2021)",
                summary: "Summary"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Mechanics_Circular_Motion.pdf#zoom=100",
                title: "NBTS - Collated Circular Motion Questions (2007-2021)",
                summary: "Summary"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Mechanics_Angular_Momentum.pdf#zoom=100",
                title: "NBTS - Collated Angular Mechanics Questions (2007-2021)",
                summary: "Summary"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_exam_help/collated_questions/pdfs/Mechanics_SHM.pdf#zoom=100",
                title: "NBTS - Collated Simple Harmonic Motion Questions (2007-2021)",
                summary: "Summary"
            }
        ]
    },
    {
        id: "checklists",
        title: "Checklists",
        links: [
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://studytime.co.nz/wp-content/uploads/2021/02/Level3-Physics-Checklist-Mechanics.pdf",
                title: "StudyTime checklist",
                summary: "Summary"
            },
            {
                imageSrc: "../../static/logos/studytime.png",
                url: "https://www.youtube.com/watch?v=mvvNVRe9xHU&ab_channel=studytimenz",
                title: "StudyTime outline video",
                summary: "Summary"
            },
            {
                imageSrc: "../../static/logos/nbts.png",
                url: "http://www.nobraintoosmall.co.nz/students/physics/NCEA_Level3/L3_Mechanics/pdfs/phys_91524_checklist.pdf",
                title: "NBTS - Topics outline",
                summary: "Summary"
            },
            {
                imageSrc: "../../static/logos/nzqa.jfif",
                url: "https://www.nzqa.govt.nz/nqfdocs/ncea-resource/exams/2020/91523-res-2020.pdf",
                title: "Formula Sheet",
                summary: "Summary"
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
