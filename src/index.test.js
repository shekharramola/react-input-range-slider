import { SliderComponent } from '.'
import { render } from "@testing-library/react";

describe('SliderComponent', () => {
  let sliderElem, valueElem;
  const initialSize = 20;
  const minSize = 0;
  const maxSize = 100;

  beforeEach(() => {
    const { container } = render(
      <SliderComponent
        initialSize={initialSize}
        minSize={minSize}
        maxSize={maxSize}
      />
    );
    sliderElem = container.querySelector(".slider");
    valueElem = container.querySelector(".value");
  });

  test("when mounts initial value", () => {
    console.log(container);
    expect(valueElem).toBe(initialSize);
  });

});