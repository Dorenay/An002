import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionInfoComponent } from './champion-info.component';

describe('ChampionInfoComponent', () => {
  let component: ChampionInfoComponent;
  let fixture: ComponentFixture<ChampionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
