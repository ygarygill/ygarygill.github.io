// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Define placeAllElementsRandomly outside of window.onload so it has global scope
function placeAllElementsRandomly() {
    const name = document.getElementById('name');
    placeElementRandomly(name);
    // Random font size and font family for the name
    name.style.fontSize = getRandomFontSize(30, 80);
    name.style.fontFamily = getRandomFont();

    document.querySelectorAll('.project').forEach(placeElementRandomly);

    const allRandomlyPlacedElements = Array.from(document.querySelectorAll('.randomly-placed'));
    shuffleArray(allRandomlyPlacedElements);
    allRandomlyPlacedElements.forEach(element => document.body.appendChild(element));
}

window.onload = function() {
    const projectsDiv = document.getElementById('projects');
    getProjects().forEach(project => {
        const projectDiv = document.createElement('div');
        const projectImage = document.createElement('img');
        const projectTitle = document.createElement('h2');

        // Generate a random font size and font family for the title
        const projectFontSize = getRandomFontSize(30, 100);
        const projectFontFamily = getRandomFont();

        // Apply the font and font size to the project title here, within the scope of projectFontSize and projectFontFamily
        projectTitle.style.fontSize = projectFontSize + 'px';
        projectTitle.style.fontFamily = projectFontFamily;

        projectDiv.classList.add('project', 'randomly-placed');
        projectImage.src = project.imagePath;

        // Load the image so that we can access its naturalWidth and naturalHeight
        const tempImage = new Image();
        tempImage.src = projectImage.src;
        tempImage.onload = function() {
            // Determine if the image is in portrait, landscape or square format
            if (this.naturalWidth > this.naturalHeight) {
                // The image is in landscape format
                const randomImageWidth = Math.floor(Math.random() * (350 - 250) + 250);
                projectImage.style.width = randomImageWidth + 'px';
            } else if (this.naturalWidth < this.naturalHeight) {
                // The image is in portrait format
                const randomImageWidth = Math.floor(Math.random() * (250 - 150) + 150);
                projectImage.style.width = randomImageWidth + 'px';
            } else {
                // The image is square
                const randomImageSize = Math.floor(Math.random() * (275 - 150) + 150);
                projectImage.style.width = randomImageSize + 'px';
                projectImage.style.height = randomImageSize + 'px';
            }
        };

        projectImage.style.objectFit = 'contain';
        projectTitle.innerText = project.title;
        projectTitle.style.fontSize = projectFontSize + 'px'; 
        projectTitle.style.fontFamily = projectFontFamily; 

        projectDiv.appendChild(projectImage);
        projectDiv.appendChild(projectTitle);

        projectDiv.onclick = function() {
            const overlayFontSize = getRandomFontSize(100, 300);  // Generate a random font size for the overlay title
            showProjectDetails(project, projectFontFamily, overlayFontSize + 'px');
        };
        

        projectsDiv.appendChild(projectDiv);
    });

    // Handle name switch on hover
    const nameElement = document.getElementById('name');
    const nameSwitches = Array.from(nameElement.getElementsByClassName('name-switch'));

    nameElement.addEventListener('mouseenter', function() {
        nameSwitches.forEach(function(nameSwitch, index) {
            nameSwitch.style.display = index === 0 ? 'none' : 'inline';
        });
    });

    nameElement.addEventListener('mouseleave', function() {
        nameSwitches.forEach(function(nameSwitch, index) {
            nameSwitch.style.display = index === 0 ? 'inline' : 'none';
        });
    });

    // Get all .randomly-placed elements and shuffle them
    const allRandomlyPlacedElements = Array.from(document.querySelectorAll('.randomly-placed'));
    shuffleArray(allRandomlyPlacedElements);

    // Append the shuffled elements back into the body
    const body = document.body;
    allRandomlyPlacedElements.forEach(element => body.appendChild(element));

    // Call it once when the page loads
    placeAllElementsRandomly();

    // And again whenever the window is resized
    window.onresize = placeAllElementsRandomly;
}

