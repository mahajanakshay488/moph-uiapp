import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RefillStatus } from '../../utilities/refill-status';
import { RefillStatusService } from '../../Services/refill-status.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-refill-status',
  templateUrl: './refill-status.component.html',
  styleUrls: ['./refill-status.component.css']
})
export class RefillStatusComponent implements OnInit {
  loading:boolean=true;
  refillstatus:RefillStatus[]=[];
  date!:Date;
  subID!:number;
  token!:string;
  refill:RefillStatus = new RefillStatus(0,0,"",true,this.date,0);
  errorMsg:string='';
  pay!:string;



  constructor(private route:ActivatedRoute, private rservice:RefillStatusService,private router:Router,private authService:AuthService) { 
    if(!this.authService.isLoggedIn()){
      this.router.navigate([""]);
    }
    
  }
  tab:boolean=false
  ngOnInit(): void {
    this.tab=false;
    let id =parseInt(this.route.snapshot.paramMap.get('subid') || '{}');
    this.subID=id;
    this.getRefillStatus(this.subID);
  }

  getRefillStatus(subid:number){
   // window.location.reload()
   this.tab=true
    console.log(subid)
    this.rservice.getAllRefillStatus(subid).subscribe(
      (      data: RefillStatus[]) =>
      {
        this.loading = false;
        console.log(data);
        this.refillstatus=data;
        console.log(this.refillstatus[0].refillDate.toDateString);
        if(this.refillstatus[0].payStatus == true)
        {
          this.pay='Unpaid';
        }
      }, (error: any)=>{
        this.tab=false;
        this.errorMsg = "No Refill requests found";
        this.loading = false;
    }
    )
  }

 /*handleSubmit(){
    console.log(this.refill.subID)
    this.errorMsg=''
    this.getRefillStatus()
  }*/

}