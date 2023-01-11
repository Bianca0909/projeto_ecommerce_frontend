import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSuspensoComponent } from './menu-suspenso.component';

describe('MenuSuspensoComponent', () => {
  let component: MenuSuspensoComponent;
  let fixture: ComponentFixture<MenuSuspensoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSuspensoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSuspensoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