function getProjects() {
    return [
        {
            title: 'Synergy in Synthesis',
            imagePath: 'imagesintext/synergyinsynthesis/image/GillDecuypere_processfolio_1685952328_Pagina_01.png',
            details: [
                {
                    text: '"Synergy in Synthesis" reimagines AI as a co-creator in graphic design, generating limitless dynamic projects encapsulated in unique, auto-generated books. It celebrates the boundless creativity born from the collaboration between human intuition and AI innovation. (This description is an AI interpretation of the work we made together.)',
                    imageGroups: [
                        [
                            'imagesintext/synergyinsynthesis/WhatsApp Image 2023-07-03 at 7.17.27 PM.jpeg'
                        ],
                        [
                            'imagesintext/synergyinsynthesis/WhatsApp Image 2023-07-03 at 7.17.26 PM.jpeg'
                        ],
                        [
                            'imagesintext/synergyinsynthesis/WhatsApp Image 2023-07-03 at 7.17.27 PM (1).jpeg'
                        ]
                    ]
                },
                {
                    text: 'autonomously generating books',
                    videoPaths: [ // Change this to an array
                    'imagesintext/synergyinsynthesis/generating book.mp4',
                    'imagesintext/synergyinsynthesis/2023-06-08 21-26-11.mp4'
                    ],
                    imageGroups: [
                        [
                        ]
                    ]
                },
                {
                    text: 'generated books',
                    pdfPaths: [
                        'imagesintext/synergyinsynthesis/books/book_1685736947_processed.pdf',
                        'imagesintext/synergyinsynthesis/books/book_1685889575_processed.pdf',
                        'imagesintext/synergyinsynthesis/books/book_1685723065_processed.pdf',
                        'imagesintext/synergyinsynthesis/books/book_1685735484_processed.pdf',
                        'imagesintext/synergyinsynthesis/books/book_1685738391_processed.pdf',
                        'imagesintext/synergyinsynthesis/books/book_1685740634_processed.pdf',
                        'imagesintext/synergyinsynthesis/books/book_1685878387_processed.pdf',
                        'imagesintext/synergyinsynthesis/books/book_1685879302_processed.pdf',
                        'imagesintext/synergyinsynthesis/books/book_1685888622_processed.pdf',
                        'imagesintext/synergyinsynthesis/books/book_1685895624_processed.pdf',
                        // More PDF paths here...
                    ],
                    imageGroups: [
                        [
                        ]
                    ]
                },
                {
                    text: 'generated procesfolio',
                    pdfPaths: [
                        'imagesintext/synergyinsynthesis/GillDecuypere_processfolio_1685948741.pdf',
                        'imagesintext/synergyinsynthesis/GillDecuypere_processfolio_1685952328.pdf',
                        'imagesintext/synergyinsynthesis/GillDecuypere_processfolio_1685946574.pdf',
                        // More PDF paths here...
                    ],
                    imageGroups: [
                        [
                        ]
                    ]
                },
                // Add more details as needed...
            ]
        },
        {
            title: 'AI + ME',
            imagePath: 'imagesintext/AIplusME/1/44 final finished _Pagina_001.png',
            details: [
                {
                    text: 'Procesfolio AI + ME bachelor project',
                    pdfPaths: [
                        'imagesintext/AIplusME/Procesfolio Bachelorproef Gill Decuypere AI plus ME.pdf',
                        // More PDF paths here...
                    ],
                    imageGroups: [
                        [
                            'imagesintext/AIplusME/1/44 final finished _Pagina_002.png',
                            'imagesintext/AIplusME/1/44 final finished _Pagina_002.png',
                            'imagesintext/AIplusME/1/44 final finished _Pagina_002.png'
                        ],
                        [
                            'imagesintext/AIplusME/1/44 final finished _Pagina_003.png',
                            'imagesintext/AIplusME/1/44 final finished _Pagina_003.png',
                            'imagesintext/AIplusME/1/44 final finished _Pagina_003.png'
                        ],
                        [
                            'imagesintext/AIplusME/2/44 final finished _Pagina_016.png',
                            'imagesintext/AIplusME/2/44 final finished _Pagina_016.png',
                            'imagesintext/AIplusME/2/44 final finished _Pagina_017.png'
                        ],
                        [
                            'imagesintext/AIplusME/2/44 final finished _Pagina_020.png',
                            'imagesintext/AIplusME/2/44 final finished _Pagina_020.png',
                            'imagesintext/AIplusME/2/44 final finished _Pagina_021.png'
                        ],
                        [
                            'imagesintext/AIplusME/3/44 final finished _Pagina_045.png',
                            'imagesintext/AIplusME/3/44 final finished _Pagina_046.png',
                            'imagesintext/AIplusME/3/44 final finished _Pagina_046.png'
                        ],
                        [
                            'imagesintext/AIplusME/3/44 final finished _Pagina_052.png',
                            'imagesintext/AIplusME/3/44 final finished _Pagina_052.png',
                            'imagesintext/AIplusME/3/44 final finished _Pagina_055.png'
                        ],
                        [
                            'imagesintext/AIplusME/4/44 final finished _Pagina_058.png',
                            'imagesintext/AIplusME/4/44 final finished _Pagina_058.png',
                            'imagesintext/AIplusME/4/44 final finished _Pagina_059.png'
                        ],
                        [
                            'imagesintext/AIplusME/4/44 final finished _Pagina_062.png',
                            'imagesintext/AIplusME/4/44 final finished _Pagina_062.png',
                            'imagesintext/AIplusME/4/44 final finished _Pagina_063.png'
                        ],
                        [
                            'imagesintext/AIplusME/5/44 final finished _Pagina_066.png',
                            'imagesintext/AIplusME/5/44 final finished _Pagina_066.png',
                            'imagesintext/AIplusME/5/44 final finished _Pagina_083.png'
                        ],
                        [
                            'imagesintext/AIplusME/5/44 final finished _Pagina_082.png',
                            'imagesintext/AIplusME/5/44 final finished _Pagina_071.png',
                            'imagesintext/AIplusME/5/44 final finished _Pagina_076.png'
                        ],
                        [
                            'imagesintext/AIplusME/6/44 final finished _Pagina_088.png',
                            'imagesintext/AIplusME/6/44 final finished _Pagina_089.png',
                            'imagesintext/AIplusME/6/44 final finished _Pagina_095.png'
                        ],
                        [
                            'imagesintext/AIplusME/8/44 final finished _Pagina_107.png',
                            'imagesintext/AIplusME/8/44 final finished _Pagina_108.png',
                            'imagesintext/AIplusME/8/44 final finished _Pagina_109.png'
                        ],
                        [
                            'imagesintext/AIplusME/8/44 final finished _Pagina_114.png',
                            'imagesintext/AIplusME/8/44 final finished _Pagina_115.png',
                            'imagesintext/AIplusME/8/44 final finished _Pagina_118.png'
                        ],
                        [
                            'imagesintext/AIplusME/9/44 final finished _Pagina_114.png',
                            'imagesintext/AIplusME/9/44 final finished _Pagina_146.png',
                            'imagesintext/AIplusME/9/44 final finished _Pagina_114.png'
                        ],
                        [
                            'imagesintext/AIplusME/9/44 final finished _Pagina_149.png',
                            'imagesintext/AIplusME/9/44 final finished _Pagina_155.png',
                            'imagesintext/AIplusME/9/44 final finished _Pagina_156.png'
                        ],
                        [
                            'imagesintext/AIplusME/1/44 final finished _Pagina_160.png',
                            'imagesintext/AIplusME/1/44 final finished _Pagina_160.png',
                            'imagesintext/AIplusME/1/44 final finished _Pagina_160.png'
                        ],
                        [
                            'imagesintext/AIplusME/9/visietekaartje3.png',
                            'imagesintext/AIplusME/9/visietekaartje3.png',
                            'imagesintext/AIplusME/9/visietekaartje3.png'
                        ],
                        [
                            'imagesintext/AIplusME/9/visietekaartje32.png',
                            'imagesintext/AIplusME/9/visietekaartje32.png',
                            'imagesintext/AIplusME/9/visietekaartje32.png'
                        ],

                    ]
                },
                {
                    text: 'AI + ME 360 video',
                    videoPaths: [ // Change this to an array
                    'imagesintext/AIplusME/9/2022-10-27 14-19-36.mp4',                    
                    ],
                    imageGroups: [
                        [

                        ]
                    ]
                },
                // Add more details as needed...
            ]
        },
        {
            title: 'cursed emoji',
            imagePath: 'images/emoji.png',
            details: [
                {
                    text: 'cursed emoji pack',
                    imageGroups: [
                        [
                            'imagesintext/cursedemoji/1smiling-face_realistic.png'
                        ],
                        [
                            'imagesintext/cursedemoji/2woozy-face_realistic.png'
                        ],
                        [
                            'imagesintext/cursedemoji/3smirking-face_realistic.png'
                        ],
                        [
                            'imagesintext/cursedemoji/emojiwith marge.png'
                        ],
                        [
                            'imagesintext/cursedemoji/5heart-eyes-face_realistic.png'
                        ],
                        [
                            'imagesintext/cursedemoji/6face-with-tears-of-joy_realistic.png'
                        ],
                        [
                            'imagesintext/cursedemoji/7sad-face_realistic.png'
                        ],
                        [
                            'imagesintext/cursedemoji/8crying-face_realistic.png'
                        ],
                        [
                            'imagesintext/cursedemoji/9drooling-face_realistic.png'
                        ],
                        [
                            'imagesintext/cursedemoji/10face-with-sunglasses_realistic.png'
                        ],
                        [
                            'imagesintext/cursedemoji/11angry-face_realistic.png'
                        ],
                        [
                            'imagesintext/cursedemoji/12clown-face_realistic.png'
                        ],
                        [
                            'imagesintext/cursedemoji/13devil-face_realistic.png'
                        ]

                    ]
                },
                {
                    text: 'sticker pack',
                    imageGroups: [
                        [
                            'imagesintext/cursedemoji/Screenshot_20221116-152538_Messenger.png'
                        ]
                    ]
                },
            ]
        },
        {
            title: 'cover: tweaking on the dancefloor',
            imagePath: 'imagesintext/tweaking on the dancefloor/coverrrr/covernew1.png',
            details: [
                {
                    text: 'Cover tweaking on the dancefloor - ygary',
                    imageGroups: [
                        [
                            'imagesintext/tweaking on the dancefloor/xtcpills.png'
                        ],
                        [
                            'imagesintext/tweaking on the dancefloor/coverrrr/covernew1.png'
                        ],
                        [
                            'imagesintext/tweaking on the dancefloor/coverrrr/bzcl covr 3000,3.png'
                        ]
                    ]
                },
            ]
        },
        {
            title: 'poster for on(board)',
            imagePath: 'imagesintext/poster on board/Kopie van received_1125177127839464.jpeg',
            details: [
                {
                    text: 'Poster for ONBOARD Biennale 2021 THE QUARANTINE EDITION',
                    imageGroups: [
                        [
                            'imagesintext/poster on board/Kopie van received_1125177127839464.jpeg'
                        ]
                    ]
                },
                {
                    text: 'M HKA',
                    imageGroups: [
                        [
                            'imagesintext/poster on board/IMG_20210723_193942_119.jpg'
                        ]
                    ]
                },
            ]
        },
        {
            title: '7x7',
            imagePath: 'imagesintext/7X7/IMG_20221027_0001.png',
            details: [
                {
                    text: 'A visual guide to good graphic design!!!',
                    imageGroups: [
                        [
                            'imagesintext/7X7/IMG_20221026_0001.png'
                        ],
                        [
                            'imagesintext/7X7/IMG_20221026_0002.png'
                        ],
                        [
                            'imagesintext/7X7/IMG_20221026_0003.png'
                        ],
                        [
                            'imagesintext/7X7/IMG_20221026_0004.png'
                        ],
                        [
                            'imagesintext/7X7/IMG_20221026_0006.png'
                        ],
                        [
                            'imagesintext/7X7/IMG_20221026_0007.png'
                        ],
                        [
                            'imagesintext/7X7/IMG_20221026_0008.png'
                        ],
                        [
                            'imagesintext/7X7/IMG_20221026_0009.png'
                        ],
                        [
                            'imagesintext/7X7/IMG_20221026_0010.png'
                        ],
                        [
                            'imagesintext/7X7/IMG_20221026_0011.png'
                        ],
                        [
                            'imagesintext/7X7/IMG_20221026_0012.png'
                        ]
                    ]
                },
                // Add more details as needed...
            ]
        },
        {
            title: 'cover generator',
            imagePath: 'imagesintext/covergenerator/final_image23.png',
            details: [
                {
                    text: 'autonomous drain/softwaregoar style cover generator',
                    imageGroups: [
                        [
                            'imagesintext/covergenerator/final_image47.png',
                            'imagesintext/covergenerator/final_image48.png',
                            'imagesintext/covergenerator/final_image49.png'
                        ],
                        [
                            'imagesintext/covergenerator/final_image50.png',
                            'imagesintext/covergenerator/final_image51.png',
                            'imagesintext/covergenerator/final_image52.png'
                        ],
                        [
                            'imagesintext/covergenerator/final_image53.png',
                            'imagesintext/covergenerator/final_image54.png',
                            'imagesintext/covergenerator/final_image55.png'
                        ],
                        [
                            'imagesintext/covergenerator/final_image56.png',
                            'imagesintext/covergenerator/final_image57.png',
                            'imagesintext/covergenerator/final_image58.png'
                        ],
                        [
                            'imagesintext/covergenerator/final_image59.png',
                            'imagesintext/covergenerator/final_image60.png',
                            'imagesintext/covergenerator/final_image61.png'
                        ],
                        [
                            'imagesintext/covergenerator/final_image62.png',
                            'imagesintext/covergenerator/final_image63.png',
                            'imagesintext/covergenerator/final_image64.png'
                        ],
                        [
                            'imagesintext/covergenerator/final_image65.png',
                            'imagesintext/covergenerator/final_image66.png',
                            'imagesintext/covergenerator/final_image67.png'
                        ],
                        [
                            'imagesintext/covergenerator/final_image68.png',
                            'imagesintext/covergenerator/final_image69.png',
                            'imagesintext/covergenerator/final_image70.png'
                        ],
                        [
                            'imagesintext/covergenerator/final_image71.png',
                            'imagesintext/covergenerator/final_image72.png',
                            'imagesintext/covergenerator/final_image73.png'
                        ],
                        [
                            'imagesintext/covergenerator/final_image74.png',
                            'imagesintext/covergenerator/final_image75.png',
                            'imagesintext/covergenerator/final_image76.png'
                        ],
                        [
                            'imagesintext/covergenerator/final_image77.png',
                            'imagesintext/covergenerator/final_image78.png',
                            'imagesintext/covergenerator/final_image79.png'
                        ],

                        [
                            'imagesintext/covergenerator/final_image80.png',
                            'imagesintext/covergenerator/final_image81.png',
                            'imagesintext/covergenerator/final_image82.png'
                        ],

                        [
                            'imagesintext/covergenerator/final_image83.png',
                            'imagesintext/covergenerator/final_image84.png',
                            'imagesintext/covergenerator/final_image85.png'
                        ],

                        [
                            'imagesintext/covergenerator/final_image86.png',
                            'imagesintext/covergenerator/final_image87.png',
                            'imagesintext/covergenerator/final_image88.png'
                        ],

                        [
                            'imagesintext/covergenerator/final_image89.png',
                            'imagesintext/covergenerator/final_image91.png'
                        ]

                    ]
                },
                // Add more details as needed...
            ]
        },
        {
            title: 'cover fantasy world',
            imagePath: 'imagesintext/fantasy world/final one 3 (1).png',
            details: [
                {
                    text: 'cover: fantasy world - ygary x pools',
                    imageGroups: [
                        [
                            'imagesintext/fantasy world/test cover (2).png'
                        ],
                        [
                            'imagesintext/fantasy world/download (2) (2).png'
                        ],
                        [
                            'imagesintext/fantasy world/1663930063_seed_7879083439637437704_upscaled_2_sharpened_1 (1) (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1663931149_seed_7463659723723989755_upscaled_2_sharpened_1 (2).png'
                        ],
                        [
                            'imagesintext/fantasy world/cover formaat mask juisttt (1).jpg'
                        ],
                        [
                            'imagesintext/fantasy world/cover formaat (1).jpg'
                        ],
                        [
                            'imagesintext/fantasy world/1664823042_seed_3665123329365749334_original (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1664822981_seed_3665123329365749333_original (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1664823143_seed_8824009833460920524_original (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1664822926_seed_4192642711972307526_original (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1664823162_seed_8824009833460920525_original.png'
                        ],
                        [
                            'imagesintext/fantasy world/1664823182_seed_8824009833460920526_original.png'
                        ],
                        [
                            'imagesintext/fantasy world/cover background (1).jpg'
                        ],
                        [
                            'imagesintext/fantasy world/cover testttttt (1).jpg'
                        ],
                        [
                            'imagesintext/fantasy world/1664917807_seed_5857317932768181618_original (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1664912815_seed_2015557996176286009_original.png'
                        ],
                        [
                            'imagesintext/fantasy world/1664919684_seed_818187074720125899_original (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1664915140_seed_8371145142435414494_original (1) (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1664920360_seed_818187074720125906_original (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1664921558_seed_1568397587918599724_original (1).jpg'
                        ],
                        [
                            'imagesintext/fantasy world/canvas testttt klein gezicht (1)cover testttttt (2).jpg'
                        ],
                        [
                            'imagesintext/fantasy world/1664923705_seed_7418668011205216109_original (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1664924216_seed_7418668011205216115_original.png'
                        ],
                        [
                            'imagesintext/fantasy world/1665000875_seed_20017_original (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1665001359_seed_20015_original (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1665003798_seed_655530029409381112_original (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1665002845_seed_6215_original (1) (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1665022566_seed_6856303692781448160_original (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1665022469_seed_6856303692781448159_original.png'
                        ],
                        [
                            'imagesintext/fantasy world/1665022084_seed_6856303692781448155_original.png'
                        ],
                        [
                            'imagesintext/fantasy world/1665021769_seed_1139806003546411474_original (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1665022787_seed_1497489732635893576_original (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1665021865_seed_1139806003546411475_original (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1665022277_seed_6856303692781448157_original (1) (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1665022181_seed_6856303692781448156_original (1) (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/changes cover 2 (1).jpg'
                        ],
                        [
                            'imagesintext/fantasy world/inpainte zwaard2 (1).jpg'
                        ],
                        [
                            'imagesintext/fantasy world/1665072743_seed_3416047431885734079_upscaled_2_sharpened_1.png'
                        ],
                        [
                            'imagesintext/fantasy world/sword.jpg'
                        ],
                        [
                            'imagesintext/fantasy world/1665076318_seed_3036198835038840760_original.png'
                        ],
                        [
                            'imagesintext/fantasy world/zwaard test2 (1).jpg'
                        ],
                        [
                            'imagesintext/fantasy world/zwaard test2 mask (1).jpg'
                        ],
                        [
                            'imagesintext/fantasy world/1665420238_seed_5247219570110107729_original (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/1665417350_seed_3606509990844847432_original (1) (1).png'
                        ],
                        [
                            'imagesintext/fantasy world/cover finished I think 6 (1).jpg'
                        ],
                        [
                            'imagesintext/fantasy world/final one 3 (1).png'
                        ]
 
                    ]
                },
                // Add more details as needed...
            ]
        },
        {
            title: 'The Digital Polygon',
            imagePath: 'imagesintext/poly/Capture-removebg-preview.png',
            details: [
                {
                    text: 'Generative polygons',
                    videoPaths: [ // Change this to an array
                    'imagesintext/poly/poly count generated shapes 5 tussen in smaller text.mp4',                    
                    ],
                    imageGroups: [
                        [
                            'imagesintext/poly/20221026_170022.jpg'
                        ],
                        [
                            'imagesintext/poly/lol/20221027_144553.jpg',
                        ],
                        [
                            'imagesintext/poly/lol/20221027_144616.jpg',
                        ],
                        [
                            'imagesintext/poly/lol/20221027_144638.jpg',
                        ],
                        [
                            'imagesintext/poly/lol/20221027_144659.jpg',
                        ],
                        [
                            'imagesintext/poly/lol/20221027_144718.jpg',
                        ],
                        [
                            'imagesintext/poly/lol/20221027_144728.jpg',
                        ],
                        [
                            'imagesintext/poly/lol/20221027_144741.jpg',
                        ],
                        [
                            'imagesintext/poly/lol/20221027_144748.jpg',
                        ],
                        [
                            'imagesintext/poly/lol/20221027_144757.jpg',
                        ],
                        [
                            'imagesintext/poly/lol/20221027_144820.jpg',
                        ],
                        [
                            'imagesintext/poly/lol/20221027_144825.jpg',
                        ],
                        [
                            'imagesintext/poly/lol/20221027_144832.jpg',
                        ],
                        [
                            'imagesintext/poly/lol/20221027_144852.jpg',
                        ],
                    ]
                },
                // Add more details as needed...
            ]
        },
        {
            title: 'cover weightless',
            imagePath: 'imagesintext/weightless/cover weightless 3.jpg',
            details: [
                {
                    text: 'cover: weightless - ygary x dontcriii',
                    videoPaths: [ // Change this to an array
                    'imagesintext/weightless/datamosh-38604.mp4',  
                    'imagesintext/weightless/20210126_170302.mp4'                  
                    ],
                    imageGroups: [
                        [
                        ],

                    ]
                },
                {
                    text: '.',
                    videoPath: 'imagesintext/AIplusME/20210126_170302.mp4', // Path to the video file
                    imageGroups: [
                        [
                            'imagesintext/weightless/shot 1.JPG',
                            'imagesintext/weightless/shot 2.JPG',
                        ],
                        [
                            'imagesintext/weightless/20210211_140601.jpg',
                        ]
                    ]
                },
            ]
        },
        {
            title: 'work in progress',
            imagePath: 'imagesintext/Sinnerpropaganda/Tekengebied 2.png',
            details: [
                {
                    text: 'AI image editing for tfdm.garments',
                    imageGroups: [
                        [
                            'imagesintext/Sinnerpropaganda/Tekengebied6.png'
                        ],
                        [
                            'imagesintext/Sinnerpropaganda/download (11).png'
                        ],
                        [
                            'imagesintext/Sinnerpropaganda/download (22).png'
                        ],
                        [
                            'imagesintext/Sinnerpropaganda/s1.png'
                        ],
                        [
                            'imagesintext/Sinnerpropaganda/Tekengebied 2.png'
                        ],
                        [
                            'imagesintext/Sinnerpropaganda/download (23).png'
                        ],
                        [
                            'imagesintext/Sinnerpropaganda/download (28).png'
                        ],
                        [
                            'imagesintext/Sinnerpropaganda/IMG_3949.jpg'
                        ],
                        [
                            'imagesintext/Sinnerpropaganda/eddit spiderweb anamasenda (1).png'
                        ],
                    ]
                },
                // Add more details as needed...
            ]
        },
        {
            title: 'underground market poster',
            imagePath: 'imagesintext/posterlao/underground market poster_out0001.jpg',
            details: [
                {
                    text: 'Poster for Lao Verdonckt',
                    videoPaths: [ // Change this to an array
                    'imagesintext/posterlao/underground market poster.mp4',                   
                    ],
                    imageGroups: [
                        [
                            'imagesintext/posterlao/underground market poster_out0001.jpg',
                            'imagesintext/posterlao/underground market poster_out0044.jpg'
                        ]
                    ]
                },
                // Add more details as needed...
            ]
        },
        {
            title: 'The Serving Library',
            imagePath: 'imagesintext/the serving/3-beelden-A3-kleur-enkelzijdig (1)_Pagina_5.png',
            details: [
                {
                    text: 'Detail 1 about project 2...',
                    imageGroups: [
                        [
                            'imagesintext/the serving/naar voorkant_Pagina_8.png',
                        ],
                        [
                            'imagesintext/the serving/naar voorkant_Pagina_2.png',
                        ],
                        [
                            'imagesintext/the serving/naar voorkant_Pagina_3.png',
                        ],
                        [
                            'imagesintext/the serving/boekje marges testen 31 juiste pagina nummering 4.jpg',
                        ],
                        [
                            'imagesintext/the serving/TESTTTT 11.jpg',
                        ],
                    ]
                },
                {
                    text: '3D render of pages',
                    imageGroups: [
                        [
                            'imagesintext/the serving/3-beelden-A3-kleur-enkelzijdig (1)_Pagina_2.png',
                        ],
                        [
                            'imagesintext/the serving/3-beelden-A3-kleur-enkelzijdig (1)_Pagina_1.png',
                        ],
                        [
                            'imagesintext/the serving/3-beelden-A3-kleur-enkelzijdig (1)_Pagina_5.png',
                        ],
                        [
                            'imagesintext/the serving/3-beelden-A3-kleur-enkelzijdig (1)_Pagina_6.png',
                        ],
                        [
                            'imagesintext/the serving/3-beelden-A3-kleur-enkelzijdig (1)_Pagina_3.png',
                        ],
                        [
                            'imagesintext/the serving/3-beelden-A3-kleur-enkelzijdig (1)_Pagina_4.png',
                        ],
                    ]
                },
            ]
        },
    ];
}

