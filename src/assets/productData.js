// src/assets/productData.js
import p4 from "./p4.jpg";
import p9 from "./p9.jpg";
import p13 from "./p13.jpg";

// You can replace these with category-specific banner images
import spicesBanner from "./SPX.PNG";
import herbsBanner from "./hubs.png";
import dehydratedBanner from "./dehy.png";
import paste from "./paste.png";


// products 
import moringa from "./moringa.png";
import kari from "./karilleavse.png";
import mint from "./mint.png";
import tulsi from "./tulsi.jpg";
import amla from "./amla.jpg";

// spices
import wp from "./whitepapper.jpg";
import bp from "./blackpapper.jpg";
import cc from "./candcseed.jpg";
import fen from "./fenugreek.jpg";
import fennel from "./fennelseed.png";
import cum from "./cumin.jpg";
import gc from "./greenchilli.jpg";
import tur from "./turmeric.jpg";
import rc from "./redchilli.jpg";
import turp from "./turmericpowder.jpg";
import ajw from "./ajwainpowder.jpg";
import clove from "./clovepowder.jpg";


// paste
import vp from "./vp.jpg";
import cp from "./cp.jpg";
import rcp from "./rcp.png";
import bep from "./bep.png";
import tp from "./tp.jpg";
import gip from "./gip.png";
import gp from "./gp.png";


//dehydrated
import dga from "./dga.jpg";
import dwo from "./dwo.jpg";
import dro from "./dro.jpg";
import dg from "./dg.jpg";
import db from "./db.jpg";
import dsdt from "./dsdt.jpg";
import ds from "./ds.jpg";
import dec from "./dec.jpg";
import dc from "./dc.jpg";
import fg from "./fg.jpg";
import fo from "./fo.png"; 

