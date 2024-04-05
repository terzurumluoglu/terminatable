import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SanitizerService {

  constructor(private readonly sanitizer: DomSanitizer) { }

  bypassSecurityTrustStyle = (value: string) => this.sanitizer.bypassSecurityTrustStyle(value);
}
