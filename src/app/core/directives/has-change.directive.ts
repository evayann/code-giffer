import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';

@Directive({
  selector: '[hasChange]',
  standalone: true,
})
export class HasChangeDirective implements AfterViewInit, OnDestroy {
  @Output() hasChange = new EventEmitter<void>();

  private observer!: MutationObserver;

  constructor(private elementReference: ElementRef) { }

  ngAfterViewInit(): void {
    this.observer = new MutationObserver(() => this.hasChange.emit());
    const configuration: MutationObserverInit = { childList: true, subtree: true };
    this.observer.observe(this.elementReference.nativeElement, configuration);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
