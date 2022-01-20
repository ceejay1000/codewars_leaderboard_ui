import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageLeaderboardComponent } from './language-leaderboard.component';

describe('LanguageLeaderboardComponent', () => {
  let component: LanguageLeaderboardComponent;
  let fixture: ComponentFixture<LanguageLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageLeaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
