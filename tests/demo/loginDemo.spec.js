import {test, expect} from '@playwright/test'
import { loginPage } from '../../pages/loginPOM';

test('test', async({page})=>{
    
    const Login=new loginPage(page)

    await Login.goToLoginPage()
    await Login.login('student', 'Password123')


   /* await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button', {name: 'Submit'}).click();
    await page.pause()*/

})

