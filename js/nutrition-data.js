// ═══════════════════════════════════════════════
// BLOOM v2 — 12-MONTH NUTRITION DATA
// Based on: ACOG, WHO, NHS, ICMR guidelines
// Separate Veg / Non-Veg meal plans
// ═══════════════════════════════════════════════

const MONTHS = [
  {
    month: 1, weeks: '1–4', trimester: 1,
    title: 'Implantation & Neural Tube',
    fetal: 'Fertilisation and implantation. Neural tube begins forming. Heart starts beating by day 22.',
    keyNutrients: ['Folic Acid 400–800 mcg', 'Vitamin B6', 'Zinc', 'Vitamin C', 'Iron'],
    extra_cal: 0,
    veg: {
      breakfast: ['Fortified cereal + full-fat milk + orange juice','Avocado toast on multigrain + boiled egg','Dalia (broken wheat) porridge with nuts and banana','Idli (2) + sambar + coconut chutney'],
      lunch: ['Palak dal + brown rice + raita + salad','Rajma curry + roti + cucumber onion salad','Moong dal khichdi + ghee + pickle + buttermilk','Chana masala + jowar roti + sliced tomatoes'],
      dinner: ['Mixed veg sabzi + 2 rotis + dal soup','Paneer bhurji (with pasteurised paneer) + roti + salad','Vegetable upma + dal + curd','Aloo methi + roti + masoor dal'],
      snacks: ['Apple + peanut butter','Handful walnuts + dates (2)','Roasted chana + cucumber sticks','Banana + fortified milk'],
      avoid: ['Raw papaya','Pineapple in excess','Unpasteurised milk','Alcohol','Raw sprouts','Licorice root tea']
    },
    nonveg: {
      breakfast: ['2 boiled eggs + whole wheat toast + OJ','Egg omelette with spinach + roti','Poha with egg scramble + green chutney','Whole wheat pancakes + boiled egg'],
      lunch: ['Grilled chicken (well-cooked) + brown rice + dal + salad','Egg curry + roti + raita','Fish (rohu/catla) curry + rice + stir-fried greens','Chicken soup + multigrain bread'],
      dinner: ['Baked chicken breast + roasted veggies + chapati','Egg bhurji + dal + roti','Grilled fish (pomfret, well-cooked) + dal + rice','Mutton curry (well-cooked, small portion) + roti + salad'],
      snacks: ['Boiled egg + multigrain crackers','Grilled chicken strips','Tuna (light, canned, small portion) on toast','Nuts + dates'],
      avoid: ['Raw fish/sushi','Shark, swordfish, king mackerel (high mercury)','Undercooked meat/eggs','Alcohol','Raw papaya','Excess pineapple']
    }
  },
  {
    month: 2, weeks: '5–8', trimester: 1,
    title: 'Organ Formation',
    fetal: 'All major organs begin forming. Heart has 4 chambers. Limb buds appear. Brain divides into 5 regions. Baby is now 1.6 cm.',
    keyNutrients: ['Folic Acid 800 mcg','Iron 27 mg','Vitamin B12','Magnesium','Zinc','Iodine'],
    extra_cal: 0,
    veg: {
      breakfast: ['Spinach paratha + curd + jaggery water','Oats porridge + banana + chia seeds + milk','Besan chilla (gram flour pancake) + green chutney','Poha with peas, peanuts + lemon'],
      lunch: ['Lentil (masoor) dal + 2 rotis + steamed broccoli','Chana dal + rice + bhindi sabzi','Mixed sprout salad (cooked) + roti + buttermilk','Paneer curry + brown rice + salad'],
      dinner: ['Methi dal + roti + curd','Vegetable khichdi with ghee + papad','Tofu stir-fry + rice (tofu is pasteurised)','Dal makhani (low fat) + roti + salad'],
      snacks: ['Orange + roasted makhana','Multigrain crackers + hummus','Banana + milk','Carrot sticks + tahini'],
      avoid: ['Raw papaya seeds','Unpasteurised cheeses (brie, camembert)','Excess caffeine >200mg','Artificial sweeteners (saccharin)','Herbal teas (pennyroyal, mugwort)']
    },
    nonveg: {
      breakfast: ['Egg paratha + curd','Scrambled eggs (2) + whole toast + fruit','Chicken keema (well-cooked) + roti + salad','Omelette with vegetables + glass of milk'],
      lunch: ['Chicken dal (dal with small chicken pieces) + rice','Fish (low mercury: salmon, sardine) curry + rice + greens','Egg fried rice (well-cooked eggs) + soup','Grilled chicken + lentil soup + roti'],
      dinner: ['Baked fish (pomfret/surmai) + dal + rice','Chicken curry + 2 rotis + raita','Egg curry + rice + salad','Prawn curry (small portion, well-cooked) + rice + dal'],
      snacks: ['Boiled eggs (2) + toast','Canned sardines on crackers (excellent calcium + DHA)','Grilled chicken tikka (no tandoor char)','Nuts + milk'],
      avoid: ['Raw/medium-rare meat','Raw sushi, oysters, raw shellfish','High-mercury fish (swordfish, shark, king mackerel, bigeye tuna)','Undercooked eggs (runny yolk)','Cold deli meats unless heated']
    }
  },
  {
    month: 3, weeks: '9–13', trimester: 1,
    title: 'Fetal Growth Begins',
    fetal: 'Officially a fetus. Fingernails form. Kidneys produce urine. Reflexes develop. Baby moves (not felt yet). 7.4 cm long.',
    keyNutrients: ['Folic Acid','Iron','Vitamin D','Calcium','Omega-3 DHA','Protein'],
    extra_cal: 0,
    veg: {
      breakfast: ['Multigrain dosa + sambhar + coconut chutney','Whole wheat upma with vegetables + milk','Banana smoothie: banana + milk + oats + peanut butter','Sabudana khichdi (light — good for nausea)'],
      lunch: ['Toor dal + 2 rotis + bhindi/okra sabzi','Rajma + rice + onion salad','Palak paneer (pasteurised paneer) + roti + curd','Green moong dal + jowar roti + cucumber raita'],
      dinner: ['Lauki (bottle gourd) dal + roti + salad','Vegetable khichdi + curd','Mixed dal tadka + brown rice + stir-fried greens','Kadhi (yoghurt curry) + rice + roasted veggies'],
      snacks: ['Coconut water + banana (nausea relief)','Ginger biscuits (nausea)','Boiled sweet potato','Peanut chikki (jaggery + peanut)'],
      avoid: ['Excess vitamin A supplements (liver in large quantities)','Unpasteurised dairy','Papaya, pineapple in large amounts','Alcohol']
    },
    nonveg: {
      breakfast: ['Egg bhurji + roti + glass of milk','Boiled eggs + toast + orange juice','Chicken soup (light, for nausea)','Egg paratha + curd'],
      lunch: ['Egg masala curry + rice','Fish (rohu) + dal + 2 rotis','Chicken clear soup + roti + salad','Canned light tuna sandwich + salad (limit 1–2/week)'],
      dinner: ['Grilled surmai/pomfret + rice + dal','Chicken curry + 2 rotis + raita','Egg biryani (eggs well-cooked) + raita','Fish fry (shallow, not deep) + dal + rice'],
      snacks: ['Boiled egg + multigrain toast','Chicken soup crackers','Tuna (light) on toast','Milk + dates'],
      avoid: ['Raw sushi, sashimi','Rare meat','High-mercury fish','Undercooked eggs','Excess liver (high vitamin A)']
    }
  },
  {
    month: 4, weeks: '14–17', trimester: 2,
    title: 'Honeymoon Phase Begins',
    fetal: 'Baby\'s gender identifiable. Facial expressions begin. Skeleton hardens to bone. Hears sounds in womb. 12 cm, 100g.',
    keyNutrients: ['Iron 27 mg','Calcium 1000 mg','DHA 200–300 mg','Protein 70–100g','Vitamin D','Magnesium'],
    extra_cal: 200,
    veg: {
      breakfast: ['Paneer paratha + curd + seasonal fruit','Oat porridge with flaxseed + almond milk + berries','Methi thepla + curd + jaggery','Vegetable uttapam + sambar'],
      lunch: ['Palak dal + rice + salad + buttermilk','Paneer tikka masala + 2 rotis + cucumber raita','Chana masala + rice + onion lemon salad','Soya chunks curry + roti + dal soup'],
      dinner: ['Mixed dal + 2 rotis + lauki sabzi','Tofu (well-sourced) + vegetables + brown rice','Dal fry + roti + baingan bharta','Kadhi + rice + roasted vegetables'],
      snacks: ['Cheese (pasteurised) + whole wheat crackers','Trail mix: almonds, cashews, dried apricots, raisins','Mango (1 medium — rich in Vit A, C)','Roasted makhana + tea (max 1 cup/day)'],
      avoid: ['Unpasteurised soft cheese (brie, feta unless label says pasteurised)','Raw sprouts','Excess jaggery and sweet mithai','Fried street food (contamination risk)']
    },
    nonveg: {
      breakfast: ['2 eggs scrambled + whole wheat toast + milk','Egg paratha + fruit','Chicken omelette (3 eggs) + salad','Egg on whole wheat muffin + OJ'],
      lunch: ['Mutton (goat) curry, well-cooked + rice + dal + salad','Chicken biryani (homemade, well-cooked) + raita','Egg curry + 2 rotis + salad','Grilled salmon (excellent DHA) + rice + greens'],
      dinner: ['Baked chicken + dal + roti','Fish (pomfret) curry + rice + stir-fried spinach','Prawn masala (well-cooked) + roti + dal','Egg bhurji + roti + salad'],
      snacks: ['Boiled eggs + salt + pepper','Sardine on toast (calcium + DHA)','Grilled chicken strips','Milk + nuts'],
      avoid: ['Raw/undercooked seafood','Swordfish, shark, tilefish, king mackerel','Unpasteurised cheeses','Deli meats unless heated to steaming']
    }
  },
  {
    month: 5, weeks: '18–21', trimester: 2,
    title: 'Anatomy Scan Month',
    fetal: 'ANATOMY SCAN around week 20. Baby swallows amniotic fluid. Vernix caseosa covers skin. Taste buds form. 26 cm, 300g.',
    keyNutrients: ['Iron','Calcium','DHA','Vitamin C (enhances iron)','Zinc','Folic acid (continues)'],
    extra_cal: 200,
    veg: {
      breakfast: ['Ragi (finger millet) porridge + jaggery + milk (excellent calcium)','Whole wheat dosa + sambar + chutney','Sprout salad (boiled/steamed) + curd + fruit','Oats + banana + walnut + full-fat milk'],
      lunch: ['Ragi mudde + dal + vegetable palya (Karnataka style)','Palak paneer + 2 rotis + cucumber raita','Horsegram (kulthi) curry + rice + salad','Tofu + vegetable curry + brown rice'],
      dinner: ['Jowar roti + green moong dal + bhindi','Vegetable biryani (homemade) + raita','Dal tadka + roti + aloo gobi','Lentil soup + 2 rotis + roasted carrots'],
      snacks: ['Sesame (til) chikki — excellent calcium','Orange + handful almonds','Roasted pumpkin seeds + coconut water','Curd with flaxseed + honey'],
      avoid: ['Unwashed salads from outside','Raw eggs in desserts (custard, tiramisu)','Excess salt (blood pressure risk)','Store-bought unpasteurised chutneys']
    },
    nonveg: {
      breakfast: ['Egg omelette with fenugreek leaves + roti','Poached eggs (well set) + whole wheat toast','Boiled eggs (2) + milk + banana','Chicken poha + coconut chutney'],
      lunch: ['Grilled salmon/rohu + ragi mudde + dal','Chicken curry + jowar roti + salad','Fish (mackerel — high DHA) + rice + spinach dal','Egg fried rice (eggs fully cooked) + soup'],
      dinner: ['Baked surmai + vegetable curry + rice','Mutton keema (well-cooked) + roti + raita','Chicken soup with vegetables + roti','Grilled fish + dal + 2 rotis'],
      snacks: ['Boiled eggs + sesame crackers','Tuna (light, canned) + multigrain toast (max 2/week)','Chicken tikka (well-cooked)','Milk + nuts'],
      avoid: ['Raw fish','Half-cooked eggs','Swordfish, shark, king mackerel, bigeye tuna','Excess canned tuna (mercury)']
    }
  },
  {
    month: 6, weeks: '22–26', trimester: 2,
    title: 'Viability Milestone',
    fetal: 'Baby reaches VIABILITY (24 weeks). Eyes form but fused. Lungs begin producing surfactant. Baby responds to voices. 35 cm, 660g.',
    keyNutrients: ['Iron','DHA','Choline (brain)','Protein','Calcium','Magnesium (leg cramps)','Potassium'],
    extra_cal: 200,
    veg: {
      breakfast: ['Paneer egg-free scramble (tofu scramble) + roti + milk','Multigrain paratha + curd + seasonal fruit','Banana oat smoothie + flaxseed + almond butter','Ragi dosa + sambar'],
      lunch: ['Chana dal khichdi + ghee + papad + pickle (small)','Palak paneer + 2 rotis + tomato cucumber salad','Black bean curry + rice + coleslaw','Rajma + rice + onion rings + buttermilk'],
      dinner: ['Dal palak + 2 rotis + aloo sabzi','Tofu + peas + tomato curry + rice','Moong dal + jowar roti + lauki sabzi','Urad dal + rice + stir-fried greens'],
      snacks: ['Banana + peanut butter (potassium for cramps)','Sweet potato chaat (boiled, spiced)','Almonds (10) + dates (2)','Roasted chana + lemon juice'],
      avoid: ['Excess gas-producing foods (cabbage, broccoli in large amounts if causing discomfort)','Excess salt','Raw papaya','Licorice in large amounts']
    },
    nonveg: {
      breakfast: ['2 eggs (any style, fully cooked) + whole wheat toast + milk','Egg bhurji + roti + salad','Grilled chicken sandwich + OJ','Boiled eggs + banana + glass of milk'],
      lunch: ['Grilled salmon + brown rice + dal + salad (excellent DHA + choline)','Egg curry + 2 rotis + raita','Roasted chicken + sweet potato + steamed broccoli','Fish biryani (rohu, well-cooked) + raita'],
      dinner: ['Chicken dal soup + roti','Prawn (well-cooked) + coconut curry + rice','Baked chicken thigh + roasted vegetables + rice','Egg masala + dal + 2 rotis'],
      snacks: ['Boiled eggs (2)','Sardines on toast (DHA + calcium)','Chicken clear broth + whole grain bread','Tuna (light) + cucumber boats'],
      avoid: ['Raw sushi, oysters, clams','Undercooked poultry','High mercury fish','Cold deli meats unless heated']
    }
  },
  {
    month: 7, weeks: '27–30', trimester: 3,
    title: 'Brain Growth Surge',
    fetal: 'THIRD TRIMESTER begins. Rapid synaptogenesis — 250,000 neurons/min. Eyes open. REM sleep begins. Baby gains 0.5 lb/week. 40 cm, 1 kg.',
    keyNutrients: ['DHA 300 mg (brain)','Choline 450 mg','Iodine 220 mcg','Iron','Calcium','Omega-3','Vitamin K'],
    extra_cal: 400,
    veg: {
      breakfast: ['Flaxseed + walnut smoothie + banana + milk (DHA-rich)','Egg-free choline: tofu scramble + fortified nutritional yeast + roti','Oat porridge + chia seeds + almond butter + iodised-salt-seasoned food','Ragi porridge + jaggery + milk + banana (calcium rich)'],
      lunch: ['Soya chunk curry (choline source) + brown rice + dal + salad','Chickpea + spinach curry + 2 rotis + curd','Tofu + broccoli + rice noodle bowl (choline + DHA precursors)','Rajma + rice + kachumber salad + buttermilk'],
      dinner: ['Walnut and mushroom dal + 2 rotis (walnuts = plant DHA)','Paneer + palak + roti + dal','Mixed lentil soup + jowar roti + stir-fried lauki','Tofu bhurji + roti + salad'],
      snacks: ['Walnuts (6–8 halves) — best plant ALA/DHA','Edamame + lemon salt (choline-rich)','Sesame chikki + milk','Banana + iodised salt sprinkled sweet potato'],
      avoid: ['Caffeinated beverages >200mg/day','Lying flat to eat (heartburn)','Gas-forming foods before sleep','Unpasteurised dairy']
    },
    nonveg: {
      breakfast: ['2 whole eggs scrambled (choline 300mg) + whole wheat + glass of milk','Salmon (baked, 85g) + egg + roti — ultimate brain breakfast','Boiled eggs + toast + walnuts + OJ','Egg omelette + nutritional yeast + spinach + roti'],
      lunch: ['Grilled salmon (DHA powerhouse) + brown rice + dal + steamed broccoli','Egg biryani + raita + salad','Sardines (excellent calcium + DHA) + rice + spinach dal','Chicken liver (30g — high choline, limit 1x/week) + rice + dal'],
      dinner: ['Baked surmai/pomfret + rice + spinach dal','Egg curry + 2 rotis + raita','Chicken + mushroom soup + roti','Prawn curry (well-cooked) + roti + dal'],
      snacks: ['Boiled eggs (2) — choline + protein','Sardines on whole wheat toast — calcium + DHA','Canned light tuna (limit 1–2x/week) + cucumber','Milk + walnuts'],
      avoid: ['Swordfish, shark, king mackerel, bigeye tuna (highest mercury)','Raw sushi, oysters','Undercooked meat/poultry','Excess liver (>1 serving/week — Vitamin A toxicity)']
    }
  },
  {
    month: 8, weeks: '31–35', trimester: 3,
    title: 'Rapid Weight Gain',
    fetal: 'Baby gains weight fast — 1/2 lb per week. Practises breathing. Brain folds deepen. Lungs mature. Moves to head-down. 46 cm, 2 kg.',
    keyNutrients: ['Iron (baby stores)','Calcium (bones mineralise)','Vitamin D','DHA','Protein','Fibre (constipation)','Magnesium'],
    extra_cal: 400,
    veg: {
      breakfast: ['Ragi + flaxseed porridge + banana + milk','Methi paratha + curd + seasonal fruit','Oats + chia + almond milk + peanut butter + berries','Soya milk fortified cereal + fruit'],
      lunch: ['Horse gram (kulthi) curry + rice + salad (iron-rich)','Palak dal + 2 rotis + raita','Quinoa pulao + raita + salad','Chickpea salad + roti + soup'],
      dinner: ['Mixed dal (iron-rich combo) + 2 rotis + bhindi','Vegetable khichdi + ghee + curd','Tofu + peas curry + brown rice','Lauki kofta + dal + roti (lighter, easier to digest)'],
      snacks: ['Prunes + water (fibre + iron — constipation relief)','Bran muffin (homemade) + milk','Dried figs (2) + almonds','Fig + walnut + date energy balls (small)'],
      avoid: ['Excess fibre causing bloating','Very spicy food (worsens heartburn)','Lying down immediately after eating','Carbonated drinks']
    },
    nonveg: {
      breakfast: ['Eggs (2) + high-fibre toast + prune juice','Boiled egg + oat porridge + milk','Salmon omelette + whole wheat toast (DHA + protein)','Chicken soup + multigrain bread (lighter on digestion)'],
      lunch: ['Grilled chicken + quinoa + steamed vegetables','Egg + dal khichdi + curd','Fish curry (low mercury) + rice + palak dal','Mutton soup (well-cooked, small portion) + roti + salad'],
      dinner: ['Baked pomfret + stir-fried greens + dal + rice','Egg bhurji + dal + 2 rotis','Chicken clear soup + roti','Grilled fish + vegetable curry + brown rice'],
      snacks: ['Boiled eggs + prunes (constipation help)','Sardines + whole wheat crackers','Chicken + vegetable soup','Milk + figs + almonds'],
      avoid: ['Heavy, oily meals (cause heartburn)','Very spicy food','Large meals (baby presses stomach — eat small, frequent)','High-sodium processed meats']
    }
  },
  {
    month: 9, weeks: '36–39', trimester: 3,
    title: 'Preparing for Birth',
    fetal: 'FULL TERM at week 37. Lungs mature. Baby ready for birth. Gains 30g/day. Head engages (drops). 51 cm, 3–3.5 kg.',
    keyNutrients: ['Iron','Vitamin K (clotting)','Vitamin C','Fibre','Protein','Hydration'],
    extra_cal: 400,
    veg: {
      breakfast: ['Dates (6) + warm milk — studies show dates in last 4 weeks reduce labour length','Paneer paratha + curd','Ragi dosa + sambar (iron + calcium)','Warm oats + figs + flaxseed + banana'],
      lunch: ['Iron-boosting dal combo (masoor + moong + toor) + rice + amla chutney (Vit C boosts iron absorption)','Palak paneer + 2 rotis + salad','Spinach + chickpea curry + brown rice','Rajma + rice + lemon squeezed on dal (Vit C)'],
      dinner: ['Light khichdi + curd + ghee (easier on compressed stomach)','Moong dal soup + roti','Dal + roti + stir-fried lauki (easy to digest)','Lentil soup + roti (small meal)'],
      snacks: ['Dates (2–3) + warm milk (daily, last 4–6 weeks)','Coconut water (hydration + electrolytes)','Handful pumpkin seeds + raisins','Curd with honey'],
      avoid: ['Very large meals (stomach is compressed)','Excess gas-producing foods','Spicy food (worsens heartburn and reflux)','Raw or undercooked foods']
    },
    nonveg: {
      breakfast: ['Dates + milk + 2 boiled eggs','Eggs + whole wheat toast + OJ','Light chicken broth + roti','Egg omelette + spinach + toast'],
      lunch: ['Grilled fish + brown rice + spinach dal + amla (iron + Vit C)','Egg curry + 2 rotis + salad','Chicken broth + lentil soup + roti','Pomfret fish + dal + rice'],
      dinner: ['Light chicken dal + roti (small portion)','Egg soup + multigrain bread','Baked fish (small) + khichdi','Steamed fish + moong dal + rice'],
      snacks: ['Boiled eggs + dates','Sardines on whole wheat toast','Chicken broth','Milk + dates + nuts'],
      avoid: ['Large heavy meals','Swordfish, shark, king mackerel','Spicy food','Raw fish/meat']
    }
  },
  {
    month: 10, weeks: '40+', trimester: 3,
    title: 'Due Date / Birth',
    fetal: 'Baby is FULL TERM. Ready to meet the world! Average 3–3.5 kg, 50–52 cm. Birth can occur any day now.',
    keyNutrients: ['Hydration','Light iron-rich foods','Vitamin C','Dates (3RCTs show benefits at term)','Easy-to-digest protein'],
    extra_cal: 400,
    veg: {
      breakfast: ['Dates (6) + warm milk (continue daily)','Light dalia + milk','Banana smoothie + oats','Idli + sambar (light, easy to digest)'],
      lunch: ['Light moong dal khichdi + curd','Palak dal + 1 roti (small meals only — stomach is tiny)','Lentil soup + bread','Fruit bowl + curd + flaxseed'],
      dinner: ['Moong dal soup + roti','Light vegetable khichdi','Dal + rice (half portion)','Soup + multigrain toast'],
      snacks: ['Dates + milk (most important!)','Coconut water throughout day','Roasted makhana','Fresh fruit'],
      avoid: ['Large meals','Spicy foods','Gas-forming foods','Constipating foods']
    },
    nonveg: {
      breakfast: ['Dates + warm milk + boiled egg','Light chicken soup + toast','Egg on toast + OJ','Boiled eggs + banana'],
      lunch: ['Light chicken khichdi + curd','Egg soup + bread','Fish curry (small, light) + rice','Chicken broth + roti'],
      dinner: ['Moong dal + steamed fish + rice','Egg bhurji + 1 roti','Light chicken soup + bread','Dal + boiled egg + rice'],
      snacks: ['Dates + milk (continue!)','Boiled eggs','Coconut water','Dry fruits'],
      avoid: ['Large heavy meals','Swordfish, shark, king mackerel','Raw fish/meat','Spicy food']
    }
  },
  {
    month: 11, weeks: 'Postpartum 0–4', trimester: 'Postpartum',
    title: 'Recovery & Breastfeeding',
    fetal: 'YOU: Uterus contracting. Lochia discharge. Body healing. Breastfeeding begins. Baby growing rapidly.',
    keyNutrients: ['Protein (tissue repair)','Iron (recover blood loss)','Calcium (breastfeeding)','DHA (breast milk quality)','Vitamin D','Hydration 3+ litres'],
    extra_cal: 500,
    veg: {
      breakfast: ['Methi dalia (lactation booster) + jaggery + ghee + milk','Ragi porridge + dates + banana + milk (calcium + iron)','Oat porridge + flaxseed + almond butter + berries','Paneer paratha + curd + fruit'],
      lunch: ['Ajwain paratha (digestion, lactation) + masoor dal + curd','Shatavari kheer (shatavari = galactagogue herb)','Palak paneer + 2 rotis + salad','Green moong dal + jowar roti + raita'],
      dinner: ['Urad dal (black lentil — excellent for lactation) + 2 rotis + ghee','Mixed dal + roti + lauki sabzi (helps milk production)','Khichdi + ghee + curd (easy to digest postpartum)','Tofu + spinach + rice'],
      snacks: ['Gondh (edible gum) laddoo — traditional lactation food','Ajwain water + jaggery (helps digestion postpartum)','Almond milk + dates + saffron','Sesame laddoo (calcium + iron)'],
      avoid: ['Highly spiced food (passes to breast milk)','Caffeine >200mg','Gas-producing foods (may give baby colic)','Raw/undercooked food']
    },
    nonveg: {
      breakfast: ['2 whole eggs + methi paratha + milk','Scrambled eggs + oat porridge + banana','Chicken broth + whole wheat toast','Boiled eggs + dates + warm milk'],
      lunch: ['Chicken + methi curry + rice (lactation)','Grilled salmon + dal + rice (DHA in breast milk)','Egg curry + 2 rotis + salad','Fish (sardine) curry + rice + palak'],
      dinner: ['Chicken dal khichdi + ghee','Baked fish + rice + dal','Egg bhurji + ajwain roti + dal','Mutton bone broth soup + rice (calcium from bones)'],
      snacks: ['Boiled eggs + milk','Sardines + whole wheat toast','Chicken soup','Gondh laddoo + milk (traditional)'],
      avoid: ['Very spicy food (infant colic)','Alcohol','Swordfish, shark, king mackerel (passes to breast milk)','Caffeine >200mg']
    }
  },
  {
    month: 12, weeks: 'Postpartum 4–12', trimester: 'Postpartum',
    title: 'Fourth Trimester — Recovery',
    fetal: 'YOU: Hormones settling. Body regaining strength. Continue breastfeeding nutrition. Mental health focus. 6-week check-up.',
    keyNutrients: ['Iron','Vitamin D','Calcium','Omega-3','B12 (vegetarians especially)','Zinc','Probiotics'],
    extra_cal: 500,
    veg: {
      breakfast: ['Ragi idli + sambar (iron + calcium)','Whole grain cereal + fortified milk + fruit','Paneer + methi paratha + curd','Oats + flaxseed + banana + walnut + milk'],
      lunch: ['Horse gram (kulthi) curry + rice + amla (iron + Vit C)','Rajma + brown rice + salad + buttermilk','Chana + palak + roti + raita','Soya chunk curry + rice + dal'],
      dinner: ['Urad dal + 2 rotis + ghee (lactation support)','Dal + roti + mixed vegetable sabzi','Lentil soup + multigrain bread','Moong + palak + rice'],
      snacks: ['Iron-Vit C combo: orange + raisins','Gondh laddoo / panjiri (traditional recovery food)','Nut energy balls: dates + nuts + coconut','Curd + honey + banana'],
      avoid: ['Crash dieting (reduces breast milk)','Excess caffeine','Alcohol']
    },
    nonveg: {
      breakfast: ['Eggs (2) + whole grain toast + OJ (iron + Vit C)','Salmon omelette + roti + milk','Chicken soup + multigrain bread','Boiled eggs + ragi porridge + milk'],
      lunch: ['Grilled salmon + quinoa + salad (DHA for brain recovery)','Egg curry + 2 rotis + salad','Chicken + lentil soup + rice','Fish + dal + rice + salad'],
      dinner: ['Chicken + spinach curry + rice','Egg + dal + 2 rotis','Baked fish + vegetable curry + rice','Mutton bone soup + rice (minerals + collagen)'],
      snacks: ['Boiled eggs + OJ','Sardines on toast','Chicken broth','Milk + nuts + dates'],
      avoid: ['Crash dieting (destroys milk supply and recovery)','Swordfish, shark, king mackerel (passes to breast milk)','Excess alcohol','Heavy unprocessed foods causing digestive discomfort']
    }
  }
];

