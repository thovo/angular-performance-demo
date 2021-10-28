import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentBComponent {
  private myText = '';
  @Input() parameters: string = '';

  constructor(cdRef: ChangeDetectorRef) {
    // cdRef.detectChanges();
    // cdRef.markForCheck();
    // cdRef.detach();
    // cdRef.reattach();
    // cdRef.checkNoChanges();
  }

  get text() {
    this.myText += 'checked!\n';
    return this.myText;
  }
}
