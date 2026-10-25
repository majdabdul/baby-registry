// Registry data. Edit freely: each item needs id (unique), cat, name. Optional: brand, store, price (SAR number), priceNote, qty, url, alt [{label,url}], img, note, cotton (true = highlights the all-cotton note).
const AMZ = asin => 'https://www.amazon.sa/dp/' + asin;
const AMZS = q => 'https://www.amazon.sa/s?k=' + encodeURIComponent(q);
const AIMG = id => 'https://m.media-amazon.com/images/I/' + id + '._SS300_.jpg';
const MZ = q => 'https://www.mumzworld.com/sa-en/search?q=' + encodeURIComponent(q);
const NEXT_BODYSUITS = 'https://www.next.sa/en/shop/baby/clothing/bodysuits';
const NEXT_SLEEPSUITS = 'https://www.next.sa/en/shop/baby/nightwear/sleepwear/sleepsuits';

window.REGISTRY_CATEGORIES = [
  { id:'clothing',  name:'Clothing',           blurb:'Everything the baby wears should be 100% cotton, or at least completely free of synthetic fabrics (polyester, nylon, elastane, acrylic). Please check the label before buying — Next has a “100% Cotton” filter.' },
  { id:'sleep',     name:'Sleeping' },
  { id:'diapering', name:'Diapering' },
  { id:'feeding',   name:'Feeding' },
  { id:'bath',      name:'Bathing & Grooming' },
  { id:'health',    name:'Health & Safety' },
  { id:'travel',    name:'Out & About' },
  { id:'play',      name:'Play & Soothing' },
  { id:'nursery',   name:'Nursery' },
  { id:'mama',      name:'For Mama',           blurb:'A few things for mama for the weeks after the birth.' },
];

