import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss'],
})
export class ComponentAComponent implements OnInit {
  private myText = '';
  @ViewChild('mousemove', { static: true }) button:
    | ElementRef<HTMLButtonElement>
    | undefined;

  constructor(
    private readonly ngZone: NgZone,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      // Run something critical computation here
      this.renderer.listen(this.button?.nativeElement, 'mousemove', () =>
        console.log('move without CD cycle!')
      );
    });
    this.ngZone.run(() => {
      // Run inside Angular Zone, trigger updating view after
    });
  }

  get text() {
    this.myText += 'checked!\n';
    return this.myText;
  }

  doNothing(): void {}
}
