const data = [
    {
        id: 1,
        city: 'Jaipur',
        desc: 'Known as the Pink City, famous for its historic palaces and vibrant culture.',
        img: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fHww',
        rating: 5,
        recommendations:[
            {
                name: "Hawa Mahal",
                img:'https://media.istockphoto.com/id/480897636/photo/hawa-mahal-palace-of-the-winds-jaipur-rajasthan.jpg?s=612x612&w=0&k=20&c=r-LLHZSWTJqgd31zSw75l-VjtpBmOjyktTBXh0tN6lc=',
            },
            {
                name: "Jal Mahal water palace",
               img:'https://media.istockphoto.com/id/938975958/photo/jal-mahal-water-palace-jaipur-rajasthan-with-landscape-at-sunset.jpg?s=612x612&w=0&k=20&c=MSpEwtV35btQgqL6E4bcpkUuOsyVFLsuEQJMWv5umDg='
            },
            {
                name: "Amber Fort",
               img:'https://media.istockphoto.com/id/1135820309/photo/amber-fort-and-maota-lake-jaipur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=raUKDB1Mris9Z7SjvuuTieZRzF2-CaKukGvTC8t1kuo='
            },
            {
                name:"Nahargarh Fort",
                img:"https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?s=612x612&w=is&k=20&c=6qnm00Jce_52P0-s_UASHwVuizEObuCOLf0Ol7_0hSw="
            }
            
        ]
    },
    {
        id: 2,
        city: 'Mumbai',
        desc: 'The city that never sleeps, famous for Bollywood and the Gateway of India.',
        img: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww',
        rating: 4,
        recommendations:[
            {
                name: "Marine drive",
                img:'https://media.istockphoto.com/id/1010105188/photo/cuff-parade-south-mumbai-at-night.jpg?s=612x612&w=is&k=20&c=ExBhwJDRLVYQ4eg71ubMOPMaXF8IxVWlX8tI1CZ6WiE=',
            },
            {
                name: "Gateway of India",
               img:'https://images.unsplash.com/photo-1625731226721-b4d51ae70e20?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2F0ZXdheSUyMG9mJTIwaW5kaWElMjBtdW1iYWklMjBtdW1iYWklMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D'
            },
            {
                name: "chhatrapati shivaji terminus",
               img:'https://media.gettyimages.com/id/552552053/photo/mumbai-victoria-terminus-railways-station.jpg?s=612x612&w=0&k=20&c=6ZANreQEFHYxd521lfsSw1aTAf4hzVA-40s1R9SJK34='
            },
            {
                name:"Elephanta Caves",
                img:"https://media.istockphoto.com/id/979180834/photo/elephanta-caves-historical-architecture-in-mumbai-india.jpg?s=612x612&w=0&k=20&c=DBPpMr6nBxQF8upTxZUS9S9UUq-LV5iKlH8_BCrKIh0="
            }
            
        ]
    },
    {
        id: 3,
        city: 'Delhi',
        desc: 'The capital city, rich with historical monuments and bustling markets.',
        img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaGl8ZW58MHx8MHx8fDA%3D',
        rating: 4,
        recommendations:[
            {
                name: "India Gate",
                img:'https://media.istockphoto.com/id/471052720/photo/india-gate-delhi-illuminated-dusk-scene.jpg?s=612x612&w=0&k=20&c=L714iEOhpNMAO3tuWY1MzOeExNLFR71XQQJc0iDXtPY=',
            },
            {
                name: "Lotus Temple",
               img:'https://media.istockphoto.com/id/517364023/photo/lotus-temple.jpg?s=612x612&w=0&k=20&c=Ap7wHtvS2nWcIyUsEDhThIln1VOcWlm50dVv7GYcBbI='
            },
            {
                name: "Lodhi Garden",
               img:'https://media.istockphoto.com/id/870352486/photo/bara-gumbad-at-lodi-garden.jpg?s=612x612&w=0&k=20&c=fAwv22PvA368mDcOGQis9FMjbXNj6uTM20A5kkG35E4='
            },
            
        ]
    },
    {
        id: 4,
        city: 'Goa',
        desc: 'Popular beach destination known for its nightlife and Portuguese heritage.',
        img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fHww',
        rating: 5,
        recommendations:[
            {
                name: "Marine drive",
                img:'https://media.istockphoto.com/id/1010105188/photo/cuff-parade-south-mumbai-at-night.jpg?s=612x612&w=is&k=20&c=ExBhwJDRLVYQ4eg71ubMOPMaXF8IxVWlX8tI1CZ6WiE=',
            },
            {
                name: "Gateway of India",
               img:'https://images.unsplash.com/photo-1625731226721-b4d51ae70e20?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2F0ZXdheSUyMG9mJTIwaW5kaWElMjBtdW1iYWklMjBtdW1iYWklMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D'
            },
            {
                name: "chhatrapati shivaji terminus",
               img:'https://media.gettyimages.com/id/552552053/photo/mumbai-victoria-terminus-railways-station.jpg?s=612x612&w=0&k=20&c=6ZANreQEFHYxd521lfsSw1aTAf4hzVA-40s1R9SJK34='
            },
            {
                name:"Elephanta Caves",
                img:"https://media.istockphoto.com/id/979180834/photo/elephanta-caves-historical-architecture-in-mumbai-india.jpg?s=612x612&w=0&k=20&c=DBPpMr6nBxQF8upTxZUS9S9UUq-LV5iKlH8_BCrKIh0="
            }
            
        ]
    },
    {
        id: 5,
        city: 'Bengaluru',
        desc: 'Known as the Silicon Valley of India, famous for its IT hubs and pleasant weather.',
        img: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVuZ2FsdXJ1fGVufDB8fDB8fHww',
        rating: 4,
        recommendations:[
            {
                name: "Marine drive",
                img:'https://media.istockphoto.com/id/1010105188/photo/cuff-parade-south-mumbai-at-night.jpg?s=612x612&w=is&k=20&c=ExBhwJDRLVYQ4eg71ubMOPMaXF8IxVWlX8tI1CZ6WiE=',
            },
            {
                name: "Gateway of India",
               img:'https://images.unsplash.com/photo-1625731226721-b4d51ae70e20?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2F0ZXdheSUyMG9mJTIwaW5kaWElMjBtdW1iYWklMjBtdW1iYWklMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D'
            },
            {
                name: "chhatrapati shivaji terminus",
               img:'https://media.gettyimages.com/id/552552053/photo/mumbai-victoria-terminus-railways-station.jpg?s=612x612&w=0&k=20&c=6ZANreQEFHYxd521lfsSw1aTAf4hzVA-40s1R9SJK34='
            },
            {
                name:"Elephanta Caves",
                img:"https://media.istockphoto.com/id/979180834/photo/elephanta-caves-historical-architecture-in-mumbai-india.jpg?s=612x612&w=0&k=20&c=DBPpMr6nBxQF8upTxZUS9S9UUq-LV5iKlH8_BCrKIh0="
            }
            
        ]
    },
    {
        id: 6,
        city: 'Kolkata',
        desc: 'City of Joy, rich in art, culture, and colonial architecture.',
        img: 'https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 2,
        recommendations:[
            {
                name: "Marine drive",
                img:'https://media.istockphoto.com/id/1010105188/photo/cuff-parade-south-mumbai-at-night.jpg?s=612x612&w=is&k=20&c=ExBhwJDRLVYQ4eg71ubMOPMaXF8IxVWlX8tI1CZ6WiE=',
            },
            {
                name: "Gateway of India",
               img:'https://images.unsplash.com/photo-1625731226721-b4d51ae70e20?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2F0ZXdheSUyMG9mJTIwaW5kaWElMjBtdW1iYWklMjBtdW1iYWklMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D'
            },
            {
                name: "chhatrapati shivaji terminus",
               img:'https://media.gettyimages.com/id/552552053/photo/mumbai-victoria-terminus-railways-station.jpg?s=612x612&w=0&k=20&c=6ZANreQEFHYxd521lfsSw1aTAf4hzVA-40s1R9SJK34='
            },
            {
                name:"Elephanta Caves",
                img:"https://media.istockphoto.com/id/979180834/photo/elephanta-caves-historical-architecture-in-mumbai-india.jpg?s=612x612&w=0&k=20&c=DBPpMr6nBxQF8upTxZUS9S9UUq-LV5iKlH8_BCrKIh0="
            }
            
        ]
    }
];

export default data;
