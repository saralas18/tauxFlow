import { Component } from '@angular/core';

@Component({
  selector: 'app-devise',
  templateUrl: './devise.component.html',
  styleUrls: ['./devise.component.css']
})
export class DeviseComponent {
  showDropdown = false;
  selectedOption: string = '';
   listeDevise = ["XEU","TRL","MTP","MAD","SAR","USD","EFR"  ,"AUD"  ,"DKK"  ,"NOK"  ,"QAR" ,"CYP"  ,"GRD"  ,"AED"  ,"PTE"  ,"XAF"  ,"JOD"  , "FIM"  , "BEC"  , "IEP"  , "CNY"  , "NZD"  , "EGP"  , "BHD"  , "TUD"  , "HKD"  , "CAD" , "NLG"  , "DEM"  , "GBP"  , "CHF"  , "JPY"  , "LBP"  , "ITL"  , "KWD"  , "ESP"  , "ATS"  , "OR"  , "ARG"  , "PLA"  , "SGD"  , "SEK"  , "MXN"  , "THB"  , "EUR"  , "XOF"  , "CZK"  , "BEF"  , "XAG"  , "XAU"  , "XPT"  , "XPD"  , "FRF"  , "UGX"  , "LUF"  , "MRO"  , "MRU"  , "ZAR" ];
   valeurSelectionnee !: string;
  
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  nouveauComposantVisible = false;
  ecriture = false ;

  afficherNouveauComposant() {
   
    this.nouveauComposantVisible = true;
    this.ecriture = true;
  } 
  supprimerInput() {
    this.valeurSelectionnee = '';
    this.nouveauComposantVisible = false;
  }
}