// ── TRIMESTER COLORS ──
function getTrimColor(tri) {
  if (tri === 1) return { bg:'#f8ede7', text:'#8f4a2e', label:'1st Trimester' };
  if (tri === 2) return { bg:'#eef5ef', text:'#3d5c42', label:'2nd Trimester' };
  if (tri === 3) return { bg:'#f2eff8', text:'#4a3a70', label:'3rd Trimester' };
  return { bg:'#fdf3dc', text:'#7a5800', label:'Postpartum' };
}

// ── BUILD MONTH CARDS ──
function buildMonthCards(diet) {
  const container = document.getElementById('monthContainer');
  if (!container) return;
  container.innerHTML = '';
  MONTHS.forEach((m, i) => {
    const tc = getTrimColor(m.trimester);
    const mealData = diet === 'veg' ? m.veg : m.nonveg;
    const html = `
    <div class="month-card" id="mc-${i}">
      <div class="month-header" onclick="toggleMonth(${i})">
        <div>
          <div class="month-num">Month ${m.month}</div>
          <div class="month-label">${m.title} · Weeks ${m.weeks}</div>
        </div>
        <div style="display:flex;align-items:center;gap:.8rem">
          <span class="month-trim" style="background:${tc.bg};color:${tc.text}">${tc.label}</span>
          <span style="color:var(--mute);font-size:1.2rem" id="arr-${i}">▾</span>
        </div>
      </div>
      <div class="month-body" id="mb-${i}">
        <div class="month-section">
          <h4>👶 Fetal Development</h4>
          <p style="font-size:.84rem;color:var(--mute);line-height:1.6">${m.fetal}</p>
        </div>
        <div class="month-section">
          <h4>🍽️ Extra Calories: +${m.extra_cal} kcal/day</h4>
          <div style="display:flex;flex-wrap:wrap;gap:.4rem">
            ${m.keyNutrients.map(n=>`<span class="badge b-clay">${n}</span>`).join('')}
          </div>
        </div>
        <div class="g g-2 mt-m" style="gap:.8rem">
          <div class="month-section">
            <h4>🌅 Breakfast</h4>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:.3rem">
              ${mealData.breakfast.map(b=>`<li style="font-size:.8rem;color:var(--ink);padding:.3rem 0;border-bottom:1px solid var(--s2)">✦ ${b}</li>`).join('')}
            </ul>
          </div>
          <div class="month-section">
            <h4>☀️ Lunch</h4>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:.3rem">
              ${mealData.lunch.map(l=>`<li style="font-size:.8rem;color:var(--ink);padding:.3rem 0;border-bottom:1px solid var(--s2)">✦ ${l}</li>`).join('')}
            </ul>
          </div>
          <div class="month-section">
            <h4>🌙 Dinner</h4>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:.3rem">
              ${mealData.dinner.map(d=>`<li style="font-size:.8rem;color:var(--ink);padding:.3rem 0;border-bottom:1px solid var(--s2)">✦ ${d}</li>`).join('')}
            </ul>
          </div>
          <div class="month-section">
            <h4>🍎 Snacks</h4>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:.3rem">
              ${mealData.snacks.map(s=>`<li style="font-size:.8rem;color:var(--ink);padding:.3rem 0;border-bottom:1px solid var(--s2)">✦ ${s}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="month-section mt-m">
          <h4>🚫 Avoid This Month</h4>
          <div class="food-chips">
            ${mealData.avoid.map(a=>`<span class="chip chip-avoid">✕ ${a}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>`;
    container.innerHTML += html;
  });
}

function toggleMonth(i) {
  const body = document.getElementById('mb-' + i);
  const arr  = document.getElementById('arr-' + i);
  if (!body) return;
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  if (arr) arr.textContent = isOpen ? '▾' : '▴';
}

function switchDiet(diet, btn) {
  document.querySelectorAll('.diet-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  buildMonthCards(diet);
  // auto-open current month if profile exists
  const p = getProfile();
  if (p.lmp) {
    const w = getWeekFromLMP(p.lmp);
    const mo = Math.min(12, Math.max(1, getMonth(w))) - 1;
    setTimeout(() => { toggleMonth(mo); document.getElementById('mc-'+mo)?.scrollIntoView({behavior:'smooth',block:'center'}); }, 200);
  }
}
