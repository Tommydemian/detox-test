import {device, by, element, } from 'detox'

describe('Home screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('"Click me" button should be visible', async () => {
    await expect(element(by.id('click-me-button'))).toBeVisible();
  });

  it('Hello text should be visible', async () => {
    await expect(element(by.id('hello'))).toBeVisible();
  });

  it('password input should be visible', async () => {
    await expect(element(by.id('password-input'))).toBeVisible();
  });
});
