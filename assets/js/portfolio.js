
const filterCategory = [
    'All',
    'TV Ad',
    'Corporate video',
    'Online video',
    'Documentary',
    'Animation',
    'Online Ad',
]


function fetchPortfolioData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const portfolioData =  [
                {
                    video_src: 'https://player.vimeo.com/video/430417831',
                    cover_src: 'https://spg-media.com/images/work-image-01.jpg',
                    tag: 'TV Ad',
                    title: 'Drop Dead Life Insurance',
                    text: 'A TV ad scripted, filmed and finished for Drop Dead Life Insurance.',
                },
                {
                    video_src: 'https://player.vimeo.com/video/365754535',
                    cover_src: 'https://spg-media.com/images/work-image-02.jpg',
                    tag: 'Corporate video',
                    title: 'modgarden',
                    text: 'A unique take on a corporate video that tells the story of how the company was founded.',
                },
                {
                    video_src: 'https://player.vimeo.com/video/739397094',
                    cover_src: 'https://spg-media.com/images/work-image-03.jpg',
                    tag: 'Online video',
                    title: 'Nummy Creations',
                    text: 'A comedic ad designed to entertain and educate the target audience.',
                },
                {
                    video_src: 'https://player.vimeo.com/video/391686408?h=aa5488f35d',
                    cover_src: 'https://spg-media.com/images/work-image-04.jpg',
                    tag: 'Documentary',
                    title: 'The Better Way',
                    text: "A trailer for a documentary that was released privately as part of an event.",
                },
                {
                    video_src: 'https://player.vimeo.com/video/703374231?h=57c29b3f6c',
                    cover_src: 'https://spg-media.com/images/work-image-05.jpg',
                    tag: 'Animation',
                    title: "ShipQuickie",
                    text: "An animation highlighting the company's unique selling proposition.",
                },
                {
                    video_src: 'https://player.vimeo.com/video/710430286?h=542ae24090',
                    cover_src: 'https://spg-media.com/images/work-image-06.jpg',
                    tag: 'TV Ad',
                    title: "Harrington's Auctioneers",
                    text: "A television ad written, scripted and filmed for Harrington's Auctioneers.",
                },
                {
                    video_src: 'https://player.vimeo.com/video/630835460',
                    cover_src: 'https://spg-media.com/images/work-image-07.jpg',
                    tag: 'Online Ad',
                    title: 'Delysées',
                    text: 'A feature ad created for a luxury dessert company in Toronto.',
                },
                {
                    video_src: 'https://player.vimeo.com/video/695035228?h=9cfa808fdc',
                    cover_src: 'https://spg-media.com/images/work-image-08.jpg',
                    tag: 'Animation',
                    title: 'My Freedom Coin',
                    text: 'An animation video introducing the signup process for My Freedom Coin.',
                },
                {
                    video_src: 'https://player.vimeo.com/video/314148840?h=8aa459b493',
                    cover_src: 'https://spg-media.com/images/work-image-09.jpg',
                    tag: 'Corporate video',
                    title: 'Youtrients',
                    text: 'A client testimonial filmed with a storyline for a health company, Youtrients.',
                },
                {
                    video_src: 'https://player.vimeo.com/video/239943527',
                    cover_src: 'https://spg-media.com/images/work-image-10.jpg',
                    tag: 'TV ad',
                    title: 'Prima Lighting',
                    text: 'A comedic ad designed to show the importance of hiring an expert.'
                },
                {
                    video_src: 'https://player.vimeo.com/video/211239781',
                    cover_src: 'https://spg-media.com/images/work-image-11.jpg',
                    tag: 'Online ad',
                    title: 'High Octane Training',
                    text: 'An online ad designed to highlight the services of High Octane Training and Therapy.',
                },
                {
                    video_src: 'https://player.vimeo.com/video/389151937',
                    cover_src: 'https://spg-media.com/images/work-image-12.jpg',
                    tag: 'TV ad',
                    title: 'Sport Chek',
                    text: 'A television ad part of a winter sports campaign for Sport Chek.',
                },
                {
                    video_src: 'https://player.vimeo.com/video/660526775?h=8d22e867bb',
                    cover_src: 'https://spg-media.com/images/work-image-13.jpg',
                    tag: 'Online ad',
                    title: 'Limitless Tire',
                    text: "A comedic ad that went viral due to it's unexpected ending.",
                },
                {
                    video_src: 'https://player.vimeo.com/video/425887062',
                    cover_src: 'https://spg-media.com/images/work-image-14.jpg',
                    tag: 'Online ad',
                    title: 'Limitless Tire',
                    text: "A comedic ad that went viral due to it's unexpected ending.",
                },
                {
                    video_src: 'https://player.vimeo.com/video/230953462',
                    cover_src: 'https://spg-media.com/images/work-image-15.jpg',
                    tag: 'Online ad',
                    title: 'Mo Real Estate',
                    text: 'A trailer-style, fun ad to showcase how far a real estate agent is willing to go.',
                },
                {
                    video_src: 'https://player.vimeo.com/video/196873778',
                    cover_src: 'https://spg-media.com/images/work-image-16.jpg',
                    tag: 'TV ad',
                    title: 'Noor Jewellers',
                    text: 'A television ad done in urdu/hindi for a jewellery store in Mississauga, ON.',
                },
                {
                    video_src: 'https://player.vimeo.com/video/419138762?h=3c7a6c01d9',
                    cover_src: 'https://spg-media.com/images/work-image-17.jpg',
                    tag: 'Animation',
                    title: 'TunnelBear Bumper Ad',
                    text: 'A bumper ad for TunnelBear to play at the start of Youtube clips.',
                },
                {
                    video_src: 'https://player.vimeo.com/video/310247027',
                    cover_src: 'https://spg-media.com/images/work-image-18.jpg',
                    tag: 'Corporate video',
                    title: 'The DNA Co.',
                    text: 'A corporate video outlining the story of the CEO, Kashif Khan.',
                },
                {
                    video_src: 'https://player.vimeo.com/video/314409770',
                    cover_src: 'https://spg-media.com/images/work-image-19.jpg',
                    tag: 'Corporate video',
                    title: 'Clarity Laser Eye',
                    text: 'An interview-style corporate video for Clarity Laser Eye institute.',
                },
                {
                    video_src: 'https://player.vimeo.com/video/478724923?h=f513d309d6',
                    cover_src: 'https://spg-media.com/images/work-image-20.jpg',
                    tag: 'Online video',
                    title: 'Evolt360',
                    text: 'An online ad highlighting the functions of an Evolt360 machine',
                },
                {
                    video_src: 'https://player.vimeo.com/video/663206474?h=e899043516',
                    cover_src: 'https://spg-media.com/images/work-image-21.jpg',
                    tag: 'Animation',
                    title: 'Kyocera',
                    text: 'A comparible animation made for a client specializing in commercial printing.',
                },
                {
                    video_src: 'https://player.vimeo.com/video/213392526?h=75692e43ef',
                    cover_src: 'https://spg-media.com/images/work-image-22.jpg',
                    tag: 'TV Ad',
                    title: 'Chevrolet',
                    text: 'A short format version of an ad created for General Motors, Chevrolet.',
                },
                {
                    video_src: 'https://player.vimeo.com/video/640708033?h=43a8cfe5ba',
                    cover_src: 'https://spg-media.com/images/work-image-23.jpg',
                    tag: 'Online ad',
                    title: 'Lavazza - Cafe',
                    text: "Lavazza's signature cafe has now opened up in Toronto and we were hired to make an intro!",
                },
                {
                    video_src: 'https://player.vimeo.com/video/266699160',
                    cover_src: 'https://spg-media.com/images/work-image-24.jpg',
                    tag: 'Online ad',
                    title: 'Tora Martial Arts',
                    text: 'A storyline ad created for Tora Martial Arts. An MMA gym and service based in Toronto, ON.',
                },
            ];
            resolve(portfolioData);
         }, 1000);
    });
}


