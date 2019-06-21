import React from 'react';
import  {StaticRouter} from 'react-router-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from './Header.jsx';
Enzyme.configure({ adapter: new Adapter() });
describe('how Header component renders',()=>{
    it('should render profile and logout if user props are given',()=>{
       const headerMounted= Enzyme.mount(<StaticRouter>
           <Header user={{}}/>
       </StaticRouter>)
       expect(headerMounted.find('.isLoggedIn').length).toBe(1)
       expect(headerMounted.find('.isNotLoggedIn').length).toBe(0)
       headerMounted.unmount();
    });
    it('should render register and login if user props are not given',()=>{
        const headerMounted= Enzyme.mount(<StaticRouter>
            <Header user={undefined}/>
        </StaticRouter>)
        
       expect(headerMounted.find('.isLoggedIn').length).toBe(0)
       expect(headerMounted.find('.isNotLoggedIn').length).toBe(1)
       
       headerMounted.unmount();
    })
})
