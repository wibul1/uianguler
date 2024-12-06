import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltaskComponent } from './alltask.component';
import { TaskitemComponent } from '../taskitem/taskitem.component';

describe('AlltaskComponent', () => {
  let component: AlltaskComponent;
  let fixture: ComponentFixture<AlltaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlltaskComponent,TaskitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlltaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
