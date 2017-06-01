console.log("Welcome to retard source code.");
console.log("What are you looking for here?");


// I just use random lists web site. I don't enough time for this shit c'mon.
// JSON.stringify(Array.from(document.getElementById("result").children).map(t=> { return {url: t.firstChild.firstChild.firstChild.src, what: t.firstChild.children[1].firstChild.textContent}}))
// This function will gather all images o.O
var objects = [
  {
    "url": "https://www.randomlists.com/img/things/pencil.jpg",
    "what": "pencil"
  },
  {
    "url": "https://www.randomlists.com/img/things/shampoo.jpg",
    "what": "shampoo"
  },
  {
    "url": "https://www.randomlists.com/img/things/car.jpg",
    "what": "car"
  },
  {
    "url": "https://www.randomlists.com/img/things/bananas.jpg",
    "what": "bananas"
  },
  {
    "url": "https://www.randomlists.com/img/things/camera.jpg",
    "what": "camera"
  },
  {
    "url": "https://www.randomlists.com/img/things/balloon.jpg",
    "what": "balloon"
  },
  {
    "url": "https://www.randomlists.com/img/things/milk.jpg",
    "what": "milk"
  },
  {
    "url": "https://www.randomlists.com/img/things/toothpaste.jpg",
    "what": "toothpaste"
  },
  {
    "url": "https://www.randomlists.com/img/things/keys.jpg",
    "what": "keys"
  },
  {
    "url": "https://www.randomlists.com/img/things/couch.jpg",
    "what": "couch"
  },
  {
    "url": "https://www.randomlists.com/img/things/hair_brush.jpg",
    "what": "hair brush"
  },
  {
    "url": "https://www.randomlists.com/img/things/speakers.jpg",
    "what": "speakers"
  },
  {
    "url": "https://www.randomlists.com/img/things/street_lights.jpg",
    "what": "street lights"
  },
  {
    "url": "https://www.randomlists.com/img/things/grid_paper.jpg",
    "what": "grid paper"
  },
  {
    "url": "https://www.randomlists.com/img/things/needle.jpg",
    "what": "needle"
  },
  {
    "url": "https://www.randomlists.com/img/things/sharpie.jpg",
    "what": "sharpie"
  },
  {
    "url": "https://www.randomlists.com/img/things/flag.jpg",
    "what": "flag"
  },
  {
    "url": "https://www.randomlists.com/img/things/candy_wrapper.jpg",
    "what": "candy wrapper"
  },
  {
    "url": "https://www.randomlists.com/img/things/watch.jpg",
    "what": "watch"
  },
  {
    "url": "https://www.randomlists.com/img/things/cd.jpg",
    "what": "CD"
  },
  {
    "url": "https://www.randomlists.com/img/things/soda_can.jpg",
    "what": "soda can"
  },
  {
    "url": "https://www.randomlists.com/img/things/sketch_pad.jpg",
    "what": "sketch pad"
  },
  {
    "url": "https://www.randomlists.com/img/things/chapter_book.jpg",
    "what": "chapter book"
  },
  {
    "url": "https://www.randomlists.com/img/things/fake_flowers.jpg",
    "what": "fake flowers"
  },
  {
    "url": "https://www.randomlists.com/img/things/lace.jpg",
    "what": "lace"
  },
  {
    "url": "https://www.randomlists.com/img/things/drill_press.jpg",
    "what": "drill press"
  },
  {
    "url": "https://www.randomlists.com/img/things/towel.jpg",
    "what": "towel"
  },
  {
    "url": "https://www.randomlists.com/img/things/mp3_player.jpg",
    "what": "mp3 player"
  },
  {
    "url": "https://www.randomlists.com/img/things/glow_stick.jpg",
    "what": "glow stick"
  },
  {
    "url": "https://www.randomlists.com/img/things/fridge.jpg",
    "what": "fridge"
  },
  {
    "url": "https://www.randomlists.com/img/things/model_car.jpg",
    "what": "model car"
  },
  {
    "url": "https://www.randomlists.com/img/things/bowl.jpg",
    "what": "bowl"
  },
  {
    "url": "https://www.randomlists.com/img/things/shoes.jpg",
    "what": "shoes"
  },
  {
    "url": "https://www.randomlists.com/img/things/magnet.jpg",
    "what": "magnet"
  },
  {
    "url": "https://www.randomlists.com/img/things/tissue_box.jpg",
    "what": "tissue box"
  },
  {
    "url": "https://www.randomlists.com/img/things/pen.jpg",
    "what": "pen"
  },
  {
    "url": "https://www.randomlists.com/img/things/sidewalk.jpg",
    "what": "sidewalk"
  },
  {
    "url": "https://www.randomlists.com/img/things/picture_frame.jpg",
    "what": "picture frame"
  },
  {
    "url": "https://www.randomlists.com/img/things/hanger.jpg",
    "what": "hanger"
  },
  {
    "url": "https://www.randomlists.com/img/things/stockings.jpg",
    "what": "stockings"
  },
  {
    "url": "https://www.randomlists.com/img/things/boom_box.jpg",
    "what": "boom box"
  },
  {
    "url": "https://www.randomlists.com/img/things/tooth_picks.jpg",
    "what": "tooth picks"
  },
  {
    "url": "https://www.randomlists.com/img/things/food.jpg",
    "what": "food"
  },
  {
    "url": "https://www.randomlists.com/img/things/sandal.jpg",
    "what": "sandal"
  },
  {
    "url": "https://www.randomlists.com/img/things/water_bottle.jpg",
    "what": "water bottle"
  },
  {
    "url": "https://www.randomlists.com/img/things/drawer.jpg",
    "what": "drawer"
  },
  {
    "url": "https://www.randomlists.com/img/things/twister.jpg",
    "what": "twister"
  },
  {
    "url": "https://www.randomlists.com/img/things/table.jpg",
    "what": "table"
  },
  {
    "url": "https://www.randomlists.com/img/things/coasters.jpg",
    "what": "coasters"
  },
  {
    "url": "https://www.randomlists.com/img/things/conditioner.jpg",
    "what": "conditioner"
  },
  {
    "url": "https://www.randomlists.com/img/things/canvas.jpg",
    "what": "canvas"
  },
  {
    "url": "https://www.randomlists.com/img/things/cup.jpg",
    "what": "cup"
  },
  {
    "url": "https://www.randomlists.com/img/things/stop_sign.jpg",
    "what": "stop sign"
  },
  {
    "url": "https://www.randomlists.com/img/things/puddle.jpg",
    "what": "puddle"
  },
  {
    "url": "https://www.randomlists.com/img/things/key_chain.jpg",
    "what": "key chain"
  },
  {
    "url": "https://www.randomlists.com/img/things/doll.jpg",
    "what": "doll"
  },
  {
    "url": "https://www.randomlists.com/img/things/tomato.jpg",
    "what": "tomato"
  },
  {
    "url": "https://www.randomlists.com/img/things/blouse.jpg",
    "what": "blouse"
  },
  {
    "url": "https://www.randomlists.com/img/things/headphones.jpg",
    "what": "headphones"
  },
  {
    "url": "https://www.randomlists.com/img/things/face_wash.jpg",
    "what": "face wash"
  },
  {
    "url": "https://www.randomlists.com/img/things/buckel.jpg",
    "what": "buckel"
  },
  {
    "url": "https://www.randomlists.com/img/things/nail_file.jpg",
    "what": "nail file"
  },
  {
    "url": "https://www.randomlists.com/img/things/plastic_fork.jpg",
    "what": "plastic fork"
  },
  {
    "url": "https://www.randomlists.com/img/things/desk.jpg",
    "what": "desk"
  },
  {
    "url": "https://www.randomlists.com/img/things/rusty_nail.jpg",
    "what": "rusty nail"
  },
  {
    "url": "https://www.randomlists.com/img/things/lip_gloss.jpg",
    "what": "lip gloss"
  },
  {
    "url": "https://www.randomlists.com/img/things/cookie_jar.jpg",
    "what": "cookie jar"
  },
  {
    "url": "https://www.randomlists.com/img/things/ice_cube_tray.jpg",
    "what": "ice cube tray"
  },
  {
    "url": "https://www.randomlists.com/img/things/flowers.jpg",
    "what": "flowers"
  },
  {
    "url": "https://www.randomlists.com/img/things/twezzers.jpg",
    "what": "twezzers"
  },
  {
    "url": "https://www.randomlists.com/img/things/shawl.jpg",
    "what": "shawl"
  },
  {
    "url": "https://www.randomlists.com/img/things/spring.jpg",
    "what": "spring"
  },
  {
    "url": "https://www.randomlists.com/img/things/bottle.jpg",
    "what": "bottle"
  },
  {
    "url": "https://www.randomlists.com/img/things/video_games.jpg",
    "what": "video games"
  },
  {
    "url": "https://www.randomlists.com/img/things/lamp.jpg",
    "what": "lamp"
  },
  {
    "url": "https://www.randomlists.com/img/things/vase.jpg",
    "what": "vase"
  },
  {
    "url": "https://www.randomlists.com/img/things/mop.jpg",
    "what": "mop"
  },
  {
    "url": "https://www.randomlists.com/img/things/eraser.jpg",
    "what": "eraser"
  },
  {
    "url": "https://www.randomlists.com/img/things/phone.jpg",
    "what": "phone"
  },
  {
    "url": "https://www.randomlists.com/img/things/chair.jpg",
    "what": "chair"
  },
  {
    "url": "https://www.randomlists.com/img/things/leg_warmers.jpg",
    "what": "leg warmers"
  },
  {
    "url": "https://www.randomlists.com/img/things/lotion.jpg",
    "what": "lotion"
  },
  {
    "url": "https://www.randomlists.com/img/things/pool_stick.jpg",
    "what": "pool stick"
  },
  {
    "url": "https://www.randomlists.com/img/things/pillow.jpg",
    "what": "pillow"
  },
  {
    "url": "https://www.randomlists.com/img/things/shovel.jpg",
    "what": "shovel"
  },
  {
    "url": "https://www.randomlists.com/img/things/credit_card.jpg",
    "what": "credit card"
  },
  {
    "url": "https://www.randomlists.com/img/things/nail_clippers.jpg",
    "what": "nail clippers"
  },
  {
    "url": "https://www.randomlists.com/img/things/window.jpg",
    "what": "window"
  },
  {
    "url": "https://www.randomlists.com/img/things/box.jpg",
    "what": "box"
  },
  {
    "url": "https://www.randomlists.com/img/things/purse.jpg",
    "what": "purse"
  },
  {
    "url": "https://www.randomlists.com/img/things/glass.jpg",
    "what": "glass"
  },
  {
    "url": "https://www.randomlists.com/img/things/blanket.jpg",
    "what": "blanket"
  },
  {
    "url": "https://www.randomlists.com/img/things/rubber_band.jpg",
    "what": "rubber band"
  },
  {
    "url": "https://www.randomlists.com/img/things/socks.jpg",
    "what": "socks"
  },
  {
    "url": "https://www.randomlists.com/img/things/outlet.jpg",
    "what": "outlet"
  },
  {
    "url": "https://www.randomlists.com/img/things/usb_drive.jpg",
    "what": "USB drive"
  },
  {
    "url": "https://www.randomlists.com/img/things/tire_swing.jpg",
    "what": "tire swing"
  },
  {
    "url": "https://www.randomlists.com/img/things/rug.jpg",
    "what": "rug"
  },
  {
    "url": "https://www.randomlists.com/img/things/washing_machine.jpg",
    "what": "washing machine"
  },
  {
    "url": "https://www.randomlists.com/img/things/pants.jpg",
    "what": "pants"
  },
  {
    "url": "https://www.randomlists.com/img/things/brocolli.jpg",
    "what": "brocolli"
  },
  {
    "url": "https://www.randomlists.com/img/things/perfume.jpg",
    "what": "perfume"
  },
  {
    "url": "https://www.randomlists.com/img/things/hair_tie.jpg",
    "what": "hair tie"
  },
  {
    "url": "https://www.randomlists.com/img/things/screw.jpg",
    "what": "screw"
  },
  {
    "url": "https://www.randomlists.com/img/things/shirt.jpg",
    "what": "shirt"
  },
  {
    "url": "https://www.randomlists.com/img/things/candle.jpg",
    "what": "candle"
  },
  {
    "url": "https://www.randomlists.com/img/things/soy_sauce_packet.jpg",
    "what": "soy sauce packet"
  },
  {
    "url": "https://www.randomlists.com/img/things/seat_belt.jpg",
    "what": "seat belt"
  },
  {
    "url": "https://www.randomlists.com/img/things/mouse_pad.jpg",
    "what": "mouse pad"
  },
  {
    "url": "https://www.randomlists.com/img/things/sofa.jpg",
    "what": "sofa"
  },
  {
    "url": "https://www.randomlists.com/img/things/sticky_note.jpg",
    "what": "sticky note"
  },
  {
    "url": "https://www.randomlists.com/img/things/lamp_shade.jpg",
    "what": "lamp shade"
  },
  {
    "url": "https://www.randomlists.com/img/things/toothbrush.jpg",
    "what": "toothbrush"
  },
  {
    "url": "https://www.randomlists.com/img/things/bracelet.jpg",
    "what": "bracelet"
  },
  {
    "url": "https://www.randomlists.com/img/things/soap.jpg",
    "what": "soap"
  },
  {
    "url": "https://www.randomlists.com/img/things/paint_brush.jpg",
    "what": "paint brush"
  },
  {
    "url": "https://www.randomlists.com/img/things/cinder_block.jpg",
    "what": "cinder block"
  },
  {
    "url": "https://www.randomlists.com/img/things/book.jpg",
    "what": "book"
  },
  {
    "url": "https://www.randomlists.com/img/things/bow.jpg",
    "what": "bow"
  },
  {
    "url": "https://www.randomlists.com/img/things/wallet.jpg",
    "what": "wallet"
  },
  {
    "url": "https://www.randomlists.com/img/things/playing_card.jpg",
    "what": "playing card"
  },
  {
    "url": "https://www.randomlists.com/img/things/chocolate.jpg",
    "what": "chocolate"
  },
  {
    "url": "https://www.randomlists.com/img/things/white_out.jpg",
    "what": "white out"
  },
  {
    "url": "https://www.randomlists.com/img/things/radio.jpg",
    "what": "radio"
  },
  {
    "url": "https://www.randomlists.com/img/things/glasses.jpg",
    "what": "glasses"
  },
  {
    "url": "https://www.randomlists.com/img/things/cell_phone.jpg",
    "what": "cell phone"
  },
  {
    "url": "https://www.randomlists.com/img/things/spoon.jpg",
    "what": "spoon"
  },
  {
    "url": "https://www.randomlists.com/img/things/thread.jpg",
    "what": "thread"
  },
  {
    "url": "https://www.randomlists.com/img/things/air_freshener.jpg",
    "what": "air freshener"
  },
  {
    "url": "https://www.randomlists.com/img/things/wagon.jpg",
    "what": "wagon"
  },
  {
    "url": "https://www.randomlists.com/img/things/greeting_card.jpg",
    "what": "greeting card"
  },
  {
    "url": "https://www.randomlists.com/img/things/apple.jpg",
    "what": "apple"
  },
  {
    "url": "https://www.randomlists.com/img/things/money.jpg",
    "what": "money"
  },
  {
    "url": "https://www.randomlists.com/img/things/shoe_lace.jpg",
    "what": "shoe lace"
  },
  {
    "url": "https://www.randomlists.com/img/things/toilet.jpg",
    "what": "toilet"
  },
  {
    "url": "https://www.randomlists.com/img/things/beef.jpg",
    "what": "beef"
  },
  {
    "url": "https://www.randomlists.com/img/things/knife.jpg",
    "what": "knife"
  },
  {
    "url": "https://www.randomlists.com/img/things/clothes.jpg",
    "what": "clothes"
  },
  {
    "url": "https://www.randomlists.com/img/things/slipper.jpg",
    "what": "slipper"
  },
  {
    "url": "https://www.randomlists.com/img/things/rubber_duck.jpg",
    "what": "rubber duck"
  },
  {
    "url": "https://www.randomlists.com/img/things/computer.jpg",
    "what": "computer"
  },
  {
    "url": "https://www.randomlists.com/img/things/helmet.jpg",
    "what": "helmet"
  },
  {
    "url": "https://www.randomlists.com/img/things/plate.jpg",
    "what": "plate"
  },
  {
    "url": "https://www.randomlists.com/img/things/thermostat.jpg",
    "what": "thermostat"
  },
  {
    "url": "https://www.randomlists.com/img/things/clay_pot.jpg",
    "what": "clay pot"
  },
  {
    "url": "https://www.randomlists.com/img/things/clock.jpg",
    "what": "clock"
  },
  {
    "url": "https://www.randomlists.com/img/things/tv.jpg",
    "what": "tv"
  },
  {
    "url": "https://www.randomlists.com/img/things/ipod.jpg",
    "what": "ipod"
  },
  {
    "url": "https://www.randomlists.com/img/things/sand_paper.jpg",
    "what": "sand paper"
  },
  {
    "url": "https://www.randomlists.com/img/things/deodorant_.jpg",
    "what": "deodorant "
  },
  {
    "url": "https://www.randomlists.com/img/things/button.jpg",
    "what": "button"
  },
  {
    "url": "https://www.randomlists.com/img/things/packing_peanuts.jpg",
    "what": "packing peanuts"
  },
  {
    "url": "https://www.randomlists.com/img/things/bread.jpg",
    "what": "bread"
  },
  {
    "url": "https://www.randomlists.com/img/things/clamp.jpg",
    "what": "clamp"
  },
  {
    "url": "https://www.randomlists.com/img/things/television.jpg",
    "what": "television"
  },
  {
    "url": "https://www.randomlists.com/img/things/cork.jpg",
    "what": "cork"
  },
  {
    "url": "https://www.randomlists.com/img/things/zipper.jpg",
    "what": "zipper"
  },
  {
    "url": "https://www.randomlists.com/img/things/fork.jpg",
    "what": "fork"
  },
  {
    "url": "https://www.randomlists.com/img/things/monitor.jpg",
    "what": "monitor"
  },
  {
    "url": "https://www.randomlists.com/img/things/checkbook.jpg",
    "what": "checkbook"
  },
  {
    "url": "https://www.randomlists.com/img/things/cat.jpg",
    "what": "cat"
  },
  {
    "url": "https://www.randomlists.com/img/things/chalk.jpg",
    "what": "chalk"
  },
  {
    "url": "https://www.randomlists.com/img/things/bottle_cap.jpg",
    "what": "bottle cap"
  },
  {
    "url": "https://www.randomlists.com/img/things/ring.jpg",
    "what": "ring"
  },
  {
    "url": "https://www.randomlists.com/img/things/scotch_tape.jpg",
    "what": "scotch tape"
  },
  {
    "url": "https://www.randomlists.com/img/things/house.jpg",
    "what": "house"
  },
  {
    "url": "https://www.randomlists.com/img/things/keyboard.jpg",
    "what": "keyboard"
  },
  {
    "url": "https://www.randomlists.com/img/things/tree.jpg",
    "what": "tree"
  },
  {
    "url": "https://www.randomlists.com/img/things/remote.jpg",
    "what": "remote"
  },
  {
    "url": "https://www.randomlists.com/img/things/eye_liner.jpg",
    "what": "eye liner"
  },
  {
    "url": "https://www.randomlists.com/img/things/controller.jpg",
    "what": "controller"
  },
  {
    "url": "https://www.randomlists.com/img/things/bag.jpg",
    "what": "bag"
  },
  {
    "url": "https://www.randomlists.com/img/things/bookmark.jpg",
    "what": "bookmark"
  },
  {
    "url": "https://www.randomlists.com/img/things/toe_ring.jpg",
    "what": "toe ring"
  },
  {
    "url": "https://www.randomlists.com/img/things/bed.jpg",
    "what": "bed"
  },
  {
    "url": "https://www.randomlists.com/img/things/sun_glasses.jpg",
    "what": "sun glasses"
  },
  {
    "url": "https://www.randomlists.com/img/things/photo_album.jpg",
    "what": "photo album"
  },
  {
    "url": "https://www.randomlists.com/img/things/truck.jpg",
    "what": "truck"
  },
  {
    "url": "https://www.randomlists.com/img/things/paper.jpg",
    "what": "paper"
  },
  {
    "url": "https://www.randomlists.com/img/things/charger.jpg",
    "what": "charger"
  },
  {
    "url": "https://www.randomlists.com/img/things/thermometer.jpg",
    "what": "thermometer"
  },
  {
    "url": "https://www.randomlists.com/img/things/teddies.jpg",
    "what": "teddies"
  },
  {
    "url": "https://www.randomlists.com/img/things/sponge.jpg",
    "what": "sponge"
  },
  {
    "url": "https://www.randomlists.com/img/things/floor.jpg",
    "what": "floor"
  },
  {
    "url": "https://www.randomlists.com/img/things/piano.jpg",
    "what": "piano"
  },
  {
    "url": "https://www.randomlists.com/img/things/door.jpg",
    "what": "door"
  },
  {
    "url": "https://www.randomlists.com/img/things/sailboat.jpg",
    "what": "sailboat"
  },
  {
    "url": "https://www.randomlists.com/img/things/newspaper.jpg",
    "what": "newspaper"
  },
  {
    "url": "https://www.randomlists.com/img/things/mirror.jpg",
    "what": "mirror"
  },
  {
    "url": "https://www.randomlists.com/img/things/carrots.jpg",
    "what": "carrots"
  }
].sort(t => Math.round(Math.random()) - 0.5);

var wtf = document.getElementById("wtf");
var next = document.getElementById("next");
var really = document.getElementById("really");
var id = 0;
var ready = false;;

function job() {
  really.src = objects[id].url;
  progress.style.width = (id++) + "%";

  if (id == 101) {
    alert("YOU STILL FEEL RETARD? OH YOU ARE REALLY RETARDED, AREN'T YOU!")
  }

  if (id > objects.length) {
    id = 0;
  }


  really.style.transition = "0s";
  really.style.transform = "translateX(1500px)";

  setTimeout(function () {
    really.style.transition = "0.5s";
    really.style.transform = "translateX(0)";
    ready = true;
  }, 10);
}

next.onclick = function () {
  if (!ready) {
    return;
  }

  ready = false;
  really.style.transform = "translateX(-1500px)";

  setTimeout(job, 750);
}

job();

wtf.onclick = function () {
  alert("ITS FUCKING " + objects[id - 1].what.toUpperCase());
}