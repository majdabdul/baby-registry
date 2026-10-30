// Registry data. Edit freely: each item needs id (unique), cat, name. Optional: brand, store, price (SAR number), priceNote, qty, url, alt [{label,url}], img (source picture URL — a copy is stored in img/<id>.jpg by tools/fetch_images.py), note, cotton (true = highlights the all-cotton note).
const AMZ = asin => 'https://www.amazon.sa/dp/' + asin;
const AMZS = q => 'https://www.amazon.sa/s?k=' + encodeURIComponent(q);
const AIMG = id => 'https://m.media-amazon.com/images/I/' + id + '._SS400_.jpg';
const MZ = q => 'https://www.mumzworld.com/sa-en/search?q=' + encodeURIComponent(q);
const NEXT = p => 'https://www.next.sa/en/style/' + p;
const NIMG = code => 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/SearchINT/Lge/' + code + '.jpg?im=Resize,width=450';

window.REGISTRY_CATEGORIES = [
  { id:'clothing',  name:'Clothing' },
  { id:'sleep',     name:'Sleeping' },
  { id:'diapering', name:'Diapering' },
  { id:'feeding',   name:'Feeding' },
  { id:'bath',      name:'Bathing & Grooming' },
  { id:'health',    name:'Health & Safety' },
  { id:'travel',    name:'Out & About' },
  { id:'play',      name:'Play & Soothing' },
  { id:'nursery',   name:'Nursery' },
  { id:'mama',      name:'For Mama' },
];

