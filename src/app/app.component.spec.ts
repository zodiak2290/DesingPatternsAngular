import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BowAndArrowBehavior } from './patterns/strategy/classes/BowAndArrowBehavior/bow-and-arrow-behavior';
import { King } from './patterns/strategy/classes/King/king';
import { Queen } from './patterns/strategy/classes/Queen/queen';
import { SwordBehavior } from './patterns/strategy/classes/SwordBehavior/sword-behavior';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'patternsCourse'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('patternsCourse');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('patternsCourse app is running!');
  });


  fit('should create King with Sword', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.createCharacter();
    expect(app.character instanceof King).toBeTruthy();
  });

  fit('should create Queen with Bow and Arrow', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.characterStr = 'queen';
    app.weaponStr = 'bowAndArrow'
    app.createCharacter();
    expect(app.character instanceof Queen).toBeTruthy();
    expect(app.weapon instanceof BowAndArrowBehavior).toBeTruthy();
  });


});
