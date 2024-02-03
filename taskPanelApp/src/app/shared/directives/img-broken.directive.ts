import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})

/***
 * Directiva que controla los errores en las rutas de las imagenres y las reemplaza por una imagen de error
 */
export class ImgBrokenDirective {

@HostListener('error')handlError(){
  console.log("Algo paso con la tuta ded la imagen", this.elHost.nativeElement);
  const element= this.elHost.nativeElement;
  element.src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
}

  constructor(private elHost:ElementRef) { }

}
