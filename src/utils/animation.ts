export const fadeToggle = (element: HTMLElement, duration: number = 400): Promise<void> => {
  return new Promise(resolve => {
    const display = window.getComputedStyle(element).display;
    const isDisplay = display === "block";
    if (element.offsetHeight > 0 || element.offsetWidth > 0 || isDisplay) {
      fadeOut(element, duration).then(() => resolve());
    } else {
      fadeIn(element, duration).then(() => resolve());
    }
  });
};

export const fadeIn = (element: HTMLElement, duration: number = 400): Promise<void> => {
  return new Promise(resolve => {
    element.style.opacity = "0";
    element.style.display = "block";
    element.style.transition = `opacity ${duration}ms`;
    setTimeout(() => {
      element.style.opacity = "1";
    }, 10);
    setTimeout(() => {
      element.style.removeProperty("transition");
      resolve();
    }, duration + 10);
  });
};

export const fadeOut = (element: HTMLElement, duration: number = 400): Promise<void> => {
  return new Promise(resolve => {
    element.style.opacity = "1";
    element.style.transition = `opacity ${duration}ms`;
    setTimeout(() => {
      element.style.opacity = "0";
    }, 10);
    setTimeout(() => {
      element.style.display = "none";
      element.style.removeProperty("opacity");
      element.style.removeProperty("transition");
      resolve();
    }, duration + 10);
  });
};

export const slideToggle = (element: HTMLElement, duration: number): Promise<void> => {
  return new Promise(resolve => {
    if (element.offsetWidth > 0 || element.offsetHeight > 0) {
      slideUp(element, duration).then(() => resolve());
    } else {
      slideDown(element, duration).then(() => resolve());
    }
  });
};

export const slideUp = (element: HTMLElement, duration: number = 400): Promise<void> => {
  return new Promise(resolve => {
    element.style.transitionProperty = "height, margin, padding";
    element.style.transitionDuration = duration + "ms";
    element.style.boxSizing = "border-box";
    element.style.height = element.offsetHeight + "px";
    element.style.height = element.offsetHeight + "px";
    element.style.overflow = "hidden";
    element.style.height = "0";
    element.style.paddingTop = "0";
    element.style.paddingBottom = "0";
    element.style.marginTop = "0";
    element.style.marginBottom = "0";
    setTimeout(() => {
      element.style.display = "none";
      removeProp(element);
      resolve();
    }, duration);
  });
};

export const slideDown = (element: HTMLElement, duration: number = 400): Promise<void> => {
  return new Promise(resolve => {
    const paddingTop = window.getComputedStyle(element).getPropertyValue("padding-top");
    element.style.display = "block";
    element.style.overflow = "hidden";
    element.style.height = "0";
    element.style.paddingTop = "0";
    element.style.paddingBottom = "0";
    element.style.marginTop = "0";
    element.style.marginBottom = "0";
    element.style.transitionProperty = "height, margin, padding";
    element.style.transitionDuration = duration + "ms";
    element.style.boxSizing = "border-box";
    element.style.height = element.scrollHeight + "px";
    element.style.paddingTop = paddingTop;
    setTimeout(() => {
      removeProp(element);
      resolve();
    }, duration);
  });
};

const removeProp = (element: HTMLElement) => {
  element.style.removeProperty("height");
  element.style.removeProperty("padding-top");
  element.style.removeProperty("padding-bottom");
  element.style.removeProperty("margin-top");
  element.style.removeProperty("margin-bottom");
  element.style.removeProperty("overflow");
  element.style.removeProperty("transition-duration");
  element.style.removeProperty("transition-property");
};