window.REGISTRY_ITEMS = [
  // ---------------- CLOTHING ----------------
  { id:'onesies-first', cat:'clothing', name:'Pink short-sleeve bodysuits, 5-pack (First Size)', brand:'Next', store:'Next', qty:2, price:69, priceNote:'per pack', url:NEXT('su777885/h63241'), img:NIMG('H63241'), alt:[{label:'Pink/white 5-pack (SAR 63)', url:NEXT('su017827/649881')}] },
  { id:'bodysuits-first', cat:'clothing', name:'Pink long-sleeve bodysuits, 7-pack (First Size)', brand:'Next', store:'Next', qty:1, price:101, url:NEXT('su777875/h63236'), img:NIMG('H63236') },
  { id:'sleepers-first', cat:'clothing', name:'Pink two-way-zip sleepsuits, 3-pack (Newborn / First Size)', brand:'Next', store:'Next', qty:2, price:107, priceNote:'per pack', url:NEXT('su740800/h44214'), img:NIMG('H44214') },
  { id:'onesies-03', cat:'clothing', name:'Pink cherry-print long-sleeve bodysuits, 5-pack (0–3 months)', brand:'Next', store:'Next', qty:1, price:114, url:NEXT('sv008198/v54295'), img:NIMG('V54295') },
  { id:'bodysuits-03', cat:'clothing', name:'Pink/white short-sleeve bodysuits, 5-pack (0–3 months)', brand:'Next', store:'Next', qty:2, price:63, priceNote:'per pack', url:NEXT('su017827/649881'), img:NIMG('649881'), alt:[{label:'Kiabi bodysuits', url:'https://kiabi.sa/collections/fam4000401-underwears'}] },
  { id:'sleepers-03', cat:'clothing', name:'White/pink sleepsuits, 4-pack (0–3 months)', brand:'Next', store:'Next', qty:2, price:114, priceNote:'per pack', url:NEXT('su740798/h44211'), img:NIMG('H44211') },
  { id:'sleepers-berry', cat:'clothing', name:'Red/pink two-way-zip sleepsuits, 4-pack', brand:'Next', store:'Next', qty:1, price:158, priceNote:'SAR 158–170 depending on size', url:NEXT('su817360/w91634'), img:NIMG('W91634') },
  { id:'outfits', cat:'clothing', name:'Baby girl dresses & outfits for occasions', brand:'Mixed brands', store:'Childrensalon', qty:5, price:300, priceNote:'each, approx.', url:'https://www.childrensalon.com/baby/dresses', img:'https://www.childrensalon.com/media/catalog/product/cache/0/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/e/i/eirene-baby-girls-ivory-floral-satin-dress-633664-02edd0e79b65be170314cfb0b97b4ecc.jpg' },
  { id:'socks', cat:'clothing', name:'Pink baby towel socks, 5-pack', brand:'Next', store:'Next', qty:1, price:47, url:NEXT('su605357/f15570'), img:NIMG('F15570') },
  { id:'hats', cat:'clothing', name:'Pink/white tie-top baby beanies, 3-pack', brand:'Next', store:'Next', qty:1, price:28, url:NEXT('su777936/h63263'), img:NIMG('H63263') },
  { id:'mittens', cat:'clothing', name:'Soft cotton newborn scratch mittens, black & white stripes', store:'Amazon.sa', qty:1, price:54, url:AMZ('B0DDHM19BC'), img:AIMG('41drFuu9JJL') },
  { id:'bibs', cat:'clothing', name:'Red/pink dribble bibs, 5-pack', brand:'Next', store:'Next', qty:1, price:76, url:NEXT('sv106119/v90437'), img:NIMG('V90437') },
  { id:'sleeping-bag', cat:'clothing', name:'Beekeeper wearable blanket, pink stripe, 100% organic cotton', brand:"Burt's Bees Baby", store:'Amazon.sa', qty:2, price:119, url:AMZ('B071ZNKW4P'), img:AIMG('61qkUxz4xtL'), alt:[{label:'Blush version', url:AMZ('B0DPLKQTKK')}] },
  { id:'swaddles-muslin', cat:'clothing', name:'Muslin swaddles, pink bunny & floral prints (4-pack)', brand:'aden + anais', store:'Amazon.sa', qty:1, price:206, url:AMZ('B0BQZ95NKR'), img:AIMG('81DULnle0wL'), alt:[{label:'Organic fruit print 4-pack (Mumzworld)', url:'https://www.mumzworld.com/sa-en/aden-anais-personalized-organic-cotton-muslin-swaddles-fresh-fruit-4-pcs-large-prs-36104209-aswo40010'}] },
  { id:'swaddles-tog', cat:'clothing', name:'Parker wearable blanket, muslin floral, 100% cotton (0–9 months)', brand:'Crane Baby', store:'Mumzworld', qty:2, price:98, priceNote:'on sale from SAR 218', url:'https://www.mumzworld.com/sa-en/crane-baby-parker-wearable-blanket-muslin-floral', img:'https://www.mumzworld.com/media/catalog/product/cache/8bf0fdee44d330ce9e3c910273b66bb2/c/u/cui-bc-100wb-1-crane-parker-wearable-blanket-muslin-floral-1681128088.jpg' },

  // ---------------- SLEEPING ----------------
  { id:'next2me', cat:'sleep', name:'Next2Me Essential bedside crib', brand:'Chicco', store:'Amazon.sa', qty:1, price:756, url:AMZ('B0CT3J5ML7'), img:AIMG('313f8PjZR2L') },
  { id:'portable-bassinet', cat:'sleep', name:'Portable bassinet & sleeping pod, beige', brand:'Baby Dream', store:'Mumzworld', qty:1, price:215, priceNote:'on sale from SAR 314', url:'https://www.mumzworld.com/sa-en/baby-dream-portable-bassinet-beige-38799195-pbb107-beige', img:'https://www.mumzworld.com/media/catalog/product/653871049717-1.jpg' },
  { id:'next2me-mattress', cat:'sleep', name:'Spare Next2Me mattress, 83 × 51 × 5 cm, washable cover', store:'Amazon.sa', qty:1, price:100, url:AMZ('B0GVC2T85S'), img:AIMG('71zapKXKjJL') },
  { id:'next2me-sheet-set', cat:'sleep', name:'Next2Me pink sheet set: 2 cotton fitted sheets + 1 waterproof sheet', brand:'Goysila', store:'Amazon.sa', qty:1, price:141, url:AMZ('B08TRPD8PX'), img:AIMG('71V4O4oN+jL') },
  { id:'sheets-next2me', cat:'sleep', name:'Next2Me fitted sheets, pink & cream, 100% cotton (2-pack)', brand:'Dudu N Girlie', store:'Amazon.sa', qty:1, price:63, url:AMZ('B01N639FS4'), img:AIMG('81ns9HlNJKL') },
  { id:'mattress-protector', cat:'sleep', name:'Next2Me waterproof mattress protectors (2)', store:'Amazon.sa', qty:1, price:82, url:AMZ('B0DMMPCTZJ'), img:AIMG('31SRp+El13L') },
  { id:'blanket', cat:'sleep', name:'Pink cotton cellular blanket, 80 × 100 cm', brand:'Clevamama', store:'Mumzworld', qty:1, price:139, url:'https://www.mumzworld.com/sa-en/clevamama-cellular-blanket-80x100cm-pink', img:'https://www.mumzworld.com/media/catalog/product/w/b/wbtt-3485-clevamama-cellular-blanket-80x100cm-pink-1660582599.jpg' },
  { id:'dreampod', cat:'sleep', name:'Dreampod sleeping bag 0–6 months, Berry peony print', brand:'Mamas & Papas', store:'Mamas & Papas', qty:1, price:219, priceNote:'on sale from SAR 319', url:'https://en.mamasandpapas.com.sa/dreampod-0-6-months---2.5-tog---berry-217814573.html', img:'https://mamasandpapas.com.sa/dw/image/v2/BDSP_PRD/on/demandware.static/-/Sites-MnP-master-catalog/default/dwbd253e87/sfcc-mnp-production/2/1/7/8/1/217814573_FR.jpg?sw=540&sh=720&sm=fit&q=90' },
  { id:'monitor', cat:'sleep', name:'Smart HD Plus Wi-Fi video baby monitor, 5.5" HD display', brand:'VTech', store:'Amazon.sa', qty:1, price:859, url:AMZ('B0DP56RQ4W'), img:AIMG('71x0BpJ0PKL') },
  { id:'sound-machine', cat:'sleep', name:'Hatch Rest sound machine & night light', brand:'Hatch', store:'Amazon.sa', qty:1, price:421, priceNote:'approx. — price varies a lot', url:AMZ('B08QVG9759'), img:AIMG('51vOkfnRDNL'), alt:[{label:'Other listings', url:AMZS('Hatch Rest sound machine')}] },

  // ---------------- DIAPERING ----------------
  { id:'diapers-nb', cat:'diapering', name:'Bambo Nature eco diapers, Newborn', brand:'Bambo Nature', store:'Amazon.sa', qty:2, price:68, url:AMZ('B07Y4HVL2Q'), img:AIMG('81+7TyEpWoL'), alt:[{label:'Pampers Pure, Size 0 (76 pcs)', url:AMZ('B082QBHW74')}] },
  { id:'diapers-1', cat:'diapering', name:'Bambo Nature eco diapers, Size 1 (2–5 kg)', brand:'Bambo Nature', store:'Amazon.sa', qty:3, price:90, url:AMZ('B06Y2T39F4'), img:AIMG('71-XP6qdrCL'), alt:[{label:'Pampers Pure, Size 1 (United Pharmacy, SAR 69/50)', url:'https://unitedpharmacy.sa/en/pampers-pure-size-1-new-born-value-pack-50-diapers.html'}] },
  { id:'wipes', cat:'diapering', name:'WaterWipes Sensitive+ wipes, 12-pack', brand:'WaterWipes', store:'Amazon.sa', qty:1, price:180, url:AMZ('B08MXSBRSB'), img:AIMG('81O1hWtlMQL'), alt:[{label:'Mumzworld 540 pcs (SAR 189)', url:'https://www.mumzworld.com/sa-en/waterwipes-original-plastic-free-unscented-wet-wipes-540pcs-1236409'}] },
  { id:'diaper-cream', cat:'diapering', name:'Sudocrem antiseptic healing cream, 250 g', brand:'Sudocrem', store:'Amazon.sa', qty:1, price:46, url:AMZ('B081VT4HSH'), img:AIMG('61APcuw9hzL') },
  { id:'liniment', cat:'diapering', name:'Liniment oléo-calcaire, 300 ml', brand:'Gilbert', store:'Amazon.sa', qty:1, price:87, url:AMZ('B08GQY3C8L'), img:AIMG('71-Fg3uGEiL') },
  { id:'changing-pad', cat:'diapering', name:'Contoured changing pad with cover', brand:'Jool Baby', store:'Amazon.sa', qty:1, price:258, url:AMZ('B0DH9TQ1DP'), img:AIMG('81cfOoFa9LL'), alt:[{label:'Other changing pads', url:AMZS('baby changing pad contoured waterproof')}] },
  { id:'caddy', cat:'diapering', name:'Cotton-rope diaper caddy & nursery basket, pink', brand:'Bumble & Bird', store:'Mumzworld', qty:1, price:50, url:'https://www.mumzworld.com/sa-en/bumble-bird-cotton-rope-diaper-caddy-pink', img:'https://www.mumzworld.com/media/catalog/product/t/t/ttt-ttcrd-pink-bumble-bird-cotton-rope-diaper-caddy-pink-1641907425.jpg' },
  { id:'diaper-bag', cat:'diapering', name:'Indi diaper backpack, large, Dune (dusty rose)', brand:'Dagne Dover', store:'Dagne Dover', qty:1, price:937, priceNote:'approx. (USD 250, ships from the US)', url:'https://www.dagnedover.com/products/indi-diaper-backpack-large-dune-reset', img:'https://cdn.shopify.com/s/files/1/0260/1439/files/dagne-2025-Baby_Indi_Dune_L_front.jpg?v=1764953275', alt:[{label:'Medium size (USD 225)', url:'https://www.dagnedover.com/products/indi-diaper-backpack-medium-dune-reset'}] },
  { id:'storksak-bag', cat:'diapering', name:'St James convertible diaper bag, black scuba', brand:'Storksak', store:'Mumzworld', qty:1, price:766, url:'https://www.mumzworld.com/sa-en/storksak-st-james-scuba-convertible-diaper-bag-black', img:'https://www.mumzworld.com/media/catalog/product/cache/8bf0fdee44d330ce9e3c910273b66bb2/SV-SK5390-1.jpg' },

  // ---------------- FEEDING ----------------
  { id:'bottles', cat:'feeding', name:'Pigeon glass feeding bottles, 160 ml', brand:'Pigeon', store:'Amazon.sa', qty:4, price:35, priceNote:'each', url:AMZ('B07MVX9M66'), img:AIMG('71VhLkWv3qL'), alt:[{label:'Centrepoint (SAR 65)', url:'https://www.centrepointstores.com/sa/en/buy-pigeon-softouch-wide-neck-glass-nursing-bottle-160-ml/p/167458034'},{label:'Premium wide-neck glass (often out of stock)', url:AMZ('B0C7R7PT9P')},{label:'Wide-neck glass set', url:AMZ('B0BGPJY2MN')}] },
  { id:'teats', cat:'feeding', name:'SofTouch wide-neck slow-flow teats, size S (2-pack)', brand:'Pigeon', store:'Amazon.sa', qty:2, price:35, url:AMZ('B0DCNZZZYX'), img:AIMG('71XpXBhtj4L'), alt:[{label:'Newborn size SS', url:AMZ('B07MVVXBBW')}] },
  { id:'bottle-brush', cat:'feeding', name:'Double-ended silicone bottle brush, blush', brand:'Haakaa', store:'Mumzworld', qty:1, price:87, url:'https://www.mumzworld.com/sa-en/haakaa-silicone-double-ended-bottle-brush-blush', img:'https://www.mumzworld.com/media/catalog/product/JBC-NHK071-1.jpg' },
  { id:'drying-rack', cat:'feeding', name:'Bottle drying rack with drip tray, pink', brand:'Paporich', store:'Amazon.sa', qty:1, price:47, url:AMZ('B0CC2KDKW8'), img:AIMG('61Hz3h5952L') },
  { id:'warmer', cat:'feeding', name:'Avent electric bottle warmer', brand:'Philips', store:'Amazon.sa', qty:1, price:255, url:AMZ('B084PMMS2H'), img:AIMG('71NFssXODGL') },
  { id:'milk-bags', cat:'feeding', name:'Breast milk storage bags, 50 pcs', brand:'Medela', store:'Amazon.sa', qty:1, price:66, url:AMZ('B0D97THKQK'), img:AIMG('71YtCCZHY9L') },
  { id:'burp-cloths', cat:'feeding', name:'Muslin burp cloths, pink floral, 100% cotton (3-pack)', store:'Amazon.sa', qty:2, price:48, priceNote:'per pack', url:AMZ('B0GY3VFFC7'), img:AIMG('71yFID5u29L') },
  { id:'plates', cat:'feeding', name:'Stainless steel plates, 8-inch (set of 4)', brand:'E-far', store:'Amazon.sa', qty:1, price:179, priceNote:'ships from outside KSA', url:AMZ('B07SJJVZ4N'), img:AIMG('61hIm4m5jsL') },
  { id:'bowls', cat:'feeding', name:'Stainless steel kids’ bowls, 12 oz (4-pack)', brand:'E-far', store:'Amazon.sa', qty:1, price:134, url:AMZ('B07H96RCRR'), img:AIMG('61-HvTWpECL') },
  { id:'silverware', cat:'feeding', name:'Kids’ stainless steel silverware, 12 pieces', brand:'E-far', store:'Amazon.sa', qty:1, price:47, priceNote:'limited-time deal, was SAR 71', url:AMZ('B0D7PZYWW3'), img:AIMG('71dHhWkyB3L') },

  // ---------------- BATHING & GROOMING ----------------
  { id:'bath-support', cat:'bath', name:'Soft-touch newborn bath support + rinser, pink', brand:'Angelcare', store:'Amazon.sa', qty:1, price:147, url:AMZ('B0GZ14SWNX'), img:AIMG('61cI160Ve4L') },
  { id:'wash', cat:'bath', name:'Baby wash & shampoo', brand:'SheaMoisture', store:'Amazon.sa', qty:1, price:54, url:AMZ('B07FNZG13J'), img:AIMG('71H8ygJYHHL') },
  { id:'klorane-gel', cat:'bath', name:'Klorane Bébé gentle cleansing gel', brand:'Klorane', store:'Amazon.sa', qty:2, price:80, priceNote:'each, approx.', url:AMZS('Klorane bebe gentle cleansing gel'), img:AIMG('51TxzFaiI3L') },
  { id:'klorane-water', cat:'bath', name:'Klorane Bébé no-rinse cleansing water, 500 ml', brand:'Klorane', store:'Amazon.sa', qty:1, price:228, url:AMZ('B07K1LQWCY'), img:AIMG('61J0oskJ4HL'), alt:[{label:'Uriage Bébé 1ère Eau (SAR 60)', url:AMZ('B09Q636DDC')}] },
  { id:'thermometer', cat:'bath', name:'Bath thermometer, old pink', brand:'Béaba', store:'Amazon.sa', qty:1, price:69, url:AMZ('B09Y1R9T6R'), img:AIMG('61HCgOGMJzL') },
  { id:'towels', cat:'bath', name:'Hooded baby towels, pink & beige, 100% cotton muslin (2-pack)', brand:'Yoofoss', store:'Amazon.sa', qty:1, price:56, url:AMZ('B0BTHR1RMB'), img:AIMG('91u0kX8TkRL') },
  { id:'washcloths', cat:'bath', name:'Pink floral muslin washcloths, 100% cotton (5-pack)', brand:'Crane Baby', store:'Amazon.sa', qty:1, price:109, url:AMZ('B0DGRRXNCN'), img:AIMG('81Y3QsN5NxL'), alt:[{label:'Plain muslin 6-pack (SAR 36)', url:AMZ('B0HD9QJGM2')}] },
  { id:'skin-soother', cat:'bath', name:'DermaFrida skin soother', brand:'Frida Baby', store:'Amazon.sa', qty:1, price:36, url:AMZ('B07CVKRG7F'), img:AIMG('71I-6+lmiuL') },
  { id:'brush', cat:'bath', name:'Baby brush & comb set', brand:'Haakaa', store:'Amazon.sa', qty:1, price:79, url:AMZ('B09N96186X'), img:AIMG('71IArL6mekL') },

  // ---------------- HEALTH & SAFETY ----------------
  { id:'healthcare-kit', cat:'health', name:'Healthcare kit', brand:'Tommee Tippee', store:'Amazon.sa', qty:1, price:74, url:AMZ('B002IS0M32'), img:AIMG('81Q2RrtTmkL') },
  { id:'nosefrida', cat:'health', name:'NoseFrida nasal aspirator', brand:'Frida Baby', store:'Amazon.sa', qty:1, price:55, priceNote:'approx.', url:AMZS('NoseFrida Snotsucker nasal aspirator'), img:AIMG('71eaa003JIL') },
  { id:'sterimar', cat:'health', name:'Stérimar Baby nasal spray', brand:'Stérimar', store:'Amazon.sa', qty:1, price:30, url:AMZ('B017P1TISG'), img:AIMG('71JRH7f-29L') },
  { id:'saline', cat:'health', name:'Physiodose sterile saline, 40 single doses', brand:'Gilbert', store:'Amazon.sa', qty:1, price:65, url:AMZ('B00IGBSTM6'), img:AIMG('61yWP2YaMRL') },
  { id:'nail-clippers', cat:'health', name:'Electric baby nail care set, pink', brand:'Haakaa', store:'Amazon.sa', qty:1, price:109, url:AMZ('B08H22JLBV'), img:AIMG('610szesXAiL') },
  { id:'toy-cleaner', cat:'health', name:'Natural toy & surface cleaner', brand:'ATTITUDE', store:'Amazon.sa', qty:1, price:36, url:AMZ('B08QFYKMHF'), img:AIMG('61V27hJOVBL') },
  { id:'detergent', cat:'health', name:'Baby laundry detergent, fragrance-free', brand:'ATTITUDE', store:'Amazon.sa', qty:2, price:64, url:AMZ('B00AXBNWX8'), img:AIMG('61lQyhU+BmL') },
  { id:'gripe-water', cat:'health', name:"Mommy's Bliss gripe water (baby care set)", brand:"Mommy's Bliss", store:'Amazon.sa', qty:1, price:120, url:AMZ('B0GL2VN5XR'), img:AIMG('61lFhwDdJXL'), alt:[{label:'Little Remedies gripe water (SAR 96)', url:AMZ('B001J5LDM4')}] },

  // ---------------- OUT & ABOUT ----------------
  { id:'car-seat', cat:'travel', name:'Venus 360 i-Size car seat with built-in fan, pink (newborn to 8 years)', brand:'Jikel', store:'Mumzworld', qty:1, price:1122, priceNote:'on sale from SAR 2,737', url:'https://www.mumzworld.com/sa-en/jikel-venus-360-i-size-ventilated-isofix-car-seat-pink', img:'https://www.mumzworld.com/media/catalog/product/cache/8bf0fdee44d330ce9e3c910273b66bb2/JRT-JK804446-11-1.jpg', alt:[{label:'FirstCry', url:'https://www.firstcry.sa/en/jikel/jikel-venus-360-convertible-car-seat-with-front-and-rear-facing-modes-i-size-safety-and-isofix-installation-0-month-8-years-pink/5a589aeb63ad6/product-detail'}] },
  { id:'yoyo-6', cat:'travel', name:'YOYO 6+ colour pack, Toffee', brand:'Stokke', store:'Amazon.sa', qty:1, price:441, url:AMZ('B0CXZFHFTV'), img:AIMG('316ZoMVXOWL') },
  { id:'yoyo-0', cat:'travel', name:'YOYO 0+ newborn pack', brand:'Stokke', store:'Amazon.sa', qty:1, price:947, url:AMZ('B0CXZFJ3TM'), img:AIMG('41coiAHhJTL') },
  { id:'yoyo-base', cat:'travel', name:'YOYO base fabric accessory, Black', brand:'Stokke', store:'Mumzworld', qty:1, price:450, url:'https://www.mumzworld.com/sa-en/stokke-yoyo-base-fabric-accessory-black-45808368-658900', img:'https://www.mumzworld.com/media/catalog/product/cache/8bf0fdee44d330ce9e3c910273b66bb2/45808368-658900-1.jpg' },
  { id:'yoyo-handle', cat:'travel', name:'Neoprene handlebar covers for YOYO', brand:'Protec Tif', store:'Amazon.sa', qty:1, price:112, url:AMZ('B0CCY5YG48'), img:AIMG('31vaM616ToL') },
  { id:'carrier', cat:'travel', name:'Baby Carrier Mini, 100% cotton, Black', brand:'BabyBjörn', store:'Amazon.sa', qty:1, price:553, url:AMZ('B07D5FX7CX'), img:AIMG('61odMF3C15L'), alt:[{label:'Woven, Black (SAR 327)', url:AMZ('B0CLV7JPPK')}] },

  // ---------------- PLAY & SOOTHING ----------------
  { id:'pacifiers', cat:'play', name:'Avent Soothie pacifiers 0–3 months, pink/purple (2-pack)', brand:'Philips', store:'Amazon.sa', qty:2, price:84, url:AMZ('B009EDDHDQ'), img:AIMG('518EwTdlnTL'), alt:[{label:"Dr. Brown's HappyPaci (SAR 73)", url:AMZ('B0G4NS8Z77')},{label:'Ninni Co (ships from the US)', url:'https://ninnico.com'}] },
  { id:'paci-clip', cat:'play', name:'Pacifier clips, vintage floral & bows (4-pack)', brand:'Stadela', store:'Amazon.sa', qty:1, price:109, url:AMZ('B0DGWB3CVP'), img:AIMG('81IMuxh-vJL'), alt:[{label:'Nuby pink flowers 2-pack (SAR 47)', url:AMZ('B0B92RYQWH')}] },
  { id:'toys-bw', cat:'play', name:'Black & white high-contrast toys', store:'Amazon.sa', qty:1, price:40, url:AMZ('B09VGSRPNL'), img:AIMG('81Bri2LIWtL') },
  { id:'monkibox', cat:'play', name:'“Look With Me” Montessori play box, 0–12 weeks', brand:'Monkibox', store:'Monkibox', qty:1, price:479, url:'https://monkibox.com/en-sa/products/0-12-weeks', img:'https://cdn.shopify.com/s/files/1/1870/2831/files/2_7023d5e7-de70-4c33-9fef-3a758af2f9fe.png?v=1784201360' },
  { id:'soofam-toy', cat:'play', name:'2-in-1 wooden Montessori spinning drum & rolling bell, 6–12 months', brand:'Soofam', store:'Amazon.sa', qty:1, price:70, url:AMZ('B0GR2NH3KM'), img:AIMG('715m1iqAkvL') },
  { id:'play-mat', cat:'play', name:'Wooden play gym with pastel toys', store:'Amazon.sa', qty:1, price:127, url:AMZ('B0DYCN7D19'), img:AIMG('61JdW0fJQaL') },

  // ---------------- NURSERY ----------------
  { id:'ubuy-item', cat:'nursery', name:'Changing table with foldable top, 3 drawers & open storage, white', store:'Ubuy', qty:1, price:854, url:'https://www.ubuy.com.sa/en/product/TLZ6H6SRI-baby-changing-table-with-foldable-tabletop-white-baby-dresser-with-3-drawers-open-storage-space-modern-diaper-changing-station-with-storage', img:AIMG('81szotkr-SL') },
  { id:'dividers', cat:'nursery', name:'Drawer dividers, 8-pack', brand:'Vtopmart', store:'Amazon.sa', qty:3, price:53, priceNote:'each', url:AMZ('B09DK9M69S'), img:AIMG('71UDUER5iHL') },
  { id:'storage', cat:'nursery', name:'ÖNSKLIG changing-table baskets, set of 4', brand:'IKEA', store:'IKEA', qty:1, price:60, url:'https://www.ikea.com/sa/en/p/oensklig-stor-baskets-changing-tbl-set-of-4-white-30199283/', img:'https://www.ikea.com/sa/en/images/products/oensklig-stor-baskets-changing-tbl-set-of-4-white__0711380_pe728172_s5.jpg' },

  // ---------------- FOR MAMA ----------------
  { id:'nursing-bra', cat:'mama', name:'Juniors nursing bra with full support & drop-down clips', brand:'Juniors', store:'Babyshop', qty:2, price:39, priceNote:'on sale from SAR 92', url:'https://www.babyshopstores.com/sa/en/buy-juniors-nursing-bra-with-full-support-and-drop-down-nursing-clips/p/168529902-BSRG-Green', img:'https://media.babyshopstores.com/i/babyshop/168529902-BSRG-Green-168529902-BSRG-311020205_01-2100.jpg', alt:[{label:'Black version', url:'https://www.babyshopstores.com/sa/en/buy-juniors-nursing-bra-with-dropdown-nursing-clips/p/168529911-BSRG-Black'}] },
  { id:'nursing-pillow', cat:'mama', name:'My Brest Friend Super Deluxe nursing pillow', brand:'My Brest Friend', store:'Amazon.sa', qty:1, price:513, url:AMZ('B08LF56YHJ'), img:AIMG('41WgYpuhJGL') },
  { id:'silverette', cat:'mama', name:'Silverette silver nursing cups', brand:'Silverette', store:'Amazon.sa', qty:1, price:355, url:AMZ('B00D4MWKNQ'), img:AIMG('417PIKHHPxL') },
  { id:'pump-spectra', cat:'mama', name:'Spectra S1 Plus electric breast pump', brand:'Spectra', store:'Amazon.sa', qty:1, price:1311, url:AMZ('B00DBKFFJM'), img:AIMG('41KuuMV0BHL') },
  { id:'pump-eufy', cat:'mama', name:'eufy S2 Pro wearable breast pump', brand:'eufy', store:'Amazon.sa', qty:1, price:2736, url:AMZ('B0H397M824'), img:AIMG('41aoNBN6wRL') },
  { id:'pj-cotton-1', cat:'mama', name:'100% cotton pyjama set, short sleeve', brand:"EA'S SECRET", store:'Amazon.sa', qty:1, price:226, url:AMZ('B0DP64H28F'), img:AIMG('311bkgmzMjL') },
  { id:'pj-cotton-2', cat:'mama', name:'100% cotton knit pyjama set, long sleeve', brand:'LUBOT', store:'Amazon.sa', qty:1, price:204, url:AMZ('B0FDGG74KB'), img:AIMG('41nofnpJ98L') },
  { id:'pj-seersucker', cat:'mama', name:'Petite seersucker cotton pyjama set', brand:'Pintage', store:'Amazon.sa', qty:1, price:147, url:AMZ('B0GWR5XFG3'), img:AIMG('31yxT8MfXyL') },
  { id:'pj-pajamagram', cat:'mama', name:'Winter pyjamas, novelty print', brand:'PajamaGram', store:'Amazon.sa', qty:1, price:287, url:AMZ('B07P7X4NYQ'), img:AIMG('41CEbGMcBKL') },
];

// ---- Tags ----
// Essentials: the things we'd need from day one. Group gifts: pricey items guests can chip in on together.
const ESSENTIALS = ['onesies-first','sleepers-first','swaddles-muslin','sleeping-bag','next2me','sheets-next2me','next2me-sheet-set','diapers-nb','diapers-1','wipes','diaper-cream','changing-pad','bottles','burp-cloths','towels','healthcare-kit','nail-clippers','car-seat','yoyo-0'];
const GROUP_GIFTS = ['next2me','diaper-bag','storksak-bag','yoyo-0','ubuy-item','pump-spectra','pump-eufy','car-seat','sound-machine'];
window.REGISTRY_ITEMS.forEach(i => { if (ESSENTIALS.includes(i.id)) i.essential = true; if (GROUP_GIFTS.includes(i.id) && i.price) i.group = true; });
