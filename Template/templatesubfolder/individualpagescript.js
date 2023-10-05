
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
