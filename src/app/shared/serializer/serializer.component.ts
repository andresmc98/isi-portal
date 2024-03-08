import { Component, Input, OnInit } from '@angular/core';
import escapeHTML  from 'escape-html';
import { Text } from 'slate';




@Component({
  selector: 'app-serializer',
  templateUrl: './serializer.component.html',
  styleUrls: ['./serializer.component.scss']
})
export class SerializerComponent implements OnInit {

  @Input() children: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  serialize(children: any[]): any[]{
    return children.map((node, i) => {
      if (Text.isText(node)) {
        let text = escapeHTML(node.text);
        if (node) {
          text = `<strong>${text}</strong>`;
        }
      }
    });
  }

}
