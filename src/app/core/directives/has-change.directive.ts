import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';

@Directive({
  selector: '[appHasChange]',
  standalone: true,
})
export class HasChangeDirective implements AfterViewInit, OnDestroy {
  @Output() appHasChange = new EventEmitter<void>();

  private observer!: MutationObserver;

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.observer = new MutationObserver(() => this.appHasChange.emit());
    const configuration: MutationObserverInit = { childList: true, subtree: true };
    this.observer.observe(this.elRef.nativeElement, configuration);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