function showProjectDetails(project, fontFamily, fontSize) {
    const overlay = document.createElement('div');
    overlay.id = 'overlay';

    const content = document.createElement('div');
    content.id = 'overlay-content';

    const randomImageWidth = Math.floor(Math.random() * (1300 - 700) + 700);  // Generate random width for main image
    const imagePath = project.imagePath;  // Store the image path

    let html = '<h1 style="font-family:' + fontFamily + '; font-size:' + fontSize + ';">' + project.title + '</h1>' +
    '<img id="main-image" class="resize" src="' + imagePath + '" style="width:' + randomImageWidth + 'px; height:auto; object-fit: cover; margin: 10px;">';
    
    project.details.forEach(detail => {
        const randomFontSize = getRandomFontSize(10, 20);
        const randomFont = getRandomFont();
        html += '<p style="font-size:' + randomFontSize + '; font-family:' + randomFont + ';">' + detail.text + '</p>';

        if (detail.videoPaths) {  // If videos are available for this detail
            detail.videoPaths.forEach(videoPath => {
                html += '<video class="resize" src="' + videoPath + '" style="width:600px; height:auto;" autoplay loop controls></video>';
            });
        }

        if (detail.pdfPaths) {  // If PDFs are available for this detail
            detail.pdfPaths.forEach(pdfPath => {
                html += '<iframe class="resize" src="' + pdfPath + '" style="width:600px; height:800px;" frameborder="0"></iframe>';
            });
        }

        detail.imageGroups.forEach(group => {
            const randomImagePath = group[Math.floor(Math.random() * group.length)];
            const randomHeight = Math.floor(Math.random() * (450 - 300) + 300);  // Generate random height for image group
            html += '<img class="resize" src="' + randomImagePath + '" style="height:' + randomHeight + 'px; margin: 10px;">';
        });
    });

    content.innerHTML = html;

    overlay.appendChild(content);
    document.body.appendChild(overlay);

    overlay.style.display = 'block';

    // Separate the overlay click event from the image click event
    overlay.onclick = function(event) {
        if (event.target.id !== 'main-image') {  // If the clicked target is not the main image, remove the overlay
            document.body.removeChild(overlay);
        }
    };

    // Add a click event to the main image and other elements
    const resizableElements = document.querySelectorAll('.resize');
    resizableElements.forEach(el => {
        el.onclick = function(event) {
            event.stopPropagation(); // Prevent event from bubbling up
            const randomImageWidth = Math.floor(Math.random() * (1300 - 600) + 600);  // Generate a new random width for the element

            const aspectRatio = el.naturalWidth / el.naturalHeight; // Get the aspect ratio of the image
            const newHeight = randomImageWidth / aspectRatio; // Calculate the new height based on the new width and the aspect ratio
            
            el.style.width = randomImageWidth + 'px';  // Apply the new width
            el.style.height = newHeight + 'px'; // Apply the new height
        };
    });
}

function placeElementRandomly(element) {
    // Get the available space
    const availableWidth = window.innerWidth - element.offsetWidth;
    const availableHeight = window.innerHeight - element.offsetHeight;

    // Calculate a random position
    const x = Math.floor(Math.random() * availableWidth);
    const y = Math.floor(Math.random() * availableHeight);

    // Apply the position
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
}

// Function to generate a random font size between a min and max value
function getRandomFontSize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min + "px";
}

// Function to select a random font from a list of five fonts
function getRandomFont() {
    const fonts = ["Arial", "Verdana", "Courier New", "Times New Roman", "Georgia"];
    return fonts[Math.floor(Math.random() * fonts.length)];
}