const portfolioFilter = document.querySelector('.portfolio-filter');

let filterState = 'All';

function updateActiveClass(selectedElement) {
    const filterItems = portfolioFilter.querySelectorAll('li');
    filterItems.forEach((item) => item.classList.remove('active'));
    selectedElement.classList.add('active');

}

filterCategory.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    item === filterState && li.classList.add('active');
    portfolioFilter.appendChild(li);

    li.addEventListener('click', () => {
        filterState = item;
        updateActiveClass(li);
        filterPortfolio()
    });
});


function filterPortfolio() {
    const portfolioList = document.querySelector('.portfolio-list');
    const loading = document.createElement('div');
    
    if (portfolioList.children.length === 0 || portfolioList.querySelector('.loading')) {
        loading.textContent = 'Loading portfolio...';
        loading.style.textAlign = 'center';
        loading.style.fontWeight = 'bold';
        loading.style.margin = '10px auto';
        loading.style.fontSize = '24px';
        loading.classList.add('loading'); 
        portfolioList.appendChild(loading);
    }
    fetchPortfolioData()
    .then((data) => {
        loading && !portfolioList.children.length && portfolioList.removeChild(loading)

        const filteredData = data.filter((item) => 
            item.tag === filterState || filterState === 'All' 
        );

        portfolioList.innerHTML = ''

        filteredData.forEach((data) => {
            const item = document.createElement('li')
            const article = document.createElement('article')
            const blur = document.createElement('div')
            const cover = document.createElement('div')
            const body = document.createElement('div')
            const button = document.createElement('button')

            item.classList.add('item')
            article.classList.add('item-description')
            blur.classList.add('item-description-blur')
            
            cover.classList.add('item-description-cover')
            cover.innerHTML = `<img src="${data.cover_src}" alt="${data.title}">`
            
            body.classList.add('item-description-body')
            body.innerHTML = `
                <span class="item-description-tag">${data.tag}</span>
                <h2>${data.title}</h2>
                <p>${data.text}</p>
            `
            button.textContent = 'Watch video'
            button.setAttribute('type', 'button')

            button.addEventListener('click', () => {
                const portfolio = document.querySelector('.portfolio')

                const blur = document.createElement('div')
                blur.classList.add('portfolio-video-blur')
                
                const video = document.createElement('div')
                video.classList.add('portfolio-video')

                video.innerHTML = `<iframe src="${data.video_src}" frameborder="0"></iframe>`

                blur.appendChild(video)
                portfolio.appendChild(blur)

                removeVideo()
            })

            body.appendChild(button)

            article.appendChild(blur)
            article.appendChild(cover)
            article.appendChild(body)

            item.appendChild(article)

            portfolioList.appendChild(item);
        });
    })
    .catch((error) => {
    console.error('Error fetching portfolio data:', error);
    portfolioList.textContent = 'An error occurred. Please try again later.';
    });
}

// Call the filter function initially to display all items
filterPortfolio();

function removeVideo () {
    const videoWrapper = document.querySelector('.portfolio-video-blur')
    videoWrapper && videoWrapper.addEventListener('click', () => {
        const portfolio = document.querySelector('.portfolio')
        portfolio.removeChild(videoWrapper)
    })
}
