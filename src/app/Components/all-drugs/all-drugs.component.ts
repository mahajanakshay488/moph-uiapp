import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrugDetails } from '../../utilities/drug-details';
import { DrugLocationDetails } from '../../utilities/drug-location-details';
import { DrugsService } from '../../Services/drugs.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-all-drugs',
  templateUrl: './all-drugs.component.html',
  styleUrls: ['./all-drugs.component.css']
})
export class AllDrugsComponent implements OnInit {
  loading: boolean = true;

  drugLocation:DrugLocationDetails[]=[];
  drugs:DrugDetails[]=[]
  constructor(private eservice:DrugsService,private route:Router,private authService:AuthService) {
    
   
   }

  ngOnInit(): void {
    this.getAllDrugs()
  }

  getAllDrugs()
  {
    this.drugs=[]
    this.eservice.getAllDrugs().subscribe(data=>
      {
        this.loading = false;
        this.drugs=data as DrugDetails[];
        console.log(data)
        console.log(this.drugs)
        this.drugLocation=this.drugs[0].druglocationQuantities;
      })


      
    
  }

}
