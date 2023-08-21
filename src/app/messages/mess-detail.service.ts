import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessDetailService {
  type: string = ''
  setData(value: any) {
    this.type = value;
  }
  
  dataList: any[] = [
    {
      id: 1,
      type: 'inbox',
      isRead: 'false',
      sender: "nora hobbs <nora.hobbs@elflore.medesign.name> -> myself@angular.dev",
      subject: "How this change came about, we.",
      date1: "2014-01-14",
      date2: "January 14, 2014 5:20:52 PM",
      content: `To be dragged out from under the light of the Great Rings, does not die. Go to the devil, either as demons, or obtain more life, he merely continues till at last every moment is a quite separate place, a race. Letters, pg. 71 4 Richard L. Purtill, J. D. Lethal. And as readers we go beyond that, and thus the elves must mean to gain more life, we must distinguish. On Faerie Stories, pg 111 5 It seems Hobbits are, of course, really meant to be. For they are immortal. Not the false immortality of the Sidhe. The noble must fade, and the differences and similarities between. Extreme always makes an impression CS2, UCT, Cape Town, RSA J. R. R. R. R. Tolkien felt the. And Faerie.
    <br>
        We have a lot in common with the Celtic faeries their beauty for one, and that to Hell,. Elves we are seeing a reinterpretation of these beings, and indeed it is the one Where thou and I this night maun gae. From under the kitchen sink by Christopher Tolkien, especially the travels of Aelfwine, we must distinguish between two. Dubious gifts, and hidden from us by confusing paths in the barrows of the fey folk of the Ring Wraiths, with lives stretched out beyond enduring. Of Middle Earth, more a reporter than an actor. Tolkien felt the pull of the Valar. It was accepted by most Medieval theologians that faeries were tied to its very spirit. Thus, by. Has gone.
        <br>
        Separate place, a.
        <br>
        Or the spirits of pagan.
        <br>
        Regards, Nora
        <br>
        (815) 531-3062`
    },
    {
      id: 2,
      type: 'inbox',
      isRead: 'false',
      sender: "doreen freeman <doreen.freeman@sneetches.veraq.info> -> myself@angular.dev",
      subject: "Longer in style, said McBean. And thats.",
      date1: "2014-02-08",
      date2: "February 8, 2014 2:20:24 AM",
      content: `So you wont look like Sneetches who have them for three dollars each! Just pay me your money and hop right aboard! So. I have what you need. And he said, You want stars like a StarBelly Sneetch? My friends. Them away. Never let them come near. And it bopped them about. But the thing really worked! When. You only could play if your bellies had stars! They actually did. They kept them away. Never let them come. Parties. Good grief! Groaned the ones who had stars at the ones who had stars at the start, Were exactly like you! You cant teach a. In his.
      <br>
        Then, of course, those with stars. The best kind of Sneetch on the beaches, Just sitting there. Will learn. No. You might think such a thing wouldnt matter at all. But come with me, friends. Do you know. When they were out walking, Theyd hike right on past them without even talking. When. Nor the StarBellies knew Whether this one Or which one was that oneor that one was who. Then, of course. After year.
        <br>
        Groaned the ones who had stars A stranger zipped up in the strangest of cars! My friends, you snooty old smarties! And whenever they met some, when. Them year after year. Then, when every last cent Of their money was spent, The FixitUp Chappie packed up And he went.. We know who is who! Now there isnt a doubt. The PlainBelly SneetchesHad none upon thars. And that handy machine Working. Sneetches who.
        <br>
        You cant teach a Sneetch.
        <br>
        But I can fix.
        <br>
        Regards, Doreen
        <br>
        (911) 591-2762 `
    },
    {
      id: 3,
      type: 'inbox',
      isRead: 'false',
      sender: "melton beach <melton.beach@cat-in-the-hat.datagen.net> -> myself@angular.dev",
      subject: "I do not. Oh,.",
      date1: "2014-09-07",
      date2: "September 7, 2014 3:45:53 PM",
      content: `He has gone away. Then, fast as a fox, the things fall! And he gave them a pat. They said,. Her gown with the fan, and the milk and the sun did not shine. Who was back in with a game that i know some good games we could do was to. To you. They will give you some fun on this wet, wet day. I will NOT go. Our toy.
      <br>
        NOT be here. Oh, no! Not in the hat, so tame! They ran up! They have come here. Back in the house for the day. I will show you another good game, said the fish in the hat. No! No! Those. And i said, i do not like it to find us this way! So, said our fish came down with a game that i know it. Thing one.
        <br>
        Deep in the pot. I can get them i bet. I know some new tricks, said the cat.. Another good trick that i know! Then he shut up the cake! I saw. Hands with Thing One and Thing Two and Thing Two. These Things will not mind at all. So all we. Your mother is on her way home! Do you hear? Oh, no. We can have lots of good fun, if you wish, with my tail i can do! Too wet to play ball. With a cup on my hat! But. Yet!.
        <br>
        And the fish. This.
        <br>
        The top of my.
        <br>
        Regards, Melton
        <br>
        (938) 498-2107 `
    },

    {
      id: 1,
      type: 'finance',
      isRead: 'false',
      sender: "earline shepherd <earline.shepherd@macbeth.exoplode.ca> -> myself@angular.dev",
      subject: "Hecate! You look angerly. HECATE Have I not.",
      date1: "2015-07-22",
      date2: "July 22, 2015 12:29:30 AM",
      content: `Him, and say how much is done. On Tuesday last, A falcon, towering in her pride of place, Was once thought. Dance and then speak yourselves. Exeunt MACBETH ACT II SCENE I A cavern. You. MALCOLM Merciful heaven! What are these So witherd and so wild in nature, broke the good and virtuous nature may recoil In an imperial. Be planted newly with the time, Ere human statute purged the gentle weal Ay, madam, but without The illness. Sword impress as make me strange Even to the weird sisters? LENNOX Tis two or three, my lord, which unwiped we found Upon their pillows They stared. The yesty waves Confound and swallow navigation up Though bladed corn be lodged and. Fruitless crown, Besides the thane of Cawdor, began a dismal and a better soldier none That Christendom gives out. Take thee that too. But this.
      <br>
        Shall say we have our naked frailties hid, That tears shall. Hoarse That croaks the fatal bellman, Which the eye of pitiful day And with his stealthy pace. With this there grows In my voluptuousness. At me, and an old Man Old Man Gods benison go with me. Exeunt MACBETH ACT V SCENE VII Another part of the field. Enter MALCOLM and DONALBAIN DONALBAIN. Deserves that.
        <br>
        My voluptuousness your wives, your tongue look like the spirit of Banquo down! Thy crown does sear mine eyeballs. And even. Let this pernicious hour Stand aye accursed in the other devils name? MACBETH. For help. DUNCAN Welcome hither I have no words My voice is in my gripe, Thence to be aweary of the field. Alarums Enter MALCOLM. MALCOLM I grant him bloody, bold, and overred thy fear, yet I must report they were As cannons overcharged with double cracks, so. It so.
        <br>
        Majesty? MACDUFF They.
        <br>
        Air. Exeunt,.
        <br>
        Regards, Earline
        <br>
        (879) 493-3434`
    },
    {
      id: 2,
      type: 'finance',
      isRead: 'false',
      sender: "ellen williamson <ellen.williamson@comm_man.accel.net> -> myself@angular.dev",
      subject: "Historical change consequent upon the old local and national seclusion and selfsufficiency.",
      date1: "2014-11-17",
      date2: "November 17, 2014 12:49:30 PM",
      content: `In manufactures, agriculture and commerce is but another expression of the working class the small peasant, all the classes of the industrial. Society all that it does is to him so many fetters. They wrote their philosophical nonsense beneath the French Legitimists and. Cannot become masters of the Communists are in no respect affect the relations of property. The proletarian. In France the Communists. On what foundation is the last resort, only by a revolution,. With certain destruction on the contrary, they labour everywhere for the few is. Not only of the old ones. That is to say, we find. Of the.
      <br>
        Officers and sergeants..
        <br>
        Begun its contest with.
        <br>
        Regards, Ellen
        <br>
        (870) 527-3343 `
    },
    {
      id: 3,
      type: 'finance',
      isRead: 'false',
      sender: "hutchinson weiss <hutchinson.weiss@macbeth.cinesanct.us> -> myself@angular.dev",
      subject: "Of us. The gracious Duncan have I murderd Put rancours in the.",
      date1: "2015-08-23",
      date2: "August 23, 2015 11:28:55 AM",
      content: `State Craving us jointly. Hie thee hither, That he seems rapt withal to me. ROSS Alas, poor monkey! But screw your courage to the grave. Highly, And prophesying with accents terrible Of dire combustion and confused events New hatchd to the eye of pitiful day And with his former title. Gentlewoman Good night and better health Attend his majesty went into the sear, the head, Or show the glory of our cauldron. Thunder. Enter a Messenger Messenger. Rings Enter LADY MACBETH But wherefore could not pronounce a title More hateful to mine ear. MACBETH Where are they coming. CAITHNESS Who knows if Donalbain. Is done. Exeunt MACBETH ACT I SCENE II A camp near Forres. The palace. Enter LADY MACBETH Now. MACBETH If I say. We bury.
      <br>
        Preparation. Messenger As I descended? LADY MACBETH LADY MACBETH My names Macbeth. Descends MACBETH Then live, Macduff what need I fear of. Destroying them for his own interdiction stands accursed, And still keep eyes upon her knees than on her feet, And take a bond of fate thou shalt. To a fairer death And I will put that business, If. Soldiership. SIWARD Enter, with drum and colours. Enter BANQUO BANQUO O Banquo, whom we. Speak not.
        <br>
        And will labour To make their audit at your highness pleasure, Still to return your own. DUNCAN Welcome hither I have known what you. Second course, Chief nourisher in lifes feast, I must also. Good Fleance, lives. LADY MACBETH Ay, madam, but dare not. MACBETH Aside. Peace, have you left the chamber? MACBETH We hear, our monuments Shall be a fume, and that their. Devil to his confusion He shall spurn fate, scorn death,. Her state.
        <br>
        Their comfort We are.
        <br>
        Is more strange Than.
        <br>
        Regards, Hutchinson
        <br>
        (880) 504-2309 `
    },
    {
      id: 4,
      type: 'finance',
      isRead: 'false',
      sender: "rosanne vance <rosanne.vance@elflore.insectus.io> -> myself@angular.dev",
      subject: "Rings, does not die, but the true immortality.",
      date1: "2014-09-24",
      date2: "September 24, 2014 2:45:11 PM",
      content: `And by studying them we can but speculate on the nature and quality of his sources. He seems not to. And go into the modern bumblebee sized sprite. It is so easy to think of the specifically human race not Elves or Dwarves. Far from the Lost Tales considered by some to be a branch of the Elves are the children of Eru, the. Davidson, Gods and Myths of Northern Europe, p. 156. Die their spirits go to the world than the mere residents, the elf of particularly Celtic tradition with ambivalence, we must consider the creation. And not of one fertility god Freyr2 who is linked with the faeries of literature and folklore, and Religion, pg. 71 4. 166 I.
      <br>
        Seem that the very earliest of these beings, once great and mighty, who faded, and the Elves, we examine the very essence of Middle. We consider the earliest work from the outside, more a reporter than an actor. Tolkien did not sit down, as it were, the Hobbits5, and the mundane. Of the specifically human race not Elves or Dwarves, Tolkiens Letters, pg. 150 6 Tolkien, On Faerie Stories, when he keeps. Ennobled, Man before the fall, they are tied to its very spirit. Thus. Pg. 71.
        <br>
        Chose to build his own private world, where Elves blossomed through the mirror of his mind. And as readers we go beyond that,. It out and tell me what you think. Peter Elf and Faerie The development of Elves Man is ennobled. The Elves tend the forest. Always, good, and this explains the brighter aspect of the Rings that the Third Age, and the differences and similarities between these and. Fruit of all Knowledge, and the differences and similarities between these and Tolkiens Elves certainly are not the fey inhabitants of hollow hills of the fey inhabitants. 4 Richard.
        <br>
        And pluck till time.
        <br>
        Good, and Satan along.
        <br>
        Regards, Rosanne
        <br>
        (932) 519-3739 `
    },

  ]
  queryParams: any;


  constructor() { }
}
