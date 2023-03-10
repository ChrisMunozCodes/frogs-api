const express = require('express')
const app = express()
const PORT = 8000

const frogs = {
    'american bullfrog ': {
        'Common name': 'American Bullfrog',
        'Scientific name': 'Lithobates catesbeianus',
        'Habitat': 'Ponds, swamps, and slow-moving streams.',
        'Range': 'They are native to eastern North America, but have been introduced to other parts of the world, including western North America, Europe, and Asia.',
        'Diet': 'They are opportunistic feeders and will eat a wide range of prey, including insects, fish, snakes, birds, and other frogs.',
        'Size': 'American Bullfrogs are one of the largest frog species in North America, with adult males growing up to 20 cm (8 inches) in length and weighing up to 500 grams (1.1 lbs).',
        'Reproduction': 'They breed in shallow, warm water during the spring and summer. Females lay up to 20,000 eggs in a single clutch, which hatch into tadpoles that metamorphose into frogs in about 2-3 months.',
        'Vocalizations': 'Male American Bullfrogs have a deep, resonant call that sounds like "jug-o-rum" or "rum-m-m." They use this call to attract mates and establish territory.',
        'Conservation': 'American Bullfrogs are not currently listed as threatened or endangered, but they are considered a potential threat to native amphibian populations in some areas where they have been introduced.',
        'Interesting fact': ' American Bullfrogs have a distinctive green or brown coloration and a large eardrum (tympanum) behind each eye that is roughly the same size as the eye itself. They are also known for their powerful hind legs, which they use to jump long distances and catch prey. In addition, American Bullfrogs are considered a delicacy in some parts of the world, particularly in Asia, where they are farmed for their meat.',
    },
    'northern leopard frog': {
        'Common name': 'Northern Leopard Frog',
        'Scientific name': 'Lithobates pipiens (formerly Rana pipiens)',
        'Habitat': 'Northern Leopard Frogs are found near permanent or semi-permanent water sources such as marshes, bogs, and ponds, as well as grasslands and wetlands.',
        'Range': 'They are native to North America, ranging from northern Mexico to southern Canada, and can also be found in parts of Europe and Asia where they have been introduced.',
        'Diet': 'They are carnivorous and eat a variety of prey, including insects, spiders, snails, worms, and other small invertebrates.',
        'Size': 'Northern Leopard Frogs are medium-sized, with adult males growing up to 9 cm (3.5 inches) in length and females growing up to 11 cm (4.5 inches) in length.',
        'Reproduction': 'They breed in shallow water during the spring and summer. Females lay up to 3,000 eggs in a single clutch, which hatch into tadpoles that metamorphose into frogs in about 3-4 months.',
        'Vocalizations': 'Male Northern Leopard Frogs have a distinctive snore-like call that sounds like "r-r-r-r-r-r" or "r-e-e-e-e-p." They use this call to attract mates and establish territory.',
        'Conservation': 'Northern Leopard Frogs are considered a species of special concern in some areas of their range, and have experienced declines in some parts of their range due to habitat loss, disease, and other factors.',
        'Interesting fact': 'Northern Leopard Frogs get their name from the distinctive spots and blotches on their skin, which resemble the spots of a leopard. They are also known for their ability to jump up to three times their body length in a single leap, and for their sensitivity to environmental pollution, which makes them important indicators of ecosystem health.'
    },
    'green frog': {
        'Common name': 'Green Frog',
        'Scientific name': 'Lithobates clamitans (formerly Rana clamitans)',
        'Habitat': 'Green Frogs are found near permanent or semi-permanent water sources such as ponds, swamps, and slow-moving streams, as well as in wetlands, marshes, and grasslands.',
        'Range': 'They are native to eastern North America, ranging from Canada to Mexico, and can also be found in parts of western North America where they have been introduced.',
        'Diet': 'They are opportunistic feeders and will eat a wide range of prey, including insects, spiders, fish, tadpoles, and other frogs.',
        'Size': 'Green Frogs are medium-sized, with adult males growing up to 10 cm (4 inches) in length and females growing up to 12 cm (5 inches) in length.',
        'Reproduction': 'They breed in shallow water during the spring and summer. Females lay up to 4,000 eggs in a single clutch, which hatch into tadpoles that metamorphose into frogs in about 2-3 months.',
        'Vocalizations': 'Male Green Frogs have a distinct "gunk" call that sounds like a plucked banjo string. They use this call to attract mates and establish territory.',
        'Conservation': 'Green Frogs are not currently listed as threatened or endangered, but have experienced declines in some parts of their range due to habitat loss, pollution, and other factors.',
        'Interesting fact': 'Green Frogs have a distinctive bright green coloration on their back and a prominent fold of skin that runs from behind the eye to the front leg. They are also known for their ability to jump up to two meters in a single leap, and for their ability to inflate their body when threatened, making themselves appear larger to potential predators.'
    },
    'wood frog': {
        'Common name': 'Wood Frog',
        'Scientific name': 'Lithobates sylvaticus (formerly Rana sylvatica)',
        'Habitat': 'Wood Frogs are found in a variety of habitats, including forests, wetlands, and tundra. They prefer moist areas with ample cover such as leaf litter or rocks.',
        'Range': 'They are found in North America, ranging from Alaska to the southeastern United States.',
        'Diet': 'As tadpoles, Wood Frogs eat algae and plant material. As adults, they are opportunistic feeders and eat a variety of prey, including insects, spiders, snails, and other small invertebrates.',
        'Size': 'Wood Frogs are small, with adult males growing up to 6 cm (2.5 inches) in length and females growing up to 8 cm (3 inches) in length.',
        'Reproduction': 'They breed in the early spring, often in vernal pools or other temporary water sources. Females lay up to 3,000 eggs in a single clutch, which hatch into tadpoles that metamorphose into frogs in about 2-3 months.',
        'Vocalizations': 'Male Wood Frogs have a short, quacking call that sounds like a duck. They use this call to attract mates.',
        'Conservation': 'Wood Frogs are considered a species of least concern, but have experienced declines in some parts of their range due to habitat loss and other factors.',
        'Interesting fact': 'Wood Frogs are one of the few frog species that can tolerate freezing temperatures. They are able to survive the winter by producing high concentrations of glucose in their body, which acts as a natural antifreeze. When their body temperature drops below freezing, they enter a state of suspended animation until warmer temperatures return.',
    },
    'pickerel frog':{
        'Common name': 'Pickerel Frog',
        'Scientific name': 'Lithobates palustris',
        'Habitat': 'Pickerel Frogs are found in a variety of habitats, including wetlands, forests, and grasslands. They prefer habitats with clean water and ample cover, such as dense vegetation or logs.',
        'Range': 'They are found in eastern North America, ranging from southern Canada to the southeastern United States.',
        'Diet': 'As tadpoles, Pickerel Frogs eat algae and plant material. As adults, they are opportunistic feeders and eat a variety of prey, including insects, spiders, snails, and other small invertebrates.',
        'Size': 'Pickerel Frogs are small to medium-sized, with adults growing up to 7.5 cm (3 inches) in length.',
        'Reproduction': 'They breed in the spring, often in shallow water such as ponds or marshes. Females lay up to 1,000 eggs in a single clutch, which hatch into tadpoles that metamorphose into frogs in about 2-3 months.',
        'Vocalizations': 'Male Pickerel Frogs have a distinctive, snore-like call that lasts for several seconds. They use this call to attract mates.',
        'Conservation': 'Pickerel Frogs are considered a species of least concern, but have experienced declines in some parts of their range due to habitat loss and other factors.',
        'Interesting fact': 'Pickerel Frogs are named for the pickerel fish, which they resemble in coloration. Their skin contains toxins that make them unpalatable to many predators.'
    },
    'spring peeper':{
        'Common name': 'Spring Peeper',
        'Scientific name': 'Pseudacris crucifer',
        'Habitat': 'Woods, swamps, and fields near water',
        'Range': 'Eastern United States and Canada',
        'Diet': 'Insects and other small invertebrates',
        'Size': '0.75-1.5 inches (2-4 cm)',
        'Reproduction': 'Eggs are laid in shallow water, and tadpoles undergo metamorphosis in a few months',
        'Vocalizations': 'Males have a high-pitched "peep" call, which can be heard in chorus during the spring',
        'Conservation': 'Least Concern',
        'Interesting fact': 'Spring Peepers are one of the first frogs to emerge and breed in the spring, and their calls are often used as a sign of the changing seasons.'
    },
    'Gray Tree Frog':{
        'Common name': 'Gray Tree Frog',
        'Scientific name': 'Hyla versicolor',
        'Habitat': 'Forests, woodlands, and suburban areas near water',
        'Range': 'Eastern and central United States and Canada',
        'Diet': 'Insects and other small invertebrates',
        'Size': '1.5-2 inches (4-5 cm)',
        'Reproduction': 'Eggs are laid in small clusters on vegetation above water, and tadpoles undergo metamorphosis in a few months',
        'Vocalizations': 'Males have a distinctive trilling call, which can be heard in the spring and summer',
        'Conservation': 'Least Concern',
        'Interesting fact': 'Gray Tree Frogs can change their color from gray to green, depending on their environment and temperature.'
    },
    'Copes Gray Tree Frog':{
        'Common name': "Cope's Gray Tree Frog",
        'Scientific name': 'Hyla chrysoscelis',
        'Habitat': 'Forests, woodlands, and suburban areas near water',
        'Range': 'Eastern and central United States and Canada',
        'Diet': 'Insects and other small invertebrates',
        'Size': '1.5-2 inches (4-5 cm)',
        'Reproduction': 'Eggs are laid in small clusters on vegetation above water, and tadpoles undergo metamorphosis in a few months',
        'Vocalizations': 'Males have a trilling call that is similar to the Gray Tree Frog, but with a faster tempo',
        'Conservation': 'Least Concern',
        'Interesting fact': "Cope's Gray Tree Frog is very similar to the Gray Tree Frog, and the two species were once thought to be the same."
    },
    'Eastern Narrow-mouthed Toad':{
        'Common name': 'Eastern Narrow-mouthed Toad',
        'Scientific name': 'Gastrophryne carolinensis',
        'Habitat': 'Sandy and grassy areas near water',
        'Range': 'Eastern United States and Mexico',
        'Diet': 'Small invertebrates, including ants and termites',
        'Size': '0.5-1.5 inches (1-4 cm)',
        'Reproduction': 'Eggs are laid in shallow water, and tadpoles undergo metamorphosis in a few weeks',
        'Vocalizations': 'Males have a high-pitched "peep" call, which is not very loud',
        'Conservation': 'Least Concern',
        'Interesting fact': 'The Eastern Narrow-mouthed Toad'
    },
    'Yellow-banded Poison Dart Frog':{
        'Common name': 'Yellow-banded Poison Dart Frog',
        'Scientific name': 'Dendrobates leucomelas',
        'Habitat': 'Rainforests in northern South America',
        'Range': 'Venezuela, Guyana, Suriname, French Guiana, and Brazil',
        'Diet': 'Small insects and other invertebrates',
        'Size': 'Up to 1.5 inches (4 cm)',
        'Reproduction': 'Eggs are laid on the ground and the tadpoles develop in water-filled cavities formed in plants or other objects',
        'Vocalizations': 'Soft, buzzing call',
        'Conservation': 'Least Concern',
        'Interesting fact': 'The toxic secretions of this frog species have been used by indigenous people for centuries to poison blowgun darts for hunting and defense.'
    },
    'Western Toad':{
        'Common name': 'Western Toad',
        'Scientific name': 'Anaxyrus boreas',
        'Habitat': 'Ponds, lakes, rivers, and wetlands in western North America',
        'Range': 'Western United States and western Canada',
        'Diet': 'Insects, spiders, and other invertebrates',
        'Size': 'Up to 5 inches (13 cm)',
        'Reproduction': 'Eggs are laid in long strings in shallow water and hatch into tadpoles which undergo metamorphosis into fully-formed frogs',
        'Vocalizations': 'Low-pitched trill',
        'Conservation': 'Least Concern',
        'Interesting fact': 'Western Toads are known to secrete toxic substances from their skin to deter predators.'
    },
    'Hairy Frog':{
        'Common name': 'Hairy Frog',
        'Scientific name': 'Trichobatrachus robustus',
        'Habitat': 'Fast-flowing streams in central and west Africa',
        'Range': 'Cameroon, Equatorial Guinea, and Nigeria',
        'Diet': 'Insects, spiders, and other invertebrates',
        'Size': 'Up to 3 inches (8 cm)',
        'Reproduction': 'Eggs are laid in water and the tadpoles develop into fully-formed frogs within the egg capsules',
        'Vocalizations': 'Unknown',
        'Conservation': 'Least Concern',
        'Interesting fact': 'The Hairy Frog has the unique ability to break its own bones in order to create claws which it can use to defend itself from predators.'
    },
    'Harlequin Frog':{
        'Common name': 'Harlequin Frog',
        'Scientific name': 'Atelopus zeteki',
        'Habitat': 'Tropical forests in Central and South America',
        'Range': 'Panama',
        'Diet': 'Small invertebrates',
        'Size': 'Up to 2 inches (5 cm)',
        'Reproduction': 'Eggs are laid in streams and the tadpoles develop into fully-formed frogs before leaving the water',
        'Vocalizations': 'Unknown',
        'Conservation': 'Critically Endangered',
        'Interesting fact': 'The Harlequin Frog is known for its bright coloration and its toxic skin secretions, which have been used in medical research to develop painkillers.'
    },
    'Boana Treefrog':{
        'Common name': 'Boana treefrog',
        'Scientific name': 'Boana spp.',
        'Habitat': 'Tropical and subtropical forests',
        'Range': 'Central and South America',
        'Diet': 'Insects and small invertebrates',
        'Size': '1.5-3.5 inches',
        'Reproduction': 'Lays eggs on leaves above water',
        'Vocalizations': 'Loud and distinct calls',
        'Conservation': 'Not evaluated',
        'Interesting fact': 'Some Boana species can change color depending on the temperature or humidity'
    },
    "Izecksohn's Toad":{
        'Common name': "Izecksohn's toad",
        'Scientific name': 'Rhinella icterica',
        'Habitat': 'Forest and savanna',
        'Range': 'South America',
        'Diet': 'Insects and small invertebrates',
        'Size': '3-4 inches',
        'Reproduction': 'Lays eggs in long strings in water',
        'Vocalizations': 'Loud and prolonged calls',
        'Conservation': 'Least Concern',
        'Interesting fact': "Izecksohn's toad has warty skin with a yellow or orange coloration"
    },
    'Common Rain Frog':{
        'Common name': 'Common rain frog',
        'Scientific name': 'Breviceps mossambicus',
        'Habitat': 'Grasslands and savannas',
        'Range': 'Southern Africa',
        'Diet': 'Insects and small invertebrates',
        'Size': '1-2 inches',
        'Reproduction': 'Lays eggs in underground nests',
        'Vocalizations': 'Soft and muffled calls',
        'Conservation': 'Least Concern',
        'Interesting fact': 'Common rain frog has a round body with a smooth and moist skin'
    },
    'Japanese Common Toad':{
        'Common name': 'Japanese common toad',
        'Scientific name': 'Bufo japonicus',
        'Habitat': 'Forests, grasslands, and agricultural land',
        'Range': 'Japan',
        'Diet': 'Insects and small invertebrates',
        'Size': '3-5 inches',
        'Reproduction': 'Lays eggs in long strings in water',
        'Vocalizations': 'Harsh and rough calls',
        'Conservation': 'Least Concern',
        'Interesting fact': 'Japanese common toad has a grayish-brown coloration with dark spots'
    },
    'European Green Toad':{
        'Common name': 'European green toad',
        'Scientific name': 'Bufo viridis',
        'Habitat': 'Grasslands, wetlands, and forests',
        'Range': 'Europe, western Asia, and northern Africa',
        'Diet': 'Insects and small invertebrates',
        'Size': '2-4 inches',
        'Reproduction': 'Lays eggs in long strings in water',
        'Vocalizations': 'Short and trilled calls',
        'Conservation': 'Least Concern',
        'Interesting fact': 'European green toad has a bright green coloration with dark stripes or blotches'
    },
    'Kisiwa Forest Tree Frog':{
        'Common name': 'Kisiwa Forest Tree Frog',
        'Scientific name': 'Leptopelis kivuensis',
        'Habitat': 'Tropical forests, usually found close to streams or other bodies of water',
        'Range': 'Endemic to the Eastern Arc Mountains of Tanzania',
        'Diet': 'Insects and other small invertebrates',
        'Size': 'Up to 6 cm (2.4 in)',
        'Reproduction': 'Lays eggs in water, with tadpoles undergoing metamorphosis after several weeks',
        'Vocalizations': 'Loud, musical trills and whistles',
        'Conservation': 'Listed as Near Threatened by the IUCN due to habitat loss and degradation',
        'Interesting fact': 'Kisiwa Forest Tree Frogs have a unique breeding behavior where the male deposits a gelatinous mass containing sperm on a leaf overhanging a stream, and then waits for a female to come and collect it.'
    },
    'unknown':{
        'origin': 'unknown',
        'color': 'unknown',
        'fact': 'unknown'
    }
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html') //__dirname tells the server to start looking at the root for the index.html file.
})

app.get('/api/:frog',(request, response)=>{
    const frogName = request.params.frog.toLowerCase() //grab the query parameter. 
    
    if( frogs[frogName] ){
        response.json(frogs[frogName]) //here im using bracket notation because my frog names have spaces in them.
    }else{
        response.json(frogs['unknown'])
    }

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better go catch it! :)`) //once the server is running this message should console log!
})