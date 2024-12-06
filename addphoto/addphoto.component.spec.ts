import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddphotoComponent } from './addphoto.component';

describe('AddphotoComponent', () => {
  let component: AddphotoComponent;
  let fixture: ComponentFixture<AddphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddphotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
