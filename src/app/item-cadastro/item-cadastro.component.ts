import { FireService } from './../fire.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';


declare var jQuery: any;
@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {
  form: FormGroup;
  abas: any[] = [];
  abaKeySelected: string = '';
  titulo: '';
  descricao: '';
  preco:number;

  abaSelected: any;
  @ViewChild('fileInput') fileInput: ElementRef;
  
  constructor(public fire: FireService) { 
    this.fire.getAbas().then(abas => {
      this.abas = abas;
      console.log(abas);
    })
  }

  ngOnInit() {
    jQuery('select').material_select();
  }
  onSelectAba(){
    console.log(this.abaKeySelected);
    this.abaSelected = this.abas.filter(aba => {
      console.log(aba.key, this.abaKeySelected)
      return aba.key == this.abaKeySelected
    });

    this.abaSelected = this.abaSelected[0];
    console.log(this.abaSelected)
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

  salvar(){
    console.log(this.titulo, this.descricao, this.preco, this.abaSelected)
  }
}
