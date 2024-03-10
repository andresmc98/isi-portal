import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-richtext-display',
  templateUrl: './richtext-display.component.html',
  styleUrls: ['./richtext-display.component.scss']
})
export class RichtextDisplayComponent implements OnInit {
@Input() content: any[] = [];
apiUrl = environment.baseMediaUrl; //server


constructor(private sanitizer: DomSanitizer) { }

ngOnInit(): void {
}

  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  isTextNode(node: any): boolean {
    return node.hasOwnProperty('text') || node.bold || node.italic || node.underline || node.strikethrough;
  }
}
