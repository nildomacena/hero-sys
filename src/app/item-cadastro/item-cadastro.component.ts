import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {
  form: FormGroup
  @ViewChild('fileInput') fileInput: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  onImagemChange(event: any){
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0){
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {

      }
    }
    console.log(event);
  }

}
