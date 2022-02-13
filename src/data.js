const shakesPhrases = [
  {
    insult:
      "I scorn you, scurvy companion. What, you poor, base, rascally, cheating, lack-linen mate! Away, you moldy rogue, away!",
  },
  {
    insult: "What, you poor, base, rascally, cheating, lack-linen mate!",
  },
  {
    insult: "Away, you moldy rogue, away!",
  },
  {
    insult: "Thou mewling toad-spotted miscreant!",
  },
  {
    insult:
      "Thou art a most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of no one good quality",
  },
  {
    insult: "Thou puking rump-fed ratsbane!",
  },
  {
    insult: "Thou jarring beef-witted flap-dragon!",
  },
  {
    insult:
      "Methink'st thou art a general offence and every man should beat thee",
  },
  {
    insult: "Thou wit’s as thick as a Tewkesbury mustard",
  },
  {
    insult: "Your abilities are too infant-like for doing much alone",
  },
  {
    insult: "More of your conversation would infect my brain",
  },
  {
    insult:
      "Thou sodden-witted lord! Thou hast no more brain than I have in mine elbows!",
  },
  {
    insult: "Your brain is as dry as the remainder biscuit after voyage",
  },
  {
    insult:
      "If you spend word for word with me, I shall make your wit bankrupt",
  },
  {
    insult: "Thou has not so much brain as ear-wax",
  },
  {
    insult: "Thou art the cap of all the fools",
  },
  {
    insult: "Away thou rag, thou quantity, thou remnant",
  },
  {
    insult:
      "Foul spoken coward, that thund’rest with thy tongue, and with thy weapon nothing dares perform",
  },
  {
    insult: "Go, prick thy face, and over-red thy fear, Thou lily-liver’d boy",
  },
  {
    insult: "You, minion, are too saucy",
  },
  {
    insult:
      "I must tell you friendly in your ear, sell when you can, you are not for all markets",
  },
  {
    insult: "You are not worth another word, else I’d call you knave",
  },
  {
    insult: "Thou whoreson zed, thou unnecessary letter!",
  },
  {
    insult: "Thy tongue outvenoms all the worms of Nile",
  },
  {
    insult: "Would thou wert clean enough to spit upon",
  },
  {
    insult: "I do desire that we may be better strangers",
  },
  {
    insult: "You are as a candle, the better burnt out",
  },
  {
    insult: "Threadbare juggler!",
  },
  {
    insult: "Eater of broken meats!",
  },
  {
    insult: "Saucy lackey!",
  },
  {
    insult: "Heaven truly knows that thou art false as hell",
  },
  {
    insult: "Thou subtle, perjur’d, false, disloyal man!",
  },
  {
    insult:
      "Thine forward voice, now, is to speak well of thine friend; thine backward voice is to utter foul speeches and to detract",
  },
  {
    insult: "Dissembling harlot, thou art false in all",
  },
  {
    insult: "There’s no more faith in thee than in a stewed prune",
  },
  {
    insult: "I do wish thou were a dog, that I might love thee something",
  },
  {
    insult: "What a thrice-double ass!What an ass!",
  },
  {
    insult: "Poisonous bunch-backed toad!",
  },
  {
    insult: "Here is the babe, as loathsome as a toad",
  },
  {
    insult: "Like the toad; ugly and venomous",
  },
  {
    insult: "Thou cream faced loon!",
  },
  {
    insult: "Bottled spider!",
  },
  {
    insult: "Thou art a rare parrot-teacher!",
  },
  {
    insult: "A weasel hath not such a deal of spleen as you are toss’d with",
  },
  {
    insult: "Thou art Pigeon-liver’d and lack gall",
  },
  {
    insult:
      "Thou hath more hair than wit, and more faults than hairs, and more wealth than faults",
  },
  {
    insult:
      "Thou art spherical, like a globe, I could find out countries in thee",
  },
  {
    insult:
      "You have such a February face, so full of frost, of storm and cloudiness",
  },
  {
    insult: "I am sick when I do look on thee",
  },
  {
    insult: "Out of my sight! thou dost infect my eyes",
  },
  {
    insult:
      "Thou art a boil, a plague sore, an embossed carbuncle in my corrupted blood",
  },
  {
    insult: "Rankest compound of villainous smell that ever offended nostril",
  },
  {
    insult: "The tartness of his face sours ripe grapes",
  },
  {
    insult: "Thou face is not worth sunburning",
  },
  {
    insult: "Thou art as fat as butter",
  },
  {
    insult: "Thou lump of foul deformity",
  },
  {
    insult:
      "O you beast! I’ll so maul you and your toasting-iron, That you shall think the devil is come from hell",
  },
  {
    insult:
      "O you beast! I’ll so maul you and your toasting-iron, That you shall think the devil is come from hell",
  },
  {
    insult: "By mine honour, if I were but two hours younger, I’d beat thee.",
  },
  {
    insult: "I’ll beat thee, but I would infect my hands",
  },
  {
    insult: "Would thou wouldst burst!",
  },
  {
    insult: "Thou hateful wither’d hag!",
  },
  {
    insult: "Whoreson caterpillars, bacon-fed knaves!",
  },
  {
    insult: "Your virginity breeds mites, much like a cheese",
  },
  {
    insult: "Thou stale old mouse eaten dry cheese!",
  },
  {
    insult: "Villain, I have done thy mother",
  },
  {
    insult: "Away, you three-inch fool!",
  },
  {
    insult: "Thou bolting-hutch of beastliness",
  },
  {
    insult: "Thou swollen parcel of dropsies",
  },
  {
    insult: "Thou huge bombard of sack",
  },
  {
    insult: "Thou stuffed cloak-bag of guts",
  },
  {
    insult: "Thou roasted manningtree ox with pudding in his belly",
  },
  {
    insult: "Thou flea, thou nit, thou winter-cricket thou!",
  },
  {
    insult: "Thou art unfit for any place but hell",
  },
  {
    insult: "Thou whoreson obscene greasy tallow-catch!",
  },
  {
    insult: "Thou clay-brained guts, thou knotty-pated fool",
  },
  {
    insult: "Thou damned and luxurious mountain goat",
  },
  {
    insult: "Thou elvish-mark’d, abortive, rooting hog!",
  },
  {
    insult:
      "Thou leathern-jerkin, crystal-button, knot-pated, agatering, puke-stocking, caddis-garter, smooth-tongue, Spanish pouch!",
  },
  {
    insult:
      "You scullion! You rampallian! You fustilarian!I’ll tickle your catastrophe!",
  },
  {
    insult: "Remorseless, treacherous, lecherous, kindless villain!",
  },
  {
    insult: "Peace, ye fat guts!",
  },
  {
    insult:
      "If thou wilt needs marry, marry a fool; for wise men know well enough what monsters you make of them",
  },
  {
    insult: "Thou surly flap-mouthed mammet!",
  },
  {
    insult:
      "Most shallow man! Thou worms-meat in respect of a good piece of flesh indeed!",
  },
  {
    insult: "I shall live to knock thy brains out",
  },
  {
    insult: "If thou dost marry, I'll give thee this plague for thy dowry",
  },
  {
    insult: "Take you me for a sponge?",
  },
  {
    insult:
      "I will most humbly take my leave of you. You cannot, sir, take from me anything that I will not more willingly part withal",
  },
  {
    insult: "Thou caluminous swag-bellied puttock!",
  },
  {
    insult: "Idol of idiot-worshippers!",
  },
  {
    insult: "Thou burly-boned reeling-ripe vassal!",
  },
  {
    insult: "Thou art open to incontinency",
  },
  {
    insult: "In civility thou seem'st so empty",
  },
  {
    insult: "Thou currish rough-hewn scullian!",
  },
  {
    insult: "Thou map of woe!",
  },
  {
    insult: "Thou slander of thy heavy mother's womb!",
  },
  {
    insult: "Thou live scandaliz'd and foully spoken of",
  },
  {
    insult: "Truly thou art damned, like an ill-roasted egg, all on one side",
  },
  {
    insult: "Thou villainous beetle-headed bum-bailey!",
  },
  {
    insult:
      "Would the fountain of your mind were clear again, that I might water an ass at it",
  },
  {
    insult: "Thou appeareth nothing to me but a foul and pestilent",
  },
  {
    insult: "Thou roguish idle-headed harpy!",
  },
  {
    insult: "Thou rump-fed ronyon!",
  },
  {
    insult: "Thou art wither'd like an old apple-john",
  },
]

export {shakesPhrases}
