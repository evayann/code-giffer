import { Observable, Subject, from, delay, repeat, of, concatMap, Subscription } from "rxjs";
import { CodeAnimationConfiguration } from "./code-animation-configuration";

const defaultCodeAnimationConfiguration: CodeAnimationConfiguration = {

};

export abstract class CodeAnimator {
  protected codeAnimationConfiguration: CodeAnimationConfiguration = defaultCodeAnimationConfiguration;

  private codeToDisplaySubject$ = new Subject<string>();
  private animationSubscription?: Subscription;

  get codeToDisplay$(): Observable<string> {
    return this.codeToDisplaySubject$.asObservable();
  }

  *[Symbol.iterator]() {
    yield '<';
    yield '<p';
    yield '<p></p>';
    yield '<p> </p>';
    yield '<p>  </p>';
    yield '<p> H </p>';
    yield '<p> He </p>';
    yield '<p> Hel </p>';
    yield '<p> Hell </p>';
    yield '<p> Hello </p>';
  }

  start(): void {
    const delayBetweenTwoRepetitionInMs = 5000;
    this.animationSubscription = from(this).pipe(
      repeat({ delay: delayBetweenTwoRepetitionInMs }),
      concatMap(item => of(item).pipe(delay(200)))
    ).subscribe((value) => {
      this.codeToDisplaySubject$.next(value);
    });
  }

  stop(): void {
    this.animationSubscription?.unsubscribe();
  }
}

