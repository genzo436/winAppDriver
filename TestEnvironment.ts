import { driver, windowsAppDriverCapabilities } from 'selenium-appium'

const appId = 'Microsoft.WindowsCalculator_8wekyb3d8bbwe!App';
const url = 'http://127.0.0.1:4723';

class TestEnvironment { 
  setup() {
    jest.setTimeout(60000);
    const capabilities = windowsAppDriverCapabilities(appId);
    return driver.startWithCapabilities(capabilities,url);
  }

  teardown() {
    return driver.quit();
  }
}

export default new TestEnvironment();