import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})

/* Toda la logica del progreso va en el componente incrementador, despues solamente se hace import del modulo en el HTML (<app-incrementador/>) */

/* APUNTES INPUT
Componente padre: Progress Component. 
Componente hijo: Incrementador Component.
El padre (Progress) manda el valor inicial al hijo (Incrementador).
El componente hijo es el que emite los valores hacia el padre 
En el componente hijo (el que recibe los datos), se define una propiedad especial llamada "input". 
El componente padre puede configurar esta propiedad y así enviar datos al hijo.

Para decir desde el componente hijo que quiero recibir un valor desde el padre, aplicar @Input().

El componente Incrementador espera leer una propiedad llamada 'valor' que viene desde el padre.

'valor' es una manera de renombrar el componente que se quiere enviar al padre (renombrar un input)
*/

/* APUNTES OUTPUT
Si se necesita escuchar cambios que el componente incrementador podra emitir, se utiliza el decorador Output
Output: funcion que el componente padre podra ejecutar y es de tipo eventEmitter 
El Output dispara un evento de un componente
Se simbolizan como un evento (click) (keyup) (blur) -> todos estos son de tipo EventEmitter
El EventEmitter necesita saber que tipo de informacion fluye a traves de el, sea string, number, etc.
Si se deja EventEmitter<number>, el valor de salida se queda como NULL.
MI COMPONENTE INCREMENTADOR EMITE UN VALOR DE TIPO VALORSALIDA (OUTPUT)
Los eventos de salida permiten que un componente hijo emita eventos que el componente padre puede escuchar y responder. 

los eventos de entrada permiten que un componente padre "dé" datos a un componente hijo,
 mientras que los eventos de salida permiten que un componente hijo "envíe" eventos al componente padre. 

*/

export class IncrementadorComponent implements OnInit{

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }
  //ngoninit constructor
  //se implemento ngOnInit para no tener que reutilizar la clase btn en todo y asi solo utilizar btn-info

  @Input('valor') progreso: number = 111111;
  @Input() btnClass: string = 'btn-primary'; //la clase que tendra por defecto
   

  @Output() valorEmitido: EventEmitter<number> = new EventEmitter();
  
  cambiarValor(valor: number) {

    if ( this.progreso > 100 && valor >= 0 ){
      this.valorEmitido.emit(100)
      this.progreso = 100;
      return;
    }

    if ( this.progreso <= 0 && valor < 0 ){
      this.valorEmitido.emit(0)
      this.progreso = 0;
      return
    }

    this.progreso = this.progreso + valor;
    this.valorEmitido.emit(this.progreso)

  }

  onChange(nuevoValor: number) {
    if ( nuevoValor >= 100 ) {
      this.progreso = 100;

  } else if ( nuevoValor <= 0 ) {
    this.progreso = 0;
  } else {
    this.progreso = nuevoValor;
  }

  this.valorEmitido.emit(this.progreso)

  }
}
