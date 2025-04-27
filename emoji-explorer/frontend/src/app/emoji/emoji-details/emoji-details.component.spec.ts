import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiDetailsComponent } from './emoji-details.component';

describe('EmojiDetailsComponent', () => {
  let component: EmojiDetailsComponent;
  let fixture: ComponentFixture<EmojiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmojiDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