export const categories = [
  {
    id: "spices",
    name: "Masala & Spices",
    description: "",
    image: spicesBanner, // 👈 background image for category card
    products: [
      {
        id: 1,
        name: "White Pepper Powder",
        description: "Manufacturing Process : White pepper is made from fully ripe pepper berries. The berries are soaked in water for several days, a process known as retting, to soften and decompose the outer layer of the fruit. This outer skin is then removed by rubbing or trampling, leaving the pale inner core, which is then dried and ground into a fine powder.",
        image: wp,
        features: [
          "Usage: White pepper has a milder flavor and less pungency than black pepper. It is used in dishes where the black specks of black pepper would be visually unappealing, such as creamy soups, white sauces, mashed potatoes, and certain Asian dishes like Chinese hot and sour soup."
        ],
        ctaText: "Send Enquiry",
      },
      {
        id: 2,
        name: "Black Pepper Powder",
        description: "Manufacturing Process : Black pepper is made from the dried, unripe berries of the pepper plant. After harvesting, the green berries are blanched in hot water and then dried in the sun. As they dry, they shrivel and turn black, forming the peppercorns. These dried peppercorns are then ground into a powder.",
        image: bp,
        features: [
          " ​Usage: Black pepper is one of the most widely used spices in the world. Its bold, pungent, and aromatic flavor is used in almost every type of savory dish, including marinades, sauces, soups, stews, and as a finishing spice for grilled meats, vegetables, and more."
        ],
        ctaText: "Send Enquiry",
      },
         {
        id: 1,
        name: "Coriander and Cumin Seeds Powder",
        description: "Manufacturing Process : The process typically involves dry roasting the coriander and cumin seeds separately until they are fragrant and slightly browned. This step enhances their flavor and removes any moisture, which extends their shelf life. After cooling, the roasted seeds are ground together in a grinder to a fine or coarse powder, depending on the desired consistency.",
        image: cc,
        features: [
         "​Usage: This spice blend is a fundamental ingredient in many Indian, Middle Eastern, and Latin American cuisines. It is widely used to season curries, stews, soups, and vegetable dishes, as well as in marinades for meats and tofu. It adds a warm, earthy, and slightly citrusy flavor to a variety of savory foods."
        ],
        ctaText: "Send Enquiry",
      },
         {
        id: 1,
        name: "Fenugreek Powder",
        description: "Manufacturing Process : Fenugreek powder is made from the dried seeds of the fenugreek plant. The seeds are cleaned to remove any impurities, such as stones or sand. They may be lightly roasted to enhance their flavor and aroma before being ground into a fine powder. This powder is then stored in an airtight container.",
        image: fen,
        features: [
          " ​Usage: Fenugreek powder has a distinct, slightly bitter, and nutty flavor. It is a key ingredient in many spice blends, including curry powder and sambar powder. It is used to flavor various dishes like curries, pickles, and lentil preparations. Fenugreek powder is also used in traditional medicine and as a dietary supplement due to its purported health benefits, such as aiding digestion and managing blood sugar levels."
        ],
        ctaText: "Send Enquiry",
      },
         {
        id: 1,
        name: "Fennel Seeds Powder",
        description: "Manufacturing Process : Fennel seeds are cleaned and then dry-roasted in a pan until they are fragrant and slightly golden. This process enhances their flavor and aroma. Once cooled, the roasted seeds are ground into a fine powder using a spice grinder or mortar and pestle.",
        image: fennel,
        features: [
         " ​Usage: Fennel powder has a sweet, anise-like flavor. It is commonly used in spice blends for sausages and Indian curries. It is also a key ingredient in traditional remedies for digestion and is often used as a mouth freshener after meals."
        ],
        ctaText: "Send Enquiry",
      },
         {
        id: 1,
        name: "Cumin Powder",
        description: "• ​Manufacturing Process: Cumin seeds are cleaned and then dry-roasted to a light brown color to bring out their warm, earthy aroma. The roasted seeds are then ground into a fine powder. This powder is typically more potent than powder made from unroasted seeds.",
        image: cum,
        features: [
          "• ​Usage: Cumin powder is a staple spice in many cuisines around the world, particularly in Indian, Mexican, and Middle Eastern dishes. It is used to add a warm, earthy flavor to curries, stews, soups, and rice dishes, as well as in marinades and rubs for meat and vegetables."
        ],
        ctaText: "Send Enquiry",
      },
         {
        id: 1,
        name: "Green Chilli Powder",
        description: "Manufacturing Process : Fresh green chilies are washed and dried completely. They are then chopped and dehydrated, either in a dehydrator or under direct sunlight, until they become brittle. Once dry, they are ground into a fine powder.",
        image: gc,
        features: [
          "​Usage: Green chili powder provides a fresh, pungent heat without the red color of red chili powder. It is used in dishes where a clean, spicy kick is desired without altering the color of the food. It is often used in sauces, dips, and some savory snacks."
        ],
        ctaText: "Send Enquiry",
      },
         {
        id: 1,
        name: "Red Chili Powder/ Flakes",
        description: "Manufacturing Process : Ripe red chilies are harvested and dried in the sun. The drying process causes them to shrivel and turn a deep red color. The dried chilies are then ground into a fine powder, and the fineness and color can vary depending on the variety of chili used.",
        image: rc,
        features: [
          " ​Usage: Red chili powder is a popular spice used to add a fiery heat and a vibrant red color to dishes. It is a key ingredient in curries, stews, marinades, and spice rubs across many different cuisines, most notably in Indian, Mexican, and Thai dishes."
        ],
        ctaText: "Send Enquiry",
      },
         {
        id: 1,
        name: "Turmeric",
        description: "",
        image: tur,
        features: [
         "Usage: The most common usage of turmeric is as a spice in cooking, particularly for its ability to add a distinct yellow color and earthy, slightly bitter flavor to dishes. It is a principal ingredient in many South Asian and Middle Eastern cuisines, and is a key component of curry powder."
        ],
        ctaText: "Send Enquiry",
      },
         {
        id: 1,
        name: "Turmeric Powder",
        description: "Manufacturing Process : The rhizomes of the turmeric plant are harvested, boiled, and then dried in the sun or in a mechanical dryer. The dried rhizomes are then ground into a fine, bright yellow-orange powder.",
        image: turp,
        features: [
          "Usage: Turmeric powder is valued for both its distinct earthy flavor and its vibrant color. It is a fundamental ingredient in many curries and spice blends. It is also used as a natural food coloring and is widely consumed for its medicinal properties."
        ],
        ctaText: "Send Enquiry",
      },
         {
        id: 1,
        name: "Ajwain Powder",
        description: "Manufacturing Process : Ajwain seeds are cleaned, dehydrated, and then ground into a fine powder.",
        image: ajw,
        features: [
          "​Usage: It is widely used in cooking as a spice to flavor dishes like curries, bread, and lentil preparations. It is also known for its medicinal properties, particularly for aiding digestion, relieving gas and bloating, and providing relief from cough and congestion."
        ],
        ctaText: "Send Enquiry",
      },
         {
        id: 1,
        name: "Clove Powder",
        description: " Manufacturing Process : Clove buds are harvested from the clove tree before they flower. The buds are then dried, typically in the sun, until they turn a dark brown color. Finally, the dried buds are ground into a fine powder.",
        image: clove,
        features: [
          "Usage: Clove powder is a common spice used to add flavor to both savory and sweet dishes, including curries, baked ham, fruit desserts, and hot beverages. It is also used for its medicinal properties, such as its ability to relieve toothaches and promote oral health due to its antimicrobial and anti-inflammatory properties."
        ],
        ctaText: "Send Enquiry",
      },
    ],
  },
  {
    id: "herbs",
    name: "Herbs",
    description: "",
    image: herbsBanner, // 👈 background image for category card
    products: [
      {
        id: 3,
        name: "Moringa Powder",
        description: " ​Manufacturing Process: Moringa powder is produced from the leaves of the moringa tree. The leaves are harvested, carefully washed, and then dried at a low temperature to preserve their nutrient content. After drying, the leaves are stripped from the stems and ground into a fine, bright green powder. The powder is then packaged in airtight containers, as it can lose its potency and color if exposed to air and light.",
        image: moringa,
        features: [
         " ​Usage: Moringa powder is considered a superfood due to its high nutritional value, including vitamins, minerals, and antioxidants. It is commonly added to smoothies, juices, and health drinks. It can also be mixed into soups, sauces, and stews, or sprinkled on top of meals to boost their nutritional content.",
         " ​Benefits: Moringa is a powerhouse of nutrients, including vitamins, minerals, and amino acids, which help to fight inflammation and boost overall energy levels."

        ],
        ctaText: "Send Enquiry",
      },
      {
        id: 4,
        name: "curry leavse",
        description: "Manufacturing Process: Curry leaves are harvested from the curry tree, a tropical to sub-tropical plant. While they are most often used fresh, they can be processed for preservation. The leaves can be dried in the sun or in a mechanical dryer and then either stored whole or ground into a powder. The flavor and aroma are significantly stronger in fresh leaves compared to dried or powdered forms.",
        image: kari,
        features: [
        " ​Usage: Fresh curry leaves are an essential tempering ingredient in South Indian cuisine. They are typically fried in hot oil with other spices like mustard seeds and cumin to release their aroma and flavor, which is then used as a base for dishes like dals, curries, and savory rice. They are also used to flavor snacks and chutneys.",
        " ​Benefits: Curry leaves are rich in antioxidants and are known to support digestive health and aid in weight management."
        ],
        ctaText: "Send Enquiry",
      },
        {
        id: 4,
        name: "Mint Leaves",
        description: "Manufacturing Process: Mint is a perennial herb that is harvested by cutting the stems and leaves. It is often used fresh, but can also be processed for longer storage. The leaves can be dried, frozen, or used to extract essential oils for various products. For dried mint, the leaves are spread out in a thin layer in a cool, airy place away from direct sunlight. Once dried, they can be crumbled or powdered.",
        image: mint,
        features: [
        " ​Usage: Mint has a distinctive cooling and refreshing flavor. It is a popular ingredient in both sweet and savory applications. It is used in beverages like mint tea and mojitos, added to salads and sauces (such as mint chutney), and used to flavor desserts, candies, and ice cream. Its essential oil is also a key ingredient in products like toothpaste, mouthwash, and chewing gum.",
        " ​Benefits: Mint is highly effective in relieving digestive issues like indigestion, bloating, and gas, and its aroma has a calming effect that can help reduce stress."
        ],
        ctaText: "Send Enquiry",
      },
        {
        id: 4,
        name: "Tulsi Powder",
        description: "Manufacturing Process : The process involves harvesting mature tulsi leaves, which are then thoroughly dried to remove all moisture. The dried leaves are then ground into a fine powder and sieved to ensure a uniform texture, before being packaged in airtight containers to maintain freshness and potency.",
        image: tulsi,
        features: [
          "Usage:​Tulsi powder is consumed for its health benefits, often as a herbal tea or mixed with water. It is also used topically in face masks and hair packs to promote skin and scalp health",
          "​Benefits: Tulsi powder acts as an adaptogen that helps the body cope with stress, while also supporting the immune system with its powerful antibacterial properties."
        ],
        ctaText: "Send Enquiry",
      },
        {
        id: 4,
        name: "Amla Powder",
        description: "​Amla fruits are selected, cleaned, and then sliced before being completely dried. The dried slices are then ground into a fine powder and sieved to achieve a smooth consistency, and finally packaged to preserve their nutritional content.",
        image: amla,
        features: [
          "Usage:​Amla powder is widely used as a dietary supplement due to its high Vitamin C content, typically mixed with water or other beverages. It is also a popular ingredient in hair masks to strengthen hair and in face masks to improve skin health.",
          "​Benefits: Amla powder is an exceptionally rich source of Vitamin C, which is essential for boosting immunity, promoting healthy skin, and protecting cells from oxidative damage"
        ],
        ctaText: "Send Enquiry",
      },
        {
        id: 4,
        name: "Neem Powder",
        description: " ​Manufacturing Process: Neem leaves are harvested, cleaned, and dried away from direct sunlight. Once fully dehydrated, they are ground into a fine powder.",
        image: p4,
        features: [
          "Usage: It is commonly used as an ingredient in face masks, hair packs, and other skincare products due to its antibacterial and anti-inflammatory properties. It can also be taken orally in small quantities or used as a natural pesticide and fertilizer for plants.",
          "​Benefit: Neem powder has a wide range of benefits, including its ability to support skin health by helping with conditions like acne and eczema, promoting oral hygiene, and acting as a powerful antioxidant and anti-inflammatory agent"
        ],
        ctaText: "Send Enquiry",
      },
    ],
  },
  {
    id: "dehydrated",
    name: "Dehydrated Products",
    description: "",
    image: dehydratedBanner, // 👈 background image for category card
    products: [
            {
        id: 1,
        name: "Dehydrated Garlic(Flakes | Chopped | Minced | Granules | Powder)",
        description: "We manufacturer dehydrated Garlic as per customer requirements of fresh Garlic are washed, trimmed, cut and dehydrated by passing hot air dried closed continuous system are export to worldwide.",
        image: dga,
        features: [
          "Our product range in dehydrated Garlic flakes, dehydrated Garlic chopped, dehydrated garlic minced, dehydrated garlic granules, dehydrated garlic powder, dehydrated natural organic garlic powder as per international standards and quality.",
          "Garlic powder is used in different herbal medicines, pharma industries, and health enhancement product fields. It can be used in beverages, Instant Drink, soup, chutney Premix, Seasoning Masala, Protein Powder, etc."
        ],
        ctaText: "Send Enquiry",
      },
      {
        id: 2,
        name: "Dehydrated White Onion (Flakes | Chopped | Minced | Granules | Powder)",
        description: "Manufacturing Process : The range of Dehydrated White Onion produced by our unit is trusted and appreciated widely in the market in terms of excellent quality, authentic taste and hygiene. Our products are used in the preparation of sauces, soups and vegetables. Moreover, suitable processing techniques are used to produce fresh dehydrated white onions in various sizes as per the requirement of clients. Our products are quality tested at each level of production and packed in air-tight container to increase their shelf-life. Be it the pungency level or purity or hygiene level, everything is taken into consideration while producing our product and no additives are added.",
        image: dwo,
        features: [
        " Our product range in dehydrated White flakes, dehydrated White chopped, dehydrated White minced, dehydrated White granules, dehydrated White powder, dehydrated natural organic White powder as per international standards and quality"
        ],
        ctaText: "Send Enquiry",
      },
        {
        id: 3,
        name: "Dehydrated Red Onion (Flakes | Chopped | Minced | Granules | Powder)",
        description: "Manufacturing Process : We are involved in dehydration of Red onion because our manufacturing unit established in the area where huge quantity of these type of quality onion cultivated and processed In our well equipped dehydration unit where dehydrated onion procured from fresh onion. In our dehydration process, fresh onion passes from many steps and testing & sorting then we store in particular temperature. So that material property remains same and maintains shelf life.",
        image: dro,
        features: [
          "Here we offer you our best quality dehydrated onions in various forms like Flakes, Chopped, Minced, Powder, Granules."
        ],
        ctaText: "Send Enquiry",
      },
        {
        id: 4,
        name: "Dehydrated Ginger (Flakes | Powder)",
        description:"Manufacturing Process : In our wide range of products, we are also offering our clients a supreme grade variety of Dehydrated Ginger. The offered ginger is processed using supreme grade ginger that is sourced from authentic vendors in the market and modular processing techniques as per the set food industry norms. Our offered ginger is used in various food items to add flavour and fragrance. We pack this ginger using safe and airtight packaging options.",
        image: dg,
        features: [
          "Here we offer you our best quality dehydrated ginger in various forms like Flakes, Powder.",
          "Dehydrated Ginger is an effective cure for indigestion, sore throat, cold and cough. It is used to treat nausea. Ginger's therapeutic properties help stimulate blood circulation, cleanse the bowels and kidneys, remove toxins from the body and nourish the skin."
        ],
        ctaText: "Send Enquiry",

      },
      {
        id: 5,
        name: "Dehydrated And Spray Dried Tomato(Powder)",
        description: "Manufacturing Process : Tomato Powder is one of the most widely used ingredients in the Food and Beverage industry, having applications in a variety of products.",
        image: dsdt,
        features: [
         "Being one of the leading Tomato Powder manufacturer in India, We offer a premium range of tomato powder that are made from our gentle Spray Drying Process.",
         "Tomato powder is quite versatile in its uses. Tomato powder can add it to soups, salads, pizzas, stews, sauces, eggs, pasta, vegetables, roasted potatoes, spice blends, etc."
        ],
        ctaText: "Send Enquiry",
      },
      {
        id: 6,
        name: "Dehydrated Beet Root(Powder)",
        description: "Manufacturing Process : We are well known as the trusted supplier of best quality Dehydrated Red Beet Powder. These offered beets are most commonly used in confectionery, soups, dairy products, sauces, deserts, ice creams and soft drinks. These are processed by making fresh red beet roots powder at our ultramodern infrastructure facility under the guidance of veteran professionals. This Dehydrated Beet Root Powder is easy to digest and hygienically packed .",
        image: db,
        features: [
          "Dehydrated Beet powder provides a wide range of nutrients, but its most significant phytochemical is betaine. Betaine helps the liver process fat. This prevents the accumulation of fatty tissues in the liver (steatosis), especially in heavy drinkers, and it also prevents excessive triglycerides and LDL cholesterol in the blood"
        ],
        ctaText: "Send Enquiry",
      },
       {
        id: 6,
        name: "Dehydrated Spinach(Powder)",
        description: "Crisp onion flakes for multiple cuisines.",
        image: ds,
        features: [
          "Used for preparing curries and soups, the offered powder is vastly demanded in hotels, restaurants, and homes. Free from contaminants and hygienically prepared, the offered powder is an excellent source of vitamins, minerals, protein, Potassium, Thiamine, antioxidants and Vitamin C, A & K."
        ],
        ctaText: "Send Enquiry",
      },
        {
        id: 6,
        name: "Dehydrated Carrot",
        description: "Manufacturing Process : Carrots are washed, peeled, and cut into desired shapes (e.g., slices, cubes, or shreds). They are then blanched in hot water for a short time to preserve their color and nutrients. Afterward, they are dried using a dehydrator or oven until they are completely moisture-free and brittle.",
        image: dec,
        features: [
          "Usage: Dehydrated carrots are a popular addition to instant soups, stews, and backpacking meals. They can be rehydrated and used in casseroles, pot roasts, and other cooked dishes. They are also ground into a powder to be added to smoothies or baked goods for a nutritional boost."
        ],
        ctaText: "Send Enquiry",
      },
        {
        id: 6,
        name: "Dehydrated Cucumber",
        description: "Manufacturing Process : Cucumbers are washed, peeled (if desired), and sliced into thin, uniform pieces. The slices are then laid out on dehydrator trays and dried at a low temperature for several hours until all moisture is removed, leaving them crisp and lightweight.",
        image: dc,
        features: [
          "Usage: Dehydrated cucumber is used as a crunchy snack, similar to vegetable chips. It can also be rehydrated by soaking in water and used in salads, soups, or as a garnish. Its mild flavor makes it a versatile ingredient."
        ],
        ctaText: "Send Enquiry",
      },
        {
        id: 6,
        name: "Fried Garlic",
        description: "Manufacturing Process : Garlic cloves are peeled and thinly sliced. The slices are then fried in a neutral oil at a moderate temperature until they are golden brown and crispy. The fried garlic is then strained from the oil and cooled, becoming a crunchy and flavorful topping.",
        image: fg,
        features: [
          "​Usage: Fried garlic is used as a crunchy and aromatic garnish. It is sprinkled over noodle dishes, fried rice, soups, and curries to add a savory flavor and a crispy texture. It can also be used as a base for sauces and pastes."
        ],
        ctaText: "Send Enquiry",
      },
       {
        id: 6,
        name: "Fried Onion ",
        description: "Manufacturing Process: Onions are sliced, battered, and then deep-fried until golden and crispy.",
        image: fo,
        features: [
          "Usage: Used as a garnish or ingredient to add flavor and texture to dishes such as soups, salads, casseroles, and rice."
        ],
        ctaText: "Send Enquiry",
      },
    ],
  },
  {
    id: "Vegetable",
    name: "Vegetable paste",
    description: "",
    image: vp, // 👈 background image for category card
    products: [
      {
        id: 5,
        name: "Red Chilli Paste",
        description: " Dried red chilies are soaked in hot water to soften. The softened chilies, along with other ingredients like vinegar, salt, and garlic, are then blended or ground into a smooth paste. The paste may be cooked to enhance its flavor and extend its shelf life.",
        image: rcp,
        features: [
          "Usage: Red chili paste is used to add intense heat and a concentrated chili flavor to various dishes. It is a key ingredient in many Asian and Latin American cuisines, used in marinades, stir-fries, and as a condiment."
        ],
        ctaText: "Send Enquiry",
      },
      {
        id: 6,
        name: "Carrot Paste",
        description: "Carrots are washed, peeled, and cooked until very soft. They are then pureed in a blender or food processor to form a smooth paste. The paste may be seasoned with salt or other spices and then packaged or frozen for later use.",
        image: cp,
        features: [
          "Usage: Carrot paste is used as a base for soups and sauces to add a natural sweetness and thicken the consistency. It can also be incorporated into baked goods like cakes and muffins, or mixed into baby food."
        ],
        ctaText: "Send Enquiry",
      },
       {
        id: 6,
        name: "Beetroot Paste",
        description: " Beetroots are washed, trimmed, and cooked until tender. The cooked beetroots are then peeled and pureed in a blender or food processor until a smooth, thick consistency is achieved. The puree can be used immediately or stored for later.",
        image: bep,
        features: [
        " ​Usage: Beetroot puree is used to add a vibrant red color and an earthy, sweet flavor to a variety of dishes. It can be mixed into smoothies, used as a base for soups, added to sauces for pasta, or even used as a natural food coloring in baking."
        ],
        ctaText: "Send Enquiry",
      },
       {
        id: 6,
        name: "Tomato Paste",
        description: "Ripe tomatoes are cooked down to a thick pulp to remove moisture. The pulp is then sieved to remove the skins and seeds. The remaining liquid is further cooked until it is reduced to a very thick, concentrated paste.",
        image: tp,
        features: [
          " ​Usage: Tomato paste provides a rich, concentrated tomato flavor to sauces, soups, and stews. A small amount goes a long way. It is used to deepen the flavor of dishes and to thicken their consistency without adding much liquid."
        ],
        ctaText: "Send Enquiry",
      },
       {
        id: 6,
        name: "Ginger Paste",
        description: "Fresh ginger rhizomes are washed, peeled, and chopped. The chopped ginger is then ground into a smooth paste, often with a small amount of water or oil to aid the process. Some manufacturers add a preservative like citric acid or salt to extend its shelf life.",
        image: gip,
        features: [
          " ​Usage: Ginger paste is a convenient alternative to fresh ginger. It is widely used in Indian, Chinese, and other Asian cuisines as a base for curries, stir-fries, and marinades for meat and seafood."
        ],
        ctaText: "Send Enquiry",
      },
       {
        id: 6,
        name: "Garlic Paste",
        description: "Garlic cloves are peeled and processed in a blender or food processor with a small amount of oil or water until a smooth, uniform paste is formed. Salt or an acidic agent may be added as a preservative.",
        image: gp,
        features: [
          "Usage: Garlic paste is a kitchen staple, providing a quick way to add garlic flavor to dishes without the need for mincing or crushing cloves. It is used as a base for curries, sauces, and stir-fries, and as a marinade for meat and vegetables."
        ],
        ctaText: "Send Enquiry",
      },
    ],
  },
];
