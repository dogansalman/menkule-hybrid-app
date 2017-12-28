import {Directive, OnInit, HostListener, ElementRef, Input, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[regex]'
})

export class RegexDirective implements AfterViewInit {
  @Input() regex: string;
  public inputValue = '';
  public inputNewValue = '';
  inputElement: HTMLInputElement = null;

  constructor(private el: ElementRef) { }

  @HostListener('keypress', ['$event'])
  keypress(event: any) {
    this.inputNewValue = event.key;
  }

  @HostListener('input', ['$event'])
  input(event: any) {
    const re = new RegExp(this.regex);
    if (this.inputElement.value.length > 0 &&  re.test(this.inputElement.value) === false) {
      this.inputElement.value = this.inputValue;
    } else {
      this.inputValue = this.inputElement.value;
    }
  }

  ngAfterViewInit()
  {
    let element = this.el.nativeElement;
    this.inputElement =  element.tagName === 'INPUT' ? element :  element.getElementsByTagName('input')[0]
  }
}
