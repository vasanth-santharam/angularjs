import { Component } from '@angular/core';
import { AppService as Apps, AppService } from './app.service';
import {  default as country1} from './country.js';
import {ActivatedRoute,Router} from '@angular/router';
import {HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent {
  constructor(private appS:AppService,private route:ActivatedRoute,private _routes:Router,private http:HttpClient) {
    console.log(this);            
    console.log(appS);            
    console.log(country1);            
  } 
  getid=2;
  resp=[]; 
 
  invokeRequest(){
    this.http.get("https://reqres.in/api/users?page="+this.getid).subscribe(
      (res) => {
        console.log('data is ...',res);
        // this.resp.push(res['data']);
        this.resp = res['data'];
        console.log(this.resp);
      },
      (error) =>{
        console.log('data is ...',error);
      }
    );
    console.log("Consolestatement",this.resp)
  }
  ngOnInit(){
    this.http.get("https://reqres.in/api/users?page=2").subscribe(
      (res) => {
        console.log('data is ...',res);
        // this.resp.push(res['data']);
        this.resp = res['data'];
        console.log(this.resp);
      },
      (error) =>{
        console.log('data is ...',error);
      }
    );
    console.log("Consolestatement",this.resp)
  }
  blogNo = '0';
  title = 'angular';
  display = 'inline';
  vasanth = 'vasanth';
  color = "blue";
  pwd = "blue";
  pwdColor = "blue";
  age=10;
  pwdStrength = "passwordStrength";
  country = [ { id:"1",value:"India"},
              { id:"2",value:"UAE"}]; 
  selectCountry = '0';

  state = { "1":[ { id:"1", value:"Tamil Nadu"},
                                  { id:"2", value:"Kerala"}],
            "2":[ { id:"3", value:"Dubai"},
                                    { id:"4", value:"Adu dubai"}]
                                  
                                  };          
  selectstate ='0';
  billArr=[ 
    {name:"N1",quantity:20},
    {name:"N2",quantity:15},
    {name:"N3",quantity:35}
  ];
  billObj={
    N1:204,
    N2:124,
    N3:304
  };
  arrayTicket = [
    { id:1,value:"A1",color:"green"},
    { id:2,value:"A2",color:"green"},
    { id:3,value:"A3",color:"green"},
    { id:1,value:"B1",color:"green"},
    { id:2,value:"B2",color:"red"},
    { id:3,value:"B3",color:"red"},
  ];
  qtk=[];

  countrySelectFn(){
    console.log(this.selectCountry);
    console.log(this.state[this.selectCountry]);
  } 
  blogNoFn(){
    console.log(this.blogNo);
    // [queryParams]="{sx: 'y',cs:'b'}"
    this._routes.navigate(['/blog/'+this.blogNo+'/name'], { queryParams: { filter: 'new'}, queryParamsHandling: 'merge' });
  } 
  
  vaildTkFn(){
    console.log(this.arrayTicket);
    console.log(this.qtk);
  } 
  buttonFn(){
    this.color = this.color=="blue"?"red":"blue";
    console.log("colourChange");
    this.appS.getName();
  }
  hideshow(){
    this.display = this.display=="inline"?"none":"inline";
  }
  valid(){
    console.log(this.pwd);
    if(this.pwd.length<=3){
      this.pwdColor = "pink";
      this.pwdStrength = "weak";
    }else if(this.pwd.length>3 && this.pwd.length<=5){
      this.pwdColor = "orange";
      this.pwdStrength = "medium";
    }else if(this.pwd.length>5 && this.pwd.length<=10){
      this.pwdColor = "gray";
      this.pwdStrength = "hard";
    }
  }
  valuechange(text){
    console.log(text);
    var pass=(<HTMLInputElement>document.getElementById("password")).value;
    console.log(pass);
    if(pass.length<=3){
      document.getElementById("password").style.color = 'green';
    }else if(pass.length>3 && pass.length<=5){
      document.getElementById("password").style.color = 'yellow';
    }else if(pass.length>5 && pass.length<=10){
      document.getElementById("password").style.color = 'cyan';
    }
  }
}