window.REGISTRY_ITEMS = [
  // ---------------- CLOTHING ----------------
  { id:'onesies-first', cat:'clothing', name:'Onesies, First Size (newborn)', brand:'Next', store:'Next', qty:7, price:12, priceNote:'each, approx. (5-pack ≈ SAR 60)', url:'https://www.next.sa/en/style/st407746/305214', alt:[{label:'All bodysuits', url:NEXT_BODYSUITS}], note:'100% cotton only. First Size / 50–56 cm fits roughly up to 4.5 kg.', cotton:true },
  { id:'bodysuits-first', cat:'clothing', name:'Long-sleeve bodysuits, First Size (newborn)', brand:'Next', store:'Next', qty:7, price:13, priceNote:'each, approx. (5-pack ≈ SAR 65)', url:'https://www.next.sa/en/style/st407748/522046', alt:[{label:'All bodysuits', url:NEXT_BODYSUITS}], note:'100% cotton only.', cotton:true },
  { id:'sleepers-first', cat:'clothing', name:'Sleepsuits, Newborn + First Size', brand:'Next', store:'Next', qty:5, price:30, priceNote:'each, approx. (multipacks SAR 114–297)', url:NEXT_SLEEPSUITS, note:'100% cotton only. Footed sleepsuits with poppers or a zip.', cotton:true },
  { id:'onesies-03', cat:'clothing', name:'Onesies, 0–3 months', brand:'Next', store:'Next', qty:7, price:12, priceNote:'each, approx.', url:NEXT_BODYSUITS, note:'100% cotton only. Next size 62 cm ≈ 0–3 months.', cotton:true },
  { id:'bodysuits-03', cat:'clothing', name:'Bodysuits, 0–3 months', brand:'Next or Kiabi', store:'Next', qty:10, price:12, priceNote:'each, approx.', url:NEXT_BODYSUITS, alt:[{label:'Kiabi', url:'https://www.kiabi.sa/en/baby'}], note:'100% cotton only.', cotton:true },
  { id:'sleepers-03', cat:'clothing', name:'Sleepsuits, 0–3 months', brand:'Next', store:'Next', qty:10, price:30, priceNote:'each, approx.', url:NEXT_SLEEPSUITS, note:'100% cotton only.', cotton:true },
  { id:'outfits', cat:'clothing', name:'Baby outfits for occasions', brand:'Mixed brands', store:'Childrensalon', qty:5, price:300, priceNote:'each, approx.', url:'https://www.childrensalon.com/baby', note:'For Eid, visits and photos. 100% cotton (or linen / silk) only — no polyester linings or tulle.', cotton:true },
  { id:'socks', cat:'clothing', name:'Baby socks, 100% cotton pack', store:'Amazon.sa', qty:1, price:40, priceNote:'approx.', url:AMZS('100% cotton newborn baby socks'), alt:[{label:'Next socks (cotton-rich)', url:'https://www.next.sa/en/shop/baby/clothing/hosiery-and-socks'}], note:'Most baby socks (including Next’s “cotton rich” ones) contain nylon and elastane — please look for a pack labelled 100% cotton.', cotton:true },
  { id:'hats', cat:'clothing', name:'Tie-top baby hats, 3-pack, 100% cotton', brand:'Next', store:'Next', qty:1, price:22, url:'https://www.next.sa/en/style/st028141/c57120', note:'100% cotton.', cotton:true },
  { id:'sleeping-bag', cat:'clothing', name:'Beekeeper wearable blanket, 100% organic cotton', brand:"Burt's Bees Baby", store:'Amazon.sa', qty:2, price:119, url:AMZ('B071ZNKW4P'), img:AIMG('61qkUxz4xtL'), alt:[{label:'aden + anais 1.0 TOG (100% cotton)', url:AMZ('B08L6X4ZH3')}], note:'Must be 100% cotton inside and out — no polyester filling. Newborn / 0–6 months size.', cotton:true },
  { id:'swaddles-muslin', cat:'clothing', name:'Muslin swaddles, 100% cotton (pack of 3)', brand:'Anvi Baby', store:'Mumzworld', qty:1, price:132, url:'https://www.mumzworld.com/sa-en/anvi-baby-cotton-swaddle-plain-white-pack-of-3-722718', alt:[{label:'Balloons print 3-pack', url:'https://www.mumzworld.com/sa-en/anvi-baby-cotton-swaddle-balloons-print-white-pack-of-3-13611830-3cs_bl'}], note:'100% cotton muslin, 90 × 101 cm.', cotton:true },
  { id:'swaddles-tog', cat:'clothing', name:'Swaddle / sleep sack, 1.0 TOG, 100% cotton', brand:'aden + anais', store:'Amazon.sa', qty:2, price:143, url:AMZ('B08L6X4ZH3'), img:AIMG('51phl9AykEL'), alt:[{label:'Other 100% cotton options', url:AMZS('100% cotton muslin sleep sack 1.0 TOG newborn')}], note:'Please avoid the stretchy arms-up swaddles (Love to Dream etc.) — they are 93% cotton / 7% elastane. A 100% cotton muslin sack or wrap is what we’re after.', cotton:true },

  // ---------------- SLEEPING ----------------
  { id:'crib', cat:'sleep', name:'Wooden cot (3-in-1, fits 120 × 60 mattress)', brand:'Bumble & Bird', store:'Mumzworld', qty:1, price:762, priceNote:'approx.', url:MZ('bumble bird wooden cot'), alt:[{label:'Bedside bassinet & crib (SAR 549)', url:'https://www.mumzworld.com/sa-en/bumble-bird-adjustable-bedside-bassinet-crib-awl-bc102t'}] },
  { id:'next2me', cat:'sleep', name:'Next2Me Essential bedside crib', brand:'Chicco', store:'Amazon.sa', qty:1, price:756, url:AMZ('B0CT3J5ML7'), img:AIMG('313f8PjZR2L') },
  { id:'mattress', cat:'sleep', name:'Crib & toddler bed mattress, 60 × 120 × 10 cm', brand:'MOON', store:'Mumzworld', qty:1, price:183, url:'https://www.mumzworld.com/sa-en/moon-crib-toddler-bed-mattress-with-print-60x120x10cm', alt:[{label:'Plain white (SAR 133)', url:'https://www.mumzworld.com/sa-en/moon-crib-toddler-bed-mattress-white-60x120x10cm'}] },
  { id:'sheets', cat:'sleep', name:'Fitted cot sheets, 100% cotton (set of 2)', brand:'Bumble & Bird or Clevamama', store:'Mumzworld', qty:1, price:104, priceNote:'approx.', url:MZ('100% cotton fitted cot sheet 120x60'), alt:[{label:'Clevamama cotton 2-pack', url:'https://www.mumzworld.com/sa-en/clevamama-cotton-fitted-sheets-for-crib-pack-of-2-white-1151694'}], note:'100% cotton, to fit a 120 × 60 cm cot mattress.', cotton:true },
  { id:'sheets-next2me', cat:'sleep', name:'Next2Me fitted sheets, 100% jersey cotton (2-pack)', brand:'Sasma Home', store:'Amazon.sa', qty:1, price:73, url:AMZ('B0BJN16S4B'), img:AIMG('21jBwA7PRhL'), alt:[{label:'Alternative 2-pack', url:AMZ('B09SDDLDHW')}], note:'100% cotton.', cotton:true },
  { id:'mattress-protector', cat:'sleep', name:'Next2Me waterproof mattress protectors (2)', store:'Amazon.sa', qty:1, price:82, url:AMZ('B0DMMPCTZJ'), img:AIMG('31SRp+El13L') },
  { id:'blanket', cat:'sleep', name:'Cotton cellular blanket, 70 × 100 cm', brand:'Kinder Valley', store:'Mumzworld', qty:1, price:67, url:'https://www.mumzworld.com/sa-en/kinder-valley-cotton-cellular-blanket-white', alt:[{label:'2-pack (SAR 99)', url:'https://www.mumzworld.com/sa-en/kinder-valley-cotton-cellular-blanket-white-pack-of-2-35942670-114011'}], note:'100% cotton.', cotton:true },
  { id:'dreampod', cat:'sleep', name:'Dreampod baby sleeping bag, 0–6 months', brand:'Mamas & Papas', store:'Mamas & Papas', qty:1, price:149, url:'https://en.mamasandpapas.com.sa/muslin-dreampod-0-6-months-2.5-tog---leaf-216489672.html', alt:[{label:'Quilted version', url:'https://en.mamasandpapas.com.sa/dreampod-0-6-months-2.5-tog---quilted-216488631.html'}], note:'Cotton outer and lining — please check the filling is cotton too (the quilted ones often have polyester wadding). A lighter TOG is better for air-conditioned rooms.', cotton:true },
  { id:'monitor', cat:'sleep', name:'Baby monitor', store:'Amazon.sa', qty:1, url:AMZS('baby monitor video'), priceNote:'Your choice', note:'Any good video monitor — no strong preference on brand.' },
  { id:'sound-machine', cat:'sleep', name:'Hatch Rest sound machine & night light', brand:'Hatch', store:'Amazon.sa', qty:1, price:421, priceNote:'approx. — price varies a lot', url:AMZ('B08QVG9759'), img:AIMG('51vOkfnRDNL'), alt:[{label:'Other listings', url:AMZS('Hatch Rest sound machine')}] },

  // ---------------- DIAPERING ----------------
  { id:'diapers-nb', cat:'diapering', name:'Bambo Nature eco diapers, Newborn', brand:'Bambo Nature', store:'Amazon.sa', qty:2, price:68, url:AMZ('B07Y4HVL2Q'), img:AIMG('81+7TyEpWoL'), alt:[{label:'Pampers Pure, Size 0 (76 pcs)', url:AMZ('B082QBHW74')}], note:'The cleanest disposable we could find in Saudi: Nordic Swan eco-label, totally chlorine-free, no fragrance, lotion or parabens, dermatologically tested. Pampers Pure Protection is a good second choice.' },
  { id:'diapers-1', cat:'diapering', name:'Bambo Nature eco diapers, Size 1 (2–5 kg)', brand:'Bambo Nature', store:'Amazon.sa', qty:3, price:90, url:AMZ('B06Y2T39F4'), img:AIMG('71-XP6qdrCL'), alt:[{label:'Pampers Pure, Size 1 (United Pharmacy, SAR 69/50)', url:'https://unitedpharmacy.sa/en/pampers-pure-size-1-new-born-value-pack-50-diapers.html'}], note:'Same as above — Bambo Nature first, Pampers Pure Protection as the alternative.' },
  { id:'wipes', cat:'diapering', name:'WaterWipes Sensitive+ wipes, 12-pack', brand:'WaterWipes', store:'Amazon.sa', qty:1, price:180, url:AMZ('B08MXSBRSB'), img:AIMG('81O1hWtlMQL'), alt:[{label:'Mumzworld 540 pcs (SAR 189)', url:'https://www.mumzworld.com/sa-en/waterwipes-original-plastic-free-unscented-wet-wipes-540pcs-1236409'}] },
  { id:'diaper-cream', cat:'diapering', name:'Sudocrem antiseptic healing cream, 250 g', brand:'Sudocrem', store:'Amazon.sa', qty:1, price:46, url:AMZ('B081VT4HSH'), img:AIMG('61APcuw9hzL') },
  { id:'liniment', cat:'diapering', name:'Liniment oléo-calcaire, 300 ml', brand:'Gilbert', store:'Amazon.sa', qty:1, price:87, url:AMZ('B08GQY3C8L'), img:AIMG('71-Fg3uGEiL'), note:'Gentle French olive-oil cleansing liniment for diaper changes.' },
  { id:'changing-pad', cat:'diapering', name:'Changing pad', brand:'Babyworks', store:'Amazon.sa', qty:1, price:188, priceNote:'approx.', url:AMZS('Babyworks baby changing pad'), note:'Wipeable changing pad for the dresser.' },
  { id:'changing-pad-travel', cat:'diapering', name:'Portable travel changing pad', brand:'Zoney', store:'Amazon.sa', qty:1, price:54, url:AMZ('B0DD41WLV6'), img:AIMG('41ILx-gC7PL') },
  { id:'caddy', cat:'diapering', name:'Cotton-rope diaper caddy & nursery basket, pink', brand:'Bumble & Bird', store:'Mumzworld', qty:1, price:50, url:'https://www.mumzworld.com/sa-en/bumble-bird-cotton-rope-diaper-caddy-pink', note:'100% cotton rope, BPA-free.' },
  { id:'ubuy-item', cat:'nursery', name:'Changing table with foldable top, 3 drawers & open storage, white', store:'Ubuy', qty:1, price:854, url:'https://www.ubuy.com.sa/en/product/TLZ6H6SRI-baby-changing-table-with-foldable-tabletop-white-baby-dresser-with-3-drawers-open-storage-space-modern-diaper-changing-station-with-storage', note:'Ubuy item #273265328. Ships from abroad, so allow a couple of weeks.' },
  { id:'diaper-bag', cat:'diapering', name:'Indi diaper backpack', brand:'Dagne Dover', store:'Dagne Dover', qty:1, price:937, priceNote:'approx. (USD 250, ships from the US)', url:'https://www.dagnedover.com/products/indi-diaper-backpack' },
  { id:'diaper-pail', cat:'diapering', name:'Diaper pail', store:'Amazon.sa', qty:1, url:AMZS('diaper pail'), priceNote:'Your choice', note:'Any sealed diaper pail (Ubbi, Tommee Tippee Twist & Click or similar).' },

  // ---------------- FEEDING ----------------
  { id:'bottles', cat:'feeding', name:'Pigeon glass feeding bottles, 160 ml', brand:'Pigeon', store:'Amazon.sa', qty:4, price:35, priceNote:'each', url:AMZ('B07MVX9M66'), img:AIMG('71VhLkWv3qL'), alt:[{label:'Premium wide-neck glass (often out of stock)', url:AMZ('B0C7R7PT9P')},{label:'Wide-neck glass set', url:AMZ('B0BGPJY2MN')}], note:'Glass only please, Pigeon brand. Any Pigeon glass bottle is perfect.' },
  { id:'bottle-brush', cat:'feeding', name:'Double-ended silicone bottle brush', brand:'Haakaa', store:'Mumzworld', qty:1, price:87, url:'https://www.mumzworld.com/sa-en/haakaa-double-ended-silicone-bottle-brush-suva-grey' },
  { id:'sterilizer', cat:'feeding', name:'Bottle sterilizer', store:'Amazon.sa', qty:1, url:AMZS('bottle sterilizer and dryer'), priceNote:'Your choice', note:'Steam sterilizer, ideally with a dryer. Must fit wide-neck glass bottles.' },
  { id:'warmer', cat:'feeding', name:'Bottle warmer', store:'Amazon.sa', qty:1, url:AMZS('baby bottle warmer'), priceNote:'Your choice' },
  { id:'milk-bags', cat:'feeding', name:'Breast milk storage bags, 50 pcs', brand:'Medela', store:'Amazon.sa', qty:1, price:66, url:AMZ('B0D97THKQK'), img:AIMG('41xzZGRfPfL') },
  { id:'burp-cloths', cat:'feeding', name:'Muslin burp cloths, 100% cotton (6-pack)', brand:'CottCare', store:'Amazon.sa', qty:2, price:57, url:AMZ('B08RSC9RXQ'), img:AIMG('61OLDyPPc4L'), note:'100% cotton.', cotton:true },

  // ---------------- BATHING & GROOMING ----------------
  { id:'bathtub', cat:'bath', name:'Shnuggle baby bath, white & grey', brand:'Shnuggle', store:'Mumzworld', qty:1, price:159, url:'https://www.mumzworld.com/sa-en/shnuggle-baby-bath-tub-white-with-grey' },
  { id:'flexi-support', cat:'bath', name:'Flexi Bath Newborn Support', brand:'Stokke', store:'Mothercare', qty:1, price:133, url:'https://www.mothercare.com.sa/en/buy-stokke-flexi-bath-newborn-support-3-0', alt:[{label:'Amazon.sa (SAR 168)', url:AMZ('B07VF6RLHQ')}], note:'Fits inside the Stokke Flexi Bath tub.' },
  { id:'wash', cat:'bath', name:'Baby wash & shampoo', brand:'SheaMoisture', store:'Amazon.sa', qty:1, price:54, url:AMZ('B07FNZG13J'), img:AIMG('71H8ygJYHHL') },
  { id:'klorane-gel', cat:'bath', name:'Klorane Bébé gentle cleansing gel', brand:'Klorane', store:'Amazon.sa', qty:2, price:80, priceNote:'each, approx.', url:AMZS('Klorane bebe gentle cleansing gel'), img:AIMG('51TxzFaiI3L') },
  { id:'klorane-water', cat:'bath', name:'Klorane Bébé no-rinse cleansing water, 500 ml', brand:'Klorane', store:'Amazon.sa', qty:1, price:60, url:AMZ('B09Q636DDC'), img:AIMG('61vLSuSHxnL') },
  { id:'thermometer', cat:'bath', name:'Bath water thermometer', store:'Amazon.sa', qty:1, price:40, url:AMZ('B0F9WFMP9G'), img:AIMG('51Wq8U862tL') },
  { id:'towels', cat:'bath', name:'Hooded baby towels, 100% cotton muslin (2-pack)', brand:'Yoofoss', store:'Amazon.sa', qty:1, price:107, url:AMZ('B0BG7BNHG8'), img:AIMG('81EtTqeZvTL'), alt:[{label:'Other 100% cotton options', url:AMZS('100% cotton hooded baby towel newborn')}], note:'100% cotton only (no polyester or microfibre).', cotton:true },
  { id:'skin-soother', cat:'bath', name:'DermaFrida skin soother', brand:'Frida Baby', store:'Amazon.sa', qty:1, price:36, url:AMZ('B07CVKRG7F'), img:AIMG('71I-6+lmiuL') },
  { id:'brush', cat:'bath', name:'Baby brush & comb set', brand:'Haakaa', store:'Amazon.sa', qty:1, price:79, url:AMZ('B09N96186X'), img:AIMG('71IArL6mekL') },

  // ---------------- HEALTH & SAFETY ----------------
  { id:'healthcare-kit', cat:'health', name:'Healthcare kit', brand:'Tommee Tippee', store:'Amazon.sa', qty:1, price:74, url:AMZ('B002IS0M32'), img:AIMG('81Q2RrtTmkL') },
  { id:'nosefrida', cat:'health', name:'NoseFrida nasal aspirator', brand:'Frida Baby', store:'Amazon.sa', qty:1, price:55, priceNote:'approx.', url:AMZS('NoseFrida Snotsucker nasal aspirator'), note:'The original Snotsucker.' },
  { id:'sterimar', cat:'health', name:'Stérimar Baby nasal spray', brand:'Stérimar', store:'Amazon.sa', qty:1, price:30, url:AMZ('B017P1TISG'), img:AIMG('71JRH7f-29L') },
  { id:'saline', cat:'health', name:'Sérum physiologique (saline vials)', store:'Pharmacy', qty:1, url:AMZS('serum physiologique baby saline 5ml'), priceNote:'Any pharmacy', note:'Single-dose saline vials (Physiodose, Gifrer or similar).' },
  { id:'nail-clippers', cat:'health', name:'Electric baby nail trimmer, 20-in-1', brand:'Royal Angels', store:'Amazon.sa', qty:1, price:89, url:AMZ('B08P8FQ28B'), img:AIMG('81FK0aIan1L') },
  { id:'toy-cleaner', cat:'health', name:'Natural toy & surface cleaner', brand:'ATTITUDE', store:'Amazon.sa', qty:1, price:36, url:AMZ('B08QFYKMHF'), img:AIMG('61V27hJOVBL') },
  { id:'detergent', cat:'health', name:'Baby laundry detergent, fragrance-free', brand:'ATTITUDE', store:'Amazon.sa', qty:2, price:64, url:AMZ('B00AXBNWX8'), img:AIMG('61lQyhU+BmL') },
  { id:'gripe-water', cat:'health', name:'Gripe water', brand:"Mommy's Bliss", store:'Amazon.sa', qty:1, price:96, url:AMZ('B001J5LDM4'), img:AIMG('71PWZdm7UWL') },

  // ---------------- OUT & ABOUT ----------------
  { id:'car-seat', cat:'travel', name:'Cloud Z2 i-Size infant car seat', brand:'Cybex', store:'Mumzworld', qty:1, url:MZ('Cybex Cloud Z2'), priceNote:'~SAR 1,500–2,000', note:'Cybex Cloud Z (Z2) i-Size. Any colour.' },
  { id:'yoyo-6', cat:'travel', name:'YOYO 6+ colour pack, Toffee', brand:'Stokke', store:'Amazon.sa', qty:1, price:441, url:AMZ('B0CXZFHFTV'), img:AIMG('316ZoMVXOWL') },
  { id:'yoyo-0', cat:'travel', name:'YOYO 0+ newborn pack', brand:'Stokke', store:'Amazon.sa', qty:1, price:947, url:AMZ('B0CXZFJ3TM'), img:AIMG('41coiAHhJTL') },
  { id:'yoyo-base', cat:'travel', name:'YOYO base fabric accessory, Black', brand:'Stokke', store:'Mumzworld', qty:1, price:450, url:'https://www.mumzworld.com/sa-en/stokke-yoyo-base-fabric-accessory-black-45808368-658900', note:'The black base fabric for the YOYO frame. Only a couple left in stock.' },
  { id:'yoyo-handle', cat:'travel', name:'Neoprene handlebar covers for YOYO', brand:'Protec Tif', store:'Amazon.sa', qty:1, price:112, url:AMZ('B0CCY5YG48'), img:AIMG('31vaM616ToL') },
  { id:'carrier', cat:'travel', name:'Baby carrier', brand:'Ergobaby', store:'Mumzworld', qty:1, url:MZ('Ergobaby carrier'), priceNote:'~SAR 600–900', note:'Ergobaby Omni or Embrace, newborn-ready. Cotton version please.', cotton:true },

  // ---------------- PLAY & SOOTHING ----------------
  { id:'pacifiers', cat:'play', name:'JBØRN × BIBS pacifier gift set (3 pacifiers, clip & holder)', brand:'JBØRN', store:'JBØRN', qty:1, price:188, priceNote:'approx. (USD 50, ships from abroad)', url:'https://www.jborn.com/products/jborn-x-bibs-special-edition-gift-box', alt:[{label:'All pacifier clips & holders', url:'https://www.jborn.com/collections/pacifier-holders-and-clips'}] },
  { id:'toys-bw', cat:'play', name:'Black & white high-contrast toys', store:'Amazon.sa', qty:1, price:40, url:AMZ('B09VGSRPNL'), img:AIMG('81Bri2LIWtL') },
  { id:'play-mat', cat:'play', name:'Play mat / play gym', store:'Amazon.sa', qty:1, url:AMZS('baby play gym mat cotton'), priceNote:'Your choice', note:'Preferably cotton fabric (no polyester plush).', cotton:true },
  { id:'book', cat:'play', name:'The Wonderful Things You Will Be (book)', brand:'Emily Winfield Martin', store:'Amazon.sa', qty:1, price:85, url:AMZ('0385376715'), img:AIMG('81uTOqps04L') },
  { id:'mamaroo', cat:'play', name:'MamaRoo smart baby swing', brand:'4moms', store:'Mumzworld', qty:1, price:1699, priceNote:'on sale from SAR 2,019', url:'https://www.mumzworld.com/sa-en/uppababy-baby-mamaroo-smart-swing-654-2001-mro-eu-000-config-p-36590-749833', alt:[{label:'Amazon.sa', url:AMZS('4moms mamaroo')}] },
  { id:'mobile', cat:'play', name:'Crib mobile', store:'Amazon.sa', qty:1, url:AMZS('crib mobile black and white'), priceNote:'Your choice', note:'High-contrast (black & white) is best for newborns.' },

  // ---------------- NURSERY ----------------
  { id:'dresser', cat:'nursery', name:'HEMNES chest of 3 drawers, white stain', brand:'IKEA', store:'IKEA', qty:1, price:1095, url:'https://www.ikea.com/sa/en/p/hemnes-chest-of-3-drawers-white-stain-80424745/', alt:[{label:'SUNDVIK changing table (SAR 1,295)', url:'https://www.ikea.com/sa/en/p/sundvik-changing-table-chest-of-drawers-white-30591299/'}] },
  { id:'dividers', cat:'nursery', name:'Drawer dividers, 8-pack', brand:'Vtopmart', store:'Amazon.sa', qty:3, price:53, priceNote:'each', url:AMZ('B09DK9M69S'), img:AIMG('71UDUER5iHL') },
  { id:'storage', cat:'nursery', name:'ÖNSKLIG changing-table baskets, set of 4', brand:'IKEA', store:'IKEA', qty:1, price:60, url:'https://www.ikea.com/sa/en/p/oensklig-stor-baskets-changing-tbl-set-of-4-white-30199283/' },
  { id:'hamper', cat:'nursery', name:'Baby laundry hamper', store:'Amazon.sa', qty:1, url:AMZS('baby laundry hamper'), priceNote:'Your choice' },

  // ---------------- FOR MAMA ----------------
  { id:'nursing-bra', cat:'mama', name:'Juniors nursing bra with full support & drop-down clips', brand:'Juniors', store:'Babyshop', qty:2, price:39, priceNote:'on sale from SAR 92', url:'https://www.babyshopstores.com/sa/en/buy-juniors-nursing-bra-with-full-support-and-drop-down-nursing-clips/p/168529902-BSRG-Green', alt:[{label:'Black version', url:'https://www.babyshopstores.com/sa/en/buy-juniors-nursing-bra-with-dropdown-nursing-clips/p/168529911-BSRG-Black'}] },
  { id:'nursing-pillow', cat:'mama', name:'My Brest Friend Super Deluxe nursing pillow', brand:'My Brest Friend', store:'Amazon.sa', qty:1, price:513, url:AMZ('B08LF56YHJ'), img:AIMG('41WgYpuhJGL') },
  { id:'silverette', cat:'mama', name:'Silverette silver nursing cups', brand:'Silverette', store:'Amazon.sa', qty:1, price:355, url:AMZ('B00D4MWKNQ'), img:AIMG('417PIKHHPxL') },
  { id:'pump-spectra', cat:'mama', name:'Spectra S1 Plus electric breast pump', brand:'Spectra', store:'Amazon.sa', qty:1, price:1311, url:AMZ('B00DBKFFJM'), img:AIMG('41KuuMV0BHL'), note:'One pump is plenty — either the Spectra or the eufy below.' },
  { id:'pump-eufy', cat:'mama', name:'eufy S2 Pro wearable breast pump', brand:'eufy', store:'Amazon.sa', qty:1, price:2736, url:AMZ('B0H397M824'), img:AIMG('41aoNBN6wRL'), note:'Alternative to the Spectra — only one of the two is needed.' },
  { id:'heating-pad', cat:'mama', name:'Heating pad', store:'Amazon.sa', qty:1, url:AMZS('electric heating pad'), priceNote:'Your choice' },
  { id:'pj-cotton-1', cat:'mama', name:'100% cotton pyjama set, short sleeve', brand:"EA'S SECRET", store:'Amazon.sa', qty:1, price:226, url:AMZ('B0DP64H28F'), img:AIMG('311bkgmzMjL') },
  { id:'pj-cotton-2', cat:'mama', name:'100% cotton knit pyjama set, long sleeve', brand:'LUBOT', store:'Amazon.sa', qty:1, price:204, url:AMZ('B0FDGG74KB'), img:AIMG('41nofnpJ98L') },
  { id:'pj-seersucker', cat:'mama', name:'Petite seersucker cotton pyjama set', brand:'Pintage', store:'Amazon.sa', qty:1, price:147, url:AMZ('B0GWR5XFG3'), img:AIMG('31yxT8MfXyL') },
  { id:'pj-pajamagram', cat:'mama', name:'Winter pyjamas, novelty print', brand:'PajamaGram', store:'Amazon.sa', qty:1, price:287, url:AMZ('B07P7X4NYQ'), img:AIMG('41CEbGMcBKL') },
];
