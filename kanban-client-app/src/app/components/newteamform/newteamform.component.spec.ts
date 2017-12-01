import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewteamformComponent } from './newteamform.component';

describe('NewteamformComponent', () => {
  let component: NewteamformComponent;
  let fixture: ComponentFixture<NewteamformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewteamformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewteamformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
