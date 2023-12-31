import { Component } from '@angular/core';
import { CaptionItem } from './caption-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgSrc: string | undefined;
  title: string | undefined; //type script assign to String //default is public //can have more than one type
  count: number;
  tempCaption: object | null;
  
  // messageList: string[] = [
  //   'Friday, my second favorite F word' , 
  //   'Be strong, I whispered to my WiFi signal.',
  //   'When you look at me, what do you see?',
  //   'Its Sunday Fun day.',
  //   'Simplicity is the best attitude.',
  //   'Make life fun, tomorrow isnt guaranteed.',
  //   'Life is full of surprises.',
  //   'Be brave enough to live differently.', 
  //   "Finding strength in vulnerability." ,
  //   "Whisking away to distant lands.",
  //   "Creating art, inspiring hearts.",
  //   "Blazing trails, leaving a mark.",
  //   "Savoring the little victories.",
  //   "Sparkling eyes, infectious smiles.",
  //   "Serenading life with melodies.",
  //   "Chasing dreams, catching stardust.",
  //   "Overflowing with kindness, spreading joy.",
  //   "Writing stories, shaping destinies.",
  //   "Captivated by nature's wonders.",
  //   "Harmony in diversity, united hearts.",
  //   "Seeking wisdom, finding growth.",
  //   "Fierce determination, unwavering spirit.",
  //   "Capturing sunsets, painting skies.",
  //   "Radiating love, embracing flaws.",
  //   "Striving for balance, inner peace.",
  //   "Inspiring change, igniting hope."

  // ];


  

  constructor(){ //auto call variable should intital
    this.tempCaption = this.randomCaption4();
    // this.title = caption?.message; 
    // this.imgSrc = caption?.icon; 
    if (this.tempCaption !== null) {
      const tempCaptionObj = this.tempCaption as { message: string; icon: string };
      this.title = tempCaptionObj.message;
      this.imgSrc = tempCaptionObj.icon;
    } else {
      this.title = undefined;
      this.imgSrc = undefined;
    }
    this.count = 0;
  }

  // randomCaption(){
  //   if(this.messageList.length!=0){
  //     this.count++
  //     const randomIndex = this.getRandomInt(this.messageList.length);
  //     const temp = this.messageList[randomIndex]
  //     this.messageList.splice(randomIndex,1); //index,deletecount
  //     return temp; 
  //   }else{
  //     return null;
  //   }
    
  // }

  // randomCaption2(){
  //   this.count++
  //   let randomIndex: number;
  //   let newCaption: string;
  //   do{
  //     randomIndex = this.getRandomInt(this.messageList.length);
  //     newCaption = this.messageList[randomIndex];
  //   }while(newCaption == this.title)

  //   return newCaption;
  // }

  // usedMessage: string[] = [];

  // randomCaption3(){
  //   if(this.messageList.length == this.usedMessage.length){
  //     return null;
  //   }else{
  //     this.count++
  //   let randomIndex: number;
  //   let newCaption: string;

  //   do{

  //     randomIndex = this.getRandomInt(this.messageList.length);
  //     newCaption = this.messageList[randomIndex];

  //   }while(this.usedMessage.includes(newCaption))

  //   // this.messageList.splice(randomIndex,1); //index,deletecount
  //   this.usedMessage.push(newCaption);
  //   return newCaption;
  //   }
    
  // }
  
  captionList: CaptionItem[] = [//อย่าลืม import CaptionItem
    {
      id:1,
      message:"Friday, my second favorite F word",
      icon:"./assets/cat1.jpg"
    },
    {
      id:2,
      message:"Be strong, I whispered to my WiFi signal.",
      icon:"./assets/cat2.jpg"
    },
    {
      id:3,
      message:"Its Sunday Fun day.",
      icon:"./assets/cat3.jpg"
    },
    {
      id:4,
      message:"Creating art, inspiring hearts.",
      icon:"./assets/cat4.jpg"
    },
    {
      id:5,
      message:"Sparkling eyes, infectious smiles.",
      icon:"./assets/cat5.jpg"
    },
    {
      id:6,
      message:"Inspiring change, igniting hope.",
      icon:"./assets/cat6.jpg"
    },
    {
      id:7,
      message:"Striving for balance, inner peace.",
      icon:"./assets/cat7.jpg"
    },
    {
      id:8,
      message:"Make life fun, tomorrow isnt guaranteed.",
      icon:"./assets/cat8.jpg"
    },
    {
      id:9,
      message:"Chasing dreams, catching stardust.",
      icon:"./assets/cat9.jpg"
    },
    {
      id:10,
      message:"Life is full of surprises.",
      icon:"./assets/cat10.jpg"
    }
  ]; 

  usedCaptionList: CaptionItem[] = [];

  randomCaption4(){
    let randomIndex: number;
    let newCaption: CaptionItem;

    if(this.captionList.length == this.usedCaptionList.length){
      return null;
    }else{

      do{
        randomIndex = this.getRandomInt(this.captionList.length);
        newCaption = this.captionList[randomIndex];
      }while(this.usedCaptionList.includes(newCaption))
      // this.messageList.splice(randomIndex,1); //index,deletecount
      this.usedCaptionList.push(newCaption);
      return newCaption;
      
    }
    
  }

  Resetbutton(){
    while(this.usedCaptionList.length != 0){
      this.usedCaptionList.pop();
    }
    this.tempCaption = this.randomCaption4();
    // this.title = caption?.message; 
    // this.imgSrc = caption?.icon; 
    if (this.tempCaption !== null) {
      const tempCaptionObj = this.tempCaption as { message: string; icon: string };
      this.title = tempCaptionObj.message;
      this.imgSrc = tempCaptionObj.icon;
    } else {
      this.title = undefined;
      this.imgSrc = undefined;
    }
  }

  handleClickButton(){
    // this.title = this.randomCaption4()?.message;
    this.tempCaption = this.randomCaption4();
    // this.title = caption?.message; 
    // this.imgSrc = caption?.icon; 
    if (this.tempCaption !== null) {
      const tempCaptionObj = this.tempCaption as { message: string; icon: string };
      this.title = tempCaptionObj.message;
      this.imgSrc = tempCaptionObj.icon;
    } else {
      this.title = undefined;
      this.imgSrc = undefined;
    }
  }

  private getRandomInt(arrayLength: number) { //type scripe should assign type of variable
    return Math.floor(Math.random() * arrayLength); //return 0 - arrayLength-1
  }

  

}
