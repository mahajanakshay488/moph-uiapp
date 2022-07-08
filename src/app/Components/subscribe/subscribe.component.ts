import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrescriptionDetails } from '../../utilities/prescription-details';
import { SubscribeService } from '../../Services/subscribe.service';
import { AuthService } from '../../Services/auth.service';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  msg !: string;
  todayDate: Date=new Date();
  prescriptionDetails : PrescriptionDetails={ 'prescriptionId' : 1,
    'memberId' : 'admin',
  'memberLocation' : '',
  'policyNumber' : '',
  'insuranceProvider' : '',
  'prescriptionDate' : this.todayDate,
  'drugName' : '',
  'dosageDefinition' : 'morning',
  'quantity' : 0,
  'courseDuration' : 0,
  'doctorName' : '',
};
  constructor(private route: ActivatedRoute, private service: SubscribeService, private router:Router,private authService:AuthService) { 
   
    if(!this.authService.isLoggedIn()){
      this.router.navigate([""]);
    } 
   }

  ngOnInit(): void {
  }
  public cities:string[]=['Delhi','Ahamdabad','Pune', 'Chennai', 'Banglore'];
  public meds:string[]=['Amlodipine','Acetaminophen','Buprenorphine',"Lisinopril",'Metformin','Tramadol','Paracetmol','Citrazine','Aspirin'];

  public insurances:string[]=['Amol Shah','Abhi Birla','Jeen Danial','Mukesh Sharma'];
handleSubmit()
{
  console.log(this.prescriptionDetails);
  this.service.savePrescription(this.prescriptionDetails).subscribe(data=>
    {
     // this.msg=data
      console.log('in data', data);
     
    },error => {
      this.msg = "You have successfully subscribed to "+this.prescriptionDetails.drugName;
      console.log(error);
      // this.router.navigate(['subscriptions']);
    })
}

}