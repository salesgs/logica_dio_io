export class Hero{
  name;
  xp;
  constructor(name,xp){
    this.setName(name);
    this.setXp(xp);
  }
  setName(name){this.name=name;}
  setXp(xp){this.xp=xp;}
  getName(){return this.name;}
  getXp(){return this.xp;}
  
  verifyXp(){
   if(this.getXp()<1000){
    console.log(`${this.name} Categoria de Ferro.`);
   }else if(this.getXp()>=1001 && this.getXp()<=2000){
    console.log(`${this.name} Categoria de Bronze.`);
   }
   else if(this.getXp()>=2001 && this.getXp()<=5000){
    console.log(`${this.name} Categoria de Prata Ouro.`);
   }
   else if(this.getXp()>=5001 && this.getXp()<=8000){
    console.log(`${this.name} Categoria de Platina.`);
   }
   else if(this.getXp()>=8001 && this.getXp()<=9000){
    console.log(`${this.name} Categoria de Ascendente.`);
   }
   else if(this.getXp()>=9001 && this.getXp()<=1000){
    console.log(`${this.name} Categoria de Imortal.`);
   }
   else if(this.getXp()>=1001 ){
    console.log(`${this.name} Categoria de Radiante.`);
   }
  }
  
}