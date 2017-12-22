import { Directive, ElementRef, OnInit } from "@angular/core";
import { AuthServices } from "../../services/auth/auth.services";

@Directive({ selector: '[user-required]' })

export class UserRequiredDirective implements OnInit{

  constructor(private el: ElementRef, private auth: AuthServices) { }

  ngOnInit() : void {
    if(!this.auth.getToken()) this.el.nativeElement.remove();
  }
}
